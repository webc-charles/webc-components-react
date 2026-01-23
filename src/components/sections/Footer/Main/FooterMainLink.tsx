import clsx from 'clsx'
import { Slot } from 'utils'
import type { FooterMainLinkTypes } from '../Footer.types'
import styles from './FooterMainLink.module.scss'

export function FooterMainLink({
  asChild,
  children,
  className,
  current,
  ...props
}: FooterMainLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      className={clsx(styles.link, current && styles.current, className)}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
