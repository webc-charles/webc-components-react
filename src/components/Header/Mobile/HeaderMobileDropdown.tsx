import { useCallback, useEffect, useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import type { HeaderMobileDropdownTypes } from '../Header.types'
import styles from './HeaderMobileDropdown.module.scss'

export function HeaderMobileDropdown({
  ref,
  children,
  label,
  className,
  ...rest
}: HeaderMobileDropdownTypes) {
  const [isExpanded, setIsExpanded] = useState(false)
  const id = useId()
  const contentId = `mobile-nav-content-${id}`
  const contentRef = useRef<HTMLDivElement | null>(null)

  const setContentRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      node.setAttribute('inert', '')
    }
    contentRef.current = node
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        contentRef.current.removeAttribute('inert')
      } else {
        contentRef.current.setAttribute('inert', '')
      }
    }
  }, [isExpanded])

  return (
    <div ref={ref} className={clsx(styles.item, className)} {...rest}>
      <Button
        type="button"
        className={styles.trigger}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        {label}
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={clsx(
            styles.chevron,
            isExpanded && styles.chevronOpen
          )}
        />
      </Button>

      <div
        ref={setContentRef}
        id={contentId}
        className={clsx(styles.dropdown, isExpanded && styles.isOpen)}
      >
        <div className={styles.dropdownInner}>{children}</div>
      </div>
    </div>
  )
}
