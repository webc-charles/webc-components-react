import clsx from 'clsx'
import { Slot } from 'utils'

import type { HeaderMobileLinkTypes } from '../Header.types'
import styles from './HeaderMobileMenuLink.module.scss'

export function HeaderMobileMenuLink({
  asChild,
  children,
  className,
  ...props
}: HeaderMobileLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.mobileLink, className)} {...props}>
      {children}
    </Comp>
  )
}
