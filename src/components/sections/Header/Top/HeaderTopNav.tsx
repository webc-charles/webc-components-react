import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderTopNavTypes } from '../Header.types'
import styles from './HeaderTopNav.module.scss'

export function HeaderTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderTopNavTypes) {
  const label = useHeaderNavLabel('top', ariaLabel)

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
