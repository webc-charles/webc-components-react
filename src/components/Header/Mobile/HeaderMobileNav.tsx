import { useRef } from 'react'
import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileNavTypes } from '../Header.types'
import styles from './HeaderMobileNav.module.scss'

export function HeaderMobileNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileNavTypes) {
  const t = useI18n()
  const { registerNav, getNavCount } = useHeader()

  const indexRef = useRef<number | null>(null)
  if (indexRef.current === null) {
    indexRef.current = registerNav('mobile')
  }

  const navIndex = indexRef.current
  const navCount = getNavCount('mobile')
  const defaultLabel =
    navCount === 1
      ? t.mobile_navigation
      : `${t.mobile_navigation} ${navIndex}`

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || defaultLabel}
      className={clsx(styles.headerMobileNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
