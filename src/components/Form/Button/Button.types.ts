import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../../types'

export type ButtonAppearance = 'default' | 'underline' | 'outline' | 'button'

export type ButtonTypes = ComponentPropsWithRef<'button'> & {
  variant?: ColorVariant
  appearance?: ButtonAppearance
  contrast?: boolean
  loading?: boolean
}
