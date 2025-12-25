import { useEffect, useEffectEvent, useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Button } from 'components'
import styles from './Toast.module.scss'
import { ToastTypes } from './ToastTypes'

export function Toast({
  id,
  title,
  children,
  variant = 'primary',
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
        styles[variant],
        active && styles.active,
        removing && styles.removing
      )}
    >
      <div className={styles.container}>
        {title && <div className={styles.containerHeader}>{title}</div>}

        {children && <div className={styles.containerBody}>{children}</div>}
      </div>

      <button
        title={closeLabel}
        onClick={handleRemove}
        aria-label={closeLabel}
        className={clsx(styles.close, styles[`variant-${variant}`])}
      >
        <FontAwesomeIcon icon={faXmark} aria-hidden={true} />
      </button>
    </div>
  )
}
