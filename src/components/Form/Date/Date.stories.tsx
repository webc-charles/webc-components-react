import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { InputDate } from './Date'

const meta: Meta<typeof InputDate> = {
  title: 'Components/InputDate',
  component: InputDate,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'date',
      description: 'Currently selected date',
    },
    onChange: {
      action: 'date changed',
      description: 'Callback when date is selected',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    dateFormat: {
      control: 'text',
      description: 'Format string for displaying the date',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputDate>

// Helper component to manage state
const DatePickerWithState = (args: any) => {
  const [date, setDate] = useState<Date | null>(args.selected || null)

  return (
    <InputDate
      {...args}
      selected={date}
      onChange={(newDate) => {
        setDate(newDate)
        args.onChange?.(newDate)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
  },
}

export const WithSelectedDate: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    selected: new Date(),
    placeholder: 'Select date',
  },
}

export const CustomFormat: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
    dateFormat: 'dd/MM/yyyy',
  },
}

export const WithMinDate: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
    minDate: new Date(),
  },
}

export const WithMaxDate: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
    maxDate: new Date(),
  },
}

export const WithDateRange: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
    minDate: new Date(2024, 0, 1), // Jan 1, 2024
    maxDate: new Date(2024, 11, 31), // Dec 31, 2024
  },
}

export const Disabled: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select date',
    disabled: true,
  },
}

export const DisabledWithDate: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    selected: new Date(),
    placeholder: 'Select date',
    disabled: true,
  },
}
