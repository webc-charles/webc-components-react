import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Title } from '../Title'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card>
      <CardBody>Basic card with body content.</CardBody>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="h3">Card Title</Title>
      </CardHeader>
      <CardBody>Card with header and body.</CardBody>
    </Card>
  ),
}

export const Complete: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="h3">Complete Card</Title>
      </CardHeader>
      <CardBody>Card with header, body, and footer.</CardBody>
      <CardFooter>
        <Button variant="primary">Save</Button>
      </CardFooter>
    </Card>
  ),
}
