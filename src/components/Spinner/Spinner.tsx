import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import styles from './Spinner.module.scss'
import type { SpinnerTypes } from './Spinner.types'

export function Spinner({
  ref,
  className,
  size = 'md',
  label,
  inline = false,
  ...rest
}: SpinnerTypes) {
  const t = useI18n()
  const labelText = label ?? t.loading
  return (
    <div
      ref={ref}
      role={inline ? undefined : 'status'}
      aria-label={inline ? undefined : labelText}
      aria-hidden={inline || undefined}
      className={clsx(styles.spinner, styles[`size-${size}`], className)}
      {...rest}
    />
  )
}
