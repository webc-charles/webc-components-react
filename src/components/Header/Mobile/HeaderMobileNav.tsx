import clsx from 'clsx'
import type { HeaderMobileNavTypes } from '../Header.types'
import styles from './HeaderMobileNav.module.scss'

export function HeaderMobileNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileNavTypes) {
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
