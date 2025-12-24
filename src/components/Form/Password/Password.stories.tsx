import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from './Password'

const meta: Meta<typeof InputPassword> = {
  title: 'Form/Password',
  component: InputPassword,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputPassword>

export const Default: Story = {
  args: { label: 'Password', placeholder: 'Enter password' },
}

export const Disabled: Story = {
  args: { label: 'Password', placeholder: 'Enter password', disabled: true },
}
