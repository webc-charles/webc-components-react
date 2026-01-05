import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'
import styles from './Button.module.scss'
import type { ButtonTypes } from './Button.types'

export function Button({
  title,
  disabled,
  children,
  className,
  appearance,
  loading = false,
  type = 'button',
  variant = 'default',
  ...rest
}: ButtonTypes) {
  const value = children || title

  const classList = clsx(
    styles.button,
    styles[`variant-${variant}`],
    appearance && styles[`appearance-${appearance}`],
    loading && styles.loading,
    className
  )

  return (
    <button
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
