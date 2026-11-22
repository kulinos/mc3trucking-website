import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? navigation.map(({ href }) => ({ url: new URL(href, siteUrl).href })) : [];
}
