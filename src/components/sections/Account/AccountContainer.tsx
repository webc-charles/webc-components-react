import clsx from 'clsx'
import styles from './Account.module.scss'
import type { AccountContainerTypes } from './Account.types'

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
