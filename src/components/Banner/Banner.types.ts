import { ComponentPropsWithRef } from 'react'
import { TitleTypes } from '../Title/Title.types'

export type HorizontalAlignTypes = 'left' | 'center' | 'right'
export type VerticalAlignTypes = 'start' | 'center' | 'end'
export type BannerOverlayTypes = 'none' | 'light' | 'dark'
export type BannerTextColorTypes = 'light' | 'dark'
export type BannerTextAlignTypes = 'left' | 'center' | 'right'

export type BannerTypes = ComponentPropsWithRef<'div'> & {
  backgroundImage?: string
  backgroundColor?: string
  horizontalAlign?: HorizontalAlignTypes
  verticalAlign?: VerticalAlignTypes
  minHeight?: string
  overlay?: BannerOverlayTypes
}

export type BannerContentTypes = ComponentPropsWithRef<'div'> & {
  maxWidth?: string
  textAlign?: BannerTextAlignTypes
  textColor?: BannerTextColorTypes
}

export type BannerTitleTypes = TitleTypes

export type BannerSubtitleTypes = ComponentPropsWithRef<'p'>

export type BannerTextTypes = ComponentPropsWithRef<'p'>

export type BannerActionsTypes = ComponentPropsWithRef<'div'>
