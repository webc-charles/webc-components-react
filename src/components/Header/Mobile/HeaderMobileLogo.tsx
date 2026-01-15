import clsx from 'clsx'
import type { HeaderMobileLogoTypes } from '../Header.types'
import styles from './HeaderMobileLogo.module.scss'

export function HeaderMobileLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
