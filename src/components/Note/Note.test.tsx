import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Note } from './Note'

describe('Note', () => {
  it('returns null when no children', () => {
    const { container } = render(<Note />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders children', () => {
    render(<Note>Test content</Note>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders with title', () => {
    render(<Note title="Test Title">Content</Note>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders title as h3 heading', () => {
    render(<Note title="Test Title">Content</Note>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Test Title')
  })

  it('renders with default variant', () => {
    render(<Note>Content</Note>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with danger variant', () => {
    render(<Note variant="danger">Danger content</Note>)
    expect(screen.getByText('Danger content')).toBeInTheDocument()
  })

  it('renders with success variant', () => {
    render(<Note variant="success">Success content</Note>)
    expect(screen.getByText('Success content')).toBeInTheDocument()
  })

  it('renders with warning variant', () => {
    render(<Note variant="warning">Warning content</Note>)
    expect(screen.getByText('Warning content')).toBeInTheDocument()
  })
})
