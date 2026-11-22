"use server";

import { createHash } from "node:crypto";
import { fields, inquiryTypes, type InquiryState } from "@/lib/inquiry";

export async function sendInquiry(_previous: InquiryState, form: FormData): Promise<InquiryState> {
  function read(name: string) {
    const value = form.get(name);
    return typeof value === "string" ? value.trim() : "";
  }

  const values = {
    fullName: read("fullName"), company: read("company"), email: read("email"),
    phone: read("phone"), type: read("type"), message: read("message"),
  };
  const errors: NonNullable<InquiryState["errors"]> = {};

  for (const { name, label, max } of fields) {
    if (!values[name] || values[name].length > max) errors[name] = label + " must be between 1 and " + max + " characters.";
  }
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid business email.";
  if (!errors.phone && (!/^[+\d\s().-]+$/.test(values.phone) || values.phone.replace(/\D/g, "").length < 7)) errors.phone = "Enter a valid contact number.";
  if (!inquiryTypes.includes(values.type)) errors.type = "Choose an inquiry type.";
  if (!values.message || values.message.length > 3000) errors.message = "Enter a message of up to 3,000 characters.";
  if (Object.keys(errors).length) return { status: "error", message: "Please check the highlighted fields.", errors };

  const success: InquiryState = { status: "success", message: "Your inquiry was sent. Thank you for contacting MC3 Trucking Services." };
  if (read("website")) return success;

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return { status: "error", message: "Online inquiries are temporarily unavailable. Please try again later." };
  }

  const submissionKey = createHash("sha256").update(JSON.stringify(values)).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + RESEND_API_KEY,
        "Content-Type": "application/json",
        "Idempotency-Key": "mc3-inquiry/" + submissionKey,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: values.email,
        subject: "MC3 website inquiry: " + values.type,
        text: [
          "Full name: " + values.fullName, "Company: " + values.company,
          "Business email: " + values.email, "Contact number: " + values.phone,
          "Inquiry type: " + values.type, "", values.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (response.ok) return success;
    console.error("Contact email provider returned status", response.status);
  } catch {
    console.error("Contact email provider could not be reached");
  }
  return { status: "error", message: "Your inquiry could not be sent. Please try again." };
}
