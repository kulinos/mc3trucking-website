# MC3 Trucking Services

Five-page corporate website for MC3 Trucking Services, built with the Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

Install Node.js 20.9 or later and use the following commands.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` to configure email and public company details.

## Deployment

Deploy to a host that supports a Next.js Node.js server and Server Actions. Run `npm ci`, `npm run build`, and `npm start` on a self-managed Node.js host. Set `SITE_URL` to the verified HTTPS origin before building to generate canonical URLs, social previews, and the sitemap. With an empty origin, robots.txt disallows indexing.

Verify a sending domain in [Resend](https://resend.com/docs/dashboard/domains/introduction). Set `CONTACT_FROM_EMAIL` to a sender on that domain, `CONTACT_TO_EMAIL` to the inbox that receives inquiries, and `RESEND_API_KEY` to a sending key. Keep the key server-side. Send a test inquiry after configuration and verify it reaches the inbox and that Reply addresses the submitter.

Set the optional `COMPANY_*` variables to show verified contact details. Empty fields display “To be announced.”

## Assets

The official logo is supplied by MC3. The vehicle and operations images are illustrative renderings. Replace the fleet renderings with approved fleet photography when available.
