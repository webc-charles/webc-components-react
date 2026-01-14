import { ComponentPropsWithRef, ElementType } from 'react'
import { ColorVariant } from '../../types'

export type LinkAppearance = 'default' | 'underline' | 'outline' | 'button'

export type LinkTypes = ComponentPropsWithRef<'a'> & {
  as?: ElementType
  disabled?: boolean
  variant?: ColorVariant
  appearance?: LinkAppearance
  contrast?: boolean
}
