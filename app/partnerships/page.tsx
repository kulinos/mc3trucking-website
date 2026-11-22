import { Building2, Boxes, Handshake, PackageCheck, ShoppingBag, Store } from "lucide-react";
import { PageIntro, PartnershipCTA } from "@/components/sections";
import { pageMetadata, partners } from "@/lib/site";

export const metadata = pageMetadata("Partnerships", "Partner with MC3 Trucking Services for outsourced logistics execution that complements your existing capabilities.", "/partnerships");
const icons = [Handshake, Building2, ShoppingBag, Store, PackageCheck, Boxes];

export default function Partnerships() {
  return <>
    <PageIntro label="Partnerships" title="We Work Better Together."><p>MC3 Trucking Services believes that successful logistics operations are built through strong business relationships.</p></PageIntro>
    <section className="section"><div className="wrap">
      <div className="section-heading"><h2>Who we work with</h2><p>We collaborate with established logistics providers and enterprises to provide operational support that complements their existing logistics capabilities.</p></div>
      <ul className="partner-grid">{partners.map((partner, index) => {
        const Icon = icons[index];
        return <li className="panel" key={partner}><Icon aria-hidden strokeWidth={1.6} /><h3>{partner}</h3></li>;
      })}</ul>
    </div></section>
    <PartnershipCTA />
  </>;
}
