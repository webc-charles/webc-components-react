import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { PageRoot } from './Page'

describe('PageRoot', () => {
  it('renders with children', () => {
    render(<PageRoot data-testid="page">Page Content</PageRoot>)
    expect(screen.getByTestId('page')).toBeInTheDocument()
    expect(screen.getByTestId('page')).toHaveTextContent('Page Content')
  })

  it('renders as div element', () => {
    render(<PageRoot data-testid="page">Content</PageRoot>)
    expect(screen.getByTestId('page').tagName).toBe('DIV')
  })

  it('renders with custom className', () => {
    render(
      <PageRoot data-testid="page" className="custom-class">
        Content
      </PageRoot>
    )
    expect(screen.getByTestId('page')).toHaveClass('custom-class')
  })

  it('renders multiple children', () => {
    render(
      <PageRoot>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </PageRoot>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <PageRoot data-testid="page" id="main-page" role="main">
        Content
      </PageRoot>
    )
    const page = screen.getByTestId('page')
    expect(page).toHaveAttribute('id', 'main-page')
    expect(page).toHaveAttribute('role', 'main')
  })

  it('applies custom styles', () => {
    render(
      <PageRoot data-testid="page" style={{ minHeight: '100vh' }}>
        Content
      </PageRoot>
    )
    expect(screen.getByTestId('page')).toHaveStyle({ minHeight: '100vh' })
  })
})
