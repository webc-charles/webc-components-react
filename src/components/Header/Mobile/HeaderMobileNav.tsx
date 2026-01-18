import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import type { HeaderMobileNavTypes } from '../Header.types'
import styles from './HeaderMobileNav.module.scss'

export function HeaderMobileNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileNavTypes) {
  const t = useI18n()

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || t.mobile_navigation}
      className={clsx(styles.headerMobileNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
