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
    expect(hrefs).toContain('https://github.com/ginogipsy');
  });

  it('should toggle the gym joke', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.gymTruthRevealed).toBe(false);
    app.toggleGymTruth();
    expect(app.gymTruthRevealed).toBe(true);
    app.toggleGymTruth();
    expect(app.gymTruthRevealed).toBe(false);
  });
});
