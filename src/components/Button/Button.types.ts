import { ComponentPropsWithRef } from 'react'

export type ButtonVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'

export type ButtonAppearanceTypes =
  | 'default'
  | 'underline'
  | 'outline'
  | 'button'

export type ButtonTypes = ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariantTypes
  appearance?: ButtonAppearanceTypes
}
