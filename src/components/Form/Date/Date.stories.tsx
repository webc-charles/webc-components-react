import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { str } from 'i18n'
import { InputDate } from './Date'

const meta: Meta<typeof InputDate> = {
  title: 'Form/Date',
  component: InputDate,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    dateFormat: {
      control: 'text',
      description: 'Date format string',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Title/label for the date picker',
    },
  },
  args: {
    placeholder: str.select_date,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputDate>

const DateWithState = (args: {
  placeholder?: string
  dateFormat?: string
  disabled?: boolean
  title?: string
  selected?: Date | null
  minDate?: Date
  maxDate?: Date
}) => {
  const [date, setDate] = useState<Date | null>(args.selected || null)
  return (
    <InputDate
      {...args}
      selected={date}
      onChange={(newDate) => setDate(newDate)}
    />
  )
}

export const Playground: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: str.select_date,
    title: str.select_date,
  },
}

export const WithValue: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    selected: new Date(),
    title: str.select_date,
  },
}

export const WithMinMax: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: str.select_date,
    title: str.select_date,
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
}

export const Disabled: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: str.select_date,
    title: str.select_date,
    disabled: true,
  },
}
