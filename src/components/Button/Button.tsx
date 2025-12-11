import clsx from 'clsx'
import styles from './Button.module.scss'
import { ButtonTypes } from './types'

export function Button({
  title,
  variant,
  disabled,
  children,
  className,
  raw,
  type = 'button',
  ...rest
}: ButtonTypes) {
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      className={clsx(
        styles.button,
        raw && styles.raw,
        variant && styles[variant],
        disabled && styles.disabled,
        className
      )}
      {...rest}
    >
      {children || title}
    </button>
  )
}
