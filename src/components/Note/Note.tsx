import clsx from 'clsx'
import styles from './Note.module.scss'
import { NoteTypes } from './Note.types'

export function Note({
  ref,
  variant = 'default',
  contrast,
  className,
  children,
  ...rest
}: NoteTypes) {
  if (!children) return null

  return (
    <aside
      ref={ref}
      role="note"
      className={clsx(
        styles.note,
        styles[`variant-${variant}`],
        contrast && styles.contrast,
        className
      )}
      {...rest}
    >
      {children}
    </aside>
  )
}
