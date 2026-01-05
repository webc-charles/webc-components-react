import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../types'
import { Link } from './Link'
import { AnchorAppearanceTypes } from './Link.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
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
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
      table: {
        defaultValue: { summary: 'false' },
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
    contrast: false,
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

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="button">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const AllOutlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="outline">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const AllUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="underline">
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

export const Contrast: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Solid links</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Link key={v} href="#" variant={v} appearance="button" contrast>
                {v}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Outline links</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Link key={v} href="#" variant={v} appearance="outline" contrast>
                {v}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Underline links</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Link key={v} href="#" variant={v} appearance="underline" contrast>
                {v}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop to adapt links for dark backgrounds. Works with all variants and appearances.',
      },
    },
  },
}
