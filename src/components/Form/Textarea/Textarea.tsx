import clsx from 'clsx'
import styles from './Textarea.module.scss'
import type { InputTextareaTypes } from './Textarea.types'

export function InputTextarea({
  value,
  onChange,
  label,
  disabled,
  className,
  textareaClassName,
  labelClassName,
  maxLength,
  showCount = false,
  ...rest
}: InputTextareaTypes) {
  return (
    <label className={clsx(styles.wrapper, className, { [styles.disabled]: disabled })}>
      {label && <span className={clsx(styles.label, labelClassName)}>{label}</span>}

      <textarea
        {...rest}
        value={value ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        className={clsx(styles.textarea, textareaClassName)}
      />

      {showCount && maxLength && (
        <div className={styles.footer}>
          <span className={styles.count}>{value?.length ?? 0}/{maxLength}</span>
        </div>
      )}
    </label>
  )
}
