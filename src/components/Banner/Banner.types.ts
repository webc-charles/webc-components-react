import { ComponentProps } from 'react'
import { TitleTypes } from '../Title/Title.types'

export type horizontalAlignTypes = 'left' | 'center' | 'right'
export type verticalAlignTypes = 'start' | 'center' | 'end'
export type BannerOverlayTypes = 'none' | 'light' | 'dark'
export type BannerTextColorTypes = 'light' | 'dark'
export type BannerTextAlignTypes = 'left' | 'center' | 'right'

export type BannerTypes = ComponentProps<'div'> & {
  backgroundImage?: string
  backgroundColor?: string
  horizontalAlign?: horizontalAlignTypes
  verticalAlign?: verticalAlignTypes
  minHeight?: string
  overlay?: BannerOverlayTypes
}

export type BannerContentTypes = ComponentProps<'div'> & {
  maxWidth?: string
  textAlign?: BannerTextAlignTypes
  textColor?: BannerTextColorTypes
}

export type BannerTitleTypes = TitleTypes

export type BannerSubtitleTypes = ComponentProps<'p'>

export type BannerTextTypes = ComponentProps<'p'>

export type BannerActionsTypes = ComponentProps<'div'>
