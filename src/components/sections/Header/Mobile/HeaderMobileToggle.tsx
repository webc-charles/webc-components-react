import clsx from 'clsx'
import { Button } from 'components'
import { Menu, X } from 'lucide-react'
import { useI18n } from 'utils/i18n'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileToggleTypes } from '../Header.types'
import styles from './HeaderMobileToggle.module.scss'

export function HeaderMobileToggle({
  ref,
  label,
  className,
  ...rest
}: HeaderMobileToggleTypes) {
  const t = useI18n()
  const { isOpen, toggle, mobileMenuId, mobileToggleId } = useHeader()

  return (
    <Button
      ref={ref}
      id={mobileToggleId}
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={mobileMenuId}
      aria-label={label || (isOpen ? t.close : t.menu)}
      className={clsx(styles.toggle, className)}
      {...rest}
    >
      {isOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </Button>
  )
}
