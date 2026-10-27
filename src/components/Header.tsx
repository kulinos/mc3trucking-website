import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logo from '../assets/mc3-logo.png'

const navLinks = [
  { href: '#home', label: 'Home' }, { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' }, { href: '#fleet', label: 'Our Fleet' },
  { href: '#contact', label: 'Contact Us' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="MC3 Trucking Services home"><img src={logo} alt="MC3 Trucking Services — Moving Business Forward" /></a>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Request a quote <ArrowUpRight size={16} /></a>
    </nav>
  </header>
}
