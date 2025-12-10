import { ReactNode } from 'react'

export type ToastVariantTypes =
  | 'accent'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type ToastConfigTypes = {
  id?: number
  title?: ReactNode
  variant?: ToastVariantTypes
  duration?: number
  children: ReactNode
  closeLabel?: string
}

export type ToastTypes = ToastConfigTypes & {
  onRemove: (id: number) => void
}
