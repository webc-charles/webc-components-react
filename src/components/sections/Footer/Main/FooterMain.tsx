import clsx from 'clsx'
import type { FooterMainTypes } from '../Footer.types'
import styles from './FooterMain.module.scss'

export function FooterMain({
  ref,
  children,
  className,
  brand,
  ...rest
}: FooterMainTypes) {
  return (
    <div ref={ref} className={clsx(styles.main, className)} {...rest}>
      {brand && <div className={styles.brand}>{brand}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
