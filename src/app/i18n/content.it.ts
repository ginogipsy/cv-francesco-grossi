import type { CvContent } from './cv-content.model';
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  GITHUB_URL,
  INITIALS,
  LINKEDIN_URL,
  MAPS_URL,
  NAME,
  PHONE,
  PHONE_TEL,
  PHOTO_URL,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from './personal-info';

/** Contenuti in italiano: lingua di default e fonte di verità dei testi. */
export const CONTENT_IT: CvContent = {
  htmlLang: 'it',

  ui: {
    skipToContent: 'Salta al contenuto',
    brandHome: 'fg run — torna all’inizio',
    navLabel: 'Sezioni della pagina',
    topbarCta: 'Contattami',
    langSwitchLabel: 'Lingua del sito',
    switchToItalian: 'Passa all’italiano',
    switchToEnglish: 'Switch to English',
    bannerText: '🚀 Hosted on Google Cloud Platform',
    bannerHost: '(GCP Compute Engine)',
    bannerStatus: 'Status: Online',
    photoAlt: `Foto di ${NAME}`,
    avatarBadge: '☕ Java',
    heroEyebrow: 'Ciao, sono',
    heroBackground: '🧠 Background umanistico & musicale',
    quickActionsHeading: 'Contatti e azioni rapide',
    currentJob: 'In corso',
    eduTechTitle: '💻 Formazione tecnica',
    eduAcademicTitle: '🎓 Percorso universitario & musicale',
    eduLanguagesTitle: '🗣️ Lingue parlate',
    languageAbilities: 'Livello per abilità',
  },

  profile: {
    name: NAME,
    role: 'Back-end Java Developer',
    tagline: 'Microservizi · Spring Boot · CI/CD · Generative AI',
    initials: INITIALS,
    photoUrl: PHOTO_URL,
    birth: '14/06/1992 — Arce (FR), Italia',
    location: 'Roma, Italia',
    bio: `Sviluppatore Back-end Java con quasi 5 anni passati a domare microservizi ed evitare che i
      server vadano in fumo. Unisco una solida padronanza dello stack Java/Spring, della gestione di
      pipeline CI/CD e dei rilasci ad una spiccata curiosità per l'Agentic AI e i modelli LLM in
      locale (con Ollama a farmi da assistente). Grazie a un background umanistico, ho sviluppato una
      dote rara tra i dev: so tradurre il "tecnichese" per i clienti e ascoltare le persone oltre che
      le eccezioni del codice.`,
  },

  highlights: [
    { value: '~5 anni', label: 'di esperienza' },
    { value: 'Java 8→25', label: 'Spring Boot / Cloud' },
    { value: 'Docker', label: 'CI/CD & rilasci' },
    { value: 'Ollama', label: 'LLM in locale' },
  ],

  sections: [
    { id: 'esperienza', label: 'Esperienza' },
    { id: 'istruzione', label: 'Istruzione' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'behind-the-code', label: 'Behind the Code' },
    { id: 'hobbies', label: 'Hobbies' },
  ],

  headings: {
    esperienza: {
      kicker: '01 — Carriera',
      title: 'Esperienza lavorativa',
      lead:
        'Dai microservizi in produzione alla regia di una diretta streaming: percorsi diversi, ' +
        'stessa voglia di far funzionare le cose.',
    },
    istruzione: {
      kicker: '02 — Formazione',
      title: 'Istruzione, Formazione & Lingue',
      lead:
        'Una formazione tecnica costruita sopra un percorso umanistico e musicale. Non è un ' +
        'incidente: è il motivo per cui riesco a stare in mezzo tra il codice e le persone.',
    },
    skills: {
      kicker: '03 — Toolbox',
      title: 'Tech Stack & Skills',
      lead: 'Quello con cui lavoro ogni giorno e quello con cui gioco la sera.',
    },
    'behind-the-code': {
      kicker: '04 — Soft skills',
      title: 'Behind the Code',
      lead:
        'Le esperienze non convenzionali che mi hanno insegnato leadership, organizzazione e ' +
        'resistenza allo stress meglio di qualsiasi corso.',
    },
    hobbies: {
      kicker: '05 — Human touch',
      title: 'Hobbies & Fun Facts',
      lead: 'La parte del CV che di solito nessuno legge. Qui invece conviene.',
    },
  },

  contacts: [
    { label: 'Telefono', value: PHONE, href: PHONE_TEL, icon: 'phone', external: false },
    { label: 'Email', value: EMAIL, href: EMAIL_HREF, icon: 'mail', external: false },
    { label: 'Indirizzo', value: ADDRESS, href: MAPS_URL, icon: 'map', external: true },
    {
      label: 'WhatsApp',
      value: 'Contattami su WhatsApp',
      href: WHATSAPP_URL,
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Telegram',
      value: 'Contattami su Telegram',
      href: TELEGRAM_URL,
      icon: 'telegram',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'I miei progetti su GitHub',
      href: GITHUB_URL,
      icon: 'github',
      external: true,
    },
    { label: 'LinkedIn', value: NAME, href: LINKEDIN_URL, icon: 'linkedin', external: true },
  ],

  experiences: [
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
        'Manutenzione e sviluppo su stack enterprise consolidati (Struts2, MyBatis, SOAP).',
        'Migrazione di sistemi legacy verso architetture a microservizi moderne.',
      ],
      tags: [
        'Spring Boot',
        'API-first',
        'Struts2',
        'MyBatis',
        'SOAP',
        'SVN (TortoiseSVN)',
        'REST',
      ],
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
  ],

  technicalEducation: [
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
  ],

  academicEducation: [
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
  ],

  languages: [
    {
      name: 'Italiano',
      flag: '🇮🇹',
      level: 'Madrelingua',
      native: true,
      breakdown: [],
    },
    {
      name: 'Inglese',
      flag: '🇬🇧',
      level: 'B2 · C1',
      native: false,
      breakdown: [
        { skill: 'Ascolto', cefr: 'B2' },
        { skill: 'Parlato', cefr: 'B2' },
        { skill: 'Scrittura', cefr: 'B2' },
        { skill: 'Lettura', cefr: 'C1' },
      ],
    },
  ],

  skillGroups: [
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
  ],

  softSkills: [
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
  ],

  hobbies: [
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
  ],

  gym: {
    icon: '🏋️',
    title: 'Palestra',
    cover: 'Tre volte a settimana, disciplina ferrea, nessuna scusa. 💪',
    truth:
      'Non è vero, la metto solo per fare bella figura con la mia fidanzata se dovesse mai aprire questo sito 👀',
    badge: 'Mostra la verità sulla palestra',
  },

  cta: {
    title: 'Parliamone davanti a un caffè ☕',
    text: 'Microservizi da salvare, pipeline da sistemare o un LLM da far girare in locale? Scrivimi.',
    whatsapp: '💬 WhatsApp',
  },

  footer: {
    builtWith: 'Costruito con Angular & SCSS',
    host: 'Running on GCP Compute Engine',
  },
};
