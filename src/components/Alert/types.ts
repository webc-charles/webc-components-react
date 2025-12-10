import { ReactNode } from 'react'

export type AlertVariantTypes =
  | 'accent'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'default'

export type AlertTypes = {
  title?: ReactNode
  children?: ReactNode
  variant?: AlertVariantTypes
}
