import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './Textarea'

const meta: Meta<typeof InputTextarea> = {
  title: 'Form/Textarea',
  component: InputTextarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputTextarea>

const TextareaWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '')
  return <InputTextarea {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: { label: 'Description', placeholder: 'Enter description' },
}

export const WithCharacterCount: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: { label: 'Bio', maxLength: 280, showCount: true },
}

export const Disabled: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: { label: 'Notes', disabled: true },
}
