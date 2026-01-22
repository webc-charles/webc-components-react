import clsx from 'clsx'
import type { DashboardSidebarTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardSidebar({
  ref,
  children,
  className,
  ...rest
}: DashboardSidebarTypes) {
  return (
    <aside ref={ref} className={clsx(styles.sidebar, className)} {...rest}>
      {children}
    </aside>
  )
}
