import type { CvContent, Lang } from './cv-content.model';
import { CONTENT_EN } from './content.en';
import { CONTENT_IT } from './content.it';

/**
 * Registry dei contenuti per lingua.
 *
 * Il tipo `Record<Lang, CvContent>` è il vincolo che tiene tutto in piedi:
 * aggiungere una lingua a `Lang` senza fornirne i contenuti non compila.
 */
export const CONTENT: Record<Lang, CvContent> = {
  it: CONTENT_IT,
  en: CONTENT_EN,
};
