import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export type AvatarTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> & {
  /** Image URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Name used to generate initials fallback */
  name?: string
  /** Size of the avatar */
  size?: AvatarSize
  /** Background color variant for fallback */
  variant?: ColorVariant
}
