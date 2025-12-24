import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputRadio } from './Radio'

const meta: Meta<typeof InputRadio> = {
  title: 'Form/Radio',
  component: InputRadio,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputRadio>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const RadioWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '')
  return <InputRadio {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: { name: 'default', options },
}

export const WithLabel: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: { name: 'labeled', label: 'Select option', options },
}

export const Horizontal: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: { name: 'horizontal', options, direction: 'horizontal' },
}

export const Disabled: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: { name: 'disabled', options, disabled: true },
}
