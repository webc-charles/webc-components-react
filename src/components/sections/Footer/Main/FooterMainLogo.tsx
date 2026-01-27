import clsx from 'clsx'
import type { FooterMainLogoTypes } from '../Footer.types'
import styles from './FooterMainLogo.module.scss'

export function FooterMainLogo({
  ref,
  children,
  className,
  ...rest
}: FooterMainLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
