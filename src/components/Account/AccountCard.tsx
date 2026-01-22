import clsx from 'clsx'
import { Card, CardBody, CardHeader } from '../Card'
import { Title } from '../Title'
import type { AccountCardTypes } from './Account.types'
import styles from './Account.module.scss'

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
