import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderTopDropdownLinkTypes } from '../Header.types'
import styles from './HeaderTopDropdownLink.module.scss'

export function HeaderTopDropdownLink({
  asChild,
  children,
  className,
  ...props
}: HeaderTopDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.dropdownLink, className)} {...props}>
      {children}
    </Comp>
  )
}
