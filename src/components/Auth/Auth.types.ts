import type { ComponentPropsWithRef, ReactNode } from 'react'

export type AuthSectionTypes = ComponentPropsWithRef<'section'> & {
  children: ReactNode
}

export type AuthCardTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  title: string
  subtitle?: string
  footer?: ReactNode
}

export type AuthFormTypes = ComponentPropsWithRef<'form'> & {
  children: ReactNode
}
