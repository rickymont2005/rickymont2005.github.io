# Ricardo Montano | Mechanical Engineering Portfolio

A responsive single-page portfolio for Ricardo Montano, a UC Irvine Mechanical Engineering student pursuing 2027 early-career roles in aerospace, mechanical design, manufacturing, test, and integration.

Technical project name: `RicardoMontanoEngineeringPortfolio`

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

## Build for production

```bash
npm run build
```

## Edit the site

- Main page content and project data: `app/page.tsx`
- Visual styles and responsive layouts: `app/globals.css`
- SEO and social metadata: `app/layout.tsx`
- Project images: `public/projects/`
- Downloadable resume: `public/Ricardo-Montano-Resume.pdf`
- Social preview: `public/og.png`

Project details are stored in the `projects` array in `app/page.tsx`. Each project includes its objective, individual contribution, tools, process, result, engineering decisions, and image gallery.

## Replace contact details

Search `app/page.tsx` for the current email address and LinkedIn URL. Update both the visible text and the corresponding `mailto:` or `href` value.

## Publishing and editing access

The published website is publicly viewable and contains no visitor accounts, admin controls, editing forms, or content-management interface. Content changes are made only from the private project files by the site owner.

The included deployment configuration connects the private source project to its production website. Run the production build before publishing a new version.

## Accessibility and performance

The site uses semantic sections, descriptive image text, visible keyboard focus defaults, reduced-motion support, responsive layouts, and optimized WebP project images. The contact action uses email directly and does not require a backend.
