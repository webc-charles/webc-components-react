import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../types'
import { Badge } from './Badge'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the badge',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
    contrast: false,
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  args: {
    children: 'Badge',
    variant: 'primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Badge variant={v} key={v}>
          {v}
        </Badge>
      ))}
    </div>
  ),
}

export const Contrast: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {variants.map((v) => (
          <Badge variant={v} contrast key={v}>
            {v}
          </Badge>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop to adapt badges for dark backgrounds.',
      },
    },
  },
}
