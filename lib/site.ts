import type { Metadata } from "next";
import { Truck, MapPin, PackageCheck, Boxes } from "lucide-react";

export const name = "MC3 Trucking Services";
export const tagline = "Powering Logistics. Delivering Partnerships.";
export const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact Us" },
];

export const services = [
  { id: "transportation", title: "Transportation Services", icon: Truck, summary: "Business transportation and cargo movement support for logistics providers and enterprise partners.", value: "Expand your transportation capacity to support scheduled cargo movements and changing operational requirements.", alt: "Hands securing cargo with a strap" },
  { id: "last-mile", title: "Last-Mile Delivery", icon: MapPin, summary: "Supporting the final stage of delivery and helping business partners reach their customers.", value: "Extend your delivery capacity for the final handoff to customers and business destinations.", alt: "Delivery worker handing a carton to a recipient" },
  { id: "fulfillment", title: "Fulfillment Operations", icon: PackageCheck, summary: "Supporting fulfillment activities and operational processes behind order delivery.", value: "Add operational support to help orders move from preparation to dispatch.", alt: "Order being packed at a workbench" },
  { id: "distribution", title: "Distribution Operations", icon: Boxes, summary: "Supporting the movement and distribution of goods throughout supply chain operations.", value: "Coordinate the movement of goods between distribution points and delivery destinations.", alt: "Staff scanning cartons in a staging area" },
];

export const partners = ["3PL providers", "Large enterprises", "E-commerce companies", "Retail businesses", "Fulfillment providers", "Distribution companies"];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: ["MC3 Trucking Services", "B2B Logistics Partner", "Logistics Subcontractor", "Outsourced Logistics Operations", "Transportation Services", "Last-Mile Delivery", "Logistics Distribution Services", "Logistics Execution Partner"],
    ...(siteUrl && { alternates: { canonical: new URL(path, siteUrl) } }),
    openGraph: {
      title: path === "/" ? title : title + " | " + name,
      description,
      type: "website",
      siteName: name,
      ...(siteUrl && {
        url: new URL(path, siteUrl),
        images: [{ url: new URL("/images/hero.jpg", siteUrl), alt: "Illustration of an MC3 branded Isuzu closed van truck" }],
      }),
    },
  };
}
