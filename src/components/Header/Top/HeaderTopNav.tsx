import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import type { HeaderTopNavTypes } from '../Header.types'
import styles from './HeaderTopNav.module.scss'

export function HeaderTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderTopNavTypes) {
  const t = useI18n()

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || t.top_navigation}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
