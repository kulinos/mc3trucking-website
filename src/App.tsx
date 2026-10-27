import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Box, ChevronDown,
  Clock3, Container, PackageCheck, Phone, Route, ShieldCheck, Truck,
} from 'lucide-react'
import './App.css'
import logo from './assets/mc3-logo.png'
import { Header } from './components/Header'
import { ContactForm } from './components/ContactForm'
import { SectionHeading } from './components/SectionHeading'

type Service = { icon: typeof Truck; title: string; copy: string; number: string }
const services: Service[] = [
  { icon: Route, title: 'Long-haul transport', copy: 'A considered approach to moving freight across longer routes. Share your lane and timing for a tailored conversation.', number: '01' },
  { icon: Container, title: 'Regional delivery', copy: 'Flexible transport planning for regional movements, with coordination shaped around your shipment.', number: '02' },
  { icon: Box, title: 'Dedicated capacity', copy: 'Explore a dedicated transport option for recurring or project-based freight requirements.', number: '03' },
]
const footerLinks = [{ href: '#home', label: 'Home' }, { href: '#about', label: 'About Us' }, { href: '#services', label: 'Our Services' }, { href: '#fleet', label: 'Our Fleet' }, { href: '#contact', label: 'Contact Us' }]

function App() {
  return <>
    <Header />
    <main>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content wrap">
          <div className="hero-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> MC3 TRUCKING SERVICES</span>
            <h1>Moving business<br />forward<span className="orange-period">.</span></h1>
            <p>Transport solutions built around your next move. Tell us what you need to move, and let’s plan the road ahead.</p>
            <div className="hero-actions"><a className="button button-orange" href="#contact">Talk to our team <ArrowUpRight size={17} /></a><a className="text-link light-link" href="#services">Explore services <ArrowDownRight size={17} /></a></div>
          </div>
        </div>
        <div className="hero-bottom"><span>TRANSPORT · LOGISTICS · PARTNERSHIP</span><a href="#about">Scroll to explore <ChevronDown size={15} /></a></div>
      </section>

      <section className="intro-section wrap" id="about">
        <div className="intro-mark"><img src={logo} alt="MC3 Trucking Services company logo" /></div>
        <div className="intro-copy"><span className="eyebrow">A PARTNER FOR THE ROAD AHEAD</span><h2>Freight moves better<br />with a clear plan.</h2><p>MC3 Trucking Services is building a practical, responsive approach to freight transportation. We start by understanding your shipment, your timeline, and the details that matter—then work with you on the next step.</p><a className="text-link" href="#contact">Get to know us <ArrowRight size={17} /></a></div>
        <div className="intro-aside"><span className="aside-rule" /><p>Moving business forward</p><span className="aside-caption">THE MC3 WAY</span></div>
      </section>

      <section className="services-section" id="services"><div className="wrap">
        <div className="section-top"><SectionHeading eyebrow="WHAT WE DO" title="Transport, thoughtfully planned." copy="A starting point for your logistics needs. Tell us about your shipment so we can confirm the right fit." /><a className="text-link section-link" href="#contact">Discuss your shipment <ArrowRight size={17} /></a></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, copy, number }) => <article className="service-card" key={title}><div className="card-top"><span className="service-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="card-number">{number}</span></div><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19} /></a></article>)}</div>
        <p className="disclaimer">Service availability and operating areas should be confirmed directly with MC3.</p>
      </div></section>

      <section className="fleet-section wrap" id="fleet"><div className="fleet-visual"><figure className="fleet-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_L300_FB_Van_2024.jpg?width=1200" alt="Mitsubishi L300 FB van in the Philippines" /><figcaption>Mitsubishi L300 FB</figcaption></figure><figure className="fleet-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Isuzu_Forward_FRR_Wingvan_2021.jpg?width=1200" alt="Isuzu Forward FRR six-wheeler truck in the Philippines" /><figcaption>Isuzu Forward 6 Wheeler</figcaption></figure><div className="fleet-stamp"><Truck size={29} /><span>ON THE<br />ROAD AHEAD</span></div></div><div className="fleet-copy"><span className="eyebrow">OUR FLEET</span><h2>The right fit<br />for the freight.</h2><p>Every load has its own requirements. Share the size, handling needs, and destination of your shipment so we can discuss suitable equipment and availability.</p><div className="fleet-points"><div><span className="point-icon"><PackageCheck size={20} /></span><span><b>Load-led planning</b><small>Start with what your shipment needs.</small></span></div><div><span className="point-icon"><Clock3 size={20} /></span><span><b>Availability confirmed</b><small>Equipment and timing discussed directly.</small></span></div></div><a className="button button-dark" href="#contact">Ask about availability <ArrowUpRight size={17} /></a><span className="caption-note">Fleet details are illustrative and subject to confirmation.</span></div></section>

      <section className="promise-band"><div className="wrap promise-inner"><ShieldCheck size={31} strokeWidth={1.5} /><div><span className="eyebrow eyebrow-light">A GOOD JOURNEY STARTS HERE</span><h2>Let’s get your next move in motion.</h2></div><a className="button button-orange" href="#contact">Start a conversation <ArrowUpRight size={17} /></a></div></section>

      <section className="contact-section wrap" id="contact"><div className="contact-copy"><SectionHeading eyebrow="CONTACT MC3" title="Let’s talk logistics." copy="Share a few details and the team can follow up. We’ll need to confirm the best contact information and service details before launch." /><div className="contact-method"><span className="contact-icon"><Phone size={19} /></span><div><span className="method-label">PHONE</span><p><a href="tel:09272128512">0927.212.8512</a></p><span className="method-label email-label">EMAIL</span><p><a href="mailto:inquiry@mc3trucking.com">inquiry@mc3trucking.com</a></p></div></div><div className="contact-method"><span className="contact-icon"><Route size={19} /></span><div><span className="method-label">OPERATING LOCATION</span><p className="address-text">Blk18, Lot14 Phase-01 Valle Dulce,<br />Brgy. Bubuyan, Calamba City, Laguna</p></div></div></div><ContactForm /></section>
    </main>
    <footer className="site-footer"><div className="wrap footer-main"><a className="footer-brand" href="#home"><img src={logo} alt="MC3 Trucking Services" /></a><p>Moving business forward.<br />A clear plan for your next move.</p><nav aria-label="Footer navigation">{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a href="#home" className="back-top">Back to top <ArrowUpRight size={16} /></a></div><div className="wrap footer-bottom"><span>© 2026 MC3 Trucking Services</span><span>Calamba City, Laguna · 0927.212.8512</span><span className="photo-credit">Photos: <a href="https://commons.wikimedia.org/wiki/File:Isuzu_Forward_FRR_Wingvan_2021.jpg" target="_blank" rel="noreferrer">Isuzu Forward FRR</a> and <a href="https://commons.wikimedia.org/wiki/File:Mitsubishi_L300_FB_Van_2024.jpg" target="_blank" rel="noreferrer">Mitsubishi L300 FB</a> by <a href="https://commons.wikimedia.org/wiki/User:Captainmorlypogi1959" target="_blank" rel="noreferrer">Captainmorlypogi1959</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></span></div></footer>
  </>
}
export default App
