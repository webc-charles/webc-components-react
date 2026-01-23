import clsx from 'clsx'
import type { DashboardLayoutTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardLayout({
  ref,
  children,
  className,
  ...rest
}: DashboardLayoutTypes) {
  return (
    <div ref={ref} className={clsx(styles.layout, className)} {...rest}>
      {children}
    </div>
  )
}
