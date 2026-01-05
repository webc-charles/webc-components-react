import { useEffect, useEffectEvent, useState } from 'react'
import clsx from 'clsx'
import { str } from 'i18n'
import { X } from 'lucide-react'
import styles from './Toast.module.scss'
import { ToastBodyTypes, ToastHeaderTypes, ToastTypes } from './Toast.types'

export function ToastHeader({
  ref,
  className,
  children,
  variant = 'primary',
  ...rest
}: ToastHeaderTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.toastHeader,
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export function ToastBody({
  ref,
  className,
  children,
  ...rest
}: ToastBodyTypes) {
  return (
    <div ref={ref} className={clsx(styles.toastBody, className)} {...rest}>
      {children}
    </div>
  )
}

export function Toast({
  id,
  children,
  variant = 'primary',
  contrast,
  duration = 10000,
  onRemove,
  closeLabel = str.close_toast,
}: ToastTypes) {
  const [active, setActive] = useState(false)
  const [removing, setRemoving] = useState(false)

  // Use alert role for urgent variants (danger/warning)
  const isUrgent = variant === 'danger' || variant === 'warning'
  const role = isUrgent ? 'alert' : 'status'
  const ariaLive = isUrgent ? 'assertive' : 'polite'

  const handleRemove = useEffectEvent(() => {
    setRemoving(true)
    setTimeout(() => {
      id && onRemove(id)
    }, 200)
  })

  // Activation animation (small delay ensures CSS transition triggers)
  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 10)
    return () => clearTimeout(timer)
  }, [])

  // Auto-close duration
  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(handleRemove, duration)
    return () => clearTimeout(timer)
  }, [duration, handleRemove])

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      className={clsx(
        styles.toast,
        styles[`variant-${variant}`],
        contrast && styles.contrast,
        active && styles.active,
        removing && styles.removing
      )}
    >
      <div className={styles.container}>{children}</div>

      <button
        type="button"
        title={closeLabel}
        onClick={handleRemove}
        aria-label={closeLabel}
        className={clsx(
          styles.close,
          styles[`variant-${variant}`],
          contrast && styles.contrast
        )}
      >
        <X size={18} aria-hidden />
      </button>
    </div>
  )
}
