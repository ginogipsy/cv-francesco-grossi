import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

/* -------------------------------------------------------------------------- */
/*  Modelli                                                                    */
/* -------------------------------------------------------------------------- */

export type IconName =
  | 'phone'
  | 'mail'
  | 'map'
  | 'whatsapp'
  | 'telegram'
  | 'github'
  | 'linkedin';

export interface ContactLink {
  /** Etichetta breve mostrata nella card. */
  label: string;
  /** Valore leggibile (numero, indirizzo, handle...). */
  value: string;
  /** URL che apre l'app di sistema predefinita. */
  href: string;
  icon: IconName;
  /** true -> apre in una nuova scheda. */
  external: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  /** Evidenzia l'esperienza in corso nella timeline. */
  current: boolean;
  bullets: string[];
  tags: string[];
}

export type EducationKind = 'tech' | 'academic' | 'music';

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  detail: string;
  kind: EducationKind;
}

export interface SkillGroup {
  name: string;
  accent: 'blue' | 'green' | 'yellow' | 'red';
  items: string[];
}

export interface SoftSkill {
  icon: string;
  title: string;
  description: string;
}

export interface Hobby {
  icon: string;
  title: string;
  text: string;
}

/* -------------------------------------------------------------------------- */
/*  Costanti di configurazione                                                 */
/* -------------------------------------------------------------------------- */

