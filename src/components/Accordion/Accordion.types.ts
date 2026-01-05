import { ComponentPropsWithRef } from 'react'

export type AccordionType = 'single' | 'multiple'

export type AccordionContextValue = {
  type: AccordionType
  expandedItems: string[]
  toggleItem: (value: string) => void
  accordionId: string
}

export type AccordionTypes = ComponentPropsWithRef<'div'> & {
  type?: AccordionType
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
}

export type AccordionItemContextValue = {
  value: string
  isExpanded: boolean
  triggerId: string
  contentId: string
}

export type AccordionItemTypes = ComponentPropsWithRef<'div'> & {
  value: string
  disabled?: boolean
}

export type AccordionTriggerTypes = ComponentPropsWithRef<'button'>

export type AccordionContentTypes = ComponentPropsWithRef<'div'>
