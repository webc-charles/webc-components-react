import type { ComponentPropsWithRef, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './AuthSocial.module.scss'

export type AuthSocialGroupProps = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export function AuthSocialGroup({
  ref,
  children,
  className,
  ...rest
}: AuthSocialGroupProps) {
  return (
    <div ref={ref} className={clsx(styles.group, className)} {...rest}>
      {children}
    </div>
  )
}
