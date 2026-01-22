import clsx from 'clsx'
import { Slot } from 'utils'
import type { DashboardNavLinkTypes } from './Dashboard.types'
import styles from './Dashboard.module.scss'

export function DashboardNavLink({
  ref,
  children,
  className,
  asChild,
  current,
  ...rest
}: DashboardNavLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={clsx(styles.navLink, current && styles.current, className)}
      aria-current={current ? 'page' : undefined}
      {...rest}
    >
      {children}
    </Comp>
  )
}
