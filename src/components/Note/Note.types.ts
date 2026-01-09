import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type NoteTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}
