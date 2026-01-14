import { ElementType } from 'react'
import clsx from 'clsx'
import styles from './Link.module.scss'
import { LinkTypes } from './Link.types'

export function Link({
  as,
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
  const Component: ElementType = as || 'a'
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
    <Component
      ref={ref}
      href={disabled ? undefined : href}
      title={title}
      className={classList}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined}
      {...rest}
    >
      {value}
    </Component>
  )
}
