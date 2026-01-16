import { useEffect, useEffectEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import type { HeaderTopDropdownTypes } from '../Header.types'
import styles from './HeaderTopDropdown.module.scss'

export function HeaderTopDropdown({
  children,
  label,
  className,
  ...rest
}: HeaderTopDropdownTypes) {
  const [isOpen, setIsOpen] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useEffectEvent((e: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  })

  const handleEscape = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false)
      triggerRef.current?.focus()
    }
  })

  const handleBlur = (e: React.FocusEvent) => {
    const relatedTarget = e.relatedTarget as Node | null
    if (itemRef.current && !itemRef.current.contains(relatedTarget)) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      } else {
        const firstElement =
          dropdownRef.current?.querySelector<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        firstElement?.focus()
      }
    }
    if (e.key === 'ArrowUp' && isOpen) {
      e.preventDefault()
      const elements = dropdownRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      elements?.[elements.length - 1]?.focus()
    }
  }

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.inert = !isOpen
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={clsx(styles.item, className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={handleBlur}
      {...rest}
    >
      <Button
        type="button"
        ref={triggerRef}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          size={12}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </Button>

      <div
        inert
        role="menu"
        ref={dropdownRef}
        className={clsx(styles.dropdown, isOpen && styles.isOpen)}
      >
        <div className={styles.dropdownInner}>{children}</div>
      </div>
    </div>
  )
}
