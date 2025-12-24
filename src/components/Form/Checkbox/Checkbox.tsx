import { useId } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
import { CheckboxTypes } from './Checkbox.types'

export function Checkbox({
  label,
  checked,
  onChange,
  className,
  labelClassName,
  disabled = false,
  ...rest
}: CheckboxTypes) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={clsx(styles.wrapper, className, {
        [styles.disabled]: disabled,
      })}
      {...rest}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={styles.hiddenInput}
      />

      <div
        className={clsx(styles.checkbox, { [styles.checked]: checked })}
        aria-hidden={true}
      >
        {checked && (
          <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
        )}
      </div>

      <span className={clsx(styles.label, labelClassName)}>{label}</span>
    </label>
  )
}
