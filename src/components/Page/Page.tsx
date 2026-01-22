import clsx from 'clsx'
import type { PageTypes } from './Page.types'
import styles from './Page.module.scss'

export function Page({
  ref,
  children,
  className,
  ...rest
}: PageTypes) {
  return (
    <div ref={ref} className={clsx(styles.page, className)} {...rest}>
      {children}
    </div>
  )
}
