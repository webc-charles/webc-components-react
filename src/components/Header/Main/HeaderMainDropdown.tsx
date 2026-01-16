import { useEffect, useEffectEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import type { HeaderMainDropdownTypes } from '../Header.types'
import styles from './HeaderMainDropdown.module.scss'

export function HeaderMainDropdown({
  children,
  label,
  mega = false,
  current = false,
  className,
  ...rest
}: HeaderMainDropdownTypes) {
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
      className={clsx(
        styles.item,
        mega && styles.hasMega,
        current && styles.isCurrent,
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={handleBlur}
      {...rest}
    >
      <Button
        ref={triggerRef}
        type="button"
        className={clsx(styles.trigger, current && styles.triggerActive)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-current={current ? 'page' : undefined}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </Button>

      <div
        ref={dropdownRef}
        role="menu"
        inert
        className={clsx(
          mega ? styles.megaMenu : styles.dropdown,
          isOpen && styles.isOpen
        )}
      >
        <div
          className={mega ? styles.megaMenuInner : styles.dropdownInner}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
