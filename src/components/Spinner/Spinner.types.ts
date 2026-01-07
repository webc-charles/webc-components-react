import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerTypes = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
  variant?: ColorVariant
  size?: SpinnerSize
  label?: string
  /** When true, removes role="status" for use inside elements with aria-busy */
  inline?: boolean
  /** When true, uses light colors for dark backgrounds */
  contrast?: boolean
}
