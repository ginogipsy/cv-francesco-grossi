import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
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
    const hrefs = fixture.componentInstance.contacts.map((contact) => contact.href);

    expect(hrefs).toContain('tel:+393493369549');
    expect(hrefs).toContain('mailto:francescogrossi92@outlook.it');
    expect(hrefs.some((href) => href.startsWith('https://www.google.com/maps/search/'))).toBe(true);
    expect(hrefs).toContain('https://wa.me/393493369549');
    expect(hrefs).toContain('https://t.me/ginogipsy');
    expect(hrefs).toContain('https://github.com/ginogipsy');
  });

  it('should resolve the CTA shortcuts without magic indexes', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;

    expect(app.ctaPhone.href).toBe('tel:+393493369549');
    expect(app.ctaEmail.href).toBe('mailto:francescogrossi92@outlook.it');
    expect(app.ctaWhatsapp.href).toBe('https://wa.me/393493369549');
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
