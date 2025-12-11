import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Button } from '../Button/Button'
import styles from './Number.module.scss'
import { InputNumberTypes } from './types'

export function InputNumber({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  label,
  className,
  inputClassName,
  labelClassName,
  placeholder,
  incrementLabel = 'Increment',
  decrementLabel = 'Decrement',
}: InputNumberTypes) {
  const handleIncrement = () => {
    if (disabled) return
    const currentValue = value ?? 0
    const newValue = currentValue + step
    if (max === undefined || newValue <= max) {
      onChange?.(newValue)
    }
  }

  const handleDecrement = () => {
    if (disabled) return
    const currentValue = value ?? 0
    const newValue = currentValue - step
    if (min === undefined || newValue >= min) {
      onChange?.(newValue)
    }
  }

  return (
    <label
      className={clsx(styles.wrapper, className, {
        [styles.disabled]: disabled,
      })}
    >
      {label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}

      <div className={styles.inputWrapper}>
        <input
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange?.(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(styles.input, inputClassName)}
        />

        <div className={styles.nav}>
          <Button
            type="button"
            className={clsx(styles.button, styles.increment)}
            onClick={handleIncrement}
            disabled={
              disabled ||
              (max !== undefined && value !== undefined && value >= max)
            }
            title={incrementLabel}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </Button>

          <Button
            type="button"
            className={clsx(styles.button, styles.decrement)}
            onClick={handleDecrement}
            disabled={
              disabled ||
              (min !== undefined && value !== undefined && value <= min)
            }
            title={decrementLabel}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </div>
      </div>
    </label>
  )
}
