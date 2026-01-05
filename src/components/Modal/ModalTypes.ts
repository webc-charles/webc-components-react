import { ReactNode } from 'react'

export type ModalSizeTypes = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type ModalConfigTypes = {
  id?: number
  title?: ReactNode
  children: ReactNode
  size?: ModalSizeTypes
  closeOnBackdrop?: boolean
  duration?: number
  closeLabel?: string
  hideCloseButton?: boolean
}

export type ModalTypes = ModalConfigTypes & {
  onRemove: (id: number) => void
}
