import { useEffect, useRef, useState } from 'react'
import { useI18n } from 'utils/i18n'
import { useHeader } from './HeaderContext'
import type { HeaderNavTypes } from './Header.types'

export function useHeaderNavLabel(
  type: HeaderNavTypes,
  customLabel?: string
) {
  const t = useI18n()
  const { registerNav, getNavCount } = useHeader()
  const [navIndex, setNavIndex] = useState(0)
  const registered = useRef(false)

  useEffect(() => {
    if (!registered.current) {
      registered.current = true
      setNavIndex(registerNav(type))
    }
  }, [registerNav, type])

  if (customLabel) return customLabel

  const navCount = getNavCount(type)
  const labels = {
    main: t.main_navigation,
    top: t.top_navigation,
    mobile: t.mobile_navigation,
  }

  return navCount > 1 ? `${labels[type]} ${navIndex}` : labels[type]
}
