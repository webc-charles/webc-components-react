import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputDate } from './Date'

const meta: Meta<typeof InputDate> = {
  title: 'Form/Date',
  component: InputDate,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputDate>

const DateWithState = (args: any) => {
  const [date, setDate] = useState<Date | null>(args.selected || null)
  return <InputDate {...args} selected={date} onChange={setDate} />
}

export const Default: Story = {
  render: (args) => <DateWithState {...args} />,
  args: { placeholder: 'Select date' },
}

export const WithValue: Story = {
  render: (args) => <DateWithState {...args} />,
  args: { selected: new Date() },
}

export const Disabled: Story = {
  render: (args) => <DateWithState {...args} />,
  args: { placeholder: 'Select date', disabled: true },
}
