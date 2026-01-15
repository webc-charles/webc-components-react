import type { Meta, StoryObj } from '@storybook/react'

import type { ColorVariant } from '../../types'
import { Avatar } from './Avatar'
import type { AvatarSize } from './Avatar.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const sizes: AvatarSize[] = ['sm', 'md', 'lg', 'xl']

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for image',
    },
    name: {
      control: 'text',
      description: 'Name for initials fallback',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Size of the avatar',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Background color variant for fallback',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    size: 'md',
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=john',
    alt: 'John Doe',
    name: 'John Doe',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
    variant: 'primary',
  },
}

export const SingleName: Story = {
  args: {
    name: 'John',
    variant: 'secondary',
  },
}

export const Fallback: Story = {
  args: {},
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {sizes.map((s) => (
        <Avatar key={s} size={s} name="John Doe" variant="primary" />
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {variants.map((v) => (
        <Avatar key={v} variant={v} name="JD" />
      ))}
    </div>
  ),
}

export const ImageWithFallback: Story = {
  args: {
    src: 'https://broken-url.com/image.jpg',
    name: 'Jane Smith',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When the image fails to load, initials are shown as fallback.',
      },
    },
  },
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      {['Alice Brown', 'Bob Smith', 'Carol White', 'David Lee'].map(
        (name, i) => (
          <Avatar
            key={name}
            name={name}
            variant={variants[i + 1]}
            style={{
              marginLeft: i > 0 ? '-0.8rem' : 0,
              border: '2px solid white',
            }}
          />
        )
      )}
    </div>
  ),
}
