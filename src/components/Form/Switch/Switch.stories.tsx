import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../../types'
import { Switch } from './Switch'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant when checked',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
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
    variant: 'primary',
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

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {variants.map((v) => (
        <Switch key={v} variant={v} label={v} defaultChecked />
      ))}
    </div>
  ),
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

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
}
