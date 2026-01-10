import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  Carousel,
  CarouselContainer,
  CarouselControls,
  CarouselDots,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
} from './Carousel'

// Mock embla-carousel-react (requires DOM measurements)
vi.mock('embla-carousel-react', () => ({
  default: () => [
    () => {},
    {
      scrollPrev: () => {},
      scrollNext: () => {},
      scrollTo: () => {},
      canScrollPrev: () => true,
      canScrollNext: () => true,
      selectedScrollSnap: () => 0,
      scrollSnapList: () => [0, 1, 2],
      on: () => {},
      off: () => {},
    },
  ],
}))

describe('Carousel', () => {
  it('renders slides correctly', () => {
    render(
      <Carousel>
        <CarouselContainer>
          <CarouselSlide data-testid="slide-1">Slide 1</CarouselSlide>
          <CarouselSlide data-testid="slide-2">Slide 2</CarouselSlide>
          <CarouselSlide data-testid="slide-3">Slide 3</CarouselSlide>
        </CarouselContainer>
      </Carousel>
    )

    expect(screen.getByTestId('slide-1')).toBeInTheDocument()
    expect(screen.getByTestId('slide-2')).toBeInTheDocument()
    expect(screen.getByTestId('slide-3')).toBeInTheDocument()
  })

  it('renders navigation controls', () => {
    render(
      <Carousel>
        <CarouselContainer>
          <CarouselSlide>Slide 1</CarouselSlide>
          <CarouselSlide>Slide 2</CarouselSlide>
        </CarouselContainer>
        <CarouselControls>
          <CarouselPrev />
          <CarouselNext />
        </CarouselControls>
      </Carousel>
    )

    expect(
      screen.getByRole('button', { name: /précédente/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /suivante/i })
    ).toBeInTheDocument()
  })

  it('renders dots navigation', () => {
    render(
      <Carousel>
        <CarouselContainer>
          <CarouselSlide>Slide 1</CarouselSlide>
          <CarouselSlide>Slide 2</CarouselSlide>
          <CarouselSlide>Slide 3</CarouselSlide>
        </CarouselContainer>
        <CarouselControls>
          <CarouselDots />
        </CarouselControls>
      </Carousel>
    )

    expect(
      screen.getByRole('group', { name: /navigation/i })
    ).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Carousel className="custom-Carousel" data-testid="Carousel">
        <CarouselContainer>
          <CarouselSlide>Slide 1</CarouselSlide>
        </CarouselContainer>
      </Carousel>
    )

    expect(screen.getByTestId('Carousel')).toHaveClass('custom-Carousel')
  })
})
