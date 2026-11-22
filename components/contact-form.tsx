"use client";

import { useActionState, useState } from "react";
import { ChevronDown } from "lucide-react";
import { sendInquiry } from "@/app/contact/actions";
import { fields, inquiryTypes, type InquiryState } from "@/lib/inquiry";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendInquiry, { status: "idle", message: "" } as InquiryState);
  const [values, setValues] = useState<Record<string, string>>({});
  function update(name: string, value: string) {
    setValues(previous => ({ ...previous, [name]: value }));
  }

  return <form action={action} className="contact-form" aria-busy={pending}>
    <h2>Send an inquiry</h2><p>All fields are required.</p>
    <div aria-live="polite" className="form-status">
      {!pending && state.message && <p className={state.status}>{state.message}</p>}
    </div>
    {state.status !== "success" && <>
      <div className="form-grid">
      {fields.map(({ name, label, type, autoComplete, max }) => <div className="field" key={name}>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} autoComplete={autoComplete} maxLength={max} required value={values[name] ?? ""} onChange={event => update(name, event.target.value)} aria-invalid={!!state.errors?.[name]} aria-describedby={state.errors?.[name] ? name + "-error" : undefined} />
        {state.errors?.[name] && <p className="error" id={name + "-error"}>{state.errors[name]}</p>}
      </div>)}
      </div>
      <div className="field">
        <label htmlFor="type">Type of inquiry</label>
        <div className="select-wrap"><select id="type" name="type" required value={values.type ?? ""} onChange={event => update("type", event.target.value)} aria-invalid={!!state.errors?.type} aria-describedby={state.errors?.type ? "type-error" : undefined}>
          <option value="" disabled>Select an inquiry type</option>
          {inquiryTypes.map(type => <option key={type}>{type}</option>)}
        </select><ChevronDown size={18} aria-hidden /></div>
        {state.errors?.type && <p className="error" id="type-error">{state.errors.type}</p>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} maxLength={3000} required value={values.message ?? ""} onChange={event => update("message", event.target.value)} aria-invalid={!!state.errors?.message} aria-describedby={state.errors?.message ? "message-error" : undefined} />
        {state.errors?.message && <p className="error" id="message-error">{state.errors.message}</p>}
      </div>
      <div hidden><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <button className="button" type="submit" disabled={pending}>{pending ? "Sending…" : "Send inquiry"}</button>
    </>}
  </form>;
}
