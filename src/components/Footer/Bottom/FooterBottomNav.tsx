import clsx from 'clsx'
import type { FooterBottomNavTypes } from '../Footer.types'
import styles from './FooterBottomNav.module.scss'

export function FooterBottomNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel = 'Legal navigation',
  ...rest
}: FooterBottomNavTypes) {
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
