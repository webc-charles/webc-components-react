import clsx from 'clsx'
import styles from './Note.module.scss'
import type { NoteTypes } from './Note.types'

export function Note({
  ref,
  variant = 'default',
  className,
  children,
  ...rest
}: NoteTypes) {
  if (!children) return null

  return (
    <div
      ref={ref}
      role="note"
      className={clsx(
        styles.note,
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
