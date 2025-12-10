import clsx from 'clsx'
import styles from './Badge.module.scss'
import { BadgeTypes } from './types'

export function Badge({
  variant = 'default',
  className = '',
  children,
}: BadgeTypes) {
  return (
    <div className={clsx(styles.badge, styles[variant], className)}>
      {children}
    </div>
  )
}
