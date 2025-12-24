import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './Textarea'

const meta: Meta<typeof InputTextarea> = {
  title: 'Components/InputTextarea',
  component: InputTextarea,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current value of the textarea',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    showCount: {
      control: 'boolean',
      description: 'Whether to show character count',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputTextarea>

const InputTextareaWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '')
  return (
    <InputTextarea
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        args.onChange?.(newValue)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    placeholder: 'Enter your message...',
  },
}

export const WithLabel: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
  },
}

export const WithValue: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Bio',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}

export const WithError: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments',
    error: 'This field is required',
  },
}

export const Disabled: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Notes',
    placeholder: 'Cannot edit',
    disabled: true,
  },
}

export const WithCharacterCount: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Tweet',
    placeholder: 'What is happening?!',
    maxLength: 280,
    showCount: true,
  },
}

export const CustomRows: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Long description',
    placeholder: 'Enter a detailed description...',
    rows: 8,
  },
}

export const WithErrorAndCount: Story = {
  render: (args) => <InputTextareaWithState {...args} />,
  args: {
    label: 'Message',
    value: 'This message is too short',
    maxLength: 500,
    showCount: true,
    error: 'Message must be at least 50 characters',
  },
}
