import { ComponentProps, ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'

export type SliderContextValue = {
  selectedIndex: number
  scrollSnaps: number[]
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
}

export type SliderTypes = ComponentProps<'div'> & {
  options?: EmblaOptionsType
  children: ReactNode
}

export type SliderContainerTypes = ComponentProps<'div'>

export type SliderSlideTypes = ComponentProps<'div'>

export type SliderControlsTypes = ComponentProps<'div'>

export type SliderPrevTypes = ComponentProps<'button'> & {
  label?: string
}

export type SliderNextTypes = ComponentProps<'button'> & {
  label?: string
}

export type SliderDotsTypes = ComponentProps<'div'> & {
  label?: string
}
