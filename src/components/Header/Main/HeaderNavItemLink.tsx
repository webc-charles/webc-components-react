import clsx from 'clsx'
import { Slot } from 'utils'

import type { HeaderNavLinkTypes } from '../Header.types'
import styles from './HeaderNavItemLink.module.scss'

export function HeaderNavItemLink({
  asChild,
  children,
  className,
  active,
  ...props
}: HeaderNavLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.navLink,
        active && styles.navLinkActive,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
