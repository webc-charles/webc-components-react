import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    col: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Base number of columns (no media query)',
    },
    colXS: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns on extra small screens (≥480px)',
    },
    colSM: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns on small screens (≥768px)',
    },
    colMD: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns on medium screens (≥1024px)',
    },
    colLG: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns on large screens (≥1200px)',
    },
    colXL: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns on extra large screens (≥1400px)',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Base gap between grid items',
    },
    gapXS: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap on extra small screens (≥480px)',
    },
    gapSM: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap on small screens (≥768px)',
    },
    gapMD: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap on medium screens (≥1024px)',
    },
    gapLG: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap on large screens (≥1200px)',
    },
    gapXL: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap on extra large screens (≥1400px)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {
    col: 1,
    colXS: 2,
    colSM: 3,
    colMD: 4,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <GridItem key={n}>
          <Card>
            <CardBody>{n}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
}

export const TwoColumns: Story = {
  args: {
    col: 1,
    colSM: 2,
    gap: 'lg',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>
        <Card>
          <CardBody>Left</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>Right</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const ThreeColumns: Story = {
  args: {
    col: 1,
    colSM: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>
        <Card>
          <CardBody>Col 1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>Col 2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>Col 3</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const WithColSpan: Story = {
  args: {
    col: 4,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem col={2}>
        <Card>
          <CardBody>Span 2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem col={3}>
        <Card>
          <CardBody>Span 3</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const ResponsiveSpans: Story = {
  args: {
    col: 1,
    colMD: 4,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem col={1} colMD={2}>
        <Card>
          <CardBody>1 col → 2 on md</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={3}>
        <Card>
          <CardBody>1 col → 3 on md</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const MixedLayout: Story = {
  args: {
    col: 1,
    colMD: 12,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem col={1} colMD={12}>
        <Card>
          <CardBody>Header (12)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={3}>
        <Card>
          <CardBody>Sidebar (3)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={9}>
        <Card>
          <CardBody>Main content (9)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={4}>
        <Card>
          <CardBody>Card (4)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={4}>
        <Card>
          <CardBody>Card (4)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={4}>
        <Card>
          <CardBody>Card (4)</CardBody>
        </Card>
      </GridItem>
      <GridItem col={1} colMD={12}>
        <Card>
          <CardBody>Footer (12)</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const GapVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
        <div key={gap}>
          <p style={{ marginBottom: '0.5rem' }}>Gap: {gap}</p>
          <Grid col={4} gap={gap}>
            {[1, 2, 3, 4].map((n) => (
              <GridItem key={n}>
                <Card>
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

export const RowSpan: Story = {
  args: {
    col: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem row={2}>
        <Card>
          <CardBody>Row span 2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>3</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>4</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const ResponsiveGap: Story = {
  args: {
    col: 1,
    colSM: 2,
    colMD: 4,
    gap: 'xs',
    gapSM: 'md',
    gapMD: 'xl',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <GridItem key={n}>
          <Card>
            <CardBody>{n}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
}
