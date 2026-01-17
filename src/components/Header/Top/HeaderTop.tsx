import clsx from 'clsx'
import type { HeaderTopTypes } from '../Header.types'
import styles from './HeaderTop.module.scss'

export function HeaderTop({
  ref,
  children,
  className,
  containerClassName,
  ...rest
}: HeaderTopTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={clsx(styles.container, containerClassName)}>{children}</div>
    </div>
  )
}
