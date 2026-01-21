import clsx from 'clsx'
import type { FooterTypes } from './Footer.types'
import styles from './FooterRoot.module.scss'

export function FooterRoot({
  ref,
  children,
  className,
  ...rest
}: FooterTypes) {
  return (
    <footer ref={ref} className={clsx(styles.footer, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </footer>
  )
}
