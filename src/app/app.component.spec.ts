import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CONTENT } from './i18n/content';
import { LANGS } from './i18n/cv-content.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    // LocaleService legge la preferenza salvata alla costruzione: senza pulizia
    // un test che passa a 'en' condizionerebbe quelli successivi.
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name in the hero title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Francesco Grossi');
  });

  it('should expose tel:, mailto:, maps and wa.me quick actions', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const hrefs = fixture.componentInstance.t().contacts.map((contact) => contact.href);

    expect(hrefs).toContain('tel:+393493369549');
    expect(hrefs).toContain('mailto:francescogrossi92@outlook.it');
    expect(hrefs.some((href) => href.startsWith('https://www.google.com/maps/search/'))).toBe(true);
    expect(hrefs).toContain('https://wa.me/393493369549');
    expect(hrefs).toContain('https://t.me/ginogipsy');
    expect(hrefs).toContain('https://github.com/ginogipsy');
  });

  it('should resolve the CTA shortcuts without magic indexes', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;

    expect(app.ctaPhone().href).toBe('tel:+393493369549');
    expect(app.ctaEmail().href).toBe('mailto:francescogrossi92@outlook.it');
    expect(app.ctaWhatsapp().href).toBe('https://wa.me/393493369549');
  });

  describe('i18n', () => {
    it('should start in Italian', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      expect(app.lang()).toBe('it');
      expect(app.t().ui.topbarCta).toBe('Contattami');
    });

    it('should swap every text at once when the language changes', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      await fixture.whenStable();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Esperienza lavorativa');

      app.setLang('en');
      await fixture.whenStable();

      expect(app.lang()).toBe('en');
      expect(compiled.textContent).toContain('Work experience');
      expect(compiled.textContent).not.toContain('Esperienza lavorativa');
    });

    it('should persist the chosen language', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      app.setLang('en');

      expect(localStorage.getItem('cv-lang')).toBe('en');
    });

    it('should keep <html lang> in sync with the selected language', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      await fixture.whenStable();
      expect(document.documentElement.lang).toBe('it');

      fixture.componentInstance.setLang('en');
      await fixture.whenStable();
      expect(document.documentElement.lang).toBe('en');
    });

    it('should expose the CTA in the active language', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      expect(app.ctaWhatsapp().value).toBe('Contattami su WhatsApp');

      app.setLang('en');

      // L'href non cambia mai, solo l'etichetta.
      expect(app.ctaWhatsapp().value).toBe('Message me on WhatsApp');
      expect(app.ctaWhatsapp().href).toBe('https://wa.me/393493369549');
    });
  });

  /**
   * Parità strutturale tra le lingue: qui si intercetta il drift che il
   * type-checker non vede, cioè due array della stessa forma ma con elementi
   * diversi (un contatto in meno, un'ancora rinominata).
   */
  describe('content parity across languages', () => {
    const reference = CONTENT.it;

    for (const lang of LANGS) {
      const content = CONTENT[lang];

      it(`[${lang}] should keep the same section anchors`, () => {
        expect(content.sections.map((section) => section.id)).toEqual(
          reference.sections.map((section) => section.id),
        );
      });

      it(`[${lang}] should keep identical contact hrefs and icons`, () => {
        expect(content.contacts.map((contact) => contact.href)).toEqual(
          reference.contacts.map((contact) => contact.href),
        );
        expect(content.contacts.map((contact) => contact.icon)).toEqual(
          reference.contacts.map((contact) => contact.icon),
        );
      });

      it(`[${lang}] should describe the same number of entries`, () => {
        expect(content.experiences).toHaveLength(reference.experiences.length);
        expect(content.technicalEducation).toHaveLength(reference.technicalEducation.length);
        expect(content.academicEducation).toHaveLength(reference.academicEducation.length);
        expect(content.softSkills).toHaveLength(reference.softSkills.length);
        expect(content.hobbies).toHaveLength(reference.hobbies.length);
        expect(content.skillGroups.map((group) => group.accent)).toEqual(
          reference.skillGroups.map((group) => group.accent),
        );
      });

      it(`[${lang}] should declare Italian as native and English at B2/C1`, () => {
        const [italian, english] = content.languages;

        expect(content.languages).toHaveLength(2);
        expect(italian.native).toBe(true);
        expect(italian.breakdown).toHaveLength(0);

        expect(english.native).toBe(false);
        expect(english.breakdown.map((ability) => ability.cefr)).toEqual(['B2', 'B2', 'B2', 'C1']);
      });
    }
  });

  describe('gym card reveal', () => {
    const pointer = (pointerType: string) => ({ pointerType }) as PointerEvent;
    const key = (k: string) => ({ key: k, preventDefault: () => {} }) as KeyboardEvent;

    it('should follow the mouse hover on desktop', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      expect(app.isRevealed).toBe(false);
      app.onPointerEnter(pointer('mouse'));
      expect(app.isRevealed).toBe(true);
      app.onPointerLeave();
      expect(app.isRevealed).toBe(false);
    });

    it('should not hide on mouse click while still hovering', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      app.onPointerEnter(pointer('mouse'));
      app.onPressEnd(pointer('mouse'));
      expect(app.isRevealed).toBe(true);
    });

    it('should reveal only while the finger is held down', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      // pointerenter arriva anche su touch, ma non deve svelare nulla.
      app.onPointerEnter(pointer('touch'));
      expect(app.isRevealed).toBe(false);

      app.onPressStart(pointer('touch'));
      expect(app.isRevealed).toBe(true);

      app.onPressEnd(pointer('touch'));
      expect(app.isRevealed).toBe(false);
    });

    it('should close when a touch gesture turns into a scroll (pointercancel)', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      app.onPressStart(pointer('touch'));
      app.onPressEnd(pointer('touch'));
      expect(app.isRevealed).toBe(false);
    });

    it('should support press-and-hold from the keyboard', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;

      app.onKeyPressStart(key('Enter'));
      expect(app.isRevealed).toBe(true);
      app.onKeyPressEnd();
      expect(app.isRevealed).toBe(false);

      app.onKeyPressStart(key('Tab'));
      expect(app.isRevealed).toBe(false);
    });
  });
});
