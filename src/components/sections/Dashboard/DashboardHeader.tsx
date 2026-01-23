import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardHeaderTypes } from './Dashboard.types'

export function DashboardHeader({
  ref,
  children,
  className,
  title,
  avatar,
  ...rest
}: DashboardHeaderTypes) {
  return (
    <div ref={ref} className={clsx(styles.header, className)} {...rest}>
      <div className={styles.headerText}>
        <Title className={styles.headerTitle}>{title}</Title>
        {children}
      </div>
      {avatar}
    </div>
  )
}
