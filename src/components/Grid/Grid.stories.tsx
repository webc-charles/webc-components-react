import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const gridStyles = {
  background: 'var(--color-grey-6',
  padding: '1rem',
}

const cardStyles = {
  padding: '1rem',
}

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {
  render: () => (
    <Grid col={3} gap="md" style={gridStyles}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <GridItem key={n}>
          <Card style={cardStyles}>
            <CardBody>{n}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
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
