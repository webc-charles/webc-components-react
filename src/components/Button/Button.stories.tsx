import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'danger'],
      description: 'Visual style variant of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    action: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Basic: Story = {
  args: {
    children: 'Basic Button',
    variant: 'basic',
  },
}

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    link: '/',
  },
}

export const DisabledLink: Story = {
  args: {
    children: 'Disabled Link',
    link: '/',
    disabled: true,
  },
}
