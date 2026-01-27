import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderTopLinkTypes } from '../Header.types'
import styles from './HeaderTopLink.module.scss'

export function HeaderTopLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderTopLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.topLink,
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
