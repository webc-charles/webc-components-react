import clsx from 'clsx'
import { str } from 'i18n'
import type { HeaderMainNavTypes } from '../Header.types'
import styles from './HeaderMainNav.module.scss'

export function HeaderMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMainNavTypes) {
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
