export const inquiryTypes = ["Partnership inquiry", "Transportation Services", "Last-Mile Delivery", "Fulfillment Operations", "Distribution Operations", "Other business inquiry"];

export const fields = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name", max: 100 },
  { name: "company", label: "Company name", type: "text", autoComplete: "organization", max: 140 },
  { name: "email", label: "Business email", type: "email", autoComplete: "email", max: 254 },
  { name: "phone", label: "Contact number", type: "tel", autoComplete: "tel", max: 35 },
] as const;

export type InquiryState = {
  status: "idle" | "error" | "success";
  message: string;
  errors?: Partial<Record<(typeof fields)[number]["name"] | "type" | "message", string>>;
};
