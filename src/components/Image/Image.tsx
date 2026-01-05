import clsx from 'clsx'
import styles from './Image.module.scss'
import { ImageTypes } from './Image.types'

export function Image({ ref, className, alt, ...props }: ImageTypes) {
  return (
    <img
      ref={ref}
      className={clsx(styles.image, className)}
      alt={alt}
      {...props}
    />
  )
}
