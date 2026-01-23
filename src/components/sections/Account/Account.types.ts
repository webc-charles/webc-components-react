import type { ComponentPropsWithRef, ReactNode } from 'react'

export type AccountContainerTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AccountCardTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  title: string
  subtitle?: string
}

export type AccountFormTypes = ComponentPropsWithRef<'form'> & {
  children: ReactNode
}
