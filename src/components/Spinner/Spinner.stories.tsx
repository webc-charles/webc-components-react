import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../types'
import { Spinner } from './Spinner'
import { SpinnerSize } from './Spinner.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const sizes: SpinnerSize[] = ['sm', 'md', 'lg']

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
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
    variant: 'default',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      {variants.map((v) => (
        <Spinner variant={v} key={v} />
      ))}
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      {sizes.map((s) => (
        <Spinner size={s} variant="primary" key={s} />
      ))}
    </div>
  ),
}

export const Contrast: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Spinner contrast size="sm" />
        <Spinner contrast size="md" />
        <Spinner contrast size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop for spinners on dark or colored backgrounds.',
      },
    },
  },
}
