import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'
import type { SpinnerSize } from './Spinner.types'

const sizes: SpinnerSize[] = ['sm', 'md', 'lg']

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      description: 'The size of the spinner',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      {sizes.map((s) => (
        <Spinner size={s} key={s} />
      ))}
    </div>
  ),
}
