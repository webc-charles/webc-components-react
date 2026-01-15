import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileDropdownLinkTypes } from '../Header.types'
import styles from './HeaderMobileDropdownLink.module.scss'

export function HeaderMobileDropdownLink({
  asChild,
  children,
  className,
  ...props
}: HeaderMobileDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.subLink, className)} {...props}>
      {children}
    </Comp>
  )
}
