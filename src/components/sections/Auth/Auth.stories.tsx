import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'form/Button'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
import { Card, CardBody } from 'modules/Card'
import {
  AuthCard,
  AuthCardLink,
  AuthEmailSent,
  AuthEmailSentLink,
  AuthForm,
  AuthSection,
  AuthSocialGroup,
  AuthVerifyEmail,
  AuthVerifyEmailLink,
} from './index'

const meta: Meta = {
  title: 'Sections/Auth',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Login: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Sign In"
        subtitle="Sign in to your account"
        footer={
          <>
            <AuthCardLink href="/forgot-password">
              Forgot your password?
            </AuthCardLink>
            <AuthCardLink href="/signup">
              Don&apos;t have an account? Sign up
            </AuthCardLink>
          </>
        }
      >
        <AuthForm>
          <InputText
            name="identifier"
            label="Email or username"
            placeholder="email@example.com"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="••••••••"
          />
          <Button type="submit" variant="primary" appearance="button">
            Sign In
          </Button>
        </AuthForm>
      </AuthCard>

      <Card style={{ width: '33.5rem' }}>
        <CardBody>
          <AuthSocialGroup>
            <Button variant="default" appearance="outline">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthSocialGroup>
        </CardBody>
      </Card>
    </AuthSection>
  ),
}

export const Signup: Story = {
  render: () => (
    <AuthSection>
      <AuthCard
        title="Create Account"
        subtitle="Create your account"
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
            placeholder="Enter your username"
          />
          <InputText
            name="email"
            type="email"
            label="Email"
            placeholder="email@example.com"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Create Account
          </Button>
        </AuthForm>
      </AuthCard>

      <Card style={{ width: '33.5rem' }}>
        <CardBody>
          <AuthSocialGroup>
            <Button variant="default" appearance="outline">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthSocialGroup>
        </CardBody>
      </Card>
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
            placeholder="email@example.com"
          />
          <Button type="submit" variant="primary" appearance="button">
            Send Reset Link
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
  ),
}

export const ResetPassword: Story = {
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
            placeholder="Enter your new password"
          />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your new password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Reset Password
          </Button>
        </AuthForm>
      </AuthCard>
    </AuthSection>
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
            <AuthEmailSentLink href="/forgot-password">
              Resend email
            </AuthEmailSentLink>
            <AuthEmailSentLink href="/login">
              Back to sign in
            </AuthEmailSentLink>
          </>
        }
      >
        ✉️
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
            <AuthVerifyEmailLink href="/login">
              Sign in
            </AuthVerifyEmailLink>
          </>
        }
      >
        ✗
      </AuthVerifyEmail>
    </AuthSection>
  ),
}
