import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type ToastHeaderTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}

export type ToastBodyTypes = ComponentPropsWithRef<'div'>

export type ToastConfigTypes = {
  id?: number
  variant?: ColorVariant
  contrast?: boolean
  duration?: number
  children: React.ReactNode
  closeLabel?: string
}

export type ToastTypes = ToastConfigTypes & {
  onRemove: (id: number) => void
}
