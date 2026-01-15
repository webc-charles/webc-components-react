import clsx from 'clsx'

import type { HeaderLogoTypes } from '../Header.types'
import styles from './HeaderLogo.module.scss'

export function HeaderLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
