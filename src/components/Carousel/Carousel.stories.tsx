import type { Meta, StoryObj } from '@storybook/react'

import {
  Carousel,
  CarouselContainer,
  CarouselControls,
  CarouselDots,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
} from './Carousel'

const slideStyle = {
  alignItems: 'center',
  background: 'var(--color-grey-5)',
  borderRadius: 'var(--radius-md)',
  display: 'flex',
  fontSize: 'var(--font-size-1)',
  height: '20rem',
  justifyContent: 'center',
}

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Embla carousel options',
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <Carousel>
      <CarouselContainer>
        <CarouselSlide>
          <div style={slideStyle}>Slide 1</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 2</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 3</div>
        </CarouselSlide>
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const WithLoop: Story = {
  render: () => (
    <Carousel options={{ loop: true }}>
      <CarouselContainer>
        <CarouselSlide>
          <div style={slideStyle}>Slide 1</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 2</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 3</div>
        </CarouselSlide>
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const MultipleSlides: Story = {
  render: () => (
    <Carousel options={{ align: 'start', slidesToScroll: 1 }}>
      <CarouselContainer>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <CarouselSlide key={n} style={{ flex: '0 0 33.333%' }}>
            <div style={{ ...slideStyle, margin: '0 0.5rem' }}>
              Slide {n}
            </div>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const DotsOnly: Story = {
  render: () => (
    <Carousel>
      <CarouselContainer>
        <CarouselSlide>
          <div style={slideStyle}>Slide 1</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 2</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 3</div>
        </CarouselSlide>
      </CarouselContainer>
      <CarouselControls>
        <CarouselDots />
      </CarouselControls>
    </Carousel>
  ),
}

export const ArrowsOnly: Story = {
  render: () => (
    <Carousel>
      <CarouselContainer>
        <CarouselSlide>
          <div style={slideStyle}>Slide 1</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 2</div>
        </CarouselSlide>
        <CarouselSlide>
          <div style={slideStyle}>Slide 3</div>
        </CarouselSlide>
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}
