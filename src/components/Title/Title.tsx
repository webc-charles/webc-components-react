import clsx from 'clsx'
import styles from './Title.module.scss'
import { TitleTypes } from './types'

export function Title({ level = '1', children, className, size }: TitleTypes) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Tag
      className={clsx(
        styles.title,
        styles[Tag],
        size ? styles[size] : '',
        className
      )}
    >
      {children}
    </Tag>
  )
}
