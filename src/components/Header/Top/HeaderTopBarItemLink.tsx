import clsx from 'clsx'
import { Slot } from 'utils'

import type { HeaderTopBarItemLinkTypes } from '../Header.types'
import styles from './HeaderTopBarItemLink.module.scss'

export function HeaderTopBarItemLink({
  asChild,
  children,
  className,
  ...props
}: HeaderTopBarItemLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.dropdownLink, className)} {...props}>
      {children}
    </Comp>
  )
}
