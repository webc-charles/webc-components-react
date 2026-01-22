import clsx from 'clsx'
import type { AuthFormTypes } from './Auth.types'
import styles from './AuthForm.module.scss'

export function AuthForm({
  ref,
  children,
  className,
  ...rest
}: AuthFormTypes) {
  return (
    <form ref={ref} className={clsx(styles.form, className)} {...rest}>
      {children}
    </form>
  )
}
