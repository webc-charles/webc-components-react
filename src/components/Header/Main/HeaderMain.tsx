import clsx from 'clsx'
import type { HeaderMainTypes } from '../Header.types'
import styles from './HeaderMain.module.scss'

export function HeaderMain({
  ref,
  children,
  className,
  containerClassName,
  ...rest
}: HeaderMainTypes) {
  return (
    <div ref={ref} className={clsx(styles.main, className)} {...rest}>
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
