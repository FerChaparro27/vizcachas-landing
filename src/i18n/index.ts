import en from './en.json';
import es from './es.json';
import pt from './pt.json';
import fr from './fr.json';
import zh from './zh.json';
import hi from './hi.json';

export const locales = ['en', 'es', 'pt', 'fr', 'zh', 'hi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Native name shown in the language menu, and the BCP-47 tag used in <html lang> / hreflang. */
export const localeInfo: Record<Locale, { label: string; tag: string }> = {
  en: { label: 'English', tag: 'en' },
  es: { label: 'Español', tag: 'es' },
  pt: { label: 'Português', tag: 'pt-BR' },
  fr: { label: 'Français', tag: 'fr' },
  zh: { label: '简体中文', tag: 'zh-CN' },
  hi: { label: 'हिन्दी', tag: 'hi' },
};

export type Dict = typeof en;
const dicts: Record<Locale, Dict> = { en, es, pt, fr, zh, hi };

export function t(lang: Locale): Dict {
  return dicts[lang] ?? en;
}

/** Path for a page in a given language. `page` is '' (home) or 'learn'. */
export function localePath(lang: Locale, page = ''): string {
  const prefix = lang === defaultLocale ? '' : `/${lang}`;
  const p = page ? `/${page}` : '';
  return `${prefix}${p}/` .replace(/\/+/g, '/');
}

/** App languages supported by the tool itself (others fall back to English). */
const appLangs = new Set(['en', 'es', 'hi', 'zh']);
export const APP_URL = 'https://vizcachasfueradeorbita.vercel.app/';
export function appUrl(lang: Locale): string {
  return `${APP_URL}?lang=${appLangs.has(lang) ? lang : 'en'}`;
}
export const REPO_URL = 'https://github.com/VainstubTomas/NASA-APP-CHALLENGE';
