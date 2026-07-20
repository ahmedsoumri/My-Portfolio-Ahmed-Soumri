# Ahmed Soumri Portfolio

Professional portfolio website for Ahmed Soumri, focused on Full Stack development, SaaS products, web and mobile applications, and Web3-enabled solutions.

![Portfolio preview](public/og-image.png)

## Overview

This repository contains the source code for [www.ahmedsoumri.com](https://www.ahmedsoumri.com), a multilingual personal brand website built to present professional experience, technical skills, selected projects, CV access, and contact paths.

The portfolio is designed as a static-first website with centralized content files. This keeps the project easy to maintain without requiring a backend or CMS.

## Key Features

- Multilingual content support for English, French, and Arabic
- Dark and light theme support
- Responsive layout for desktop, tablet, and mobile
- Centralized portfolio data for easy updates
- Project cards and detailed project case-study pages
- Optional GitHub and live preview buttons per project
- Optional cover image, screenshot gallery, and video showcase per project
- Downloadable CV files
- Contact section with professional social links
- SEO metadata, Open Graph, Twitter cards, and JSON-LD structured data
- Generated `robots.txt` and `sitemap.xml`
- Static project routes generated from local data

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [next-themes](https://github.com/pacocoursey/next-themes) for theme handling
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## Project Structure

```text
src/
  app/
    layout.tsx              # Global metadata, layout, structured data
    page.tsx                # Homepage
    robots.ts               # Generated robots.txt
    sitemap.ts              # Generated sitemap.xml
    projects/[id]/page.tsx  # Dynamic project detail route and project SEO
  components/
    sections/               # Homepage sections
    ui/                     # Reusable UI primitives
  context/
    LanguageContext.tsx     # Language state
  data/
    profile.ts              # Personal information and links
    sections.ts             # Hero, labels, SEO, footer, contact text
    skills.ts               # Skill groups
    experience.ts           # Experience timeline
    projects.ts             # Project data, media, links
    types.ts                # Shared TypeScript types
public/
  cv/                       # Downloadable CV files
  og-image.png              # Social sharing preview image
  site.webmanifest          # Web app manifest
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint checks.

## Updating Content

Most portfolio content is managed from `src/data`.

Use these files for common updates:

- `src/data/profile.ts` for name, email, phone, location, CV links, and social links
- `src/data/sections.ts` for SEO text, hero copy, contact text, labels, and footer text
- `src/data/experience.ts` for work and academic experience
- `src/data/skills.ts` for technical skills
- `src/data/projects.ts` for project cards, cover images, project details, media, GitHub links, and live preview links

The older `src/data/portfoliodata.ts` file re-exports the centralized data to keep existing imports stable.

## Hiding Draft Content

Projects and experiences can be kept in the data files without being shown publicly.

Use `hidden: true` on any project or experience that is not ready yet:

```ts
{
  id: 1,
  slug: "careercraft",
  hidden: true,
  title: {
    en: "CareerCraft",
    fr: "CareerCraft",
    ar: "CareerCraft",
  },
}
```

Hidden projects are removed from:

- Homepage project cards
- Generated project detail routes
- `sitemap.xml`

To publish a hidden item later, remove `hidden: true` or set it to `false`.

## Adding Project Links

Project buttons are optional. They appear only when the related URL is set.

In `src/data/projects.ts`, add:

```ts
githubUrl: "https://github.com/your-username/project-repo",
liveUrl: "https://your-live-project-url.com",
```

If one of them is missing, that button stays hidden automatically.

## Adding Screenshots and Videos

Place project media inside `public/projects/<project-slug>/`.

Example:

```text
public/
  projects/
    careercraft/
      dashboard.png
      cv-review.png
      demo.mp4
      demo-poster.png
```

Then add a main cover image and gallery media to the related project in `src/data/projects.ts`.

`coverImage` is used on the homepage project card and at the top of the project detail page. `screenshots` are used in the gallery section.

```ts
coverImage: {
  src: "/projects/careercraft/dashboard.png",
  alt: {
    en: "CareerCraft dashboard screen",
    fr: "CareerCraft dashboard screen in French",
    ar: "CareerCraft dashboard screen in Arabic",
  },
},
screenshots: [
  {
    src: "/projects/careercraft/dashboard.png",
    alt: {
      en: "CareerCraft dashboard screen",
      fr: "CareerCraft dashboard screen in French",
      ar: "CareerCraft dashboard screen in Arabic",
    },
    caption: {
      en: "Dashboard overview for career progress.",
      fr: "Dashboard overview caption in French.",
      ar: "Dashboard overview caption in Arabic.",
    },
  },
],
videos: [
  {
    src: "/projects/careercraft/demo.mp4",
    poster: "/projects/careercraft/demo-poster.png",
    title: {
      en: "CareerCraft demo",
      fr: "CareerCraft demo in French",
      ar: "CareerCraft demo in Arabic",
    },
  },
],
```

Cover images appear only when `coverImage` is configured. Screenshot and video sections appear only when gallery media is configured.

## SEO

The portfolio includes a strong technical SEO foundation:

- Global metadata in `src/app/layout.tsx`
- Open Graph metadata for LinkedIn, Facebook, and other social platforms
- Twitter/X card metadata
- JSON-LD structured data for a professional profile
- Project-specific metadata generated in `src/app/projects/[id]/page.tsx`
- Canonical URLs
- Generated `/robots.txt`
- Generated `/sitemap.xml`
- Social preview image at `public/og-image.png`

After deployment, submit this sitemap in Google Search Console:

```text
https://www.ahmedsoumri.com/sitemap.xml
```

## Deployment

The project can be deployed on any platform that supports Next.js, such as Vercel.

Recommended deployment checklist:

- Confirm the production domain is `https://www.ahmedsoumri.com`
- Run `npm run build`
- Verify `/robots.txt`
- Verify `/sitemap.xml`
- Verify project detail pages
- Verify CV download links
- Add real project screenshots and videos
- Add GitHub repository links and live preview links
- Submit the sitemap to Google Search Console

## Purpose

This portfolio is part of a broader professional brand strategy. It is built to support:

- Better career opportunities
- Freelance and consulting opportunities
- SaaS product presentation
- Web and mobile project showcases
- Web3 and smart contract integration credibility
- Long-term personal brand growth

## Author

Ahmed Soumri

- Website: [www.ahmedsoumri.com](https://www.ahmedsoumri.com)
- GitHub: [github.com/ahmedsoumri](https://github.com/ahmedsoumri)
- LinkedIn: [linkedin.com/in/ahmed-soumri](https://linkedin.com/in/ahmed-soumri)
- Email: [ahmedsoumri01@gmail.com](mailto:ahmedsoumri01@gmail.com)

## License

This portfolio is a personal project. All personal content, branding, CV files, and project case studies belong to Ahmed Soumri.
