'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { str } from 'i18n'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from 'components'
import styles from './Slider.module.scss'
import {
  SliderContainerTypes,
  SliderContextValue,
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
  ref,
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
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

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

  const contextValue = useMemo(
    () => ({
      selectedIndex,
      scrollSnaps,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
    }),
    [
      selectedIndex,
      scrollSnaps,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
    ]
  )

  return (
    <SliderContext.Provider value={contextValue}>
      <div ref={ref} className={clsx(styles.slider, className)} {...props}>
        <div className={styles.viewport} ref={emblaRef}>
          {children}
        </div>
        {/* Visually hidden live region for screen readers */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          style={{
            position: 'absolute',
            width: '0.1rem',
            height: '0.1rem',
            padding: 0,
            margin: '-0.1rem',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {str.slider_status
            .replace('{current}', String(selectedIndex + 1))
            .replace('{total}', String(scrollSnaps.length))}
        </div>
      </div>
    </SliderContext.Provider>
  )
}

export function SliderContainer({
  ref,
  className,
  children,
  ...props
}: SliderContainerTypes) {
  return (
    <div ref={ref} className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderSlide({
  ref,
  className,
  children,
  ...props
}: SliderSlideTypes) {
  return (
    <div ref={ref} className={clsx(styles.slide, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderControls({
  ref,
  className,
  children,
  ...props
}: SliderControlsTypes) {
  return (
    <div ref={ref} className={clsx(styles.controls, className)} {...props}>
      {children}
    </div>
  )
}

export function SliderPrev({
  ref,
  className,
  label = str.slider_prev,
  children,
  ...props
}: SliderPrevTypes) {
  const { canScrollPrev, scrollPrev } = useSliderContext()

  return (
    <Button
      ref={ref}
      type="button"
      className={clsx(styles.button, styles.prev, className)}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label={label}
      {...props}
    >
      {children ?? <ChevronLeft size={20} aria-hidden />}
    </Button>
  )
}

export function SliderNext({
  ref,
  className,
  label = str.slider_next,
  children,
  ...props
}: SliderNextTypes) {
  const { canScrollNext, scrollNext } = useSliderContext()

  return (
    <Button
      ref={ref}
      type="button"
      className={clsx(styles.button, styles.next, className)}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label={label}
      {...props}
    >
      {children ?? <ChevronRight size={20} aria-hidden />}
    </Button>
  )
}

export function SliderDots({
  ref,
  className,
  label = str.slider_goto,
  ...props
}: SliderDotsTypes) {
  const { selectedIndex, scrollSnaps, scrollTo } = useSliderContext()

  return (
    <div
      ref={ref}
      className={clsx(styles.dots, className)}
      role="group"
      aria-label={str.slider_navigation}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <Button
          key={index}
          type="button"
          className={clsx(styles.dot, selectedIndex === index && styles.active)}
          onClick={() => scrollTo(index)}
          aria-current={selectedIndex === index || undefined}
          aria-label={`${label} ${index + 1}`}
        />
      ))}
    </div>
  )
}
