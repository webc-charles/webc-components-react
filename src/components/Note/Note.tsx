import clsx from 'clsx'
import styles from './Note.module.scss'
import { NoteHeaderTypes, NoteTypes } from './Note.types'

export function NoteHeader({
  ref,
  className,
  children,
  variant = 'default',
  ...rest
}: NoteHeaderTypes) {
  return (
    <div
      ref={ref}
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
  ref,
  variant = 'default',
  className,
  children,
  ...rest
}: NoteTypes) {
  if (!children) return null

  return (
    <aside
      ref={ref}
      role="note"
      className={clsx(styles.note, styles[`variant-${variant}`], className)}
      {...rest}
    >
      {children}
    </aside>
  )
}
