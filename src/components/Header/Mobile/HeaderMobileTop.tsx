import clsx from 'clsx'
import type { HeaderMobileTopTypes } from '../Header.types'
import styles from './HeaderMobileTop.module.scss'

export function HeaderMobileTop({
  className,
  children,
}: HeaderMobileTopTypes) {
  return (
    <div className={clsx(styles.headerMobileTop, className)}>
      {children}
    </div>
  )
}
