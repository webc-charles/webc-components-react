import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderTopBarLinkTypes } from './Header.types'
import styles from './HeaderTopBarLink.module.scss'

export function HeaderTopBarLink({
  asChild,
  children,
  className,
  ...props
}: HeaderTopBarLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.topBarLink, className)} {...props}>
      {children}
    </Comp>
  )
}
