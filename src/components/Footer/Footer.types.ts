import type { ComponentPropsWithRef, ReactNode } from 'react'

export type FooterTypes = ComponentPropsWithRef<'footer'> & {
  children: ReactNode
}

export type FooterMainTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type FooterMainNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type FooterMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type FooterBottomTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type FooterBottomNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type FooterBottomLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}
