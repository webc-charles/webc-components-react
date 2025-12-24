import { ReactNode } from 'react'

export type GapSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type GridTypes = {
  children: ReactNode
  col?: number
  colXS?: number
  colSM?: number
  colMD?: number
  colLG?: number
  colXL?: number
  gap?: GapSize
  gapXS?: GapSize
  gapSM?: GapSize
  gapMD?: GapSize
  gapLG?: GapSize
  gapXL?: GapSize
  className?: string
  'data-testid'?: string
}

export type GridItemTypes = {
  children: ReactNode
  col?: number
  colXS?: number
  colSM?: number
  colMD?: number
  colLG?: number
  colXL?: number
  row?: number
  rowXS?: number
  rowSM?: number
  rowMD?: number
  rowLG?: number
  rowXL?: number
  className?: string
}
