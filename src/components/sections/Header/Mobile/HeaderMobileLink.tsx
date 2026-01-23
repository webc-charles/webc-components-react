import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileLinkTypes } from '../Header.types'
import styles from './HeaderMobileLink.module.scss'

export function HeaderMobileLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mobileLink,
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
