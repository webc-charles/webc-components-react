import clsx from 'clsx'
import styles from './Badge.module.scss'
import { BadgeTypes } from './Badge.types'

export function Badge({
  ref,
  children,
  className,
  variant = 'default',
  contrast,
  ...rest
}: BadgeTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.badge,
        styles[`variant-${variant}`],
        contrast && styles.contrast,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
