import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
import { CheckboxTypes } from './Checkbox.types'

export function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  ref,
  className,
  labelClassName,
  disabled = false,
  ...rest
}: CheckboxTypes) {
  const id = useId()
  const [internalChecked, setInternalChecked] = useState(defaultChecked)

  const isControlled = checked !== undefined
  const isChecked = isControlled ? checked : internalChecked

  const handleChange = (newChecked: boolean) => {
    if (!isControlled) {
      setInternalChecked(newChecked)
    }
    onChange?.(newChecked)
  }

  return (
    <label
      htmlFor={id}
      className={clsx(styles.wrapper, className, {
        [styles.disabled]: disabled,
      })}
      {...rest}
    >
      <input
        ref={ref}
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
        disabled={disabled}
        className={styles.hiddenInput}
      />

      <div
        className={clsx(styles.checkbox, { [styles.checked]: isChecked })}
        aria-hidden={true}
      >
        {isChecked && <Check size={14} className={styles.checkIcon} />}
      </div>

      {label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}
    </label>
  )
}
