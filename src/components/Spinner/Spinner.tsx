import clsx from 'clsx'
import { str } from 'i18n'
import styles from './Spinner.module.scss'
import { SpinnerTypes } from './Spinner.types'

export function Spinner({
  ref,
  className,
  variant = 'default',
  size = 'md',
  label = str.loading,
  inline = false,
  contrast = false,
  ...rest
}: SpinnerTypes) {
  return (
    <div
      ref={ref}
      role={inline ? undefined : 'status'}
      aria-label={inline ? undefined : label}
      aria-hidden={inline || undefined}
      className={clsx(
        styles.spinner,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        contrast && styles.contrast,
        className
      )}
      {...rest}
    />
  )
}
