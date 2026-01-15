import { useCallback, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'

import type { HeaderTopBarItemTypes } from '../Header.types'
import styles from './HeaderTopBarItem.module.scss'

export function HeaderTopBarItem({
  ref,
  children,
  dropdown,
  className,
  ...rest
}: HeaderTopBarItemTypes) {
  const [isOpen, setIsOpen] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const setDropdownRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      node.setAttribute('inert', '')
    }
    dropdownRef.current = node
  }, [])

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        dropdownRef.current.removeAttribute('inert')
      } else {
        dropdownRef.current.setAttribute('inert', '')
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

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

  if (!dropdown) {
    return (
      <div ref={ref} className={clsx(styles.item, className)} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={itemRef}
      className={clsx(styles.item, styles.hasDropdown, className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={handleBlur}
      {...rest}
    >
      <Button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {children}
        <ChevronDown
          size={12}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </Button>

      <div
        role="menu"
        ref={setDropdownRef}
        className={clsx(styles.dropdown, isOpen && styles.dropdownOpen)}
      >
        <div className={styles.dropdownInner}>{dropdown}</div>
      </div>
    </div>
  )
}
