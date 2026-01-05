import { ComponentPropsWithRef } from 'react'

export type NoteVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type NoteHeaderTypes = ComponentPropsWithRef<'div'> & {
  variant?: NoteVariantTypes
}

export type NoteTypes = ComponentPropsWithRef<'aside'> & {
  variant?: NoteVariantTypes
}
