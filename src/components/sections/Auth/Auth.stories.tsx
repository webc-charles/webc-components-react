import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from 'base/Divider'
import { Spinner } from 'base/Spinner'
import { Button } from 'form/Button'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
import { Check, X } from 'lucide-react'
import {
  AuthCard,
  AuthCardBody,
  AuthCardFooter,
  AuthCardHeader,
  AuthForm,
  AuthLink,
  AuthSection,
  AuthTitle,
} from './index'

const meta: Meta = {
  title: 'Sections/Auth',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-6)' }],
    },
  },
}

export default meta
type Story = StoryObj

export const Login: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Login</AuthTitle>
          <p>Sign in to your account</p>
        </AuthCardHeader>

        <AuthCardBody>
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

          <Divider spacing="md">or</Divider>

          <AuthForm>
            <Button variant="default" appearance="outline">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthForm>
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/forgot-password">
            Forgot your password?
          </AuthLink>

          <AuthLink href="/signup">
            Don&apos;t have an account? Sign up
          </AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const Signup: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Signup</AuthTitle>
          <p>Create your account</p>
        </AuthCardHeader>

        <AuthCardBody>
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

          <Divider spacing="md">or</Divider>

          <AuthForm>
            <Button variant="default" appearance="outline">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthForm>
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/login">
            Already have an account? Sign in
          </AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const ForgotPassword: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Forgot Password</AuthTitle>
          <p>Enter your email to receive a reset link</p>
        </AuthCardHeader>

        <AuthCardBody>
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
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/login">Back to sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const ResetPassword: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Reset Password</AuthTitle>
          <p>Enter your new password</p>
        </AuthCardHeader>

        <AuthCardBody>
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
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/login">Back to sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const EmailSent: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Check your email</AuthTitle>
        </AuthCardHeader>

        <AuthCardBody>
          <p>
            We've sent a password reset link to your email address. Please
            check your inbox and follow the instructions.
          </p>
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/forgot-password">Resend email</AuthLink>

          <AuthLink href="/login">Back to sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailLoading: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>
            <Spinner />
            Verifying your email
          </AuthTitle>
        </AuthCardHeader>

        <AuthCardBody>
          <p>Please wait while we verify your email address.</p>
        </AuthCardBody>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailSuccess: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle className="text-success-2">Email verified</AuthTitle>
        </AuthCardHeader>

        <AuthCardBody>
          <p>
            Your email has been successfully verified. You can now sign in
            to your account.
          </p>
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/forgot-password">Resend email</AuthLink>

          <AuthLink href="/login">Back to sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailError: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader title="Verification failed">
          <AuthTitle className="text-danger-2">
            Verification failed
          </AuthTitle>
        </AuthCardHeader>

        <AuthCardBody>
          <p>
            The verification link is invalid or has expired. Please request
            a new verification email.
          </p>
        </AuthCardBody>

        <AuthCardFooter>
          <AuthLink href="/signup">Request new link</AuthLink>
          <AuthLink href="/login">Sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}
