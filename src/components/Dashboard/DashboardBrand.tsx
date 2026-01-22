import clsx from 'clsx'
import type { DashboardBrandTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardBrand({
  ref,
  children,
  className,
  ...rest
}: DashboardBrandTypes) {
  return (
    <div ref={ref} className={clsx(styles.brand, className)} {...rest}>
      {children}
    </div>
  )
}
