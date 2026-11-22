import type { Metadata } from "next";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections";
import { name, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: name, template: "%s | " + name },
  ...(siteUrl && { metadataBase: siteUrl }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Writing-assistant extensions can add attributes to body before React hydrates.
  return <html lang="en"><body suppressHydrationWarning>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">{children}</main>
    <Footer />
  </body></html>;
}
