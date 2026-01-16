import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileLinkTypes } from '../Header.types'
import styles from './HeaderMobileLink.module.scss'

export function HeaderMobileLink({
  asChild,
  children,
  className,
  active,
  ...props
}: HeaderMobileLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mobileLink,
        active && styles.active,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
