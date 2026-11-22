import { PageIntro, PartnershipCTA } from "@/components/sections";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("About Us", "Meet MC3 Trucking Services, a logistics subcontractor supporting outsourced operations for established providers and enterprises.", "/about");
const values = ["Reliability", "Accountability", "Operational Excellence", "Partnership", "Continuous Improvement"];

export default function About() {
  return <>
    <PageIntro label="About us" title="Your Trusted Logistics Execution Partner."><p>MC3 Trucking Services is a B2B logistics and transportation support company focused on outsourced logistics operations.</p></PageIntro>
    <section className="section"><div className="wrap">
      <div className="split"><h2>Built around collaboration.</h2><div className="prose-copy">
        <p>We partner with established logistics providers, enterprises, retailers, and fulfillment businesses to support their operational requirements.</p>
        <p>Our business model is built around collaboration. Rather than competing with the logistics providers we serve, we work alongside them as an execution partner, helping them expand operational capacity and fulfill their service commitments.</p>
      </div></div>
      <div className="mission-grid">
        <article className="panel"><h3>Our mission</h3><p>To provide dependable logistics execution and operational support that enables our partners to deliver efficient, reliable, and scalable logistics services.</p></article>
        <article className="panel"><h3>Our vision</h3><p>To become a trusted logistics execution partner recognized for operational reliability, collaborative relationships, and long-term business value.</p></article>
      </div>
    </div></section>
    <section className="section fleet-section"><div className="wrap"><h2>Core values</h2><ul className="value-grid">{values.map(value => <li key={value}>{value}</li>)}</ul></div></section>
    <PartnershipCTA />
  </>;
}
