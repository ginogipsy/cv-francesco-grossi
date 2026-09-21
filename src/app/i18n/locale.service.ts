import { effect, inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { CONTENT } from './content';
import { LANGS, type Lang } from './cv-content.model';

/** Chiave di persistenza della preferenza utente. */
const STORAGE_KEY = 'cv-lang';

/** L'italiano resta il default: nessun autodetect da `navigator.language`. */
const DEFAULT_LANG: Lang = 'it';

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value);
}

/**
 * Lingua corrente dell'interfaccia.
 *
 * Unico stato condiviso dell'app: un signal letto da `AppComponent` tramite
 * `computed`, così il cambio lingua ridisegna la pagina senza reload e senza
 * perdere la posizione di scroll.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.readStoredLang());

  constructor() {
    // Allinea <html lang> alla lingua scelta: conta per gli screen reader e per
    // l'algoritmo di sillabazione del browser.
    effect(() => {
      this.document.documentElement.lang = CONTENT[this.lang()].htmlLang;
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    this.persist(lang);
  }

  toggle(): void {
    this.set(this.lang() === 'it' ? 'en' : 'it');
  }

  /**
   * localStorage può lanciare (Safari in navigazione privata, cookie bloccati):
   * la preferenza è un extra, non deve poter impedire il boot dell'app.
   */
  private readStoredLang(): Lang {
    try {
      const stored = this.document.defaultView?.localStorage.getItem(STORAGE_KEY) ?? null;
      return isLang(stored) ? stored : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  }

  private persist(lang: Lang): void {
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Preferenza non persistita: la sessione corrente resta comunque corretta.
    }
  }
}
