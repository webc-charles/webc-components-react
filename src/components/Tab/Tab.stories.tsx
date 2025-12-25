import type { Meta, StoryObj } from '@storybook/react'
import { Tab, TabList, TabButton, TabPanels, TabPanel } from './Tab'
import { ButtonVariantTypes, ButtonAppearanceTypes } from '../Button/Button.types'

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
  },
  args: {
    defaultValue: 'tab1',
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Playground: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabList>
        <TabButton value="tab1">Tab 1</TabButton>
        <TabButton value="tab2">Tab 2</TabButton>
        <TabButton value="tab3">Tab 3</TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Content for tab 1</TabPanel>
        <TabPanel value="tab2">Content for tab 2</TabPanel>
        <TabPanel value="tab3">Content for tab 3</TabPanel>
      </TabPanels>
    </Tab>
  ),
  args: {
    defaultValue: 'tab1',
  },
}

const variants: ButtonVariantTypes[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warning',
]

export const AllVariants: Story = {
  render: () => (
    <Tab defaultValue="default">
      <TabList>
        {variants.map((v) => (
          <TabButton key={v} value={v} variant={v}>
            {v}
          </TabButton>
        ))}
      </TabList>
      <TabPanels>
        {variants.map((v) => (
          <TabPanel key={v} value={v}>
            Content for {v} tab
          </TabPanel>
        ))}
      </TabPanels>
    </Tab>
  ),
}

const appearances: ButtonAppearanceTypes[] = [
  'default',
  'underline',
  'outline',
  'button',
]

export const AllAppearances: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {appearances.map((appearance) => (
        <div key={appearance}>
          <p style={{ marginBottom: '0.5rem' }}>Appearance: {appearance}</p>
          <Tab defaultValue="tab1">
            <TabList>
              <TabButton value="tab1" variant="primary" appearance={appearance}>
                Tab 1
              </TabButton>
              <TabButton value="tab2" variant="primary" appearance={appearance}>
                Tab 2
              </TabButton>
              <TabButton value="tab3" variant="primary" appearance={appearance}>
                Tab 3
              </TabButton>
            </TabList>
            <TabPanels>
              <TabPanel value="tab1">Content for tab 1</TabPanel>
              <TabPanel value="tab2">Content for tab 2</TabPanel>
              <TabPanel value="tab3">Content for tab 3</TabPanel>
            </TabPanels>
          </Tab>
        </div>
      ))}
    </div>
  ),
}

export const ButtonAppearance: Story = {
  render: () => (
    <Tab defaultValue="tab1">
      <TabList>
        <TabButton value="tab1" variant="primary" appearance="button">
          Tab 1
        </TabButton>
        <TabButton value="tab2" variant="primary" appearance="button">
          Tab 2
        </TabButton>
        <TabButton value="tab3" variant="primary" appearance="button">
          Tab 3
        </TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Content for tab 1</TabPanel>
        <TabPanel value="tab2">Content for tab 2</TabPanel>
        <TabPanel value="tab3">Content for tab 3</TabPanel>
      </TabPanels>
    </Tab>
  ),
}

export const UnderlineAppearance: Story = {
  render: () => (
    <Tab defaultValue="tab1">
      <TabList>
        <TabButton value="tab1" variant="primary" appearance="underline">
          Tab 1
        </TabButton>
        <TabButton value="tab2" variant="primary" appearance="underline">
          Tab 2
        </TabButton>
        <TabButton value="tab3" variant="primary" appearance="underline">
          Tab 3
        </TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Content for tab 1</TabPanel>
        <TabPanel value="tab2">Content for tab 2</TabPanel>
        <TabPanel value="tab3">Content for tab 3</TabPanel>
      </TabPanels>
    </Tab>
  ),
}
