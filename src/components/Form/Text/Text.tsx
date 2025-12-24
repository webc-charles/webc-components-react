import clsx from 'clsx'
import styles from './Text.module.scss'
import type { InputTextTypes } from './Text.types'

export function InputText({
  label,
  className,
  inputClassName,
  labelClassName,
  ...rest
}: InputTextTypes) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={clsx(styles.label, labelClassName)}>{label}</label>
      <input {...rest} className={clsx(styles.input, inputClassName)} />
    </div>
  )
}
