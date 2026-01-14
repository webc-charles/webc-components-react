import clsx from 'clsx'
import styles from './Link.module.scss'
import { LinkTypes } from './Link.types'

export const linkClassMap = {
  base: styles.link,
  styled: styles.styled,
  contrast: styles.contrast,
  disabled: styles.disabled,
  variants: {
    default: styles['variant-default'],
    primary: styles['variant-primary'],
    secondary: styles['variant-secondary'],
    success: styles['variant-success'],
    danger: styles['variant-danger'],
    warning: styles['variant-warning'],
    info: styles['variant-info'],
  },
  appearances: {
    default: styles['appearance-default'],
    underline: styles['appearance-underline'],
    outline: styles['appearance-outline'],
    button: styles['appearance-button'],
  },
}

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
    linkClassMap.base,
    isStyled && linkClassMap.styled,
    variant && linkClassMap.variants[variant],
    appearance && linkClassMap.appearances[appearance],
    contrast && linkClassMap.contrast,
    disabled && linkClassMap.disabled,
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
