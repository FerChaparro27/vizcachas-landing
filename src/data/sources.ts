/**
 * Bibliography for the educational module, keyed by concept id (see learn.concepts in src/i18n/*.json).
 * References are not translated. Every entry was checked against its publisher or catalog record.
 */
export interface Source {
  authors: string;
  year: string;
  title: string;
  venue: string;
  url: string;
  /** Short note on what the source supports in the text. */
  note?: string;
}

const explanatorySupplement: Source = {
  authors: 'Urban, S. E. & Seidelmann, P. K. (eds.)',
  year: '2013',
  title: 'Explanatory Supplement to the Astronomical Almanac, 3rd ed.',
  venue: 'University Science Books. ISBN 978-1-891389-85-6',
  url: 'https://aa.usno.navy.mil/publications/exp_supp',
};

const horizons: Source = {
  authors: 'Giorgini, J. D. et al.',
  year: '1996',
  title: 'JPL’s On-Line Solar System Data Service',
  venue: 'Bulletin of the American Astronomical Society 28, 1158',
  url: 'https://ssd.jpl.nasa.gov/horizons/',
};

const lola: Source = {
  authors: 'Smith, D. E. et al.',
  year: '2010',
  title: 'The Lunar Orbiter Laser Altimeter Investigation on the Lunar Reconnaissance Orbiter Mission',
  venue: 'Space Science Reviews 150, 209–241',
  url: 'https://doi.org/10.1007/s11214-009-9512-y',
};

const mazarico: Source = {
  authors: 'Mazarico, E., Neumann, G. A., Smith, D. E., Zuber, M. T. & Torrence, M. H.',
  year: '2011',
  title: 'Illumination conditions of the lunar polar regions using LOLA topography',
  venue: 'Icarus 211, 1066–1081',
  url: 'https://doi.org/10.1016/j.icarus.2010.10.030',
};

const speyerer: Source = {
  authors: 'Speyerer, E. J. & Robinson, M. S.',
  year: '2013',
  title: 'Persistently illuminated regions at the lunar poles: Ideal sites for future exploration',
  venue: 'Icarus 222, 122–136',
  url: 'https://doi.org/10.1016/j.icarus.2012.10.010',
};

const li2018: Source = {
  authors: 'Li, S. et al.',
  year: '2018',
  title: 'Direct evidence of surface exposed water ice in the lunar polar regions',
  venue: 'PNAS 115, 8907–8912',
  url: 'https://doi.org/10.1073/pnas.1802345115',
};

const moonFactSheet: Source = {
  authors: 'NSSDCA',
  year: '—',
  title: 'Moon Fact Sheet',
  venue: 'NASA Space Science Data Coordinated Archive',
  url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html',
};

const zhang2021: Source = {
  authors: 'Zhang, L.',
  year: '2021',
  title: 'Development and Prospect of Chinese Lunar Relay Communication Satellite',
  venue: 'Space: Science & Technology 2021, 3471608',
  url: 'https://doi.org/10.34133/2021/3471608',
};

const wu2020: Source = {
  authors: 'Wu, W. et al.',
  year: '2020',
  title: 'Technological breakthroughs and scientific progress of the Chang’e-4 mission',
  venue: 'Science China Information Sciences 63, 200201',
  url: 'https://doi.org/10.1007/s11432-020-3047-4',
};

export const sources: Record<string, Source[]> = {
  azel: [explanatorySupplement, horizons],
  horizon: [lola, mazarico],
  refraction: [explanatorySupplement, moonFactSheet],
  poles: [mazarico, speyerer, li2018],
  earth: [explanatorySupplement, moonFactSheet],
  dte: [zhang2021, wu2020],
};
