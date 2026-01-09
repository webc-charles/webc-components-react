import clsx from 'clsx'
import { Spinner } from '../../Spinner'
import styles from './Button.module.scss'
import type { ButtonTypes } from './Button.types'

export function Button({
  ref,
  title,
  disabled,
  children,
  className,
  appearance,
  contrast,
  loading = false,
  type = 'button',
  variant,
  ...rest
}: ButtonTypes) {
  const isStyled = variant || appearance

  const classList = clsx(
    styles.button,
    isStyled && styles.styled,
    variant && styles[`variant-${variant}`],
    appearance && styles[`appearance-${appearance}`],
    contrast && styles.contrast,
    loading && styles.loading,
    className
  )

  return (
    <button
      ref={ref}
      type={type}
      title={title}
      className={classList}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <Spinner inline size="sm" className={styles.spinner} />}
      {children ?? title}
    </button>
  )
}
