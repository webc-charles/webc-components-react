import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../../types'
import { Button } from './Button'
import { ButtonAppearanceTypes } from './Button.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const appearances: ButtonAppearanceTypes[] = [
  'default',
  'underline',
  'outline',
  'button',
]

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    appearance: {
      control: 'select',
      options: appearances,
      description: 'The visual style of the button',
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
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    appearance: 'button',
    contrast: false,
    disabled: false,
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    appearance: 'button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="button" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const AllOutlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="outline" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const AllUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="underline" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: 'Submitting...',
    loading: true,
    variant: 'primary',
    appearance: 'button',
  },
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
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Solid buttons</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Button variant={v} appearance="button" contrast key={v}>
                {v}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Outline buttons</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Button variant={v} appearance="outline" contrast key={v}>
                {v}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <p style={{ color: '#999', marginBottom: '1rem', fontSize: '1.4rem' }}>Underline buttons</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <Button variant={v} appearance="underline" contrast key={v}>
                {v}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop to adapt buttons for dark backgrounds. Works with all variants and appearances.',
      },
    },
  },
}
