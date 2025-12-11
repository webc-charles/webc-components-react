import { ButtonHTMLAttributes, ReactNode, Ref } from 'react'

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: Ref<HTMLButtonElement>
  children?: ReactNode
  raw?: boolean
  variant?: 'default' | 'accent' | 'danger'
}
