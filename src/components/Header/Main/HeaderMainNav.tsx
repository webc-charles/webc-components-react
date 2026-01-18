import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useI18n } from 'utils/i18n'
import { useHeader } from '../HeaderContext'
import type { HeaderMainNavTypes } from '../Header.types'
import styles from './HeaderMainNav.module.scss'

export function HeaderMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMainNavTypes) {
  const t = useI18n()
  const { registerNav, getNavCount } = useHeader()
  const [navIndex, setNavIndex] = useState(0)
  const registered = useRef(false)

  useEffect(() => {
    if (!registered.current) {
      registered.current = true
      setNavIndex(registerNav('main'))
    }
  }, [registerNav])

  const navCount = getNavCount('main')
  const defaultLabel =
    navCount <= 1 ? t.main_navigation : `${t.main_navigation} ${navIndex}`

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
