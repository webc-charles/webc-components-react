import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderMainNavTypes } from '../Header.types'
import styles from './HeaderMainNav.module.scss'

export function HeaderMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMainNavTypes) {
  const label = useHeaderNavLabel('main', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
