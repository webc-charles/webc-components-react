import { ComponentProps } from 'react'

export type BadgeVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'success'
  | 'danger'

export type BadgeTypes = ComponentProps<'div'> & {
  variant?: BadgeVariantTypes
}
