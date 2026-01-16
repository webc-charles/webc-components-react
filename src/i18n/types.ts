import type en from './en.json'

export type Translations = typeof en

export type Locale =
  | 'en' // English (default)
  | 'fr' // French
  | 'de' // German
  | 'es' // Spanish
  | 'it' // Italian
  | 'pt' // Portuguese
  | 'nl' // Dutch
  | 'pl' // Polish
  | 'sv' // Swedish
  | 'da' // Danish
  | 'fi' // Finnish
  | 'el' // Greek
  | 'cs' // Czech
  | 'hu' // Hungarian
  | 'ro' // Romanian
  | 'bg' // Bulgarian
  | 'hr' // Croatian
  | 'sk' // Slovak
  | 'sl' // Slovenian
  | 'et' // Estonian
  | 'lv' // Latvian
  | 'lt' // Lithuanian

export interface I18nContextValue {
  locale: Locale
  t: Translations
}
