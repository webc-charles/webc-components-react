import { ReactNode } from 'react'

export type NoteTypes = {
  title?: ReactNode
  children?: ReactNode
  variant?: 'default' | 'danger' | 'success' | 'warning'
}
