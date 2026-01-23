import clsx from 'clsx'
import { Title } from 'base/Title'
import type { DashboardNavTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardNav({
  ref,
  children,
  className,
  title,
  ...rest
}: DashboardNavTypes) {
  return (
    <nav ref={ref} className={clsx(styles.nav, className)} {...rest}>
      {title && (
        <Title level="h3" className={styles.navTitle}>
          {title}
        </Title>
      )}
      {children}
    </nav>
  )
}
