import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  AuthCard,
  AuthCardLink,
  AuthEmailSent,
  AuthForm,
  AuthSection,
  AuthVerifyEmail,
} from './index'

describe('AuthCard', () => {
  it('renders with title and subtitle', () => {
    render(
      <AuthCard title="Sign In" subtitle="Welcome back">
        Content
      </AuthCard>
    )
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <AuthCard title="Title" footer={<span>Footer</span>}>
        Body
      </AuthCard>
    )
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

describe('AuthCardLink', () => {
  it('supports asChild pattern', () => {
    render(
      <AuthCardLink asChild>
        <button type="button">Button Link</button>
      </AuthCardLink>
    )
    expect(screen.getByRole('button', { name: 'Button Link' })).toBeInTheDocument()
  })
})

describe('AuthEmailSent', () => {
  it('renders with title and message', () => {
    render(
      <AuthEmailSent title="Check your email" message="We sent you a link">
        📧
      </AuthEmailSent>
    )
    expect(screen.getByText('Check your email')).toBeInTheDocument()
    expect(screen.getByText('We sent you a link')).toBeInTheDocument()
  })
})

describe('AuthVerifyEmail', () => {
  it('renders with status attribute', () => {
    render(
      <AuthVerifyEmail
        title="Verified"
        message="Success"
        status="success"
        data-testid="card"
      >
        ✓
      </AuthVerifyEmail>
    )
    expect(screen.getByTestId('card')).toHaveAttribute('data-status', 'success')
  })
})

describe('Auth integration', () => {
  it('renders complete auth layout', () => {
    render(
      <AuthSection>
        <AuthCard
          title="Sign In"
          subtitle="Welcome back"
          footer={<AuthCardLink href="/signup">Create account</AuthCardLink>}
        >
          <AuthForm>
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </AuthForm>
        </AuthCard>
      </AuthSection>
    )

    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
    expect(screen.getByText('Create account')).toBeInTheDocument()
  })
})
