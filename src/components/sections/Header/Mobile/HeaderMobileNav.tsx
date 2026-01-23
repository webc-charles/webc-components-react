import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderMobileNavTypes } from '../Header.types'
import styles from './HeaderMobileNav.module.scss'

export function HeaderMobileNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileNavTypes) {
  const label = useHeaderNavLabel('mobile', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.headerMobileNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
