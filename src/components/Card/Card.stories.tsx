import type { Meta, StoryObj } from '@storybook/react'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Title,
} from 'components'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

// Basic card with just body
export const Basic: Story = {
  render: () => (
    <Card>
      <CardBody>
        <p>This is a basic card with only a body section.</p>
      </CardBody>
    </Card>
  ),
}

// Card with header and body
export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="3">Card Title</Title>
      </CardHeader>
      <CardBody>
        <p>This card has a header and body section.</p>
      </CardBody>
    </Card>
  ),
}

// Card with all sections
export const Complete: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="3">Complete Card</Title>
        <Badge variant="success">Paid</Badge>
      </CardHeader>
      <CardBody>
        <p>This card includes all three sections: header, body, and footer.</p>
        <p>
          The body can contain multiple paragraphs or any other content you
          need.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="primary" link="/">
          save
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="3">Invoice #12345</Title>
        <Badge variant="primaryy">Finalized</Badge>
      </CardHeader>
      <CardBody>
        <p>Customer: John Doe</p>
        <p>Amount: $1,500.00</p>
        <p>Due Date: January 15, 2024</p>
      </CardBody>
    </Card>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Title level="3">Project Update</Title>
      </CardHeader>
      <CardBody>
        <Title level="4">Progress</Title>
        <p>We've completed the following milestones:</p>
        <ul className="disc">
          <li>Design phase completed</li>
          <li>Development started</li>
          <li>Testing environment set up</li>
        </ul>
        <Title level="4">Next Steps</Title>
        <p>The team will focus on implementing the core features.</p>
      </CardBody>
      <CardFooter>
        <Badge variant="success">Paid</Badge>
      </CardFooter>
    </Card>
  ),
}
