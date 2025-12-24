import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Note } from './Note'

describe('Note', () => {
  it('returns null when no children', () => {
    const { container } = render(<Note data-testid="note" />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders with children', () => {
    render(<Note data-testid="note">Test content</Note>)
    expect(screen.getByTestId('note')).toBeInTheDocument()
    expect(screen.getByTestId('note')).toHaveTextContent('Test content')
  })

  it('applies variant class', () => {
    render(<Note data-testid="note" variant="warning">Warning content</Note>)
    expect(screen.getByTestId('note').className).toMatch(/variant-warning/)
  })

  it('applies custom className', () => {
    render(<Note data-testid="note" className="custom-class">Content</Note>)
    expect(screen.getByTestId('note')).toHaveClass('custom-class')
  })
})
