# MC3 Trucking Services

A responsive React and TypeScript website built with Vite. The company name and logo come from the supplied reference. Contact details, service area, fleet availability, and other company claims are intentionally left for MC3 to confirm.

## Project structure

- `index.html` sets the page title, viewport, and search description.
- `src/main.tsx` starts the React application.
- `src/App.tsx` assembles the home, about, services, fleet, and contact sections.
- `src/components/Header.tsx` contains the site navigation and mobile menu. Its `menuOpen` state controls whether the small-screen navigation is shown.
- `src/components/SectionHeading.tsx` is a reusable heading that accepts `eyebrow`, `title`, and optional `copy` props.
- `src/components/ContactForm.tsx` validates required fields and holds success or error feedback in React state. It opens the visitor email app with an inquiry addressed to sales@mc3trucking.com. The website itself does not send or store submissions.
- `src/App.css` contains the component and responsive layout styles.
- `src/index.css` sets global typography and base styles.
- `src/assets/mc3-logo.png` is the supplied MC3 logo.
- `package.json` lists dependencies and the development, lint, and production build commands.
- `vite.config.ts` and the TypeScript configuration files configure Vite and type checking.

## Run locally

Install dependencies once, then start the Vite development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Checks

```sh
npm run lint
npm run build
```

`npm run build` type-checks the TypeScript project and creates the deployable site in `dist/`.

## Prepare for deployment

1. Replace the sample service descriptions and all “to be confirmed” text with company-approved information.
2. Connect the form to an approved email service or backend before accepting real inquiries. Add server-side validation and a privacy notice for any real submission flow.
3. Run `npm run build` and deploy the contents of `dist/` to a static host such as Netlify, Vercel, or a web server configured to serve a single-page Vite site.
4. Set the deployment platform’s build command to `npm run build` and its publish directory to `dist`.

The Isuzu Forward FRR and Mitsubishi L300 FB photos are served from Wikimedia Commons and credited in the site footer. They are licensed under CC BY-SA 4.0 by Captainmorlypogi1959. The images require an internet connection; for a self-contained deployment, download and retain the required attribution and license details when moving them to local assets.
