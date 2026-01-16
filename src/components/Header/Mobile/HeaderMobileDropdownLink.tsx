import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileDropdownLinkTypes } from '../Header.types'
import styles from './HeaderMobileDropdownLink.module.scss'

export function HeaderMobileDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.dropdownLink,
        current && styles.current,
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
