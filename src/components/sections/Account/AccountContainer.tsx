import clsx from 'clsx'
import type { AccountContainerTypes } from './Account.types'
import styles from './Account.module.scss'

export function AccountContainer({
  ref,
  children,
  className,
  ...rest
}: AccountContainerTypes) {
  return (
    <div ref={ref} className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  )
}
