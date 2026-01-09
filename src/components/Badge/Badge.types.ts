import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type BadgeTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}
