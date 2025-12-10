import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
import { CheckboxTypes } from './types'

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  className,
  labelClassName,
}: CheckboxTypes) {
  const borderColor = `var(--color-${checked ? 'accent-2' : 'grey-3'})`
  const bgColor = `var(--color-${checked ? 'accent-2' : 'white'})`

  return (
    <label
      className={clsx(styles.checkboxWrapper, className, {
        [styles.disabled]: disabled,
      })}
    >
      <span
        role="checkbox"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={(e) => {
          if ([' ', 'Enter'].includes(e.key)) {
            e.preventDefault()
            if (!disabled) onChange(!checked)
          }
        }}
        className={styles.checkbox}
        style={{
          backgroundColor: bgColor,
          borderColor,
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderWidth: '.2rem',
        }}
      >
        {checked && (
          <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
        )}
      </span>

      {label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}
    </label>
  )
}
