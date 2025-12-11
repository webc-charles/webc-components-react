import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button data-testid="button">Click me</Button>)
    expect(screen.getByTestId('button')).toHaveTextContent('Click me')
  })

  it('renders with title as fallback content', () => {
    render(<Button title="Button title" data-testid="button" />)
    expect(screen.getByTestId('button')).toHaveTextContent('Button title')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} data-testid="button">Click me</Button>)
    fireEvent.click(screen.getByTestId('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled data-testid="button">Click me</Button>)
    expect(screen.getByTestId('button')).toBeDisabled()
  })

  it('applies basic variant class', () => {
    render(<Button variant="basic" data-testid="button">Basic</Button>)
    expect(screen.getByTestId('button')).toHaveClass('basic')
  })

  it('applies accent variant class', () => {
    render(<Button variant="accent" data-testid="button">Accent</Button>)
    expect(screen.getByTestId('button')).toHaveClass('accent')
  })

  it('applies danger variant class', () => {
    render(<Button variant="danger" data-testid="button">Danger</Button>)
    expect(screen.getByTestId('button')).toHaveClass('danger')
  })

  it('applies disabled class when disabled', () => {
    render(<Button disabled data-testid="button">Disabled</Button>)
    expect(screen.getByTestId('button')).toHaveClass('disabled')
  })

  it('has correct type attribute', () => {
    render(<Button type="submit" data-testid="button">Submit</Button>)
    expect(screen.getByTestId('button')).toHaveAttribute('type', 'submit')
  })

  it('has default type of button', () => {
    render(<Button data-testid="button">Default</Button>)
    expect(screen.getByTestId('button')).toHaveAttribute('type', 'button')
  })
})
