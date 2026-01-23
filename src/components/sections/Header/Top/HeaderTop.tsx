import clsx from 'clsx'
import type { HeaderTopTypes } from '../Header.types'
import styles from './HeaderTop.module.scss'

export function HeaderTop({
  ref,
  children,
  className,
  containerClassName,
  justify = 'end',
  ...rest
}: HeaderTopTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div
        className={clsx(
          styles.container,
          justify === 'between' && styles.between,
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
