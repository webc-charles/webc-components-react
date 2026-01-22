import clsx from 'clsx'
import { Slot } from 'utils'
import type { LogoTypes } from './Logo.types'
import styles from './Logo.module.scss'

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
  ...rest
}: React.ComponentPropsWithRef<'img'>) {
  return <img className={clsx(styles.image, className)} {...rest} />
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
