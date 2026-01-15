import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

describe('Card components', () => {
  it('renders Card with children', () => {
    render(<Card data-testid="card">Card Content</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByTestId('card')).toHaveTextContent('Card Content')
  })

  it('renders Card with custom className', () => {
    render(
      <Card data-testid="card" className="extra">
        Card Content
      </Card>
    )
    expect(screen.getByTestId('card')).toHaveClass('extra')
  })

  it('renders CardHeader with children', () => {
    render(<CardHeader data-testid="header">Header Content</CardHeader>)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toHaveTextContent(
      'Header Content'
    )
  })

  it('renders CardHeader with custom className', () => {
    render(
      <CardHeader data-testid="header" className="header-class">
        Header Content
      </CardHeader>
    )
    expect(screen.getByTestId('header')).toHaveClass('header-class')
  })

  it('renders CardBody with children', () => {
    render(<CardBody data-testid="body">Body Content</CardBody>)
    expect(screen.getByTestId('body')).toBeInTheDocument()
    expect(screen.getByTestId('body')).toHaveTextContent('Body Content')
  })

  it('renders CardBody with custom className', () => {
    render(
      <CardBody data-testid="body" className="body-class">
        Body Content
      </CardBody>
    )
    expect(screen.getByTestId('body')).toHaveClass('body-class')
  })

  it('renders CardFooter with children', () => {
    render(<CardFooter data-testid="footer">Footer Content</CardFooter>)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toHaveTextContent(
      'Footer Content'
    )
  })

  it('renders CardFooter with custom className', () => {
    render(
      <CardFooter data-testid="footer" className="footer-class">
        Footer Content
      </CardFooter>
    )
    expect(screen.getByTestId('footer')).toHaveClass('footer-class')
  })
})
