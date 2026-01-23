import clsx from 'clsx'
import type { HeaderMobileTopTypes } from '../Header.types'
import styles from './HeaderMobileTop.module.scss'

export function HeaderMobileTop({
  ref,
  className,
  children,
  ...rest
}: HeaderMobileTopTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.headerMobileTop, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
