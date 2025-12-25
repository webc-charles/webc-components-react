import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'
import { AnchorVariantTypes, AnchorAppearanceTypes } from './Link.types'

const variants: AnchorVariantTypes[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warning',
]

const appearances: AnchorAppearanceTypes[] = [
  'default',
  'underline',
  'outline',
  'arrow',
  'button',
]

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the link',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    appearance: {
      control: 'select',
      options: appearances,
      description: 'The visual style of the link',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    children: {
      control: 'text',
      description: 'Link content',
    },
  },
  args: {
    children: 'Link',
    variant: 'default',
    appearance: 'underline',
    disabled: false,
    href: '#',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    appearance: 'underline',
  },
}

export const VariantButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} variant={v} appearance="button">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const VariantOutlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} variant={v} appearance="outline">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const VariantUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} variant={v} appearance="underline">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'primary',
    appearance: 'button',
  },
}
