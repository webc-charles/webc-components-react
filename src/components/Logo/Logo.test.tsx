import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Logo, LogoImage, LogoFallback } from './Logo'

describe('Logo', () => {
  it('renders as anchor by default', () => {
    render(
      <Logo href="/home">
        <span>Logo</span>
      </Logo>
    )
    const link = screen.getByRole('link')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/home')
  })

  it('renders children', () => {
    render(
      <Logo href="/">
        <span>Logo Content</span>
      </Logo>
    )
    expect(screen.getByText('Logo Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <Logo href="/" data-testid="logo" className="custom-class">
        <span>Logo</span>
      </Logo>
    )
    expect(screen.getByTestId('logo')).toHaveClass('custom-class')
  })

  it('renders with asChild', () => {
    render(
      <Logo asChild>
        <button type="button">Button Logo</button>
      </Logo>
    )
    const button = screen.getByText('Button Logo')
    expect(button.tagName).toBe('BUTTON')
  })
})

describe('LogoImage', () => {
  it('renders as img element', () => {
    render(<LogoImage src="/logo.png" alt="Logo" data-testid="logo-image" />)
    const img = screen.getByTestId('logo-image')
    expect(img.tagName).toBe('IMG')
  })

  it('renders with src and alt', () => {
    render(<LogoImage src="/logo.png" alt="Company Logo" />)
    const img = screen.getByAltText('Company Logo')
    expect(img).toHaveAttribute('src', '/logo.png')
  })

  it('renders with custom className', () => {
    render(<LogoImage src="/logo.png" alt="Logo" className="custom-image" data-testid="logo-image" />)
    expect(screen.getByTestId('logo-image')).toHaveClass('custom-image')
  })

  it('renders with dimensions', () => {
    render(<LogoImage src="/logo.png" alt="Logo" width={100} height={50} data-testid="logo-image" />)
    const img = screen.getByTestId('logo-image')
    expect(img).toHaveAttribute('width', '100')
    expect(img).toHaveAttribute('height', '50')
  })
})

describe('LogoFallback', () => {
  it('renders as div element', () => {
    render(<LogoFallback data-testid="fallback">Fallback</LogoFallback>)
    expect(screen.getByTestId('fallback').tagName).toBe('DIV')
  })

  it('renders children', () => {
    render(<LogoFallback>Fallback Text</LogoFallback>)
    expect(screen.getByText('Fallback Text')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <LogoFallback data-testid="fallback" className="custom-fallback">
        Text
      </LogoFallback>
    )
    expect(screen.getByTestId('fallback')).toHaveClass('custom-fallback')
  })
})

describe('Logo integration', () => {
  it('renders Logo with LogoImage', () => {
    render(
      <Logo href="/" data-testid="logo">
        <LogoImage src="/logo.png" alt="Company" data-testid="image" />
      </Logo>
    )
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('image')).toBeInTheDocument()
  })

  it('renders Logo with LogoFallback', () => {
    render(
      <Logo href="/" data-testid="logo">
        <LogoFallback data-testid="fallback">ACME</LogoFallback>
      </Logo>
    )
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('fallback')).toBeInTheDocument()
    expect(screen.getByText('ACME')).toBeInTheDocument()
  })
})
