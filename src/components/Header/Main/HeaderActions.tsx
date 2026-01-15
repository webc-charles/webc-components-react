import clsx from 'clsx'

import type { HeaderActionsTypes } from '../Header.types'
import styles from './HeaderActions.module.scss'

export function HeaderActions({
  ref,
  children,
  className,
  ...rest
}: HeaderActionsTypes) {
  return (
    <div ref={ref} className={clsx(styles.actions, className)} {...rest}>
      {children}
    </div>
  )
}
