import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ButtonAppearanceTypes, ButtonVariantTypes } from './Button.types'

const variants: ButtonVariantTypes[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warning',
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
    disabled: false,
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

export const VariantButtons: Story = {
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

export const VariantOutlines: Story = {
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

export const VariantUnderlines: Story = {
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

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'primary',
    appearance: 'button',
  },
}
