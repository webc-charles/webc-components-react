import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputRadio } from './Radio'

const meta: Meta<typeof InputRadio> = {
  title: 'Components/InputRadio',
  component: InputRadio,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio group',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether all options are disabled',
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction of options',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputRadio>

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const InputRadioWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '')
  return (
    <InputRadio
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
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'default-radio',
    options: defaultOptions,
  },
}

export const WithLabel: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'labeled-radio',
    label: 'Select an option',
    options: defaultOptions,
  },
}

export const WithPreselected: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'preselected-radio',
    label: 'Notification preference',
    options: defaultOptions,
    value: 'option2',
  },
}

export const Horizontal: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'horizontal-radio',
    label: 'Choose size',
    options: [
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
    ],
    direction: 'horizontal',
  },
}

export const WithError: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'error-radio',
    label: 'Payment method',
    options: [
      { value: 'card', label: 'Credit Card' },
      { value: 'paypal', label: 'PayPal' },
      { value: 'bank', label: 'Bank Transfer' },
    ],
    error: 'Please select a payment method',
  },
}

export const Disabled: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'disabled-radio',
    label: 'Disabled options',
    options: defaultOptions,
    disabled: true,
  },
}

export const WithDisabledOption: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'partial-disabled-radio',
    label: 'Subscription plan',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise (Coming soon)', disabled: true },
    ],
  },
}

export const YesNo: Story = {
  render: (args) => <InputRadioWithState {...args} />,
  args: {
    name: 'yesno-radio',
    label: 'Do you agree to the terms?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    direction: 'horizontal',
  },
}
