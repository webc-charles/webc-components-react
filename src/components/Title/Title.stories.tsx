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
    size: {
      control: 'select',
      options: ['lg', 'xl', 'xxl'],
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

export const SizeLG: Story = {
  args: {
    level: '1',
    children: 'Heading LG',
    size: 'lg',
  },
}

export const SizeXL: Story = {
  args: {
    level: '1',
    children: 'Heading XL',
    size: 'xl',
  },
}
