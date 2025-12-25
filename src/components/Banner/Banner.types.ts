import { ComponentProps } from 'react'
import { TitleTypes } from '../Title/Title.types'

export type BannerAlignTypes = 'left' | 'center' | 'right'
export type BannerJustifyTypes = 'start' | 'center' | 'end'
export type BannerOverlayTypes = 'none' | 'light' | 'dark'
export type BannerTextColorTypes = 'light' | 'dark'

export type BannerTypes = ComponentProps<'div'> & {
  backgroundImage?: string
  backgroundColor?: string
  overlay?: BannerOverlayTypes
  minHeight?: string
}

export type BannerContentTypes = ComponentProps<'div'> & {
  align?: BannerAlignTypes
  justify?: BannerJustifyTypes
  textColor?: BannerTextColorTypes
  maxWidth?: string
}

export type BannerTitleTypes = TitleTypes

export type BannerSubtitleTypes = ComponentProps<'p'>

export type BannerTextTypes = ComponentProps<'p'>

export type BannerActionsTypes = ComponentProps<'div'> & {
  direction?: 'horizontal' | 'vertical'
}
