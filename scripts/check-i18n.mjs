// Fails the build if any locale file does not have exactly the same keys
// (and array lengths) as en.json, the source of truth.
import { readFileSync } from 'node:fs';

const dir = new URL('../src/i18n/', import.meta.url);
const locales = ['es', 'pt', 'fr', 'zh', 'hi'];
const load = (l) => JSON.parse(readFileSync(new URL(`${l}.json`, dir), 'utf8'));

function shape(v, path = '', out = new Map()) {
  if (Array.isArray(v)) {
    out.set(path, `array(${v.length})`);
    v.forEach((x, i) => shape(x, `${path}[${i}]`, out));
  } else if (v && typeof v === 'object') {
    for (const k of Object.keys(v)) shape(v[k], path ? `${path}.${k}` : k, out);
  } else {
    out.set(path, typeof v);
  }
  return out;
}

const ref = shape(load('en'));
let errors = 0;
for (const l of locales) {
  const s = shape(load(l));
  for (const [k, type] of ref) {
    if (!s.has(k)) { console.error(`[${l}] missing: ${k}`); errors++; }
    else if (s.get(k) !== type) { console.error(`[${l}] ${k}: expected ${type}, got ${s.get(k)}`); errors++; }
  }
  for (const k of s.keys()) if (!ref.has(k)) { console.error(`[${l}] extra key: ${k}`); errors++; }
}
if (errors) {
  console.error(`\ni18n check failed with ${errors} problem(s).`);
  process.exit(1);
}
console.log(`i18n check OK: ${locales.length} locales match en.json (${ref.size} entries).`);
