import clsx from 'clsx'
import type { FooterBottomTypes } from '../Footer.types'
import styles from './FooterBottom.module.scss'

export function FooterBottom({
  ref,
  children,
  className,
  ...rest
}: FooterBottomTypes) {
  return (
    <div ref={ref} className={clsx(styles.bottom, className)} {...rest}>
      {children}
    </div>
  )
}
