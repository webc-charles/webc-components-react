import { useId } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import clsx from 'clsx'
import { str } from 'i18n'
import styles from './Number.module.scss'
import { InputNumberTypes } from './Number.types'

export function InputNumber({
  value,
  onChange,
  ref,
  min,
  max,
  step = 1,
  disabled,
  className,
  inputClassName,
  labelClassName,
  label,
  incrementLabel = str.increment,
  decrementLabel = str.decrement,
  ...rest
}: InputNumberTypes) {
  const id = useId()
  const current = value ?? 0
  const canIncrement = max === undefined || current + step <= max
  const canDecrement = min === undefined || current - step >= min

  const increment = () =>
    !disabled && canIncrement && onChange?.(current + step)
  const decrement = () =>
    !disabled && canDecrement && onChange?.(current - step)

  return (
    <div
      className={clsx(styles.wrapper, className, {
        [styles.disabled]: disabled,
      })}
    >
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          {...rest}
          ref={ref}
          id={id}
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange?.(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={clsx(styles.input, inputClassName)}
        />

        <div className={styles.nav}>
          <button
            type="button"
            className={clsx(styles.button, styles.increment)}
            onClick={increment}
            disabled={disabled || !canIncrement}
            title={incrementLabel}
          >
            <ChevronUp size={14} aria-hidden />
          </button>

          <button
            type="button"
            className={clsx(styles.button, styles.decrement)}
            onClick={decrement}
            disabled={disabled || !canDecrement}
            title={decrementLabel}
          >
            <ChevronDown size={14} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
