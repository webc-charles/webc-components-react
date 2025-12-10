import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

describe('Card components', () => {
  it('renders Card with children', () => {
    render(<Card>Card Content</Card>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('renders Card with custom className', () => {
    render(<Card className="extra">Card Content</Card>)
    const card = screen.getByText('Card Content')
    expect(card).toHaveClass('extra')
  })

  it('renders CardHeader with children', () => {
    render(<CardHeader>Header Content</CardHeader>)
    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  it('renders CardHeader with custom className', () => {
    render(<CardHeader className="header-class">Header Content</CardHeader>)
    const header = screen.getByText('Header Content')
    expect(header).toHaveClass('header-class')
  })

  it('renders CardBody with children', () => {
    render(<CardBody>Body Content</CardBody>)
    expect(screen.getByText('Body Content')).toBeInTheDocument()
  })

  it('renders CardBody with custom className', () => {
    render(<CardBody className="body-class">Body Content</CardBody>)
    const body = screen.getByText('Body Content')
    expect(body).toHaveClass('body-class')
  })

  it('renders CardFooter with children', () => {
    render(<CardFooter>Footer Content</CardFooter>)
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('renders CardFooter with custom className', () => {
    render(<CardFooter className="footer-class">Footer Content</CardFooter>)
    const footer = screen.getByText('Footer Content')
    expect(footer).toHaveClass('footer-class')
  })
})
