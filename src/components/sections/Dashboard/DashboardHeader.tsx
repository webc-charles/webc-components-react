import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardHeaderTypes, DashboardTitleTypes } from './Dashboard.types'

export function DashboardHeader({
  ref,
  children,
  className,
  ...rest
}: DashboardHeaderTypes) {
  return (
    <div ref={ref} className={clsx(styles.header, className)} {...rest}>
      {children}
    </div>
  )
}

export function DashboardTitle({
  ref,
  children,
  className,
  ...rest
}: DashboardTitleTypes) {
  return (
    <Title ref={ref} className={clsx(styles.headerTitle, className)} {...rest}>
      {children}
    </Title>
  )
}
