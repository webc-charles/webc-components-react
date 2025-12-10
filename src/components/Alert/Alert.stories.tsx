import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'success', 'danger', 'warning', 'info'],
      description: 'Visual style variant of the alert',
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert',
    },
    children: {
      control: 'text',
      description: 'Content/message of the alert',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

// Default alert
export const Default: Story = {
  args: {
    children: 'This is a default alert message.',
  },
}

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message to help guide the user.',
  },
}

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your action was completed successfully.',
  },
}

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review this information carefully before proceeding.',
  },
}

// Danger variant
export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    children: 'An error occurred. Please try again or contact support.',
  },
}

// Accent variant
export const Accent: Story = {
  args: {
    variant: 'accent',
    title: 'Special Notice',
    children: 'This is an important announcement you should be aware of.',
  },
}

// Without title
export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'This alert has no title, just the message content.',
  },
}

// With long content
export const LongContent: Story = {
  args: {
    variant: 'warning',
    title: 'Important Notice',
    children:
      'This is a much longer alert message that contains multiple sentences and detailed information. It demonstrates how the alert component handles larger amounts of text content and maintains readability across different viewport sizes.',
  },
}

// With rich content
export const WithRichContent: Story = {
  args: {
    variant: 'info',
    title: 'System Update',
    children: (
      <>
        <p>The system will be updated on:</p>
        <ul className="disc">
          <li>Date: January 15, 2024</li>
          <li>Time: 2:00 AM - 4:00 AM EST</li>
          <li>Expected downtime: 2 hours</li>
        </ul>
      </>
    ),
  },
}

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="default" title="Default">
        Default alert message
      </Alert>
      <Alert variant="info" title="Info">
        Information alert message
      </Alert>
      <Alert variant="success" title="Success">
        Success alert message
      </Alert>
      <Alert variant="warning" title="Warning">
        Warning alert message
      </Alert>
      <Alert variant="danger" title="Error">
        Danger alert message
      </Alert>
      <Alert variant="accent" title="Accent">
        Accent alert message
      </Alert>
    </div>
  ),
}

// Use case: Form validation
export const FormValidation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="danger" title="Validation Error">
        Please fix the following errors before submitting:
        <ul className="disc">
          <li>Email is required</li>
          <li>Password must be at least 8 characters</li>
        </ul>
      </Alert>
    </div>
  ),
}
