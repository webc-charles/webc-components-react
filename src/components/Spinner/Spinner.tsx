import clsx from 'clsx'
import { str } from 'i18n'

import styles from './Spinner.module.scss'
import type { SpinnerTypes } from './Spinner.types'

export function Spinner({
  ref,
  className,
  size = 'md',
  label = str.loading,
  inline = false,
  ...rest
}: SpinnerTypes) {
  return (
    <div
      ref={ref}
      role={inline ? undefined : 'status'}
      aria-label={inline ? undefined : label}
      aria-hidden={inline || undefined}
      className={clsx(styles.spinner, styles[`size-${size}`], className)}
      {...rest}
    />
  )
}
