import { ComponentPropsWithRef, ElementType } from 'react'
import { ColorVariant } from '../../types'

export type LinkAppearance = 'default' | 'underline' | 'outline' | 'button'

export type LinkTypes<T extends ElementType = 'a'> = {
  as?: T
  disabled?: boolean
  variant?: ColorVariant
  appearance?: LinkAppearance
  contrast?: boolean
} & Omit<ComponentPropsWithRef<T>, 'as'>
