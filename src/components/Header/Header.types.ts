import type { ComponentPropsWithRef, ReactNode } from 'react'

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  sticky?: boolean
  baseId?: string
}

export type HeaderTopBarTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderTopBarItemTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  dropdown?: ReactNode
}

export type HeaderMainTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMainNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMainDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  mega?: boolean
  current?: boolean
}

export type HeaderMobileToggleTypes = Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> & {
  label?: string
}

export type HeaderMobileMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
}

export type HeaderTopBarLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
}

export type HeaderTopBarItemLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
}

export type HeaderMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  active?: boolean
}

export type HeaderMainDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  active?: boolean
}

export type HeaderMobileLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
}

export type HeaderMobileDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
}
