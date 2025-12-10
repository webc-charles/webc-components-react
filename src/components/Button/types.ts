import { ReactNode } from 'react'

export type ButtonVariantTypes = 'basic' | 'accent' | 'danger'

export type ButtonTypes = {
  id?: string
  title?: string
  link?: string
  className?: string
  action?: () => void
  children?: ReactNode
  variant?: ButtonVariantTypes
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export type ButtonRef = HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
