import clsx from 'clsx'
import type { HeaderMobileTypes } from '../Header.types'
import styles from './HeaderMobile.module.scss'

export function HeaderMobile({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileTypes) {
  return (
    <div ref={ref} className={clsx(styles.mobile, className)} {...rest}>
      {children}
    </div>
  )
}
