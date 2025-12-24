import { createContext, useContext } from 'react'
import { ModalConfigTypes } from './ModalTypes'

export type ModalsContextTypes = {
  modals: ModalConfigTypes[]
  addModal: (options: ModalConfigTypes) => void
  removeModal: (id: number) => void
}

export const ModalsContext = createContext<ModalsContextTypes | undefined>(
  undefined
)

export const useModals = () => {
  const context = useContext(ModalsContext)

  if (!context) {
    throw new Error('useModals must be used within Modals')
  }

  return context
}
