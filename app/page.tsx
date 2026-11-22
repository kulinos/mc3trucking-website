import Image from "next/image";
import Link from "next/link";
import { Handshake, ShieldCheck, Truck } from "lucide-react";
import { FleetShowcase, PartnershipCTA, ServiceCards } from "@/components/sections";
import { name, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(name + " | B2B Logistics Partner", "MC3 Trucking Services provides outsourced transportation, last-mile delivery, fulfillment and distribution support for logistics providers and enterprises.", "/");

const partnershipBenefits = [{ Icon: Handshake, title: "Collaborative partnerships" }, { Icon: Truck, title: "Flexible operational capacity" }, { Icon: ShieldCheck, title: "Dependable logistics execution" }];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-image"><Image src="/images/hero.jpg" alt="Illustrative MC3-branded white Isuzu closed van truck" fill preload sizes="(max-width: 760px) 100vw, 60vw" /></div>
      <div className="wrap hero-inner">
        <p className="eyebrow">B2B logistics execution partner</p>
        <h1>Powering Logistics.<br /><span>Delivering Partnerships.</span></h1>
        <p className="hero-summary">MC3 Trucking Services provides dependable B2B logistics execution and transportation support to logistics providers, enterprises, retailers, and fulfillment businesses.</p>
        <p className="hero-detail">We work behind the scenes to strengthen operations, expand capacity, and help our partners fulfill their logistics commitments.</p>
        <div className="actions"><Link className="button" href="/contact">Discuss a Partnership</Link><Link className="button button-outline" href="/services">Explore Our Services</Link></div>
      </div>
    </section>
    <section className="section"><div className="wrap">
      <div className="section-heading home-services"><div><p className="eyebrow">Our services</p><h2>Support across your logistics operation.</h2></div><p>From cargo movement to final delivery, MC3 helps logistics providers and enterprises fulfill their commitments.</p></div>
      <ServiceCards />
    </div></section>
    <section className="section partner-section"><div className="wrap partner-layout">
      <div><p className="eyebrow">Why partner with MC3</p><h2>Built to work alongside your team.</h2><p>MC3 is a B2B logistics subcontractor. We complement your existing operations with transportation and logistics support, helping you extend capacity as your business needs evolve.</p><Link className="text-link" href="/partnerships">Explore partnerships</Link></div>
      <ul>{partnershipBenefits.map(({ Icon, title }) => <li key={title}><Icon aria-hidden />{title}</li>)}</ul>
    </div></section>
    <FleetShowcase />
    <PartnershipCTA />
  </>;
}
