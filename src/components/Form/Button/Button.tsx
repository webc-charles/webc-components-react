import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'
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
  variant = 'default',
  ...rest
}: ButtonTypes) {
  const value = children ?? title

  const classList = clsx(
    styles.button,
    styles[`variant-${variant}`],
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
      {loading && (
        <LoaderCircle size={18} className={styles.spinner} aria-hidden />
      )}

      <span className={styles.content}>{value}</span>
    </button>
  )
}
