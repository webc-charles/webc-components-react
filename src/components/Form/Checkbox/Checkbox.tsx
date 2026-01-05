import { useId } from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'
import styles from './Checkbox.module.scss'
import { CheckboxTypes } from './Checkbox.types'

export function Checkbox({
  label,
  checked,
  onChange,
  ref,
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
        ref={ref}
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
        {checked && <Check size={14} className={styles.checkIcon} />}
      </div>

      <span className={clsx(styles.label, labelClassName)}>{label}</span>
    </label>
  )
}
