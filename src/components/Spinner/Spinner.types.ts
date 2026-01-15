import type { ComponentPropsWithRef } from 'react'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerTypes = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
  size?: SpinnerSize
  label?: string
  /** When true, removes role="status" for use inside elements with aria-busy */
  inline?: boolean
}
