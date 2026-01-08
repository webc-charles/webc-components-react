import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { str } from 'i18n'
import { useHeader } from './HeaderContext'
import styles from './HeaderMobileToggle.module.scss'
import type { HeaderMobileToggleTypes } from './Header.types'

export function HeaderMobileToggle({
  ref,
  label,
  className,
  ...rest
}: HeaderMobileToggleTypes) {
  const { isOpen, toggle, mobileMenuId, mobileToggleId } = useHeader()

  return (
    <button
      ref={ref}
      id={mobileToggleId}
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={mobileMenuId}
      aria-label={label || (isOpen ? str.close : str.menu)}
      className={clsx(styles.toggle, className)}
      {...rest}
    >
      {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
  )
}
