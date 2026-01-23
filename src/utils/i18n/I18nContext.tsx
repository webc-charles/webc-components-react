'use client'

import { createContext, type ReactNode, useContext, useMemo } from 'react'
import bg from './bg.json'
import cs from './cs.json'
import da from './da.json'
import de from './de.json'
import el from './el.json'
import en from './en.json'
import es from './es.json'
import et from './et.json'
import fi from './fi.json'
import fr from './fr.json'
import hr from './hr.json'
import hu from './hu.json'
import it from './it.json'
import lt from './lt.json'
import lv from './lv.json'
import nl from './nl.json'
import pl from './pl.json'
import pt from './pt.json'
import ro from './ro.json'
import sk from './sk.json'
import sl from './sl.json'
import sv from './sv.json'
import type { I18nContextValue, Locale, Translations } from './types'

const translations: Record<Locale, Translations> = {
  en,
  fr,
  de,
  es,
  it,
  pt,
  nl,
  pl,
  sv,
  da,
  fi,
  el,
  cs,
  hu,
  ro,
  bg,
  hr,
  sk,
  sl,
  et,
  lv,
  lt,
}

const I18nContext = createContext<I18nContextValue | null>(null)

interface I18nProviderProps {
  children: ReactNode
  locale?: Locale
}

export function I18nProvider({
  children,
  locale = 'en',
}: I18nProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      t: translations[locale] || translations.en,
    }),
    [locale]
  )

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}

export function useI18n(): Translations {
  const context = useContext(I18nContext)

  // If not wrapped in provider, return English as fallback
  if (!context) {
    return translations.en
  }

  return context.t
}

export function useLocale(): Locale {
  const context = useContext(I18nContext)
  return context?.locale || 'en'
}
