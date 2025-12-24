import clsx from 'clsx'
import styles from './Link.module.scss'
import { LinkTypes } from './Link.types'

export function Link({
  href,
  title,
  disabled,
  children,
  className,
  appearance,
  variant = 'default',
  ...rest
}: LinkTypes) {
  const value = children || title

  const classList = clsx(
    styles.link,
    styles[`variant-${variant}`],
    appearance && styles[`appearance-${appearance}`],
    disabled && styles.disabled,
    className
  )

  return (
    <a
      href={href}
      title={title}
      className={classList}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      {...rest}
    >
      {value}
    </a>
  )
}
