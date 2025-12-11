import { ReactNode, Ref } from 'react'

export type LinkTypes = {
  ref?: Ref<HTMLAnchorElement>
  id?: string
  title?: string
  href?: string
  className?: string
  children?: ReactNode
  variant?: 'accent' | 'danger'
  disabled?: boolean
  'data-testid'?: string
  fill?: boolean
}
