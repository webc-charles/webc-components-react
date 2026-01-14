import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderTopBarLinkTypes, HeaderTopBarTypes } from './Header.types'
import styles from './HeaderTopBar.module.scss'

function HeaderTopBarLink({
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

function HeaderTopBarComponent({
  ref,
  children,
  className,
  ...rest
}: HeaderTopBarTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export const HeaderTopBar = Object.assign(HeaderTopBarComponent, {
  Link: HeaderTopBarLink,
})
