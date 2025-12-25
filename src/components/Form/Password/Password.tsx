import { useId, useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { str } from 'i18n'
import styles from './Password.module.scss'
import type { InputPasswordTypes } from './Password.types'

export function InputPassword({
  label,
  disabled,
  className,
  inputClassName,
  labelClassName,
  ...rest
}: InputPasswordTypes) {
  const id = useId()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <input
          {...rest}
          id={id}
          type={showPassword ? 'text' : 'password'}
          disabled={disabled}
          className={clsx(styles.input, inputClassName)}
        />

        <button
          type="button"
          disabled={disabled}
          className={styles.toggleButton}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? str.hide : str.show}
        >
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            aria-hidden
          />
        </button>
      </div>
    </div>
  )
}
