import clsx from 'clsx'
import styles from './Card.module.scss'
import {
  CardBodyTypes,
  CardFooterTypes,
  CardHeaderTypes,
  CardTypes,
} from './Card.types'

export function Card({ className = '', children, ...rest }: CardTypes) {
  return (
    <div className={clsx(styles.card, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardHeader({
  className = '',
  children,
  ...rest
}: CardHeaderTypes) {
  return (
    <div className={clsx(styles.cardHeader, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardBody({ className = '', children, ...rest }: CardBodyTypes) {
  return (
    <div className={clsx(styles.cardBody, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardFooter({
  className = '',
  children,
  ...rest
}: CardFooterTypes) {
  return (
    <div className={clsx(styles.cardFooter, className)} {...rest}>
      {children}
    </div>
  )
}
