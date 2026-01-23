import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './Logo.module.scss'
import type { LogoTypes } from './Logo.types'

export function Logo({
  ref,
  children,
  className,
  asChild,
  ...rest
}: LogoTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </Comp>
  )
}

export function LogoImage({
  className,
  alt = '',
  ...rest
}: React.ComponentPropsWithRef<'img'>) {
  return (
    <img alt={alt} className={clsx(styles.image, className)} {...rest} />
  )
}

export function LogoFallback({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div className={clsx(styles.fallback, className)} {...rest}>
      {children}
    </div>
  )
}
