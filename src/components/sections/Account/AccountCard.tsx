import { Title } from 'base/Title'
import clsx from 'clsx'
import { Card, CardBody, CardHeader } from 'modules/Card'
import styles from './Account.module.scss'
import type { AccountCardTypes } from './Account.types'

export function AccountCard({
  ref,
  children,
  className,
  title,
  subtitle,
  ...rest
}: AccountCardTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} {...rest}>
      <CardHeader className={styles.cardHeader}>
        <Title level="h2" className={styles.title}>
          {title}
        </Title>
        {subtitle && <p>{subtitle}</p>}
      </CardHeader>

      <CardBody className={styles.cardBody}>{children}</CardBody>
    </Card>
  )
}
