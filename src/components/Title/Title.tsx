import clsx from 'clsx'
import styles from './Title.module.scss'
import { TitleTypes } from './Title.types'

export function Title({
  level = 'h1',
  children,
  className,
  ...rest
}: TitleTypes) {
  const Tag = level

  return (
    <Tag className={clsx(styles.title, styles[Tag], className)} {...rest}>
      {children}
    </Tag>
  )
}
