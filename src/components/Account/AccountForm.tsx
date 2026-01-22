import clsx from 'clsx'
import type { AccountFormTypes } from './Account.types'
import styles from './Account.module.scss'

export function AccountForm({
  ref,
  children,
  className,
  ...rest
}: AccountFormTypes) {
  return (
    <form ref={ref} className={clsx(styles.form, className)} {...rest}>
      {children}
    </form>
  )
}
