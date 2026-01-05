import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
import { Link } from '../Link'
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from './Banner'
import {
  BannerOverlayTypes,
  BannerTextAlignTypes,
  horizontalAlignTypes,
  verticalAlignTypes,
} from './Banner.types'

const horizontalAlignOptions: horizontalAlignTypes[] = [
  'left',
  'center',
  'right',
]
const verticalAlignOptions: verticalAlignTypes[] = ['start', 'center', 'end']
const overlayOptions: BannerOverlayTypes[] = ['none', 'light', 'dark']
const textAlignOptions: BannerTextAlignTypes[] = ['left', 'center', 'right']

const sampleImage =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: {
      control: 'text',
      description: 'URL of the background image',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color (used when no image)',
    },
    overlay: {
      control: 'select',
      options: overlayOptions,
      description: 'Overlay for better text contrast',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Minimum height of the banner',
      table: {
        defaultValue: { summary: '40rem' },
      },
    },
    horizontalAlign: {
      control: 'select',
      options: horizontalAlignOptions,
      description: 'Horizontal alignment of content',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: verticalAlignOptions,
      description: 'Vertical alignment of content',
      table: {
        defaultValue: { summary: 'center' },
      },
    },
  },
  args: {
    overlay: 'none',
    minHeight: '40rem',
    horizontalAlign: 'left',
    verticalAlign: 'center',
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => (
    <Banner {...args} backgroundColor="var(--color-primary-2)">
      <BannerContent textColor="light">
        <BannerTitle>Welcome to Our Platform</BannerTitle>
        <BannerSubtitle>Build something amazing today</BannerSubtitle>
        <BannerText>
          Discover the tools and resources you need to bring your ideas to life.
          Start your journey with us and transform the way you work.
        </BannerText>
        <BannerActions>
          <Button variant="contrast" appearance="button">
            Get Started
          </Button>
          <Button variant="contrast" appearance="outline">
            Learn More
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const WithBackgroundImage: Story = {
  render: (args) => (
    <Banner
      {...args}
      backgroundImage={sampleImage}
      overlay="dark"
      horizontalAlign="center"
    >
      <BannerContent textColor="light">
        <BannerTitle>Explore the Mountains</BannerTitle>
        <BannerSubtitle>Adventure awaits beyond the horizon</BannerSubtitle>
        <BannerText>
          Experience breathtaking views and unforgettable moments in nature's
          most spectacular landscapes.
        </BannerText>
        <BannerActions>
          <Button variant="primary" appearance="button">
            Book Now
          </Button>
          <Link variant="contrast" appearance="underline">
            View Gallery
          </Link>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const LightOverlay: Story = {
  render: (args) => (
    <Banner
      {...args}
      backgroundImage={sampleImage}
      overlay="light"
      horizontalAlign="left"
    >
      <BannerContent textColor="dark">
        <BannerTitle>Nature Retreats</BannerTitle>
        <BannerSubtitle>Find your peace</BannerSubtitle>
        <BannerText>
          Disconnect from the everyday and reconnect with yourself in our
          carefully curated natural escapes.
        </BannerText>
        <BannerActions>
          <Button variant="primary" appearance="button">
            Explore
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const RightAligned: Story = {
  render: (args) => (
    <Banner
      {...args}
      backgroundImage={sampleImage}
      overlay="dark"
      horizontalAlign="right"
    >
      <BannerContent textColor="light" maxWidth="50rem">
        <BannerTitle level="h2">Premium Collection</BannerTitle>
        <BannerSubtitle>Exclusive designs for you</BannerSubtitle>
        <BannerText>Handcrafted with attention to every detail.</BannerText>
        <BannerActions>
          <Button variant="secondary" appearance="button">
            Shop Now
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const BottomContent: Story = {
  render: (args) => (
    <Banner
      {...args}
      backgroundImage={sampleImage}
      overlay="dark"
      minHeight="50rem"
      horizontalAlign="left"
      verticalAlign="end"
    >
      <BannerContent textColor="light">
        <BannerTitle level="h2">Summer Collection 2025</BannerTitle>
        <BannerSubtitle>Now Available</BannerSubtitle>
        <BannerActions>
          <Button variant="primary" appearance="button">
            View Collection
          </Button>
          <Button variant="contrast" appearance="outline">
            See Lookbook
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}