const PHONE = '+39 349 336 9549';
const PHONE_TEL = 'tel:+393493369549';
const EMAIL = 'francescogrossi92@outlook.it';
const LINKEDIN_URL = 'https://www.linkedin.com/in/francescogrossi92/';

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
  /**
   * true solo MENTRE l'utente sta interagendo con la card "Palestra"
   * (hover del mouse, dito premuto, Invio/Spazio tenuto sul badge).
   */
  isRevealed = false;

  /** Fallback alle iniziali se `public/profile.jpg` non è presente. */
  photoAvailable = true;

  readonly currentYear = new Date().getFullYear();

  readonly profile = {
    name: 'Francesco Grossi',
    role: 'Back-end Java Developer',
    tagline: 'Microservizi · Spring Boot · CI/CD · Generative AI',
    initials: 'FG',
    photoUrl: 'assets/profile.jpg',
    birth: '14/06/1992 — Arce (FR), Italia',
    location: 'Roma, Italia',
    bio: `Sviluppatore Back-end Java con quasi 5 anni passati a domare microservizi ed evitare che i
      server vadano in fumo. Unisco una solida padronanza dello stack Java/Spring, della gestione di
      pipeline CI/CD e dei rilasci ad una spiccata curiosità per l'Agentic AI e i modelli LLM in
      locale (con Ollama a farmi da assistente). Grazie a un background umanistico, ho sviluppato una
      dote rara tra i dev: so tradurre il "tecnichese" per i clienti e ascoltare le persone oltre che
      le eccezioni del codice.`,
  };

  readonly highlights = [
    { value: '~5 anni', label: 'di esperienza' },
    { value: 'Java 8→21', label: 'Spring Boot / Cloud' },
    { value: 'Docker', label: 'CI/CD & rilasci' },
    { value: 'Ollama', label: 'LLM in locale' },
  ];

  readonly sections = [
    { id: 'esperienza', label: 'Esperienza' },
    { id: 'istruzione', label: 'Istruzione' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'behind-the-code', label: 'Behind the Code' },
    { id: 'hobbies', label: 'Hobbies' },
  ];

  readonly contacts: ContactLink[] = [
    {
      label: 'Telefono',
      value: PHONE,
      href: PHONE_TEL,
      icon: 'phone',
      external: false,
    },
    {
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: 'mail',
      external: false,
    },
    {
      label: 'Indirizzo',
      value: 'Via Ponzio Cominio, 00175 Roma',
      href: 'https://www.google.com/maps/search/?api=1&query=Via+Ponzio+Cominio+00175+Roma',
      icon: 'map',
      external: true,
    },
    {
      label: 'WhatsApp',
      value: 'Contattami su WhatsApp',
      href: 'https://wa.me/393493369549',
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Telegram',
      value: 'Contattami su Telegram',
      href: 'https://t.me/ginogipsy',
      icon: 'telegram',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'I miei progetti su GitHub',
      href: 'https://github.com/ginogipsy',
      icon: 'github',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Francesco Grossi',
      href: LINKEDIN_URL,
      icon: 'linkedin',
      external: true,
    },
  ];

  /* Scorciatoie per la topbar e la CTA finale: evitano indici magici nel template. */
  readonly ctaPhone = this.contactByIcon('phone');
  readonly ctaEmail = this.contactByIcon('mail');
  readonly ctaWhatsapp = this.contactByIcon('whatsapp');

  readonly experiences: Experience[] = [
    {
      role: 'Sviluppatore di Software',
      company: 'Capgemini Engineering',
      location: 'Roma',
      period: '06/04/2023 — Attuale',
      current: true,
      bullets: [
        'Sviluppo hands-on sul codice e supporto alla regia del team: stime, gestione delle issue, supporto ai rilasci.',
        "Affiancamento ai colleghi nell'adozione della Generative AI nel flusso di lavoro quotidiano.",
        'Progettazione SOLID su microservizi Java, con attenzione a manutenibilità e osservabilità.',
      ],
      tags: [
        'Java',
        'Spring Cloud',
        'Docker',
        'Keycloak',
        'JMS / ActiveMQ',
        'Grafana',
        'Pattern SAGA',
      ],
    },
    {
      role: 'Analista Programmatore',
      company: 'Alten Italia',
      location: 'Roma',
      period: '15/08/2021 — 05/04/2023',
      current: false,
      bullets: [
        'Sviluppo di servizi Spring Boot con approccio API-first.',
        'Migrazione di sistemi legacy (Struts2) verso architetture a microservizi moderne.',
      ],
      tags: ['Spring Boot', 'API-first', 'Struts2 → Microservizi', 'REST'],
    },
    {
      role: 'Analista Programmatore',
      company: 'Alten Italia',
      location: 'Roma',
      period: '30/09/2020 — 15/08/2021',
      current: false,
      bullets: [
        'Sviluppo full-stack su Spring Boot, .NET Core e Angular.',
        'Migrazione della base dati da MySQL a MongoDB con ETL in Pentaho Spoon.',
      ],
      tags: ['Spring Boot', '.NET Core', 'Angular', 'MySQL → MongoDB', 'Pentaho Spoon'],
    },
    {
      role: 'Analista Programmatore',
      company: 'ELIS',
      location: 'Roma',
      period: '29/02/2020 — 30/09/2020',
      current: false,
      bullets: [
        'Sviluppo backend e web su stack Spring (MVC, Boot, Data JPA).',
        'Realizzazione di viste server-side con JSP e Thymeleaf e primi frontend in Angular.',
      ],
      tags: ['Spring MVC', 'Spring Data JPA', 'JSP', 'Thymeleaf', 'Angular'],
    },
    {
      role: 'Tecnico Video',
      company: 'C5 Live & K-Motion',
      location: 'Roma',
      period: '2018 — 2020',
      current: false,
      bullets: [
        'Regia e riprese in streaming dei campionati di FutSal Serie A1 / A2.',
        "Montaggio video e gestione completa dell'attrezzatura di produzione.",
      ],
      tags: ['Regia', 'Streaming live', 'Montaggio', 'Troubleshooting on-field'],
    },
  ];

  readonly technicalEducation: EducationItem[] = [
    {
      title: 'Preparation Academy',
      institution: 'Fincons Group',
      period: '2020',
      detail: 'Spring Framework, Hibernate, JPA, Angular.',
      kind: 'tech',
    },
    {
      title: 'Corso Java Developer Junior',
      institution: 'Generation Italy @ ELIS',
      period: '2019 — 2020',
      detail: 'Java SE8 / EE, MySQL, sviluppo Web, metodologie Agile e SCRUM.',
      kind: 'tech',
    },
  ];

  readonly academicEducation: EducationItem[] = [
    {
      title: 'Laurea Magistrale in Musica e Spettacolo',
      institution: 'Università di Roma "Tor Vergata"',
      period: '2016 — 2019',
      detail: 'Livello EQF 7.',
      kind: 'academic',
    },
    {
      title: 'Laurea Triennale in Beni Culturali',
      institution: 'Università di Roma "Tor Vergata"',
      period: '2011 — 2015',
      detail: 'Livello EQF 6.',
      kind: 'academic',
    },
    {
      title: 'Licenza di Solfeggio',
      institution: 'Conservatorio di Frosinone',
      period: '—',
      detail: 'Formazione musicale teorica.',
      kind: 'music',
    },
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      name: 'Core Back-end',
      accent: 'blue',
      items: [
        'Java',
        'Spring Boot',
        'Spring Cloud',
        'Spring Data JPA',
        'Hibernate',
        'REST / API-first',
      ],
    },
    {
      name: 'Architettura & Infra',
      accent: 'green',
      items: [
        'Microservizi',
        'Docker',
        'Keycloak',
        'JMS / ActiveMQ',
        'Pattern SAGA',
        'CI/CD',
        'Grafana',
        'Linux',
        'Git',
      ],
    },
    {
      name: 'Data & Front-end',
      accent: 'yellow',
      items: ['SQL', 'MySQL', 'MongoDB', 'Pentaho Spoon', 'Angular', 'TypeScript', 'HTML / SCSS'],
    },
    {
      name: 'AI & Sperimentazione',
      accent: 'red',
      items: [
        'Ollama',
        'LLM in locale',
        'Agentic AI',
        'Prompt engineering',
        'Generative AI nel team',
      ],
    },
  ];

  readonly softSkills: SoftSkill[] = [
    {
      icon: '🎼',
      title: 'Capobanda',
      description:
        'Direzione della banda musicale e parrocchiale di Arce (FR): tenere insieme venti persone a tempo è la miglior palestra di leadership che conosco.',
    },
    {
      icon: '🎲',
      title: 'Giochi di Ruolo dal Vivo',
      description:
        'Organizzazione di GRV, eventi e stand: scrittura di regole, gestione dei partecipanti e problem solving in tempo reale.',
    },
    {
      icon: '🎬',
      title: 'Regia & Videomaking',
      description:
        'Regia e montaggio per concorsi di cortometraggi: raccontare una storia con vincoli stretti di tempo e budget.',
    },
    {
      icon: '🧾',
      title: 'Inventarista — RGIS',
      description:
        'Precisione sui numeri, turni notturni e nessuna tolleranza per gli errori di conteggio.',
    },
    {
      icon: '🍽️',
      title: 'Lavapiatti — Fregene',
      description:
        'La prima lezione sul concetto di "coda di lavorazione" e di throughput sotto carico.',
    },
    {
      icon: '☎️',
      title: 'Operatore Call Center — TPhone',
      description:
        'Ascolto attivo e traduzione del "tecnichese": qui ho imparato a parlare con le persone, non ai log.',
    },
  ];

  readonly hobbies: Hobby[] = [
    {
      icon: '🎮',
      title: 'Videogame',
      text: 'Sì, sono nerd! Amo Ron Gilbert e le avventure grafiche.',
    },
    {
      icon: '🍿',
      title: 'Film & Serie TV',
      text: 'Amo i film e le sit-com, ma ormai sono scottato dalle serie TV che vengono troncate al climax!',
    },
    {
      icon: '🎵',
      title: 'Musica',
      text: 'Dai, come si fa a non amarla?',
    },
  ];

  private contactByIcon(icon: IconName): ContactLink {
    const contact = this.contacts.find((item) => item.icon === icon);

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
