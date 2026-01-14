import { useMemo, useEffect, useId, useState } from 'react'
import clsx from 'clsx'
import { HeaderContext } from './HeaderContext'
import styles from './HeaderRoot.module.scss'
import type { HeaderTypes } from './Header.types'

export function HeaderRoot({
  ref,
  children,
  sticky = false,
  baseId,
  className,
  ...rest
}: HeaderTypes) {
  const [isOpen, setIsOpen] = useState(false)
  const generatedId = useId()
  const id = baseId || generatedId
  const mobileMenuId = `header-mobile-menu-${id}`
  const mobileToggleId = `header-mobile-toggle-${id}`

  const toggle = () => setIsOpen((prev) => !prev)

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
    () => ({ isOpen, setIsOpen, toggle, mobileMenuId, mobileToggleId }),
    [isOpen, mobileMenuId, mobileToggleId]
  )

  return (
    <HeaderContext.Provider value={value}>
      <header
        ref={ref}
        className={clsx(styles.header, sticky && styles.sticky, className)}
        {...rest}
      >
        <div
          className={clsx(styles.overlay, isOpen && styles.overlayOpen)}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        {children}
      </header>
    </HeaderContext.Provider>
  )
}
