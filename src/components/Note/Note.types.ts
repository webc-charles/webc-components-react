import { ComponentPropsWithRef } from 'react'
import { ColorVariant } from '../../types'

export type NoteHeaderTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}

export type NoteTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
  contrast?: boolean
}
