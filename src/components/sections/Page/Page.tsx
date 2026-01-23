import clsx from 'clsx'
import type { PageRootTypes } from './Page.types'
import styles from './Page.module.scss'

export function PageRoot({
  ref,
  children,
  className,
  ...rest
}: PageRootTypes) {
  return (
    <div ref={ref} className={clsx(styles.page, className)} {...rest}>
      {children}
    </div>
  )
}
