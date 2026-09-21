import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { CONTENT } from './i18n/content';
import type { ContactLink, IconName, Lang } from './i18n/cv-content.model';
import { LocaleService } from './i18n/locale.service';

/* -------------------------------------------------------------------------- */
/*  Componente                                                                 */
/* -------------------------------------------------------------------------- */

@Component({
  selector: 'app-root',
  imports: [NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly locale = inject(LocaleService);

  /** Lingua corrente: pilota il selettore ITA/ENG nella topbar. */
  readonly lang = this.locale.lang;

  /**
   * Tutti i contenuti nella lingua attiva.
   *
   * Un solo `computed` come radice: il template legge sempre da `t()`, quindi
   * il cambio lingua è atomico e non può lasciare mezza pagina in italiano.
   */
  readonly t = computed(() => CONTENT[this.lang()]);

  /**
   * true solo MENTRE l'utente sta interagendo con la card "Palestra"
   * (hover del mouse, dito premuto, Invio/Spazio tenuto sul badge).
   */
  isRevealed = false;

  /** Fallback alle iniziali se `public/assets/profile.jpg` non è presente. */
  photoAvailable = true;

  readonly currentYear = new Date().getFullYear();

  /* Scorciatoie per la topbar e la CTA finale: evitano indici magici nel template. */
  readonly ctaPhone = computed(() => this.contactByIcon('phone'));
  readonly ctaEmail = computed(() => this.contactByIcon('mail'));
  readonly ctaWhatsapp = computed(() => this.contactByIcon('whatsapp'));

  setLang(lang: Lang): void {
    this.locale.set(lang);
  }

  private contactByIcon(icon: IconName): ContactLink {
    const contact = this.t().contacts.find((item) => item.icon === icon);

    if (!contact) {
      throw new Error(`Contatto mancante per l'icona "${icon}"`);
    }

    return contact;
  }

  /* ---------------------------------------------------------------------- */
  /*  Card Palestra: la verità è visibile SOLO durante l'interazione.        */
  /*  Tutto passa da `isRevealed`, così non resta appeso nessuno stato       */
  /*  :hover / :focus sticky dopo un tap su touch.                          */
  /* ---------------------------------------------------------------------- */

  /** Mouse: il testo compare all'ingresso del cursore. */
  onPointerEnter(event: PointerEvent): void {
    if (event.pointerType === 'mouse') {
      this.isRevealed = true;
    }
  }

  /** Uscita del cursore (o fine della cattura implicita su touch): si richiude. */
  onPointerLeave(): void {
    this.isRevealed = false;
  }

  /** Touch / pen: visibile solo finché il dito resta premuto. */
  onPressStart(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      this.isRevealed = true;
    }
  }

  /**
   * Dito sollevato (`pointerup`) o gesto interrotto dallo scroll
   * (`pointercancel`): si richiude subito. Con il mouse non fa nulla,
   * altrimenti il click nasconderebbe il testo restando in hover.
   */
  onPressEnd(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      this.isRevealed = false;
    }
  }

  /** Tastiera: press-and-hold su Invio / Spazio, stesso modello del touch. */
  onKeyPressStart(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.isRevealed = true;
    }
  }

  onKeyPressEnd(): void {
    this.isRevealed = false;
  }

  onPhotoError(): void {
    this.photoAvailable = false;
  }
}
