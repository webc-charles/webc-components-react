import clsx from 'clsx'
import type { HeaderMobileBarTypes } from '../Header.types'
import styles from './HeaderMobileBar.module.scss'

export function HeaderMobileBar({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileBarTypes) {
  return (
    <div ref={ref} className={clsx(styles.bar, className)} {...rest}>
      {children}
    </div>
  )
}
