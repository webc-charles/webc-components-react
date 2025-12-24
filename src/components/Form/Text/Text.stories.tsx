import type { Meta, StoryObj } from '@storybook/react'
import { InputText } from './Text'

const meta: Meta<typeof InputText> = {
  title: 'Form/Text',
  component: InputText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputText>

export const Default: Story = {
  args: { label: 'Email', placeholder: 'Enter email' },
}

export const Disabled: Story = {
  args: { label: 'Email', placeholder: 'Enter email', disabled: true },
}
