import clsx from 'clsx'

import styles from './Divider.module.scss'
import type { DividerTypes } from './Divider.types'

export function Divider({
  ref,
  variant = 'solid',
  spacing = 'md',
  className,
  ...rest
}: DividerTypes) {
  return (
    <hr
      ref={ref}
      className={clsx(
        styles.divider,
        styles[`variant-${variant}`],
        styles[`spacing-${spacing}`],
        className
      )}
      {...rest}
    />
  )
}
