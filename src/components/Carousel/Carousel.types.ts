import { ComponentPropsWithRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'

export type CarouselContextValue = {
  selectedIndex: number
  scrollSnaps: number[]
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
}

export type CarouselTypes = ComponentPropsWithRef<'div'> & {
  options?: EmblaOptionsType
}

export type CarouselContainerTypes = ComponentPropsWithRef<'div'>

export type CarouselSlideTypes = ComponentPropsWithRef<'div'>

export type CarouselControlsTypes = ComponentPropsWithRef<'div'>

export type CarouselPrevTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type CarouselNextTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type CarouselDotsTypes = ComponentPropsWithRef<'div'> & {
  label?: string
}
