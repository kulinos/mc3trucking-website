import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function ContactForm() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setError('Please complete each required field and enter a valid email address.')
      setMessage('')
      form.reportValidity()
      return
    }

    const values = new FormData(form)
    const name = String(values.get('name') ?? '')
    const email = String(values.get('email') ?? '')
    const company = String(values.get('company') ?? '')
    const phone = String(values.get('phone') ?? '')
    const inquiry = String(values.get('message') ?? '')
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      '',
      'Inquiry:',
      inquiry,
    ].join('\n')
    const mailto = `mailto:sales@mc3trucking.com?subject=${encodeURIComponent(`Website inquiry from ${name}`)}&body=${encodeURIComponent(body)}`

    setError('')
    setMessage('Opening your email app with the inquiry addressed to sales@mc3trucking.com.')
    window.location.href = mailto
  }

  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required minLength={2} placeholder="Your full name" /></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
    <div className="form-row"><label>Company <span className="optional">Optional</span><input name="company" autoComplete="organization" placeholder="Company name" /></label><label>Phone <span className="optional">Optional</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" /></label></div>
    <label>How can we help?<textarea name="message" rows={4} required minLength={10} placeholder="Tell us about your shipment, route, or question (at least 10 characters)." /></label>
    {error && <p className="form-feedback error" role="alert">{error}</p>}{message && <p className="form-feedback success" role="status">{message}</p>}
    <button type="submit" className="button button-primary">Send inquiry <ArrowUpRight size={17} /></button>
    <p className="form-note">This opens your email app; the inquiry is not sent or stored by the website.</p>
  </form>
}
