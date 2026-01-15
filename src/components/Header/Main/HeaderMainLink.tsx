import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMainLinkTypes } from '../Header.types'
import styles from './HeaderMainLink.module.scss'

export function HeaderMainLink({
  asChild,
  children,
  className,
  active,
  ...props
}: HeaderMainLinkTypes) {
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
