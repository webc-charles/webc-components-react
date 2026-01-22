import clsx from 'clsx'
import type { DashboardMainTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardMain({
  ref,
  children,
  className,
  ...rest
}: DashboardMainTypes) {
  return (
    <main ref={ref} className={clsx(styles.main, className)} {...rest}>
      {children}
    </main>
  )
}
