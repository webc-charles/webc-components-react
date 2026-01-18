import { createContext, useContext } from 'react'

export type HeaderContextType = {
  isOpen: boolean
  toggle: () => void
  mobileMenuId: string
  mobileToggleId: string
}

export const HeaderContext = createContext<HeaderContextType | null>(null)

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('Header components must be used within HeaderRoot')
  }
  return context
}
