import clsx from 'clsx'

import type { HeaderTopBarTypes } from '../Header.types'
import styles from './HeaderTopBar.module.scss'

export function HeaderTopBar({
  ref,
  children,
  className,
  ...rest
}: HeaderTopBarTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
