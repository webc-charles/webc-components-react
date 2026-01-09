import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
    },
  },
  args: {
    label: 'Enable feature',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

function ControlledExample() {
  const [checked, setChecked] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        label={`Notifications: ${checked ? 'On' : 'Off'}`}
        checked={checked}
        onChange={setChecked}
      />
      <p style={{ fontSize: '1.4rem', color: '#666' }}>
        State: {checked ? 'enabled' : 'disabled'}
      </p>
    </div>
  )
}
