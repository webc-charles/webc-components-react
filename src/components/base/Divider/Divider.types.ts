import type { ComponentPropsWithRef, ReactNode } from 'react'

export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type DividerTypes = ComponentPropsWithRef<'hr'> & {
  /** Line style */
  variant?: DividerVariant
  /** Vertical spacing */
  spacing?: DividerSpacing
  /** Text to display in the middle of the divider */
  children?: ReactNode
}
