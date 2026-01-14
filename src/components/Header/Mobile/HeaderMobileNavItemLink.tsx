import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileSubLinkTypes } from '../Header.types'
import styles from './HeaderMobileNavItemLink.module.scss'

export function HeaderMobileNavItemLink({
  asChild,
  children,
  className,
  ...props
}: HeaderMobileSubLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.subLink, className)} {...props}>
      {children}
    </Comp>
  )
}
