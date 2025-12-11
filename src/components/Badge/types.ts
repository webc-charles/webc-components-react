import { HTMLAttributes, ReactNode, Ref } from 'react'

export type BadgeVariantTypes =
  | 'default'
  | 'accent'
  | 'warning'
  | 'info'
  | 'success'

export type BadgeTypes = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>
  children: ReactNode
  variant?: BadgeVariantTypes
}
