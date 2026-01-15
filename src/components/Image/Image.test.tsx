import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Image } from './Image'

describe('Image', () => {
  it('renders with required alt', () => {
    render(<Image src="test.jpg" alt="Test image" data-testid="image" />)
    expect(screen.getByTestId('image')).toBeInTheDocument()
    expect(screen.getByAltText('Test image')).toBeInTheDocument()
  })

  it('applies fit class', () => {
    render(
      <Image src="test.jpg" alt="Test" fit="cover" data-testid="image" />
    )
    expect(screen.getByTestId('image').className).toMatch(/fitCover/)
  })

  it('applies radius class', () => {
    render(
      <Image src="test.jpg" alt="Test" radius="full" data-testid="image" />
    )
    expect(screen.getByTestId('image').className).toMatch(/radiusFull/)
  })

  it('applies aspect ratio style', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test"
        aspectRatio="16/9"
        data-testid="image"
      />
    )
    expect(screen.getByTestId('image')).toHaveStyle({
      aspectRatio: '16/9',
    })
  })

  it('renders figure with caption', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test image"
        caption="© 2024 Author"
        data-testid="image"
      />
    )

    const figure = screen.getByRole('group')
    expect(figure).toBeInTheDocument()
    expect(figure).toHaveAttribute('aria-labelledby')

    expect(screen.getByText('© 2024 Author')).toBeInTheDocument()
  })

  it('does not render figure without caption', () => {
    render(<Image src="test.jpg" alt="Test image" />)
    expect(screen.queryByRole('group')).not.toBeInTheDocument()
  })

  it('forwards ref to img element', () => {
    const ref = { current: null }
    render(<Image src="test.jpg" alt="Test" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLImageElement)
  })
})
