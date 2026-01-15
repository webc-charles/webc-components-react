import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMainDropdownLinkTypes } from '../Header.types'
import styles from './HeaderMainDropdownLink.module.scss'

export function HeaderMainDropdownLink({
  asChild,
  children,
  className,
  active,
  ...props
}: HeaderMainDropdownLinkTypes) {
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
