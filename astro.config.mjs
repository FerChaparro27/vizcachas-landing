// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Change SITE_URL once the final Vercel domain is known.
const SITE_URL = process.env.SITE_URL ?? 'https://vizcachas-landing.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'fr', 'zh', 'hi'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', pt: 'pt-BR', fr: 'fr', zh: 'zh-CN', hi: 'hi' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
