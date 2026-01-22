import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
import { InputText } from '../Form/Text'
import { InputPassword } from '../Form/Password'
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

const meta: Meta<typeof AuthCard> = {
  title: 'Components/Auth',
  component: AuthCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
    },
    footer: {
      control: false,
      description: 'Footer content (typically AuthCardLink components)',
    },
    children: {
      control: false,
      description: 'Card body content',
    },
  },
}

export default meta
type Story = StoryObj<typeof AuthCard>

export const Playground: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Sign In"
        subtitle="Enter your credentials to access your account"
        footer={
          <>
            <AuthCardLink href="/signup">
              Don&apos;t have an account? Sign up
            </AuthCardLink>
            <AuthCardLink href="/forgot-password">
              Forgot password?
            </AuthCardLink>
          </>
        }
      >
        <AuthForm>
          <InputText
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Sign In
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const LoginForm: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Welcome Back"
        subtitle="Sign in to your account"
        footer={
          <>
            <AuthCardLink href="/signup">Create an account</AuthCardLink>
            <AuthCardLink href="/forgot-password">Forgot password?</AuthCardLink>
          </>
        }
      >
        <AuthForm>
          <InputText
            name="identifier"
            label="Email or Username"
            placeholder="Enter your email or username"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Sign In
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const SignupForm: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Create Account"
        subtitle="Fill in your details to get started"
        footer={
          <AuthCardLink href="/login">
            Already have an account? Sign in
          </AuthCardLink>
        }
      >
        <AuthForm>
          <InputText
            name="username"
            label="Username"
            placeholder="Choose a username"
          />
          <InputText
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Create a password"
          />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Create Account
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const ForgotPassword: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Forgot Password"
        subtitle="Enter your email to receive a reset link"
        footer={
          <AuthCardLink href="/login">Back to sign in</AuthCardLink>
        }
      >
        <AuthForm>
          <InputText
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <Button type="submit" variant="primary" appearance="button">
            Send Reset Link
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const WithoutFooter: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Reset Password"
        subtitle="Enter your new password"
      >
        <AuthForm>
          <InputPassword
            name="password"
            label="New Password"
            placeholder="Enter new password"
          />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm new password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Reset Password
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const CardOnly: Story = {
  render: () => (
    <AuthCard
      title="Card Title"
      subtitle="Card subtitle text"
      footer={<AuthCardLink href="#">Footer link</AuthCardLink>}
    >
      <p>Card body content goes here.</p>
    </AuthCard>
  ),
}

export const EmailSent: Story = {
  render: () => (
    <AuthSection>
      <AuthEmailSent
        title="Check your email"
        message="We've sent a password reset link to your email address. Please check your inbox and follow the instructions."
        footer={
          <>
            <span>Didn't receive the email?</span>
            <AuthEmailSentLink href="/forgot-password">
              Resend
            </AuthEmailSentLink>
          </>
        }
      >
        ✉️
      </AuthEmailSent>
    </AuthSection>
  ),
}

export const EmailSentSignup: Story = {
  render: () => (
    <AuthSection>
      <AuthEmailSent
        title="Verify your email"
        message="We've sent a verification link to your email address. Please check your inbox to complete your registration."
        footer={
          <>
            <span>Back to</span>
            <AuthEmailSentLink href="/login">Sign in</AuthEmailSentLink>
          </>
        }
      >
        📧
      </AuthEmailSent>
    </AuthSection>
  ),
}

export const VerifyEmailLoading: Story = {
  render: () => (
    <AuthSection>
      <AuthVerifyEmail
        status="loading"
        title="Verifying your email..."
        message="Please wait while we verify your email address."
      >
        ⏳
      </AuthVerifyEmail>
    </AuthSection>
  ),
}

export const VerifyEmailSuccess: Story = {
  render: () => (
    <AuthSection>
      <AuthVerifyEmail
        status="success"
        title="Email verified!"
        message="Your email has been successfully verified. You can now sign in to your account."
        footer={
          <AuthVerifyEmailLink href="/login">
            Continue to sign in
          </AuthVerifyEmailLink>
        }
      >
        ✓
      </AuthVerifyEmail>
    </AuthSection>
  ),
}

export const VerifyEmailError: Story = {
  render: () => (
    <AuthSection>
      <AuthVerifyEmail
        status="error"
        title="Verification failed"
        message="The verification link is invalid or has expired. Please request a new verification email."
        footer={
          <>
            <AuthVerifyEmailLink href="/signup">
              Request new link
            </AuthVerifyEmailLink>
            <span>or</span>
            <AuthVerifyEmailLink href="/login">Sign in</AuthVerifyEmailLink>
          </>
        }
      >
        ✗
      </AuthVerifyEmail>
    </AuthSection>
  ),
}
