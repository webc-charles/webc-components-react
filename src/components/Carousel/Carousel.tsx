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
import styles from './Carousel.module.scss'
import {
  CarouselContainerTypes,
  CarouselContextValue,
  CarouselControlsTypes,
  CarouselDotsTypes,
  CarouselNextTypes,
  CarouselPrevTypes,
  CarouselSlideTypes,
  CarouselTypes,
} from './Carousel.types'

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarouselContext() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error(
      'Carousel components must be used within a <Carousel> provider'
    )
  }
  return context
}

export function Carousel({
  ref,
  options,
  className,
  children,
  ...props
}: CarouselTypes) {
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
    <CarouselContext.Provider value={contextValue}>
      <div ref={ref} className={clsx(styles.Carousel, className)} {...props}>
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
          {str.carousel_status
            .replace('{current}', String(selectedIndex + 1))
            .replace('{total}', String(scrollSnaps.length))}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContainer({
  ref,
  className,
  children,
  ...props
}: CarouselContainerTypes) {
  return (
    <div ref={ref} className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  )
}

export function CarouselSlide({
  ref,
  className,
  children,
  ...props
}: CarouselSlideTypes) {
  return (
    <div ref={ref} className={clsx(styles.slide, className)} {...props}>
      {children}
    </div>
  )
}

export function CarouselControls({
  ref,
  className,
  children,
  ...props
}: CarouselControlsTypes) {
  return (
    <div ref={ref} className={clsx(styles.controls, className)} {...props}>
      {children}
    </div>
  )
}

export function CarouselPrev({
  ref,
  className,
  label = str.carousel_prev,
  children,
  ...props
}: CarouselPrevTypes) {
  const { canScrollPrev, scrollPrev } = useCarouselContext()

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

export function CarouselNext({
  ref,
  className,
  label = str.carousel_next,
  children,
  ...props
}: CarouselNextTypes) {
  const { canScrollNext, scrollNext } = useCarouselContext()

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

export function CarouselDots({
  ref,
  className,
  label = str.carousel_goto,
  ...props
}: CarouselDotsTypes) {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext()

  return (
    <div
      ref={ref}
      className={clsx(styles.dots, className)}
      role="group"
      aria-label={str.carousel_navigation}
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
