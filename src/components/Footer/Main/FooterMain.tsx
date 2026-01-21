import clsx from 'clsx'
import type { FooterMainTypes } from '../Footer.types'
import styles from './FooterMain.module.scss'

export function FooterMain({
  ref,
  children,
  className,
  ...rest
}: FooterMainTypes) {
  return (
    <div ref={ref} className={clsx(styles.main, className)} {...rest}>
      {children}
    </div>
  )
}
