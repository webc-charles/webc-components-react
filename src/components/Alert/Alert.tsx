import clsx from 'clsx'
import styles from './Alert.module.scss'
import { AlertTypes } from './types'

export function Alert({
  ref,
  title,
  children,
  variant = 'info',
  ...rest
}: AlertTypes) {
  return (
    <div
      ref={ref}
      role="alert"
      className={clsx(styles.alert, styles[variant])}
      {...rest}
    >
      {title && <div className={styles.alertHeader}>{title}</div>}

      {children && <div className={styles.alertBody}>{children}</div>}
    </div>
  )
}
