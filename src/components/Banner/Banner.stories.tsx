import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Link } from '../Link'
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from './Banner'
import { BannerAlignTypes, BannerOverlayTypes } from './Banner.types'

const alignOptions: BannerAlignTypes[] = ['left', 'center', 'right']
const overlayOptions: BannerOverlayTypes[] = ['none', 'light', 'dark']

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
  },
  args: {
    overlay: 'none',
    minHeight: '40rem',
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: () => (
    <Banner backgroundColor="var(--color-primary-2)">
      <BannerContent textColor="light">
        <BannerTitle>Welcome to Our Platform</BannerTitle>
        <BannerSubtitle>Build something amazing today</BannerSubtitle>
        <BannerText>
          Discover the tools and resources you need to bring your ideas to life.
          Start your journey with us and transform the way you work.
        </BannerText>
        <BannerActions>
          <Button variant="info" appearance="button">
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
  render: () => (
    <Banner backgroundImage={sampleImage} overlay="dark">
      <BannerContent textColor="light" align="center">
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
  render: () => (
    <Banner backgroundImage={sampleImage} overlay="light">
      <BannerContent textColor="dark" align="left">
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
  render: () => (
    <Banner backgroundImage={sampleImage} overlay="dark">
      <BannerContent textColor="light" align="right" maxWidth="50rem">
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
  render: () => (
    <Banner backgroundImage={sampleImage} overlay="dark" minHeight="50rem">
      <BannerContent textColor="light" align="left" justify="end">
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

export const TopContent: Story = {
  render: () => (
    <Banner backgroundImage={sampleImage} overlay="dark" minHeight="50rem">
      <BannerContent textColor="light" align="center" justify="start">
        <BannerSubtitle>Announcement</BannerSubtitle>
        <BannerTitle level="h2">Free Shipping This Weekend</BannerTitle>
        <BannerActions>
          <Button variant="success" appearance="button">
            Shop Now
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const MinimalHero: Story = {
  render: () => (
    <Banner backgroundColor="var(--color-grey-6)" minHeight="30rem">
      <BannerContent align="center" textColor="dark">
        <BannerTitle>Simple. Clean. Effective.</BannerTitle>
        <BannerText>Less is more. Focus on what matters.</BannerText>
        <BannerActions>
          <Button variant="primary" appearance="button">
            Get Started
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}

export const VerticalButtons: Story = {
  render: () => (
    <Banner backgroundColor="var(--color-info-2)">
      <BannerContent textColor="light" align="center">
        <BannerTitle>Choose Your Path</BannerTitle>
        <BannerSubtitle>Select the option that fits you best</BannerSubtitle>
        <BannerActions direction="vertical">
          <Button variant="primary" appearance="button">
            For Individuals
          </Button>
          <Button variant="primary" appearance="button">
            For Teams
          </Button>
          <Button variant="primary" appearance="button">
            For Enterprise
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  ),
}
