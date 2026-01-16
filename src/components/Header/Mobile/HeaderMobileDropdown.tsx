import { useEffect, useId, useRef, useState } from 'react'
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
  const dropdownId = `mobile-nav-content-${id}`
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.inert = !isExpanded
    }
  }, [isExpanded])

  return (
    <div ref={ref} className={clsx(styles.item, className)} {...rest}>
      <Button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={dropdownId}
        className={clsx(styles.trigger, isExpanded && styles.isOpen)}
        onClick={() => setIsExpanded((prev) => !prev)}
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
        inert
        id={dropdownId}
        ref={dropdownRef}
        className={clsx(styles.dropdown, isExpanded && styles.isOpen)}
      >
        <div className={styles.dropdownInner}>{children}</div>
      </div>
    </div>
  )
}
