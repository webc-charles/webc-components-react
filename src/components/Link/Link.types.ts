import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type AnchorAppearanceTypes =
  | 'default'
  | 'underline'
  | 'outline'
  | 'arrow'
  | 'button'

export type LinkTypes = ComponentPropsWithRef<'a'> & {
  disabled?: boolean
  variant?: ColorVariant
  appearance?: AnchorAppearanceTypes
  contrast?: boolean
}
