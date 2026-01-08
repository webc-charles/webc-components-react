import clsx from 'clsx'
import styles from './HeaderTopBar.module.scss'
import type { HeaderTopBarTypes } from './Header.types'

export const headerTopBarStyles = {
  topBarLink: styles.topBarLink,
}

export function HeaderTopBar({ ref, children, className, ...rest }: HeaderTopBarTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
