import clsx from 'clsx'
import type { HeaderTopNavTypes } from '../Header.types'
import styles from './HeaderTopNav.module.scss'

export function HeaderTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderTopNavTypes) {
  return (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
