import clsx from 'clsx'
import type { FooterMainMenuTypes } from '../Footer.types'
import styles from './FooterMainMenu.module.scss'

export function FooterMainMenu({
  ref,
  children,
  className,
  ...rest
}: FooterMainMenuTypes) {
  return (
    <div ref={ref} className={clsx(styles.menu, className)} {...rest}>
      {children}
    </div>
  )
}
