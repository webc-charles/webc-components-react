import { useEffect, useEffectEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import type { HeaderTopDropdownTypes } from '../Header.types'
import styles from './HeaderTopDropdown.module.scss'

export function HeaderTopDropdown({
  children,
  label,
  href,
  as,
  current = false,
  className,
  ...rest
}: HeaderTopDropdownTypes) {
  const [isOpen, setIsOpen] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isLink = Boolean(href)
  const TriggerComp = href ? (as || 'a') : Button

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

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // For buttons: Enter/Space toggle dropdown
    if (!isLink && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }

    // ArrowDown: open dropdown and focus first item
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
      onFocusCapture={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <TriggerComp
        ref={triggerRef}
        href={href}
        type={isLink ? undefined : 'button'}
        tabIndex={isLink && current ? -1 : undefined}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-current={current ? 'page' : undefined}
        className={styles.trigger}
        onClick={isLink ? undefined : () => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          size={12}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </TriggerComp>

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
