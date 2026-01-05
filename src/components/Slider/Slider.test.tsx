import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  Slider,
  SliderContainer,
  SliderSlide,
  SliderControls,
  SliderPrev,
  SliderNext,
  SliderDots,
} from './Slider'

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

describe('Slider', () => {
  it('renders slides correctly', () => {
    render(
      <Slider>
        <SliderContainer>
          <SliderSlide data-testid="slide-1">Slide 1</SliderSlide>
          <SliderSlide data-testid="slide-2">Slide 2</SliderSlide>
          <SliderSlide data-testid="slide-3">Slide 3</SliderSlide>
        </SliderContainer>
      </Slider>
    )

    expect(screen.getByTestId('slide-1')).toBeInTheDocument()
    expect(screen.getByTestId('slide-2')).toBeInTheDocument()
    expect(screen.getByTestId('slide-3')).toBeInTheDocument()
  })

  it('renders navigation controls', () => {
    render(
      <Slider>
        <SliderContainer>
          <SliderSlide>Slide 1</SliderSlide>
          <SliderSlide>Slide 2</SliderSlide>
        </SliderContainer>
        <SliderControls>
          <SliderPrev />
          <SliderNext />
        </SliderControls>
      </Slider>
    )

    expect(screen.getByRole('button', { name: /précédente/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /suivante/i })).toBeInTheDocument()
  })

  it('renders dots navigation', () => {
    render(
      <Slider>
        <SliderContainer>
          <SliderSlide>Slide 1</SliderSlide>
          <SliderSlide>Slide 2</SliderSlide>
          <SliderSlide>Slide 3</SliderSlide>
        </SliderContainer>
        <SliderControls>
          <SliderDots />
        </SliderControls>
      </Slider>
    )

    expect(screen.getByRole('group', { name: /navigation/i })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Slider className="custom-slider" data-testid="slider">
        <SliderContainer>
          <SliderSlide>Slide 1</SliderSlide>
        </SliderContainer>
      </Slider>
    )

    expect(screen.getByTestId('slider')).toHaveClass('custom-slider')
  })
})
