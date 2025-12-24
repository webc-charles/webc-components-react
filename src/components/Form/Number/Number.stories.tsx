import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from './Number'

const meta: Meta<typeof InputNumber> = {
  title: 'Form/Number',
  component: InputNumber,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputNumber>

const NumberWithState = (args: any) => {
  const [value, setValue] = useState(args.value ?? 0)
  return <InputNumber {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: { label: 'Quantity' },
}

export const WithMinMax: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: { label: 'Age', min: 0, max: 120 },
}

export const Disabled: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: { label: 'Quantity', disabled: true },
}
