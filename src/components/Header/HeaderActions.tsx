import clsx from 'clsx'
import styles from './HeaderActions.module.scss'
import type { HeaderActionsTypes } from './Header.types'

export function HeaderActions({ ref, children, className, ...rest }: HeaderActionsTypes) {
  return (
    <div ref={ref} className={clsx(styles.actions, className)} {...rest}>
      {children}
    </div>
  )
}
