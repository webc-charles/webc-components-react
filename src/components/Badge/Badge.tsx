import clsx from 'clsx'
import styles from './Badge.module.scss'
import { BadgeTypes } from './types'

export function Badge({
  ref,
  variant = 'default',
  className = '',
  children,
  ...rest
}: BadgeTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.badge, styles[variant], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
