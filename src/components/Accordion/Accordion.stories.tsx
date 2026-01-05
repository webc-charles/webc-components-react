import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
    defaultValue: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const faqItems = [
  {
    value: 'item-1',
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return.',
  },
  {
    value: 'item-2',
    title: 'How long does shipping take?',
    content:
      'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery. International shipping may take longer depending on the destination.',
  },
  {
    value: 'item-3',
    title: 'Do you offer international shipping?',
    content:
      'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost at checkout.',
  },
  {
    value: 'item-4',
    title: 'How can I track my order?',
    content:
      'Once your order ships, you will receive an email with a tracking number. You can use this number on our website or the carrier website to track your package.',
  },
]

export const Playground: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Single: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1">
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const NonCollapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible={false} defaultValue="item-1">
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Section</AccordionTrigger>
        <AccordionContent>This section is available.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>This section is disabled.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Available Section</AccordionTrigger>
        <AccordionContent>This section is also available.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const Controlled: Story = {
  render: function ControlledAccordion() {
    const [value, setValue] = useState<string>('item-1')

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Current value:</strong> {value || 'none'}
        </div>
        <Accordion
          type="single"
          value={value}
          onValueChange={(v) => setValue(v as string)}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  },
  parameters: { controls: { disable: true } },
}

export const ControlledMultiple: Story = {
  render: function ControlledMultipleAccordion() {
    const [values, setValues] = useState<string[]>(['item-1'])

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Expanded items:</strong> {values.join(', ') || 'none'}
        </div>
        <Accordion
          type="multiple"
          value={values}
          onValueChange={(v) => setValues(v as string[])}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  },
  parameters: { controls: { disable: true } },
}

export const RichContent: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Specifications</AccordionTrigger>
        <AccordionContent>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  <strong>Dimensions</strong>
                </td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  10 x 5 x 3 inches
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  <strong>Weight</strong>
                </td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  1.5 lbs
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  <strong>Material</strong>
                </td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  Aluminum alloy
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Care Instructions</AccordionTrigger>
        <AccordionContent>
          <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
            <li>Clean with a soft, damp cloth</li>
            <li>Avoid harsh chemicals or abrasives</li>
            <li>Store in a cool, dry place</li>
            <li>Do not expose to direct sunlight for extended periods</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Warranty Information</AccordionTrigger>
        <AccordionContent>
          <p>
            This product comes with a 2-year limited warranty covering
            manufacturing defects. The warranty does not cover damage from
            misuse, accidents, or normal wear and tear.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            To make a warranty claim, please contact our support team with your
            proof of purchase.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}
