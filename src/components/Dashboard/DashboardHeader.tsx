import clsx from 'clsx'
import { Title } from '../Title'
import type { DashboardHeaderTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

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
