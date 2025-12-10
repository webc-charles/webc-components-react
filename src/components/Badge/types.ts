import { ReactNode } from 'react'

export type BadgeVariantTypes =
  | 'default'
  | 'accent'
  | 'warning'
  | 'info'
  | 'success'

export type BadgeTypes = {
  className?: string
  children: ReactNode
  variant?: BadgeVariantTypes
}
