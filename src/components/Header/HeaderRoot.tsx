import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import clsx from 'clsx'
import type { HeaderTypes } from './Header.types'
import { HeaderContext } from './HeaderContext'
import styles from './HeaderRoot.module.scss'

export function HeaderRoot({
  ref,
  children,
  baseId,
  className,
  ...rest
}: HeaderTypes) {
  const [isOpen, setIsOpen] = useState(false)
  const generatedId = useId()
  const id = baseId || generatedId
  const mobileMenuId = `header-mobile-menu-${id}`
  const mobileToggleId = `header-mobile-toggle-${id}`

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        document.getElementById(mobileToggleId)?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, mobileToggleId])

  const value = useMemo(
    () => ({ isOpen, toggle, mobileMenuId, mobileToggleId }),
    [isOpen, mobileMenuId, mobileToggleId, toggle]
  )

  return (
    <HeaderContext.Provider value={value}>
      <header
        ref={ref}
        className={clsx(styles.header, className)}
        {...rest}
      >
        <div
          className={clsx(styles.overlay, isOpen && styles.isOpen)}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        {children}
      </header>
    </HeaderContext.Provider>
  )
}
