import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem, Link, Title } from 'components'
import {
  FooterBottom,
  FooterBottomLink,
  FooterBottomNav,
  FooterMain,
  FooterMainLink,
  FooterMainNav,
  FooterRoot,
} from './index'

const meta: Meta<typeof FooterRoot> = {
  title: 'Sections/Footer',
  component: FooterRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-6)' }],
    },
  },
}

export default meta
type Story = StoryObj<typeof FooterRoot>

export const Default: Story = {
  render: (args) => (
    <FooterRoot {...args}>
      <FooterMain>
        <Grid col={1} colSM={2} colMD={4} gap="lg">
          <GridItem>
            <Title level="h3">Company</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Careers</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Press</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Products</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Features</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Pricing</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Integrations</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Resources</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Documentation</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Tutorials</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Blog</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Support</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Help Center</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Contact</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Status</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </Grid>
      </FooterMain>
      <FooterBottom>
        <span>&copy; 2026 Company. All rights reserved.</span>
        <FooterBottomNav>
          <FooterBottomLink asChild>
            <Link href="#">Privacy Policy</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Terms of Service</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Cookies</Link>
          </FooterBottomLink>
        </FooterBottomNav>
      </FooterBottom>
    </FooterRoot>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <FooterRoot>
      <FooterMain>
        <Grid col={1} colSM={3} gap="lg">
          <GridItem>
            <Title level="h3">Navigation</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Home</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Services</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Contact</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Services</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Consulting</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Development</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Design</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Contact</Title>
            <FooterMainNav aria-label="Contact information">
              <span>contact@example.com</span>
              <span>+1 234 567 890</span>
            </FooterMainNav>
          </GridItem>
        </Grid>
      </FooterMain>
      <FooterBottom>
        <span>&copy; 2026 Company</span>
        <FooterBottomNav>
          <FooterBottomLink asChild>
            <Link href="#">Privacy</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Terms</Link>
          </FooterBottomLink>
        </FooterBottomNav>
      </FooterBottom>
    </FooterRoot>
  ),
}

export const Simple: Story = {
  render: () => (
    <FooterRoot>
      <FooterBottom>
        <span>&copy; 2026 Company. All rights reserved.</span>
        <FooterBottomNav>
          <FooterBottomLink asChild>
            <Link href="#">Privacy</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Terms</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Contact</Link>
          </FooterBottomLink>
        </FooterBottomNav>
      </FooterBottom>
    </FooterRoot>
  ),
}

export const WithCurrentLink: Story = {
  render: () => (
    <FooterRoot>
      <FooterMain>
        <Grid col={1} colSM={2} gap="lg">
          <GridItem>
            <Title level="h3">Pages</Title>
            <FooterMainNav>
              <FooterMainLink asChild current>
                <Link href="#">Home</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Contact</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Legal</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Privacy Policy</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Terms of Service</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </Grid>
      </FooterMain>
      <FooterBottom>
        <span>&copy; 2026 Company</span>
        <FooterBottomNav>
          <FooterBottomLink asChild current>
            <Link href="#">Privacy</Link>
          </FooterBottomLink>
          <FooterBottomLink asChild>
            <Link href="#">Terms</Link>
          </FooterBottomLink>
        </FooterBottomNav>
      </FooterBottom>
    </FooterRoot>
  ),
}
