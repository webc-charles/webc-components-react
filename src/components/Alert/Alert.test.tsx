import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders with title', () => {
    render(<Alert title="Test Title" data-testid="alert" />)
    expect(screen.getByTestId('alert')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Alert data-testid="alert">Alert content</Alert>)
    expect(screen.getByTestId('alert')).toBeInTheDocument()
    expect(screen.getByText('Alert content')).toBeInTheDocument()
  })

  it('renders with default info variant', () => {
    render(<Alert data-testid="alert">Default Variant</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('info')
  })

  it('renders with success variant', () => {
    render(
      <Alert variant="success" data-testid="alert">
        Success Alert
      </Alert>
    )
    expect(screen.getByTestId('alert')).toHaveClass('success')
  })

  it('renders with danger variant', () => {
    render(
      <Alert variant="danger" data-testid="alert">
        Danger Alert
      </Alert>
    )
    expect(screen.getByTestId('alert')).toHaveClass('danger')
  })

  it('renders with warning variant', () => {
    render(
      <Alert variant="warning" data-testid="alert">
        Warning Alert
      </Alert>
    )
    expect(screen.getByTestId('alert')).toHaveClass('warning')
  })

  it('renders with accent variant', () => {
    render(
      <Alert variant="accent" data-testid="alert">
        Accent Alert
      </Alert>
    )
    expect(screen.getByTestId('alert')).toHaveClass('accent')
  })

  it('renders with default variant', () => {
    render(
      <Alert variant="default" data-testid="alert">
        Default Alert
      </Alert>
    )
    expect(screen.getByTestId('alert')).toHaveClass('default')
  })

  it('renders both title and children', () => {
    render(
      <Alert title="Header" data-testid="alert">
        Body content
      </Alert>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })
})
