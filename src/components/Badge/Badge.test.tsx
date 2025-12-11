import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge data-testid="badge">Test Badge</Badge>)
    expect(screen.getByTestId('badge')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<Badge data-testid="badge">Default Badge</Badge>)
    expect(screen.getByTestId('badge')).toBeInTheDocument()
  })

  it('renders with accent variant', () => {
    render(
      <Badge variant="accent" data-testid="badge">
        Accent Badge
      </Badge>
    )
    expect(screen.getByTestId('badge')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Badge className="custom-class" data-testid="badge">
        Custom Badge
      </Badge>
    )
    const element = screen.getByTestId('badge')
    expect(element).toHaveClass('custom-class')
  })
})
