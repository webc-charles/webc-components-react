import clsx from 'clsx'
import styles from './Alert.module.scss'
import { AlertTypes } from './types'

export function Alert({ title, variant = 'info', children }: AlertTypes) {
  return (
    <div className={clsx(styles.alert, styles[variant])}>
      {title && <div className={styles.alertHeader}>{title}</div>}

      {children && <div className={styles.alertBody}>{children}</div>}
    </div>
  )
}
