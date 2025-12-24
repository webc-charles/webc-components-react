import clsx from 'clsx'
import styles from './Radio.module.scss'
import type { InputRadioTypes } from './Radio.types'

export function InputRadio({
  value,
  onChange,
  options,
  name,
  label,
  disabled,
  className,
  optionClassName,
  labelClassName,
  direction = 'vertical',
  ...rest
}: InputRadioTypes) {
  return (
    <div
      className={clsx(styles.wrapper, className, { [styles.disabled]: disabled })}
      role="radiogroup"
      aria-labelledby={label ? `${name}-label` : undefined}
    >
      {label && (
        <span id={`${name}-label`} className={clsx(styles.groupLabel, labelClassName)}>
          {label}
        </span>
      )}

      <div className={clsx(styles.options, styles[direction])}>
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(styles.option, optionClassName, {
              [styles.disabled]: disabled || option.disabled,
            })}
          >
            <input
              {...rest}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              disabled={disabled || option.disabled}
              className={styles.input}
            />
            <span className={styles.radio} aria-hidden />
            <span className={styles.label}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
