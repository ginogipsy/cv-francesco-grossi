/**
 * Dati anagrafici e recapiti: tutto ciò che NON cambia al variare della lingua.
 *
 * I file di contenuto (`content.it.ts`, `content.en.ts`) importano da qui invece
 * di ripetere i valori: un numero di telefono o una URL sbagliata in una sola
 * delle due lingue sarebbe un bug silenzioso, visibile solo dopo il toggle.
 */

export const NAME = 'Francesco Grossi';
export const INITIALS = 'FG';
export const PHOTO_URL = 'assets/profile.jpg';

export const PHONE = '+39 349 336 9549';
export const PHONE_TEL = 'tel:+393493369549';
export const EMAIL = 'francescogrossi92@outlook.it';
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Via+Ponzio+Cominio+00175+Roma';
export const WHATSAPP_URL = 'https://wa.me/393493369549';
export const TELEGRAM_URL = 'https://t.me/ginogipsy';
export const GITHUB_URL = 'https://github.com/ginogipsy';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/francescogrossi92/';

/** Indirizzo postale: invariante, non va tradotto. */
export const ADDRESS = 'Via Ponzio Cominio, 00175 Roma';
