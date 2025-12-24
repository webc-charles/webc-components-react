import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {
  render: () => (
    <Grid col={3} gap="md">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <GridItem key={n}>
          <Card><CardBody>{n}</CardBody></Card>
        </GridItem>
      ))}
    </Grid>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <Grid col={2} gap="lg">
      <GridItem><Card><CardBody>Left</CardBody></Card></GridItem>
      <GridItem><Card><CardBody>Right</CardBody></Card></GridItem>
    </Grid>
  ),
}

export const WithColSpan: Story = {
  render: () => (
    <Grid col={4} gap="md">
      <GridItem col={2}><Card><CardBody>Span 2</CardBody></Card></GridItem>
      <GridItem><Card><CardBody>1</CardBody></Card></GridItem>
      <GridItem><Card><CardBody>1</CardBody></Card></GridItem>
    </Grid>
  ),
}
