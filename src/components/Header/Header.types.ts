import { ComponentPropsWithRef, ReactNode } from 'react'

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  sticky?: boolean
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

export type HeaderNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderNavItemTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  dropdown?: ReactNode
  mega?: boolean
  active?: boolean
}

export type HeaderActionsTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileToggleTypes = Omit<ComponentPropsWithRef<'button'>, 'children'> & {
  label?: string
}

export type HeaderMobileMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileNavItemTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
}
