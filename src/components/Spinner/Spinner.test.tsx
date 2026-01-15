import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Spinner label="Loading data" />)
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Loading data'
    )
  })

  it('applies size class', () => {
    render(<Spinner size="lg" data-testid="spinner" />)
    expect(screen.getByTestId('spinner').className).toMatch(/size-lg/)
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(<Spinner className="custom-class" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('custom-class')
  })
})
