import clsx from 'clsx'
import type { HeaderTopTypes } from '../Header.types'
import styles from './HeaderTop.module.scss'

export function HeaderTop({
  ref,
  children,
  className,
  ...rest
}: HeaderTopTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
