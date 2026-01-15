import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Divider } from './Divider'

describe('Divider', () => {
  it('renders hr element', () => {
    render(<Divider data-testid="divider" />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('applies variant class', () => {
    render(<Divider variant="dashed" data-testid="divider" />)
    expect(screen.getByTestId('divider').className).toContain(
      'variant-dashed'
    )
  })

  it('applies spacing class', () => {
    render(<Divider spacing="lg" data-testid="divider" />)
    expect(screen.getByTestId('divider').className).toContain('spacing-lg')
  })

  it('applies custom className', () => {
    render(<Divider className="custom-class" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Divider ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLHRElement)
  })
})
