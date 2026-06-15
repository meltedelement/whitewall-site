# White Wall Painting — Website

A polished, modern single-page site for **White Wall Painting** (Omar), professional
painters in Tullamore, Co. Offaly.

Built with **Vite + React + TypeScript + Tailwind CSS v4** and Framer Motion.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing content

Almost everything lives in **one file**: `src/data/site.ts`

- **Phone / WhatsApp** — `business.phone`, `business.phoneHref`, `business.whatsapp`
- **Email** — add to `business.email` if you get one
- **Service area, Facebook link** — in the `business` object
- **Services, process steps, features, testimonials** — edit those arrays

The testimonials are placeholders — swap them for real Facebook reviews when ready.

## Photos

Project photos live in `public/work/`:

- `hallway-stairs.png` — used in the hero + gallery
- `staircase-before.png` / `staircase-after.png` — the before/after highlight

To add more, drop an image in `public/work/` and add a tile in
`src/components/Work.tsx` with its `src` (e.g. `src: "/work/myphoto.jpg"`).
Tiles without a `src` show a styled placeholder.

## Quote form

The contact form has no backend — it opens **WhatsApp** pre-filled with the
visitor's details, so enquiries land straight on the phone. No server required.

## Deploying

The site is fully static. After `npm run build`, upload the `dist/` folder to any
static host — **Netlify, Vercel, Cloudflare Pages, GitHub Pages**, etc. Most will
auto-detect Vite (build command `npm run build`, output dir `dist`).
