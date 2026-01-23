import clsx from 'clsx'
import type { AuthSectionTypes } from './Auth.types'
import styles from './AuthSection.module.scss'

export function AuthSection({
  ref,
  children,
  className,
  ...rest
}: AuthSectionTypes) {
  return (
    <section ref={ref} className={clsx(styles.section, className)} {...rest}>
      {children}
    </section>
  )
}
