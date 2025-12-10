import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders with title', () => {
    render(<Alert title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Alert>Alert content</Alert>)
    expect(screen.getByText('Alert content')).toBeInTheDocument()
  })

  it('renders with default info variant', () => {
    render(<Alert>Default Variant</Alert>)
    expect(screen.getByText('Default Variant')).toBeInTheDocument()
  })

  it('renders with success variant', () => {
    render(<Alert variant="success">Success Alert</Alert>)
    expect(screen.getByText('Success Alert')).toBeInTheDocument()
  })

  it('renders both title and children', () => {
    render(<Alert title="Header">Body content</Alert>)
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })
})
