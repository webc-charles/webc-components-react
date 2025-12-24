import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from './Number'

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the input',
    },
    onChange: {
      action: 'value changed',
      description: 'Callback when value changes',
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value',
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value',
    },
    step: {
      control: 'number',
      description: 'Step increment for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputNumber>

const InputNumberWithState = (args: any) => {
  const [value, setValue] = useState<number | undefined>(args.value)

  return (
    <InputNumber
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
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    placeholder: 'Enter a number',
  },
}

export const WithLabel: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
  },
}

export const WithValue: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Quantity',
    value: 10,
  },
}

export const WithMinMax: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    min: 0,
    max: 120,
  },
}

export const WithStep: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Price',
    placeholder: 'Enter price',
    step: 0.01,
    value: 10.5,
  },
}

export const Disabled: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Disabled input',
    placeholder: 'Enter a number',
    disabled: true,
  },
}

export const DisabledWithValue: Story = {
  render: (args) => <InputNumberWithState {...args} />,
  args: {
    label: 'Disabled with value',
    value: 42,
    disabled: true,
  },
}
