import Image from "next/image";
import { PageIntro, PartnershipCTA } from "@/components/sections";
import { pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata("Our Services", "Explore MC3’s transportation services, last-mile delivery, fulfillment operations and logistics distribution services.", "/services");

export default function Services() {
  return <>
    <PageIntro label="Our services" title="Logistics support that extends your capacity."><p>Outsourced execution across transportation, delivery, fulfillment, and distribution.</p></PageIntro>
    <div className="wrap section service-list">{services.map(({ id, title, summary, value, alt, icon: Icon }) => (
      <section className="service-row" id={id} key={id}>
        <Image src={"/images/" + id + ".jpg"} alt={alt} width={624} height={618} sizes="(max-width: 760px) 90vw, 48vw" />
        <div><Icon size={34} strokeWidth={1.6} aria-hidden /><h2>{title}</h2><p>{summary}</p><p>{value}</p></div>
      </section>
    ))}</div>
    <PartnershipCTA />
  </>;
}
