import clsx from 'clsx'
import styles from './Link.module.scss'
import { LinkTypes } from './Link.types'

export function Link({
  ref,
  href,
  title,
  disabled,
  children,
  className,
  appearance,
  contrast,
  variant,
  ...rest
}: LinkTypes) {
  const value = children ?? title
  const isStyled = variant || appearance

  const classList = clsx(
    styles.link,
    isStyled && styles.styled,
    variant && styles[`variant-${variant}`],
    appearance && styles[`appearance-${appearance}`],
    contrast && styles.contrast,
    disabled && styles.disabled,
    className
  )

  return (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      title={title}
      className={classList}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      {...rest}
    >
      {value}
    </a>
  )
}
