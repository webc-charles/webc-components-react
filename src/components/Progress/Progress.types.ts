import type { ComponentPropsWithRef } from 'react'

import type { ColorVariant } from '../../types'

export type ProgressSize = 'sm' | 'md' | 'lg'

export type ProgressTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> & {
  /** Current value (0-100 or use with max) */
  value?: number
  /** Maximum value */
  max?: number
  /** Color variant */
  variant?: ColorVariant
  /** Size of the progress bar */
  size?: ProgressSize
  /** Show percentage label */
  showLabel?: boolean
  /** Indeterminate loading state */
  indeterminate?: boolean
  /** Accessible label */
  label?: string
}
