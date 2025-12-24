import styles from './Image.module.scss'
import { ImageTypes } from './Image.types'

export function Image({ className, alt, ...props }: ImageTypes) {
  return <img className={styles.image} alt={alt} {...props} />
}
