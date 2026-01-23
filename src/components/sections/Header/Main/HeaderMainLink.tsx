import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMainLinkTypes } from '../Header.types'
import styles from './HeaderMainLink.module.scss'

export function HeaderMainLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMainLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(styles.mainLink, current && styles.current, className)}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
