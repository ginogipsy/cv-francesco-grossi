/**
 * Forma dei contenuti del CV, condivisa da tutte le lingue.
 *
 * `CvContent` è deliberatamente esaustiva: copre ogni stringa visibile del
 * template, aria-label comprese. È questo che rende una traduzione dimenticata
 * un errore di compilazione invece di una stringa italiana che spunta nella
 * versione inglese.
 */

export type Lang = 'it' | 'en';

export const LANGS: readonly Lang[] = ['it', 'en'] as const;

export type IconName = 'phone' | 'mail' | 'map' | 'whatsapp' | 'telegram' | 'github' | 'linkedin';

/**
 * Gli id restano in italiano in tutte le lingue: sono ancore (`#esperienza`) e
 * cambiarli al toggle romperebbe i link già condivisi e lo scroll corrente.
 */
export type SectionId = 'esperienza' | 'istruzione' | 'skills' | 'behind-the-code' | 'hobbies';

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

/** Singola abilità linguistica valutata sulla scala CEFR (A1-C2). */
export interface LanguageAbility {
  /** Ascolto, Parlato, Scrittura, Lettura (già tradotto). */
  skill: string;
  cefr: string;
}

export interface LanguageSkill {
  name: string;
  flag: string;
  /** Sintesi mostrata nel chip: "Madrelingua", "B2 / C1"... */
  level: string;
  /** La madrelingua non ha un dettaglio CEFR da mostrare. */
  native: boolean;
  breakdown: LanguageAbility[];
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

export interface Highlight {
  value: string;
  label: string;
}

export interface SectionLink {
  id: SectionId;
  label: string;
}

export interface SectionHeading {
  kicker: string;
  title: string;
  lead: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  initials: string;
  photoUrl: string;
  birth: string;
  location: string;
  bio: string;
}

/** Card "Palestra": il testo di copertura e la verità che appare all'interazione. */
export interface GymCard {
  icon: string;
  title: string;
  cover: string;
  truth: string;
  badge: string;
}

export interface CallToAction {
  title: string;
  text: string;
  whatsapp: string;
}

export interface FooterStrings {
  builtWith: string;
  host: string;
}

/** Stringhe di cornice: navigazione, banner, etichette di servizio, a11y. */
export interface UiStrings {
  skipToContent: string;
  brandHome: string;
  navLabel: string;
  topbarCta: string;
  langSwitchLabel: string;
  switchToItalian: string;
  switchToEnglish: string;
  bannerText: string;
  bannerHost: string;
  bannerStatus: string;
  photoAlt: string;
  avatarBadge: string;
  heroEyebrow: string;
  heroBackground: string;
  quickActionsHeading: string;
  currentJob: string;
  eduTechTitle: string;
  eduAcademicTitle: string;
  eduLanguagesTitle: string;
  /** Etichetta della colonna "abilità" nel dettaglio CEFR, per gli screen reader. */
  languageAbilities: string;
}

export interface CvContent {
  /** Valore per `<html lang>`: BCP-47, non il codice interno. */
  htmlLang: string;
  ui: UiStrings;
  profile: Profile;
  highlights: Highlight[];
  sections: SectionLink[];
  headings: Record<SectionId, SectionHeading>;
  contacts: ContactLink[];
  experiences: Experience[];
  technicalEducation: EducationItem[];
  academicEducation: EducationItem[];
  languages: LanguageSkill[];
  skillGroups: SkillGroup[];
  softSkills: SoftSkill[];
  hobbies: Hobby[];
  gym: GymCard;
  cta: CallToAction;
  footer: FooterStrings;
}
