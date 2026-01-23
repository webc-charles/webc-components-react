import clsx from 'clsx'
import { Slot } from 'utils'
import { Card, CardBody, CardFooter } from 'modules/Card'
import { Divider } from 'base/Divider'
import { Title } from 'base/Title'
import type { AuthEmailSentTypes } from './Auth.types'
import styles from './AuthEmailSent.module.scss'

export type AuthEmailSentLinkProps = {
  asChild?: boolean
  children: React.ReactNode
  className?: string
  href?: string
}

export function AuthEmailSentLink({
  asChild,
  children,
  className,
  ...rest
}: AuthEmailSentLinkProps) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.link, className)} {...rest}>
      {children}
    </Comp>
  )
}

export function AuthEmailSent({
  ref,
  children,
  className,
  title,
  message,
  footer,
  ...rest
}: AuthEmailSentTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} {...rest}>
      <CardBody className={styles.cardBody}>
        <div className={styles.icon}>{children}</div>
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
