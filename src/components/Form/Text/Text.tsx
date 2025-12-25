import { useId } from 'react'
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
  const id = useId()

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
        {label}
      </label>
      <input id={id} {...rest} className={clsx(styles.input, inputClassName)} />
    </div>
  )
}
