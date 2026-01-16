import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMainDropdownLinkTypes } from '../Header.types'
import styles from './HeaderMainDropdownLink.module.scss'

export function HeaderMainDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMainDropdownLinkTypes) {
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
