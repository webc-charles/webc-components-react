import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Button } from 'components'
import styles from './Number.module.scss'
import { InputNumberTypes } from './Number.types'

export function InputNumber({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  label,
  className,
  inputClassName,
  labelClassName,
  incrementLabel = 'Increment',
  decrementLabel = 'Decrement',
  ...rest
}: InputNumberTypes) {
  const current = value ?? 0
  const canIncrement = max === undefined || current + step <= max
  const canDecrement = min === undefined || current - step >= min

  const increment = () =>
    !disabled && canIncrement && onChange?.(current + step)
  const decrement = () =>
    !disabled && canDecrement && onChange?.(current - step)

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
          {...rest}
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
          <Button
            type="button"
            className={clsx(styles.button, styles.increment)}
            onClick={increment}
            disabled={disabled || !canIncrement}
            title={incrementLabel}
          >
            <FontAwesomeIcon icon={faChevronUp} aria-hidden={true} />
          </Button>

          <Button
            type="button"
            className={clsx(styles.button, styles.decrement)}
            onClick={decrement}
            disabled={disabled || !canDecrement}
            title={decrementLabel}
          >
            <FontAwesomeIcon icon={faChevronDown} aria-hidden={true} />
          </Button>
        </div>
      </div>
    </label>
  )
}
