import { ComponentProps } from 'react'
import { ButtonTypes } from 'components'

export interface TabContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

export type TabTypes = ComponentProps<'div'> & {
  value?: string
  defaultValue: string
  onValueChange?: (value: string) => void
}

export type TabListTypes = ComponentProps<'div'>

export type TabButtonTypes = Omit<ButtonTypes, 'value'> & {
  value: string
}

export type TabPanelsTypes = ComponentProps<'div'>

export type TabPanelTypes = ComponentProps<'div'> & {
  value: string
}
