import { ComponentPropsWithRef } from 'react'

export type IframeTypes = Omit<ComponentPropsWithRef<'iframe'>, 'title'> & {
  /** Source URL */
  src: string
  /** Title is required for accessibility */
  title: string
  /** Aspect ratio (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string
  /** Allow fullscreen */
  allowFullScreen?: boolean
}
