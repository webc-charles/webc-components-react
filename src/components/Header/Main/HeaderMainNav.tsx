import clsx from 'clsx'
import { useI18n } from 'i18n'
import type { HeaderMainNavTypes } from '../Header.types'
import styles from './HeaderMainNav.module.scss'

export function HeaderMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMainNavTypes) {
  const t = useI18n()

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || t.main_navigation}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
