'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { str } from 'i18n'
import styles from './Slider.module.scss'
import {
  SliderContextValue,
  SliderContainerTypes,
  SliderControlsTypes,
  SliderDotsTypes,
  SliderNextTypes,
  SliderPrevTypes,
  SliderSlideTypes,
  SliderTypes,
} from './Slider.types'

const SliderContext = createContext<SliderContextValue | null>(null)

function useSliderContext() {
  const context = useContext(SliderContext)
  if (!context) {
    throw new Error('Slider components must be used within a <Slider> provider')
  }
  return context
}

export function Slider({
  options,
  className,
  children,
  ...props
}: SliderTypes) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <SliderContext.Provider
      value={{
        selectedIndex,
        scrollSnaps,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
        scrollTo,
      }}
    >
      <div className={clsx(styles.slider, className)} {...props}>
        <div className={styles.viewport} ref={emblaRef}>
          {children}
        </div>
      </div>
    </SliderContext.Provider>
  )
}

export function SliderContainer({ className, children, ...props }: SliderContainerTypes) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderSlide({ className, children, ...props }: SliderSlideTypes) {
  return (
    <div className={clsx(styles.slide, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderControls({ className, children, ...props }: SliderControlsTypes) {
  return (
    <div className={clsx(styles.controls, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderPrev({
  className,
  label = str.slider_prev,
  children,
  ...props
}: SliderPrevTypes) {
  const { canScrollPrev, scrollPrev } = useSliderContext()

  return (
    <button
      type="button"
      className={clsx(styles.button, styles.prev, className)}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label={label}
      {...props}
    >
      {children || <ChevronLeft size={20} aria-hidden />}
    </button>
  )
}

export function SliderNext({
  className,
  label = str.slider_next,
  children,
  ...props
}: SliderNextTypes) {
  const { canScrollNext, scrollNext } = useSliderContext()

  return (
    <button
      type="button"
      className={clsx(styles.button, styles.next, className)}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label={label}
      {...props}
    >
      {children || <ChevronRight size={20} aria-hidden />}
    </button>
  )
}

export function SliderDots({
  className,
  label = str.slider_goto,
  ...props
}: SliderDotsTypes) {
  const { selectedIndex, scrollSnaps, scrollTo } = useSliderContext()

  return (
    <div className={clsx(styles.dots, className)} role="tablist" {...props}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          className={clsx(styles.dot, selectedIndex === index && styles.active)}
          onClick={() => scrollTo(index)}
          aria-selected={selectedIndex === index}
          aria-label={`${label} ${index + 1}`}
        />
      ))}
    </div>
  )
}
