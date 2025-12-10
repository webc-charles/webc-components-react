import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    expect(screen.getByText('Default Badge')).toBeInTheDocument()
  })

  it('renders with accent variant', () => {
    render(<Badge variant="accent">Accent Badge</Badge>)
    expect(screen.getByText('Accent Badge')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    const element = screen.getByText('Custom Badge')
    expect(element).toHaveClass('custom-class')
  })
})
