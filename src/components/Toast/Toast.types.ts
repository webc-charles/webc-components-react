import { ComponentPropsWithRef } from 'react'

export type ToastVariantTypes =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type ToastHeaderTypes = ComponentPropsWithRef<'div'> & {
  variant?: ToastVariantTypes
}

export type ToastBodyTypes = ComponentPropsWithRef<'div'>

export type ToastConfigTypes = {
  id?: number
  variant?: ToastVariantTypes
  duration?: number
  children: React.ReactNode
  closeLabel?: string
}

export type ToastTypes = ToastConfigTypes & {
  onRemove: (id: number) => void
}
