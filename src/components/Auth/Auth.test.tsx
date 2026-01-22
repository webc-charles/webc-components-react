import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  AuthSection,
  AuthCard,
  AuthCardLink,
  AuthForm,
  AuthEmailSent,
  AuthEmailSentLink,
  AuthVerifyEmail,
  AuthVerifyEmailLink,
} from './index'

describe('AuthSection', () => {
  it('renders with children', () => {
    render(<AuthSection data-testid="section">Section Content</AuthSection>)
    expect(screen.getByTestId('section')).toBeInTheDocument()
    expect(screen.getByTestId('section')).toHaveTextContent('Section Content')
  })

  it('renders with custom className', () => {
    render(
      <AuthSection data-testid="section" className="custom-class">
        Content
      </AuthSection>
    )
    expect(screen.getByTestId('section')).toHaveClass('custom-class')
  })

  it('renders as section element', () => {
    render(<AuthSection data-testid="section">Content</AuthSection>)
    expect(screen.getByTestId('section').tagName).toBe('SECTION')
  })
})

describe('AuthCard', () => {
  it('renders with title', () => {
    render(<AuthCard title="Test Title">Content</AuthCard>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders with subtitle', () => {
    render(
      <AuthCard title="Title" subtitle="Test Subtitle">
        Content
      </AuthCard>
    )
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders children in body', () => {
    render(<AuthCard title="Title">Body Content</AuthCard>)
    expect(screen.getByText('Body Content')).toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <AuthCard title="Title" footer={<span>Footer Content</span>}>
        Body
      </AuthCard>
    )
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('does not render footer when not provided', () => {
    render(<AuthCard title="Title">Body</AuthCard>)
    expect(screen.queryByText('Footer Content')).not.toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AuthCard title="Title" data-testid="card" className="custom-class">
        Content
      </AuthCard>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })
})

describe('AuthCardLink', () => {
  it('renders as anchor by default', () => {
    render(<AuthCardLink href="/test">Link Text</AuthCardLink>)
    const link = screen.getByText('Link Text')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders children', () => {
    render(<AuthCardLink href="/test">Link Content</AuthCardLink>)
    expect(screen.getByText('Link Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AuthCardLink href="/test" className="custom-link">
        Link
      </AuthCardLink>
    )
    expect(screen.getByText('Link')).toHaveClass('custom-link')
  })

  it('renders with asChild', () => {
    render(
      <AuthCardLink asChild>
        <button type="button">Button Link</button>
      </AuthCardLink>
    )
    const button = screen.getByText('Button Link')
    expect(button.tagName).toBe('BUTTON')
  })
})

describe('AuthForm', () => {
  it('renders as form element', () => {
    render(<AuthForm data-testid="form">Form Content</AuthForm>)
    expect(screen.getByTestId('form').tagName).toBe('FORM')
  })

  it('renders children', () => {
    render(<AuthForm>Form Content</AuthForm>)
    expect(screen.getByText('Form Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AuthForm data-testid="form" className="custom-form">
        Content
      </AuthForm>
    )
    expect(screen.getByTestId('form')).toHaveClass('custom-form')
  })

  it('passes form attributes', () => {
    render(
      <AuthForm data-testid="form" action="/submit" method="post">
        Content
      </AuthForm>
    )
    const form = screen.getByTestId('form')
    expect(form).toHaveAttribute('action', '/submit')
    expect(form).toHaveAttribute('method', 'post')
  })
})

describe('Auth integration', () => {
  it('renders complete auth layout', () => {
    render(
      <AuthSection data-testid="section">
        <AuthCard
          title="Sign In"
          subtitle="Welcome back"
          footer={<AuthCardLink href="/signup">Create account</AuthCardLink>}
        >
          <AuthForm data-testid="form">
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </AuthForm>
        </AuthCard>
      </AuthSection>
    )

    expect(screen.getByTestId('section')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
    expect(screen.getByTestId('form')).toBeInTheDocument()
    expect(screen.getByText('Create account')).toBeInTheDocument()
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

  it('renders icon as children', () => {
    render(
      <AuthEmailSent title="Title" message="Message" data-testid="card">
        ✉️
      </AuthEmailSent>
    )
    expect(screen.getByText('✉️')).toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <AuthEmailSent
        title="Title"
        message="Message"
        footer={<span>Footer Content</span>}
      >
        📧
      </AuthEmailSent>
    )
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('does not render footer when not provided', () => {
    render(
      <AuthEmailSent title="Title" message="Message">
        📧
      </AuthEmailSent>
    )
    expect(screen.queryByText('Footer Content')).not.toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AuthEmailSent
        title="Title"
        message="Message"
        data-testid="card"
        className="custom-class"
      >
        📧
      </AuthEmailSent>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })
})

describe('AuthEmailSentLink', () => {
  it('renders as anchor by default', () => {
    render(<AuthEmailSentLink href="/resend">Resend</AuthEmailSentLink>)
    const link = screen.getByText('Resend')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/resend')
  })

  it('renders with asChild', () => {
    render(
      <AuthEmailSentLink asChild>
        <button type="button">Resend Button</button>
      </AuthEmailSentLink>
    )
    const button = screen.getByText('Resend Button')
    expect(button.tagName).toBe('BUTTON')
  })
})

describe('AuthVerifyEmail', () => {
  it('renders with title and message', () => {
    render(
      <AuthVerifyEmail title="Verifying..." message="Please wait">
        ⏳
      </AuthVerifyEmail>
    )
    expect(screen.getByText('Verifying...')).toBeInTheDocument()
    expect(screen.getByText('Please wait')).toBeInTheDocument()
  })

  it('renders with loading status by default', () => {
    render(
      <AuthVerifyEmail title="Title" message="Message" data-testid="card">
        ⏳
      </AuthVerifyEmail>
    )
    expect(screen.getByTestId('card')).toHaveAttribute('data-status', 'loading')
  })

  it('renders with success status', () => {
    render(
      <AuthVerifyEmail
        title="Title"
        message="Message"
        status="success"
        data-testid="card"
      >
        ✓
      </AuthVerifyEmail>
    )
    expect(screen.getByTestId('card')).toHaveAttribute('data-status', 'success')
  })

  it('renders with error status', () => {
    render(
      <AuthVerifyEmail
        title="Title"
        message="Message"
        status="error"
        data-testid="card"
      >
        ✗
      </AuthVerifyEmail>
    )
    expect(screen.getByTestId('card')).toHaveAttribute('data-status', 'error')
  })

  it('renders footer when provided', () => {
    render(
      <AuthVerifyEmail
        title="Title"
        message="Message"
        footer={<span>Continue</span>}
      >
        ✓
      </AuthVerifyEmail>
    )
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <AuthVerifyEmail
        title="Title"
        message="Message"
        data-testid="card"
        className="custom-class"
      >
        ⏳
      </AuthVerifyEmail>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })
})

describe('AuthVerifyEmailLink', () => {
  it('renders as anchor by default', () => {
    render(<AuthVerifyEmailLink href="/login">Sign in</AuthVerifyEmailLink>)
    const link = screen.getByText('Sign in')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/login')
  })

  it('renders with asChild', () => {
    render(
      <AuthVerifyEmailLink asChild>
        <button type="button">Continue</button>
      </AuthVerifyEmailLink>
    )
    const button = screen.getByText('Continue')
    expect(button.tagName).toBe('BUTTON')
  })
})
