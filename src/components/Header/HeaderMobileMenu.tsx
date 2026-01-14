import { useCallback, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { str } from 'i18n'
import { Slot } from 'utils'
import type {
  HeaderMobileLinkTypes,
  HeaderMobileMenuTypes,
} from './Header.types'
import { useHeader } from './HeaderContext'
import styles from './HeaderMobileMenu.module.scss'

function HeaderMobileMenuLink({
  asChild,
  children,
  className,
  ...props
}: HeaderMobileLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.mobileLink, className)} {...props}>
      {children}
    </Comp>
  )
}

function HeaderMobileMenuComponent({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileMenuTypes) {
  const { isOpen, mobileMenuId } = useHeader()
  const menuRef = useRef<HTMLElement | null>(null)

  const setMenuRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.setAttribute('inert', '')
    }
    menuRef.current = node
  }, [])

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.removeAttribute('inert')
      } else {
        menuRef.current.setAttribute('inert', '')
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    firstElement?.focus()
    document.addEventListener('keydown', handleTabKey)

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen])

  return (
    <nav
      ref={setMenuRef}
      id={mobileMenuId}
      aria-label={ariaLabel || str.mobile_navigation}
      className={clsx(styles.menu, isOpen && styles.menuOpen, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

export const HeaderMobileMenu = Object.assign(HeaderMobileMenuComponent, {
  Link: HeaderMobileMenuLink,
})
