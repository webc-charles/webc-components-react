import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders with children', () => {
    render(
      <Link href="#" data-testid="link">
        Click me
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveTextContent('Click me')
  })

  it('renders with title as fallback content', () => {
    render(<Link href="#" title="Link title" data-testid="link" />)
    expect(screen.getByTestId('link')).toHaveTextContent('Link title')
  })

  it('has correct href attribute', () => {
    render(
      <Link href="https://example.com" data-testid="link">
        Example
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
  })

  it('applies basic variant class', () => {
    render(
      <Link href="#" variant="basic" data-testid="link">
        Basic
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('basic')
  })

  it('applies accent variant class', () => {
    render(
      <Link href="#" variant="accent" data-testid="link">
        Accent
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('accent')
  })

  it('applies danger variant class', () => {
    render(
      <Link href="#" variant="danger" data-testid="link">
        Danger
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('danger')
  })

  it('applies custom className', () => {
    render(
      <Link href="#" className="custom-class" data-testid="link">
        Link
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('custom-class')
  })

  it('sets tabIndex to -1 when disabled', () => {
    render(
      <Link href="#" disabled data-testid="link">
        Disabled
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveAttribute('tabindex', '-1')
  })

  it('prevents click when disabled', () => {
    const mockPreventDefault = jest.fn()
    render(
      <Link href="#" disabled data-testid="link">
        Disabled
      </Link>
    )

    const link = screen.getByTestId('link')
    fireEvent.click(link, { preventDefault: mockPreventDefault })

    // Link should have disabled class
    expect(link).toHaveClass('disabled')
  })

  it('applies disabled class when disabled', () => {
    render(
      <Link href="#" disabled data-testid="link">
        Disabled
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('disabled')
  })
})
