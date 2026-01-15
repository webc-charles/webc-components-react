import clsx from 'clsx'
import type { HeaderMainLogoTypes } from '../Header.types'
import styles from './HeaderMainLogo.module.scss'

export function HeaderMainLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMainLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
