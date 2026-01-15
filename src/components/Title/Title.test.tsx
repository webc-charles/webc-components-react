import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Title } from './Title'

describe('Title', () => {
  it('renders with default h1 tag', () => {
    render(<Title data-testid="title">Test Title</Title>)
    expect(screen.getByTestId('title')).toBeInTheDocument()
    expect(screen.getByTestId('title').tagName).toBe('H1')
    expect(screen.getByTestId('title')).toHaveTextContent('Test Title')
  })

  it('renders h2 when level is h2', () => {
    render(
      <Title data-testid="title" level="h2">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H2')
  })

  it('renders h3 when level is h3', () => {
    render(
      <Title data-testid="title" level="h3">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H3')
  })

  it('renders h4 when level is h4', () => {
    render(
      <Title data-testid="title" level="h4">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H4')
  })

  it('renders h5 when level is h5', () => {
    render(
      <Title data-testid="title" level="h5">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H5')
  })

  it('renders h6 when level is h6', () => {
    render(
      <Title data-testid="title" level="h6">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H6')
  })

  it('applies custom className', () => {
    render(
      <Title data-testid="title" className="custom-class">
        Test Title
      </Title>
    )
    expect(screen.getByTestId('title')).toHaveClass('custom-class')
  })
})
