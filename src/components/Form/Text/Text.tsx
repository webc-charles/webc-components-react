import { useId } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss'
import type { InputTextTypes } from './Text.types'

export function InputText({
  label,
  ref,
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
      <input ref={ref} id={id} className={clsx(styles.input, inputClassName)} {...rest} />
    </div>
  )
}
