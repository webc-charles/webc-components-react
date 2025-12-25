import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Button } from 'components'
import { str } from 'i18n'
import styles from './Modal.module.scss'
import { ModalTypes } from './ModalTypes'

export function Modal({
  id,
  title,
  size = 'lg',
  children,
  onRemove,
  duration = Infinity,
  closeOnBackdrop = false,
  closeLabel = str.close_modal,
}: ModalTypes) {
  const [active, setActive] = useState(false)
  const [removing, setRemoving] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const modalTitleId = `modal-title-${id}`

  const handleRemove = useEffectEvent(() => {
    previousFocusRef.current?.focus()
    setRemoving(true)
    setTimeout(() => id && onRemove(id), 200)
  })

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      handleRemove()
    }
  }

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement
    modalRef.current?.querySelector('button')?.focus()
    const timer = setTimeout(() => setActive(true), 100)
    return () => clearTimeout(timer)
  }, [active])

  useEffect(() => {
    if (!active || removing) return

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (!focusableElements || focusableElements.length === 0) return

      const focusableArray = Array.from(focusableElements) as HTMLElement[]

      const lastIndex = focusableArray.length - 1
      const currentIndex = focusableArray.findIndex(
        (el) => el === document.activeElement
      )

      e.preventDefault()

      if (e.shiftKey) {
        const prevIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1
        focusableArray[prevIndex].focus()
      } else {
        const nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1
        focusableArray[nextIndex].focus()
      }
    }

    document.addEventListener('keydown', handleFocusTrap)
    return () => document.removeEventListener('keydown', handleFocusTrap)
  }, [active, removing])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleRemove()
      }
    }

    if (active && !removing) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, removing])

  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(() => {
      handleRemove()
    }, duration)

    return () => clearTimeout(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration])

  useEffect(() => {
    if (active && !removing) {
      const clientWidth = document.documentElement.clientWidth
      const scrollbarWidth = window.innerWidth - clientWidth

      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      )

      document.body.classList.add('freeze')

      return () => {
        document.body.classList.remove('freeze')
        document.documentElement.style.removeProperty('--scrollbar-width')
      }
    }
  }, [active, removing])

  return (
    <div
      className={clsx(
        styles.modalBackdrop,
        removing && styles.removing,
        active && !removing && styles.active
      )}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? modalTitleId : undefined}
        ref={modalRef}
        className={clsx(
          styles.modal,
          styles[size],
          removing && styles.removing,
          active && !removing && styles.active
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className={styles.modalHeader} id={modalTitleId}>
            {title}
          </div>
        )}

        <button
          title={closeLabel}
          onClick={handleRemove}
          aria-label={closeLabel}
          className={styles.close}
        >
          <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
        </button>

        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  )
}
