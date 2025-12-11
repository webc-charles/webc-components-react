import { ReactNode } from 'react'

export type TitleTypes = {
  level?: '1' | '2' | '3' | '4' | '5' | '6'
  children: ReactNode
  className?: string
  size?: 'lg' | 'xl'
}
