import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type LinkAppearance = 'default' | 'underline' | 'outline' | 'button'

export type LinkTypes = ComponentPropsWithRef<'a'> & {
  disabled?: boolean
  variant?: ColorVariant
  appearance?: LinkAppearance
  contrast?: boolean
  asChild?: boolean
}
