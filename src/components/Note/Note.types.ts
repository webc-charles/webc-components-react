import { ComponentProps } from 'react'

export type NoteVariantTypes =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type NoteHeaderTypes = ComponentProps<'div'> & {
  variant?: NoteVariantTypes
}

export type NoteTypes = ComponentProps<'div'> & {
  variant?: NoteVariantTypes
}
