import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// Wrapper component to use hooks
const CheckboxWrapper = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

// Interactive checkbox (default)
export const Interactive: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    label: 'Accept terms and conditions',
  },
}

// Checked state
const CheckedWrapper = (args: any) => {
  const [checked, setChecked] = useState(true)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

export const Checked: Story = {
  render: (args) => <CheckedWrapper {...args} />,
  args: {
    label: 'Checked checkbox',
  },
}

// Disabled unchecked
const DisabledUncheckedWrapper = (args: any) => {
  const [checked, setChecked] = useState(false)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

export const DisabledUnchecked: Story = {
  render: (args) => <DisabledUncheckedWrapper {...args} />,
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
}

// Disabled checked
const DisabledCheckedWrapper = (args: any) => {
  const [checked, setChecked] = useState(true)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

export const DisabledChecked: Story = {
  render: (args) => <DisabledCheckedWrapper {...args} />,
  args: {
    label: 'Disabled checked',
    disabled: true,
  },
}

// Multiple checkboxes
const MultipleCheckboxesWrapper = () => {
  const [options, setOptions] = useState({
    email: true,
    sms: false,
    push: false,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox
        checked={options.email}
        onChange={(checked) => setOptions({ ...options, email: checked })}
        label="Email notifications"
      />
      <Checkbox
        checked={options.sms}
        onChange={(checked) => setOptions({ ...options, sms: checked })}
        label="SMS notifications"
      />
      <Checkbox
        checked={options.push}
        onChange={(checked) => setOptions({ ...options, push: checked })}
        label="Push notifications"
      />
    </div>
  )
}

export const MultipleCheckboxes: Story = {
  render: () => <MultipleCheckboxesWrapper />,
}
