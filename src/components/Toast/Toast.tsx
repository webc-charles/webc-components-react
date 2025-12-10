import { useEffect, useEffectEvent, useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Alert, Button } from 'components'
import styles from './Toast.module.scss'
import { ToastTypes } from './types'

export function Toast({
  id,
  title,
  children,
  variant = 'accent',
  duration = 10000,
  onRemove,
  closeLabel = 'Close Toast',
}: ToastTypes) {
  const [active, setActive] = useState(false)
  const [removing, setRemoving] = useState(false)

  const handleRemove = useEffectEvent(() => {
    setRemoving(true)
    setTimeout(() => {
      id && onRemove(id)
    }, 200)
  })

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(() => {
      handleRemove()
    }, duration)

    return () => clearTimeout(timer)

    // eslint-disable-next-line
  }, [duration])

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={clsx(
        styles.toast,
        removing && styles.removing,
        active && styles.active
      )}
    >
      <Alert title={title} variant={variant}>
        {children}
      </Alert>

      <Button
        action={handleRemove}
        title={closeLabel}
        aria-label={closeLabel}
        className={clsx(styles.toastClose, styles[variant])}
      >
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </div>
  )
}
