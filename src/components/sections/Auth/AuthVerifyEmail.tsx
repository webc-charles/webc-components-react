import clsx from 'clsx'
import { Slot } from 'utils'
import { Card, CardBody, CardFooter } from 'modules/Card'
import { Divider } from 'base/Divider'
import { Title } from 'base/Title'
import type { AuthVerifyEmailTypes } from './Auth.types'
import styles from './AuthVerifyEmail.module.scss'

export type AuthVerifyEmailLinkProps = {
  asChild?: boolean
  children: React.ReactNode
  className?: string
  href?: string
}

export function AuthVerifyEmailLink({
  asChild,
  children,
  className,
  ...rest
}: AuthVerifyEmailLinkProps) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.link, className)} {...rest}>
      {children}
    </Comp>
  )
}

export function AuthVerifyEmail({
  ref,
  children,
  className,
  title,
  message,
  status = 'loading',
  footer,
  ...rest
}: AuthVerifyEmailTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} data-status={status} {...rest}>
      <CardBody className={styles.cardBody}>
        <div className={styles.icon} data-status={status}>
          {children}
        </div>
        <Title className={styles.title} level="h2">
          {title}
        </Title>
        <p className={styles.message}>{message}</p>
      </CardBody>

      {footer && (
        <>
          <Divider className={styles.divider} />
          <CardFooter className={styles.cardFooter}>{footer}</CardFooter>
        </>
      )}
    </Card>
  )
}
