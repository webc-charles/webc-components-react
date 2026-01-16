import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge data-testid="badge">Test Badge</Badge>)
    expect(screen.getByTestId('badge')).toBeInTheDocument()
    expect(screen.getByTestId('badge')).toHaveTextContent('Test Badge')
  })

  it('applies variant class', () => {
    render(
      <Badge data-testid="badge" variant="primary">
        Primary Badge
      </Badge>
    )
    expect(screen.getByTestId('badge').className).toMatch(
      /variant-primary/
    )
  })

  it('applies custom className', () => {
    render(
      <Badge data-testid="badge" className="custom-class">
        Custom Badge
      </Badge>
    )
    expect(screen.getByTestId('badge')).toHaveClass('custom-class')
  })
})
