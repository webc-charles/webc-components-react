import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Heading level (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'Content of the title',
    },
  },
}

export default meta
type Story = StoryObj<typeof Title>

export const Level1: Story = {
  args: {
    level: '1',
    children: 'Heading Level 1',
  },
}

export const Level2: Story = {
  args: {
    level: '2',
    children: 'Heading Level 2',
  },
}

export const Level3: Story = {
  args: {
    level: '3',
    children: 'Heading Level 3',
  },
}

export const Level4: Story = {
  args: {
    level: '4',
    children: 'Heading Level 4',
  },
}

export const Level5: Story = {
  args: {
    level: '5',
    children: 'Heading Level 5',
  },
}

export const Level6: Story = {
  args: {
    level: '6',
    children: 'Heading Level 6',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title level="1">Heading Level 1</Title>
      <Title level="2">Heading Level 2</Title>
      <Title level="3">Heading Level 3</Title>
      <Title level="4">Heading Level 4</Title>
      <Title level="5">Heading Level 5</Title>
      <Title level="6">Heading Level 6</Title>
    </div>
  ),
}
