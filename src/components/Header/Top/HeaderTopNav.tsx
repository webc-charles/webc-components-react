import { useEffect, useRef, useState } from 'react'
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
  const [navIndex, setNavIndex] = useState(0)
  const registered = useRef(false)

  useEffect(() => {
    if (!registered.current) {
      registered.current = true
      setNavIndex(registerNav('top'))
    }
  }, [registerNav])

  const navCount = getNavCount('top')
  const defaultLabel =
    navCount <= 1 ? t.top_navigation : `${t.top_navigation} ${navIndex}`

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
