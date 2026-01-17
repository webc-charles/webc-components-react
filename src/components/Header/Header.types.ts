import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  sticky?: boolean
  baseId?: string
}

export type HeaderTopTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderTopNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderTopDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  href?: string
  as?: ElementType
  current?: boolean
}

export type HeaderMainTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMainLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMainNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMainDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  href?: string
  as?: ElementType
  mega?: boolean
  current?: boolean
}

export type HeaderMobileTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileBarTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
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

export type HeaderTopLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type HeaderTopDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type HeaderMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type HeaderMainDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type HeaderMobileLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type HeaderMobileDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}
