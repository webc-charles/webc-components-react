import { HTMLAttributes, ReactNode, Ref } from 'react'

export type AlertVariantTypes =
  | 'accent'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'default'

export type AlertTypes = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  ref?: Ref<HTMLDivElement>
  title?: ReactNode
  children?: ReactNode
  variant?: AlertVariantTypes
}
