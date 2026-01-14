import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

export type ImagePosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type ImageRadius = 'none' | 'small' | 'medium' | 'large' | 'full'

export type ImageTypes = Omit<ComponentPropsWithRef<'img'>, 'alt'> & {
  as?: ElementType
  alt: string
  fit?: ImageFit
  position?: ImagePosition
  aspectRatio?: string
  radius?: ImageRadius
  caption?: ReactNode
}
