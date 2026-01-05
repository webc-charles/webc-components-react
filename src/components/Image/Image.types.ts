import { ComponentPropsWithRef } from 'react'

export type ImageTypes = Omit<ComponentPropsWithRef<'img'>, 'alt'> & {
  /** Alt text is required for accessibility. Use alt="" for decorative images. */
  alt: string
}
