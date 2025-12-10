import clsx from 'clsx'
import styles from './Card.module.scss'
import {
  CardBodyTypes,
  CardFooterTypes,
  CardHeaderTypes,
  CardTypes,
} from './types'

export function Card({ className = '', children }: CardTypes) {
  return <div className={clsx(styles.card, className)}>{children}</div>
}

export function CardHeader({ className = '', children }: CardHeaderTypes) {
  return <div className={clsx(styles.cardHeader, className)}>{children}</div>
}

export function CardBody({ className = '', children }: CardBodyTypes) {
  return <div className={clsx(styles.cardBody, className)}>{children}</div>
}

export function CardFooter({ className = '', children }: CardFooterTypes) {
  return <div className={clsx(styles.cardFooter, className)}>{children}</div>
}
