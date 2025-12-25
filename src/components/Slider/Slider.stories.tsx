import type { Meta, StoryObj } from '@storybook/react'
import {
  Slider,
  SliderContainer,
  SliderSlide,
  SliderControls,
  SliderPrev,
  SliderNext,
  SliderDots,
} from './Slider'

const slideStyle = {
  alignItems: 'center',
  background: 'var(--color-grey-5)',
  borderRadius: 'var(--radius-medium)',
  display: 'flex',
  fontSize: 'var(--font-size-1)',
  height: '20rem',
  justifyContent: 'center',
}

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Embla carousel options',
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <Slider>
      <SliderContainer>
        <SliderSlide>
          <div style={slideStyle}>Slide 1</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 2</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 3</div>
        </SliderSlide>
      </SliderContainer>
      <SliderControls>
        <SliderPrev />
        <SliderDots />
        <SliderNext />
      </SliderControls>
    </Slider>
  ),
}

export const WithLoop: Story = {
  render: () => (
    <Slider options={{ loop: true }}>
      <SliderContainer>
        <SliderSlide>
          <div style={slideStyle}>Slide 1</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 2</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 3</div>
        </SliderSlide>
      </SliderContainer>
      <SliderControls>
        <SliderPrev />
        <SliderDots />
        <SliderNext />
      </SliderControls>
    </Slider>
  ),
}

export const MultipleSlides: Story = {
  render: () => (
    <Slider options={{ align: 'start', slidesToScroll: 1 }}>
      <SliderContainer>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SliderSlide key={n} style={{ flex: '0 0 33.333%' }}>
            <div style={{ ...slideStyle, margin: '0 0.5rem' }}>Slide {n}</div>
          </SliderSlide>
        ))}
      </SliderContainer>
      <SliderControls>
        <SliderPrev />
        <SliderDots />
        <SliderNext />
      </SliderControls>
    </Slider>
  ),
}

export const DotsOnly: Story = {
  render: () => (
    <Slider>
      <SliderContainer>
        <SliderSlide>
          <div style={slideStyle}>Slide 1</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 2</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 3</div>
        </SliderSlide>
      </SliderContainer>
      <SliderControls>
        <SliderDots />
      </SliderControls>
    </Slider>
  ),
}

export const ArrowsOnly: Story = {
  render: () => (
    <Slider>
      <SliderContainer>
        <SliderSlide>
          <div style={slideStyle}>Slide 1</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 2</div>
        </SliderSlide>
        <SliderSlide>
          <div style={slideStyle}>Slide 3</div>
        </SliderSlide>
      </SliderContainer>
      <SliderControls>
        <SliderPrev />
        <SliderNext />
      </SliderControls>
    </Slider>
  ),
}
