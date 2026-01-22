import clsx from 'clsx'
import { Slot } from 'utils'
import { Card, CardBody, CardFooter, CardHeader } from '../Card'
import { Divider } from '../Divider'
import { Title } from '../Title'
import type { AuthCardTypes } from './Auth.types'
import styles from './AuthCard.module.scss'

export type AuthCardLinkProps = {
  asChild?: boolean
  children: React.ReactNode
  className?: string
  href?: string
}

export function AuthCardLink({
  asChild,
  children,
  className,
  ...rest
}: AuthCardLinkProps) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.link, className)} {...rest}>
      {children}
    </Comp>
  )
}

export function AuthCard({
  ref,
  children,
  className,
  title,
  subtitle,
  footer,
  ...rest
}: AuthCardTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} {...rest}>
      <CardHeader className={styles.cardHeader}>
        <Title className={styles.title}>{title}</Title>
        {subtitle && <p>{subtitle}</p>}
      </CardHeader>

      <Divider className={styles.divider} />

      <CardBody className={styles.cardBody}>{children}</CardBody>

      {footer && (
        <>
          <Divider className={styles.divider} />
          <CardFooter className={styles.cardFooter}>{footer}</CardFooter>
        </>
      )}
    </Card>
  )
}
