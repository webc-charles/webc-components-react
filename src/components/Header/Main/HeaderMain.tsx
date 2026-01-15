import clsx from 'clsx'
import type { HeaderMainTypes } from '../Header.types'
import { useHeader } from '../HeaderContext'
import styles from './HeaderMain.module.scss'

export function HeaderMain({
  ref,
  children,
  className,
  ...rest
}: HeaderMainTypes) {
  const { isOpen } = useHeader()

  return (
    <div ref={ref} className={clsx(styles.main, className)} {...rest}>
      <div className={clsx(styles.container, isOpen && styles.menuOpen)}>
        {children}
      </div>
    </div>
  )
}
