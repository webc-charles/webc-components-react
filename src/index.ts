'use client'

// Global styles - bundled into index.css
import './styles/index.scss'

// Components
export * from './components'

// i18n
export { I18nProvider, useI18n, useLocale } from './utils/i18n'
export type { I18nContextValue, Locale, Translations } from './utils/i18n'
