import { ComponentPropsWithRef, ReactNode } from 'react'

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
  /** Alt text is required for accessibility. Use alt="" for decorative images. */
  alt: string
  /** Object-fit behavior for the image */
  fit?: ImageFit
  /** Object-position for the image */
  position?: ImagePosition
  /** Aspect ratio (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string
  /** Border radius preset */
  radius?: ImageRadius
  /** Caption text displayed below the image (wraps in figure/figcaption) */
  caption?: ReactNode
}
