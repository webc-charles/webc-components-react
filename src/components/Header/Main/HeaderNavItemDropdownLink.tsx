import clsx from 'clsx'
import { Slot } from 'utils'

import type { HeaderNavDropdownLinkTypes } from '../Header.types'
import styles from './HeaderNavItemDropdownLink.module.scss'

export function HeaderNavItemDropdownLink({
  asChild,
  children,
  className,
  active,
  ...props
}: HeaderNavDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.dropdownLink,
        active && styles.dropdownLinkActive,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
