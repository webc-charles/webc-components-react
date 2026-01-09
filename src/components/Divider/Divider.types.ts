import { ComponentPropsWithRef } from 'react'

export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg'

export type DividerTypes = ComponentPropsWithRef<'hr'> & {
  /** Line style */
  variant?: DividerVariant
  /** Vertical spacing */
  spacing?: DividerSpacing
}
