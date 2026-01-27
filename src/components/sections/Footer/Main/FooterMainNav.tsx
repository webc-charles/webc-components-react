import { Title } from 'base/Title'
import clsx from 'clsx'
import type { FooterMainNavTypes } from '../Footer.types'
import styles from './FooterMainNav.module.scss'

export function FooterMainNav({
  ref,
  children,
  className,
  title,
  'aria-label': ariaLabel,
  ...rest
}: FooterMainNavTypes) {
  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || title || 'Footer navigation'}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {title && (
        <Title level="h3" className={styles.title}>
          {title}
        </Title>
      )}
      {children}
    </nav>
  )
}
