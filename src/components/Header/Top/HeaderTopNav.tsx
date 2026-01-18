import { useRef } from 'react'
import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import { useHeader } from '../HeaderContext'
import type { HeaderTopNavTypes } from '../Header.types'
import styles from './HeaderTopNav.module.scss'

export function HeaderTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderTopNavTypes) {
  const t = useI18n()
  const { registerNav, getNavCount } = useHeader()

  const indexRef = useRef<number | null>(null)
  if (indexRef.current === null) {
    indexRef.current = registerNav('top')
  }

  const navIndex = indexRef.current
  const navCount = getNavCount('top')
  const defaultLabel =
    navCount === 1 ? t.top_navigation : `${t.top_navigation} ${navIndex}`

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || defaultLabel}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
