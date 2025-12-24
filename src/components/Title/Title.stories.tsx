import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
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
    level: 'h1',
    children: 'Heading Level 1',
  },
}

export const Level2: Story = {
  args: {
    level: 'h2',
    children: 'Heading Level 2',
  },
}

export const Level3: Story = {
  args: {
    level: 'h3',
    children: 'Heading Level 3',
  },
}

export const Level4: Story = {
  args: {
    level: 'h4',
    children: 'Heading Level 4',
  },
}

export const Level5: Story = {
  args: {
    level: 'h5',
    children: 'Heading Level 5',
  },
}

export const Level6: Story = {
  args: {
    level: 'h6',
    children: 'Heading Level 6',
  },
}
