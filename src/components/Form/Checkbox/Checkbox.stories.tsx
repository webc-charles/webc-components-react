import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

const CheckboxWithState = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: { label: 'Accept terms' },
}

export const Checked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: { label: 'Checked', checked: true },
}

export const Disabled: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: { label: 'Disabled', disabled: true },
}
