import clsx from 'clsx'
import { Title } from 'components'
import styles from './Note.module.scss'
import { NoteTypes } from './types'

export function Note({ title, variant = 'default', children }: NoteTypes) {
  if (!children) return null

  return (
    <div className={clsx(styles.note, styles[variant])}>
      {title && (
        <Title level="3" className={clsx(styles.title)}>
          {title}
        </Title>
      )}

      {children}
    </div>
  )
}
