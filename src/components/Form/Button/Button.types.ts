import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../../types'

export type ButtonAppearanceTypes =
  | 'default'
  | 'underline'
  | 'outline'
  | 'button'

export type ButtonTypes = ComponentPropsWithRef<'button'> & {
  variant?: ColorVariant
  appearance?: ButtonAppearanceTypes
  contrast?: boolean
  loading?: boolean
}
