import { ComponentProps } from 'react'

export type AnchorVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
  | 'contrast'

export type AnchorAppearanceTypes =
  | 'default'
  | 'underline'
  | 'outline'
  | 'arrow'
  | 'button'

export type LinkTypes = ComponentProps<'a'> & {
  disabled?: boolean
  variant?: AnchorVariantTypes
  appearance?: AnchorAppearanceTypes
}
