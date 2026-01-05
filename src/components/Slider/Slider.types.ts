import { ComponentPropsWithRef } from 'react'
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

export type SliderTypes = ComponentPropsWithRef<'div'> & {
  options?: EmblaOptionsType
}

export type SliderContainerTypes = ComponentPropsWithRef<'div'>

export type SliderSlideTypes = ComponentPropsWithRef<'div'>

export type SliderControlsTypes = ComponentPropsWithRef<'div'>

export type SliderPrevTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type SliderNextTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type SliderDotsTypes = ComponentPropsWithRef<'div'> & {
  label?: string
}
