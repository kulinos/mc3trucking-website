import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { PageIntro } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Contact Us", "Contact MC3 Trucking Services to discuss business partnerships and outsourced logistics support.", "/contact");

export default function Contact() {
  const { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_SOCIAL_URL } = process.env;

  return <>
    <PageIntro label="Contact us" title="Let's Discuss Your Logistics Requirements.">
      <p>Looking for a dependable logistics execution partner? MC3 Trucking Services welcomes partnership inquiries from logistics providers, enterprises, and businesses seeking operational support.</p>
    </PageIntro>
    <section className="section"><div className="wrap contact-layout">
      <ContactForm />
      <aside className="panel contact-details">
        <h2>Company details</h2>
        <dl>
          <div><dt><Mail aria-hidden />Email</dt><dd>{COMPANY_EMAIL ? <a href={"mailto:" + COMPANY_EMAIL}>{COMPANY_EMAIL}</a> : "To be announced"}</dd></div>
          <div><dt><Phone aria-hidden />Telephone</dt><dd>{COMPANY_PHONE ? <a href={"tel:" + COMPANY_PHONE.replace(/[^+\d]/g, "")}>{COMPANY_PHONE}</a> : "To be announced"}</dd></div>
          <div><dt><MapPin aria-hidden />Business address</dt><dd>{COMPANY_ADDRESS || "To be announced"}</dd></div>
          <div><dt><Share2 aria-hidden />Social media</dt><dd>{COMPANY_SOCIAL_URL?.startsWith("https://") ? <a href={COMPANY_SOCIAL_URL}>https://www.facebook.com/mc3trucking</a> : "To be announced"}</dd></div>
        </dl>
      </aside>
    </div></section>
  </>;
}
