import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title', () => {
  it('renders with default h1 tag', () => {
    render(<Title>Test Title</Title>)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Test Title')
  })

  it('renders h2 when level is 2', () => {
    render(<Title level="2">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toBeInTheDocument()
  })

  it('renders h3 when level is 3', () => {
    render(<Title level="3">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 3 })
    expect(title).toBeInTheDocument()
  })

  it('renders h4 when level is 4', () => {
    render(<Title level="4">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 4 })
    expect(title).toBeInTheDocument()
  })

  it('renders h5 when level is 5', () => {
    render(<Title level="5">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 5 })
    expect(title).toBeInTheDocument()
  })

  it('renders h6 when level is 6', () => {
    render(<Title level="6">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 6 })
    expect(title).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Title className="custom-class">Test Title</Title>)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveClass('custom-class')
  })

  it('renders children content', () => {
    render(
      <Title>
        <span>Child content</span>
      </Title>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })
})
