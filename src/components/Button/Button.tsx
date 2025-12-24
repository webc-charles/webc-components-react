import clsx from 'clsx'
import styles from './Button.module.scss'
import type { ButtonTypes } from './Button.types'

export function Button({
  type,
  title,
  children,
  className,
  appearance,
  variant = 'default',
  ...rest
}: ButtonTypes) {
  const value = children || title

  const classList = clsx(
    styles.button,
    styles[`variant-${variant}`],
    appearance && styles[`appearance-${appearance}`],
    className
  )

  return (
    <button type={type} title={title} className={classList} {...rest}>
      {value}
    </button>
  )
}
