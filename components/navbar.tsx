"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, name } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" onClick={() => setOpenPath(null)}>
          <Image src="/images/logo.jpg" alt={name} width={146} height={65} />
        </Link>
        <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpenPath(open ? null : pathname)}>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
        <nav id="main-nav" aria-label="Main navigation" className={open ? "nav is-open" : "nav"}>
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpenPath(null)}>{label}</Link>
          ))}
          <Link className="button mobile-cta" href="/contact" onClick={() => setOpenPath(null)}>Discuss a Partnership</Link>
        </nav>
        <Link className="button header-cta" href="/contact">Discuss a Partnership</Link>
      </div>
    </header>
  );
}
