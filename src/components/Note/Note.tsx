import clsx from 'clsx'
import styles from './Note.module.scss'
import { NoteHeaderTypes, NoteTypes } from './Note.types'

export function NoteHeader({
  className,
  children,
  variant = 'default',
  ...rest
}: NoteHeaderTypes) {
  return (
    <div
      className={clsx(
        styles.noteHeader,
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export function Note({
  variant = 'default',
  className,
  children,
  ...rest
}: NoteTypes) {
  if (!children) return null

  return (
    <div
      className={clsx(styles.note, styles[`variant-${variant}`], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
