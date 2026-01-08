import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
import { Tooltip } from './Tooltip'
import { TooltipPosition } from './Tooltip.types'

const positions: TooltipPosition[] = ['top', 'bottom', 'left', 'right']

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    position: {
      control: 'select',
      options: positions,
      description: 'Position relative to trigger',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    delay: {
      control: 'number',
      description: 'Delay before showing (ms)',
      table: {
        defaultValue: { summary: '200' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },
  },
  args: {
    content: 'This is a tooltip',
    position: 'top',
    delay: 200,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button appearance="button">Hover me</Button>
      </Tooltip>
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div
      style={{
        padding: '8rem',
        display: 'flex',
        gap: '4rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {positions.map((pos) => (
        <Tooltip key={pos} content={`Tooltip on ${pos}`} position={pos} delay={0}>
          <Button appearance="outline">{pos}</Button>
        </Tooltip>
      ))}
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    content: 'This is a longer tooltip with more detailed information that wraps to multiple lines.',
  },
  render: (args) => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button appearance="button">Hover for details</Button>
      </Tooltip>
    </div>
  ),
}

export const WithReactContent: Story = {
  render: () => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        content={
          <div>
            <strong>Bold title</strong>
            <br />
            <span style={{ opacity: 0.8 }}>Additional info</span>
          </div>
        }
        delay={0}
      >
        <Button appearance="button">Rich tooltip</Button>
      </Tooltip>
    </div>
  ),
}

export const OnIconButton: Story = {
  render: () => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Settings" position="bottom" delay={0}>
        <Button appearance="button" aria-label="Settings">
          ⚙️
        </Button>
      </Tooltip>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button appearance="button">No tooltip</Button>
      </Tooltip>
    </div>
  ),
}

export const NoDelay: Story = {
  args: {
    delay: 0,
  },
  render: (args) => (
    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button appearance="button">Instant tooltip</Button>
      </Tooltip>
    </div>
  ),
}

export const EdgeDetection: Story = {
  render: () => (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '20rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip content="This tooltip should flip to the right" position="left" delay={0}>
          <Button appearance="outline">Left edge</Button>
        </Tooltip>
        <Tooltip content="This tooltip should flip to the left" position="right" delay={0}>
          <Button appearance="outline">Right edge</Button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip content="This is a long tooltip that should shift to stay in viewport" position="top" delay={0}>
          <Button appearance="outline">Long tooltip left</Button>
        </Tooltip>
        <Tooltip content="This is a long tooltip that should shift to stay in viewport" position="top" delay={0}>
          <Button appearance="outline">Long tooltip right</Button>
        </Tooltip>
      </div>
    </div>
  ),
}
