import type { ComponentPropsWithRef } from 'react'

import type { ColorVariant } from '../../../types'

export type ButtonAppearance = 'default' | 'underline' | 'outline' | 'button'

export type ButtonTypes = ComponentPropsWithRef<'button'> & {
  variant?: ColorVariant
  appearance?: ButtonAppearance
  contrast?: boolean
  loading?: boolean
}
