import clsx from 'clsx'
import { str } from 'i18n'
import styles from './HeaderNav.module.scss'
import type { HeaderNavTypes } from './Header.types'

export function HeaderNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderNavTypes) {
  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || str.main_navigation}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
