import Image from "next/image";
import Link from "next/link";
import { name, navigation, services } from "@/lib/site";

export function PageIntro({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return <section className="page-intro"><div className="wrap">
    <p className="eyebrow">{label}</p><h1>{title}</h1>{children}
  </div></section>;
}

export function PartnershipCTA() {
  return <section className="cta-section"><div className="wrap cta-inner">
    <div><p className="eyebrow">Partnership inquiries</p><h2>Let’s work together.</h2><p>Tell us where your logistics operation needs support.</p></div>
    <Link className="button" href="/contact">Discuss a Partnership</Link>
  </div></section>;
}

export function ServiceCards() {
  return <div className="service-grid">{services.map(({ id, title, summary, icon: Icon }) => (
    <article className="service-card" key={id}>
      <Icon aria-hidden size={30} strokeWidth={1.6} />
      <h3><Link href={"/services#" + id}>{title}</Link></h3><p>{summary}</p>
    </article>
  ))}</div>;
}

const fleet = [
  { image: "isuzu-6w", model: "Isuzu 6W Truck Closed Van", description: "Commercial vehicle" },
  { image: "isuzu-traviz", model: "Isuzu Traviz", description: "Lightweight truck" },
  { image: "mitsubishi-l300", model: "Mitsubishi L300 FB Body", description: "With dual air conditioning" },
];

export function FleetShowcase() {
  return <section className="section fleet-section"><div className="wrap">
    <div className="section-heading"><p className="eyebrow">Vehicle fleet</p><h2>Meet the MC3 fleet.</h2><p>Illustrative renderings of the vehicle models MC3 uses.</p></div>
    <div className="fleet-grid">{fleet.map(({ image, model, description }) => (
      <figure key={image}><Image src={"/images/" + image + ".jpg"} alt={"Illustration of a branded white " + model} width={720} height={570} sizes="(max-width: 650px) 90vw, 32vw" />
        <figcaption><h3>{model}</h3><p>{description}</p></figcaption>
      </figure>
    ))}</div>
  </div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap footer-inner">
    <div><Link className="brand footer-brand" href="/"><Image src="/images/logo.jpg" width={128} height={57} alt={name} /></Link><p>Powering Logistics. Delivering Partnerships.</p></div>
    <nav aria-label="Footer navigation">{navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}</nav>
  </div><div className="wrap copyright">© {new Date().getFullYear()} {name}</div></footer>;
}
