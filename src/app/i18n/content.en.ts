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

/**
 * Contenuti in inglese.
 *
 * Nomi propri, aziende, titoli di studio ufficiali e stack tecnologici restano
 * in originale: tradurre "Laurea Magistrale" o "Capgemini Engineering" li
 * renderebbe irriconoscibili a un recruiter che cerca esattamente quei termini.
 * Si traduce la prosa, non le denominazioni.
 */
export const CONTENT_EN: CvContent = {
  htmlLang: 'en',

  ui: {
    skipToContent: 'Skip to content',
    brandHome: 'fg run — back to top',
    navLabel: 'Page sections',
    topbarCta: 'Get in touch',
    langSwitchLabel: 'Site language',
    switchToItalian: 'Passa all’italiano',
    switchToEnglish: 'Switch to English',
    bannerText: '🚀 Hosted on Google Cloud Platform',
    bannerHost: '(GCP Compute Engine)',
    bannerStatus: 'Status: Online',
    photoAlt: `Photo of ${NAME}`,
    avatarBadge: '☕ Java',
    heroEyebrow: 'Hi, I’m',
    heroBackground: '🧠 Humanities & music background',
    quickActionsHeading: 'Contacts and quick actions',
    currentJob: 'Current',
    eduTechTitle: '💻 Technical training',
    eduAcademicTitle: '🎓 Academic & musical path',
    eduLanguagesTitle: '🗣️ Spoken languages',
    languageAbilities: 'Level by skill',
  },

  profile: {
    name: NAME,
    role: 'Back-end Java Developer',
    tagline: 'Microservices · Spring Boot · CI/CD · Generative AI',
    initials: INITIALS,
    photoUrl: PHOTO_URL,
    birth: '14/06/1992 — Arce (FR), Italy',
    location: 'Rome, Italy',
    bio: `Back-end Java developer with nearly 5 years spent taming microservices and keeping servers
      from going up in smoke. I pair a solid command of the Java/Spring stack, CI/CD pipelines and
      release management with a keen curiosity for Agentic AI and locally-run LLMs (with Ollama as my
      assistant). Thanks to a humanities background I picked up a rare skill among devs: I can
      translate tech-speak for clients and listen to people, not just to code exceptions.`,
  },

  highlights: [
    { value: '~5 years', label: 'of experience' },
    { value: 'Java 8→25', label: 'Spring Boot / Cloud' },
    { value: 'Docker', label: 'CI/CD & releases' },
    { value: 'Ollama', label: 'local LLMs' },
  ],

  sections: [
    { id: 'esperienza', label: 'Experience' },
    { id: 'istruzione', label: 'Education' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'behind-the-code', label: 'Behind the Code' },
    { id: 'hobbies', label: 'Hobbies' },
  ],

  headings: {
    esperienza: {
      kicker: '01 — Career',
      title: 'Work experience',
      lead:
        'From microservices in production to directing a live stream: different paths, the same ' +
        'urge to make things actually work.',
    },
    istruzione: {
      kicker: '02 — Training',
      title: 'Education, Training & Languages',
      lead:
        'Technical training built on top of a humanities and music background. That is no ' +
        'accident: it is why I can stand between the code and the people.',
    },
    skills: {
      kicker: '03 — Toolbox',
      title: 'Tech Stack & Skills',
      lead: 'What I work with every day, and what I play with in the evening.',
    },
    'behind-the-code': {
      kicker: '04 — Soft skills',
      title: 'Behind the Code',
      lead:
        'The unconventional experiences that taught me leadership, organisation and stress ' +
        'resilience better than any course could.',
    },
    hobbies: {
      kicker: '05 — Human touch',
      title: 'Hobbies & Fun Facts',
      lead: 'The part of a CV nobody usually reads. This time it is worth it.',
    },
  },

  contacts: [
    { label: 'Phone', value: PHONE, href: PHONE_TEL, icon: 'phone', external: false },
    { label: 'Email', value: EMAIL, href: EMAIL_HREF, icon: 'mail', external: false },
    { label: 'Address', value: ADDRESS, href: MAPS_URL, icon: 'map', external: true },
    {
      label: 'WhatsApp',
      value: 'Message me on WhatsApp',
      href: WHATSAPP_URL,
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Telegram',
      value: 'Message me on Telegram',
      href: TELEGRAM_URL,
      icon: 'telegram',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'My projects on GitHub',
      href: GITHUB_URL,
      icon: 'github',
      external: true,
    },
    { label: 'LinkedIn', value: NAME, href: LINKEDIN_URL, icon: 'linkedin', external: true },
  ],

  experiences: [
    {
      role: 'Software Developer',
      company: 'Capgemini Engineering',
      location: 'Rome',
      period: '06/04/2023 — Present',
      current: true,
      bullets: [
        'Hands-on development plus support in steering the team: estimates, issue management, release support.',
        'Coaching colleagues on adopting Generative AI in their daily workflow.',
        'SOLID design on Java microservices, with a focus on maintainability and observability.',
      ],
      tags: [
        'Java',
        'Spring Cloud',
        'Docker',
        'Keycloak',
        'JMS / ActiveMQ',
        'Grafana',
        'SAGA pattern',
      ],
    },
    {
      role: 'Programmer Analyst',
      company: 'Alten Italia',
      location: 'Rome',
      period: '15/08/2021 — 05/04/2023',
      current: false,
      bullets: [
        'Development of Spring Boot services with an API-first approach.',
        'Maintenance and development on established enterprise stacks (Struts2, MyBatis, SOAP).',
        'Migration of legacy systems towards modern microservice architectures.',
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
      role: 'Programmer Analyst',
      company: 'Alten Italia',
      location: 'Rome',
      period: '30/09/2020 — 15/08/2021',
      current: false,
      bullets: [
        'Full-stack development on Spring Boot, .NET Core and Angular.',
        'Database migration from MySQL to MongoDB with ETL in Pentaho Spoon.',
      ],
      tags: ['Spring Boot', '.NET Core', 'Angular', 'MySQL → MongoDB', 'Pentaho Spoon'],
    },
    {
      role: 'Programmer Analyst',
      company: 'ELIS',
      location: 'Rome',
      period: '29/02/2020 — 30/09/2020',
      current: false,
      bullets: [
        'Back-end and web development on the Spring stack (MVC, Boot, Data JPA).',
        'Server-side views with JSP and Thymeleaf, plus first front-ends in Angular.',
      ],
      tags: ['Spring MVC', 'Spring Data JPA', 'JSP', 'Thymeleaf', 'Angular'],
    },
    {
      role: 'Video Technician',
      company: 'C5 Live & K-Motion',
      location: 'Rome',
      period: '2018 — 2020',
      current: false,
      bullets: [
        'Directing and streaming coverage of the FutSal Serie A1 / A2 championships.',
        'Video editing and full management of the production equipment.',
      ],
      tags: ['Directing', 'Live streaming', 'Editing', 'On-field troubleshooting'],
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
      title: 'Junior Java Developer Course',
      institution: 'Generation Italy @ ELIS',
      period: '2019 — 2020',
      detail: 'Java SE8 / EE, MySQL, web development, Agile and SCRUM methodologies.',
      kind: 'tech',
    },
  ],

  academicEducation: [
    {
      title: "Master's Degree in Music and Performing Arts",
      institution: 'University of Rome "Tor Vergata"',
      period: '2016 — 2019',
      detail: 'EQF level 7.',
      kind: 'academic',
    },
    {
      title: "Bachelor's Degree in Cultural Heritage",
      institution: 'University of Rome "Tor Vergata"',
      period: '2011 — 2015',
      detail: 'EQF level 6.',
      kind: 'academic',
    },
    {
      title: 'Music Theory Certificate (Solfeggio)',
      institution: 'Frosinone Conservatory of Music',
      period: '—',
      detail: 'Theoretical musical training.',
      kind: 'music',
    },
  ],

  languages: [
    {
      name: 'Italian',
      flag: '🇮🇹',
      level: 'Native speaker',
      native: true,
      breakdown: [],
    },
    {
      name: 'English',
      flag: '🇬🇧',
      level: 'B2 · C1',
      native: false,
      breakdown: [
        { skill: 'Listening', cefr: 'B2' },
        { skill: 'Speaking', cefr: 'B2' },
        { skill: 'Writing', cefr: 'B2' },
        { skill: 'Reading', cefr: 'C1' },
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
      name: 'Architecture & Infra',
      accent: 'green',
      items: [
        'Microservices',
        'Docker',
        'Keycloak',
        'JMS / ActiveMQ',
        'SAGA pattern',
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
      name: 'AI & Experimentation',
      accent: 'red',
      items: ['Ollama', 'Local LLMs', 'Agentic AI', 'Prompt engineering', 'Generative AI in teams'],
    },
  ],

  softSkills: [
    {
      icon: '🎼',
      title: 'Band leader',
      description:
        'Conducting the town and parish band of Arce (FR): keeping twenty people in time together is the best leadership training I know.',
    },
    {
      icon: '🎲',
      title: 'Live Action Role-Playing',
      description:
        'Organising LARPs, events and stands: writing rules, managing participants and real-time problem solving.',
    },
    {
      icon: '🎬',
      title: 'Directing & Videomaking',
      description:
        'Directing and editing for short-film competitions: telling a story under tight time and budget constraints.',
    },
    {
      icon: '🧾',
      title: 'Stocktaker — RGIS',
      description: 'Precision with numbers, night shifts and zero tolerance for counting errors.',
    },
    {
      icon: '🍽️',
      title: 'Dishwasher — Fregene',
      description:
        'My first lesson in what a "work queue" really is, and in throughput under load.',
    },
    {
      icon: '☎️',
      title: 'Call Centre Operator — TPhone',
      description:
        'Active listening and translating tech-speak: this is where I learned to talk to people, not to logs.',
    },
  ],

  hobbies: [
    {
      icon: '🎮',
      title: 'Video games',
      text: 'Yes, I am a nerd! I love Ron Gilbert and point-and-click adventures.',
    },
    {
      icon: '🍿',
      title: 'Films & TV series',
      text: 'I love films and sitcoms, but by now I am burned by TV series that get cut off at the climax!',
    },
    {
      icon: '🎵',
      title: 'Music',
      text: 'Come on, how could anyone not love it?',
    },
  ],

  gym: {
    icon: '🏋️',
    title: 'The gym',
    cover: 'Three times a week, iron discipline, no excuses. 💪',
    truth:
      'Not true. It is only here to look good in front of my girlfriend, should she ever open this site 👀',
    badge: 'Reveal the truth about the gym',
  },

  cta: {
    title: 'Let’s talk it over a coffee ☕',
    text: 'Microservices to rescue, pipelines to fix, or an LLM to run locally? Drop me a line.',
    whatsapp: '💬 WhatsApp',
  },

  footer: {
    builtWith: 'Built with Angular & SCSS',
    host: 'Running on GCP Compute Engine',
  },
};
