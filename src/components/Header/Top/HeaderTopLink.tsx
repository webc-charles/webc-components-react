import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderTopLinkTypes } from '../Header.types'
import styles from './HeaderTopLink.module.scss'

export function HeaderTopLink({
  asChild,
  children,
  className,
  ...props
}: HeaderTopLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.link, className)} {...props}>
      {children}
    </Comp>
  )
}
