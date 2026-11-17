# Lunar Landing Site Navigator — project site

Presentation and educational site for **Lunar Landing Site Navigator**, built by the team *Vizcachas fuera de órbita* for the NASA Space Apps Challenge 2026.

- The tool: https://vizcachasfueradeorbita.vercel.app/
- Tool source code: https://github.com/VainstubTomas/NASA-APP-CHALLENGE

This repo holds only the presentation site (problem, solution, educational module, data and credits, team). The tool lives in its own repo and deploy.

## Stack
[Astro](https://astro.build/) (static output) + Tailwind CSS v4. No client framework; the only JavaScript is the dark-mode toggle and the menus.

## Languages
English is the default (`/`). The other languages live under `/es/`, `/pt/`, `/fr/`, `/zh/` and `/hi/`.

All text lives in `src/i18n/<lang>.json`, and `en.json` is the source of truth. `npm run build` first runs `scripts/check-i18n.mjs`, which fails if any language is missing a key or has a different number of items.

To add a language:
1. Copy `en.json` to `src/i18n/<code>.json` and translate it.
2. Add the code in `src/i18n/index.ts` (`locales`, `localeInfo`, the imports) and in `astro.config.mjs` (both `i18n.locales` and the sitemap list).
3. Add it to `locales` in `scripts/check-i18n.mjs`.

The Portuguese, French, Chinese and Hindi texts were translated with AI and have not been reviewed by native speakers. The site says so in the footer.

## Run it
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # checks i18n, then builds into dist/
npm run preview
```

## Deploy on Vercel
Import the repo in Vercel. It detects Astro automatically: the build command is `npm run build` and the output folder is `dist`. Once the final domain is known, set the `SITE_URL` environment variable (for example `https://vizcachas.example.org`) so that canonical URLs, hreflang tags and the sitemap use it. The default is `https://vizcachas-landing.vercel.app`.

## Where things are
| Path | Contents |
|---|---|
| `src/i18n/` | All the text, one JSON file per language |
| `src/components/HomePage.astro` | Main page: hero, problem, solution, data, team |
| `src/components/LearnPage.astro` | Educational module (`/learn`) |
| `src/components/ConceptFigure.astro` | Schematic SVG figures for the module |
| `src/assets/shots/` | Screenshots of the tool and of the NASA tools (optimized at build time) |
| `public/assets/` | Logo, favicon and images taken from the app repo |

## Credits
The app screenshots were taken from the deployed tool. The screenshots of Horizons, Quickmap and Moon Trek, the logo and the images come from the app repo (see its README for their sources). The NASA Space Apps Challenge logo is used only to identify the event.

## License
MIT
