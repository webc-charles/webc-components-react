import { ComponentPropsWithRef } from 'react'

export type BadgeVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'success'
  | 'danger'

export type BadgeTypes = ComponentPropsWithRef<'div'> & {
  variant?: BadgeVariantTypes
}
