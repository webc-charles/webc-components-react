import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { AccountContainer, AccountCard, AccountForm } from './index'

describe('AccountContainer', () => {
  it('renders with children', () => {
    render(<AccountContainer data-testid="container">Container Content</AccountContainer>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(screen.getByTestId('container')).toHaveTextContent('Container Content')
  })

  it('renders with custom className', () => {
    render(
      <AccountContainer data-testid="container" className="custom-class">
        Content
      </AccountContainer>
    )
    expect(screen.getByTestId('container')).toHaveClass('custom-class')
  })

  it('renders multiple children', () => {
    render(
      <AccountContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </AccountContainer>
    )
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })
})

describe('AccountCard', () => {
  it('renders with title', () => {
    render(<AccountCard title="Test Title">Content</AccountCard>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders with subtitle', () => {
    render(
      <AccountCard title="Title" subtitle="Test Subtitle">
        Content
      </AccountCard>
    )
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders without subtitle', () => {
    render(<AccountCard title="Title">Content</AccountCard>)
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument()
  })

  it('renders children in body', () => {
    render(<AccountCard title="Title">Body Content</AccountCard>)
    expect(screen.getByText('Body Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AccountCard title="Title" data-testid="card" className="custom-class">
        Content
      </AccountCard>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })

  it('renders title as h2', () => {
    render(<AccountCard title="Title">Content</AccountCard>)
    const title = screen.getByText('Title')
    expect(title.tagName).toBe('H2')
  })
})

describe('AccountForm', () => {
  it('renders as form element', () => {
    render(<AccountForm data-testid="form">Form Content</AccountForm>)
    expect(screen.getByTestId('form').tagName).toBe('FORM')
  })

  it('renders children', () => {
    render(<AccountForm>Form Content</AccountForm>)
    expect(screen.getByText('Form Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AccountForm data-testid="form" className="custom-form">
        Content
      </AccountForm>
    )
    expect(screen.getByTestId('form')).toHaveClass('custom-form')
  })

  it('passes form attributes', () => {
    render(
      <AccountForm data-testid="form" action="/submit" method="post">
        Content
      </AccountForm>
    )
    const form = screen.getByTestId('form')
    expect(form).toHaveAttribute('action', '/submit')
    expect(form).toHaveAttribute('method', 'post')
  })
})

describe('Account integration', () => {
  it('renders complete account layout', () => {
    render(
      <AccountContainer data-testid="container">
        <AccountCard title="Profile" subtitle="Edit your profile">
          <AccountForm data-testid="form">
            <input type="text" placeholder="Username" />
            <button type="submit">Save</button>
          </AccountForm>
        </AccountCard>
      </AccountContainer>
    )

    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit your profile')).toBeInTheDocument()
    expect(screen.getByTestId('form')).toBeInTheDocument()
  })

  it('renders multiple cards in container', () => {
    render(
      <AccountContainer>
        <AccountCard title="Card 1">Content 1</AccountCard>
        <AccountCard title="Card 2">Content 2</AccountCard>
      </AccountContainer>
    )

    expect(screen.getByText('Card 1')).toBeInTheDocument()
    expect(screen.getByText('Card 2')).toBeInTheDocument()
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })
})
