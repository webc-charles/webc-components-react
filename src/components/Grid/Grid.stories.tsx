import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import { GapSize } from './Grid.types'

const gapSizes: GapSize[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl']

const gridStyles = {
  background: 'var(--color-grey-6)',
  padding: '1rem',
}

const cardStyles = {
  padding: '1rem',
}

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    col: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    gap: {
      control: 'select',
      options: gapSizes,
      description: 'Gap size between grid items',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    colXS: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at XS breakpoint',
    },
    colSM: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at SM breakpoint',
    },
    colMD: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at MD breakpoint',
    },
    colLG: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at LG breakpoint',
    },
    colXL: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at XL breakpoint',
    },
  },
  args: {
    col: 3,
    gap: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Grid>

export const Playground: Story = {
  render: (args) => (
    <Grid {...args} style={gridStyles}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <GridItem key={n}>
          <Card style={cardStyles}>
            <CardBody>{n}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
  args: {
    col: 3,
    gap: 'md',
  },
}

export const TwoColumns: Story = {
  render: () => (
    <Grid col={2} gap="lg" style={gridStyles}>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>Left</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>Right</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const WithColSpan: Story = {
  render: () => (
    <Grid col={4} gap="md" style={gridStyles}>
      <GridItem col={2}>
        <Card style={cardStyles}>
          <CardBody>Span 2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const GapSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {gapSizes.map((size) => (
        <div key={size}>
          <p style={{ marginBottom: '0.5rem' }}>Gap: {size}</p>
          <Grid col={4} gap={size} style={gridStyles}>
            {[1, 2, 3, 4].map((n) => (
              <GridItem key={n}>
                <Card style={cardStyles}>
                  <CardBody>{n}</CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
}
