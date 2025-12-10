import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with title only', () => {
    render(<Button title="No action" />)
    expect(screen.getByText('No action')).toBeInTheDocument()
  })

  it('renders as link when link prop is provided', () => {
    render(<Button title="Go somewhere" link="https://example.com" />)
    const link = screen.getByRole('link', { name: /go somewhere/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders as button when action is provided', () => {
    const handleClick = jest.fn()
    render(<Button title="Click me" action={handleClick} />)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('calls action when button is clicked', () => {
    const handleClick = jest.fn()
    render(<Button title="Click me" action={handleClick} />)
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button when disabled prop is true', () => {
    const handleClick = jest.fn()
    render(<Button title="Disabled button" action={handleClick} disabled />)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('prevents navigation when link is disabled', () => {
    render(<Button title="Disabled link" link="https://example.com" disabled />)
    const link = screen.getByRole('link', { name: /disabled link/i })
    expect(link).toHaveAttribute('tabindex', '-1')
  })
})
