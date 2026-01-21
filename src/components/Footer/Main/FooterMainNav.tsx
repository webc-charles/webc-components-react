import clsx from 'clsx'
import type { FooterMainNavTypes } from '../Footer.types'
import styles from './FooterMainNav.module.scss'

export function FooterMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel = 'Footer navigation',
  ...rest
}: FooterMainNavTypes) {
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
