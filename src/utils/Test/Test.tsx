import type { ReactElement, ReactNode } from 'react'
import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/react'
import { I18nProvider, type Locale } from 'utils/i18n'

interface WrapperProps {
  children: ReactNode
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: Locale
}

function createWrapper(locale: Locale) {
  return function Wrapper({ children }: WrapperProps): ReactElement {
    return <I18nProvider locale={locale}>{children}</I18nProvider>
  }
}

function customRender(
  ui: ReactElement,
  { locale = 'en', ...options }: CustomRenderOptions = {}
): RenderResult {
  return render(ui, {
    wrapper: createWrapper(locale),
    ...options,
  })
}

// Re-export everything from testing-library
export * from '@testing-library/react'

// Override render with our custom version
export { customRender as render }
