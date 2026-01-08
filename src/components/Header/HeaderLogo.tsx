import clsx from 'clsx'
import styles from './HeaderLogo.module.scss'
import type { HeaderLogoTypes } from './Header.types'

export function HeaderLogo({ ref, children, className, ...rest }: HeaderLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
