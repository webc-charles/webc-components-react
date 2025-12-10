import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Note } from './Note'

const meta: Meta<typeof Note> = {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'danger', 'warning'],
      description: 'Visual style variant of the note',
    },
    title: {
      control: 'text',
      description: 'Optional title for the note',
    },
  },
}

export default meta
type Story = StoryObj<typeof Note>

export const Default: Story = {
  args: {
    children: <p>This is a default note with informational content.</p>,
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: <p>Your changes have been saved successfully!</p>,
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: <p>There was an error processing your request.</p>,
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: <p>Please review your information before proceeding.</p>,
  },
}

export const WithTitle: Story = {
  args: {
    title: 'Important Notice',
    children: <p>This note includes a title for better organization.</p>,
  },
}

export const WithMultipleParagraphs: Story = {
  args: {
    variant: 'default',
    title: 'Getting Started',
    children: (
      <>
        <p>Welcome to the application!</p>
        <p>Here are some things to know:</p>
        <ul className="disc">
          <li>Save your work frequently</li>
          <li>Check for updates regularly</li>
          <li>Contact support if you need help</li>
        </ul>
      </>
    ),
  },
}

export const SuccessWithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Payment Received',
    children: <p>Thank you! Your payment has been processed successfully.</p>,
  },
}

export const DangerWithTitle: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    children: (
      <>
        <p>Unable to complete the operation:</p>
        <ul className="disc">
          <li>Invalid credentials</li>
          <li>Session expired</li>
        </ul>
      </>
    ),
  },
}

export const WarningWithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Action Required',
    children: (
      <p>Your subscription will expire in 7 days. Please renew to continue.</p>
    ),
  },
}
