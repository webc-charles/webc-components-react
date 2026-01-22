import type { Meta, StoryObj } from '@storybook/react'
import { LayoutDashboard, UserCog, Settings, LogOut } from 'lucide-react'
import { Avatar } from '../Avatar'
import { Title } from '../Title'
import {
  DashboardLayout,
  DashboardSidebar,
  DashboardBrand,
  DashboardMain,
  DashboardHeader,
  DashboardNav,
  DashboardNavLink,
} from './index'

const meta: Meta<typeof DashboardLayout> = {
  title: 'Components/Dashboard',
  component: DashboardLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Dashboard content (DashboardSidebar, DashboardMain)',
    },
  },
}

export default meta
type Story = StoryObj<typeof DashboardLayout>

export const Playground: Story = {
  render: () => (
    <DashboardLayout>
      <DashboardSidebar>
        <DashboardBrand>
          <Title level="h2">Logo</Title>
        </DashboardBrand>

        <DashboardNav title="Menu">
          <DashboardNavLink href="#" current>
            <LayoutDashboard size={21} />
            Dashboard
          </DashboardNavLink>
          <DashboardNavLink href="#">
            <UserCog size={21} />
            Account
          </DashboardNavLink>
          <DashboardNavLink href="#">
            <Settings size={21} />
            Settings
          </DashboardNavLink>
        </DashboardNav>

        <DashboardNav title="General">
          <DashboardNavLink asChild>
            <button type="button">
              <LogOut size={21} />
              Logout
            </button>
          </DashboardNavLink>
        </DashboardNav>
      </DashboardSidebar>

      <DashboardMain>
        <DashboardHeader
          title="Dashboard"
          avatar={<Avatar name="John Doe" size="xl" />}
        >
          <p>Welcome back, John!</p>
        </DashboardHeader>

        <div style={{ marginTop: '2rem' }}>
          <p>Main content area</p>
        </div>
      </DashboardMain>
    </DashboardLayout>
  ),
}

export const SidebarOnly: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <DashboardSidebar>
        <DashboardBrand>
          <Title level="h2">Brand</Title>
        </DashboardBrand>

        <DashboardNav title="Navigation">
          <DashboardNavLink href="#" current>
            <LayoutDashboard size={21} />
            Home
          </DashboardNavLink>
          <DashboardNavLink href="#">
            <UserCog size={21} />
            Profile
          </DashboardNavLink>
        </DashboardNav>
      </DashboardSidebar>
    </div>
  ),
}

export const NavLinks: Story = {
  render: () => (
    <div style={{ width: '25rem', padding: '2rem', background: 'var(--color-grey-6)' }}>
      <DashboardNav title="Menu">
        <DashboardNavLink href="#">Default Link</DashboardNavLink>
        <DashboardNavLink href="#" current>
          Current Link
        </DashboardNavLink>
        <DashboardNavLink href="#">
          <LayoutDashboard size={21} />
          With Icon
        </DashboardNavLink>
      </DashboardNav>
    </div>
  ),
}

export const HeaderVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', background: 'var(--color-grey-5)' }}>
      <DashboardHeader title="Simple Header" />

      <DashboardHeader title="With Subtitle">
        <p>Welcome to your dashboard</p>
      </DashboardHeader>

      <DashboardHeader
        title="With Avatar"
        avatar={<Avatar name="Jane Smith" size="xl" />}
      >
        <p>Hello, Jane!</p>
      </DashboardHeader>
    </div>
  ),
}

export const CompleteLayout: Story = {
  render: () => (
    <DashboardLayout>
      <DashboardSidebar>
        <DashboardBrand>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary-2)' }}>
            ACME
          </div>
        </DashboardBrand>

        <DashboardNav title="Main Menu">
          <DashboardNavLink href="/dashboard" current>
            <LayoutDashboard size={21} />
            Dashboard
          </DashboardNavLink>
          <DashboardNavLink href="/account">
            <UserCog size={21} />
            My Account
          </DashboardNavLink>
          <DashboardNavLink href="/settings">
            <Settings size={21} />
            Settings
          </DashboardNavLink>
        </DashboardNav>

        <DashboardNav title="Actions">
          <DashboardNavLink asChild>
            <button type="button">
              <LogOut size={21} />
              Sign Out
            </button>
          </DashboardNavLink>
        </DashboardNav>
      </DashboardSidebar>

      <DashboardMain>
        <DashboardHeader
          title="Welcome Back"
          avatar={<Avatar name="John Doe" size="xl" />}
        >
          <p>Here&apos;s what&apos;s happening today</p>
        </DashboardHeader>

        <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--color-white)', borderRadius: 'var(--radius-md)' }}>
          <Title level="h2">Dashboard Content</Title>
          <p style={{ marginTop: '1rem' }}>
            This is where your main dashboard content would go.
          </p>
        </div>
      </DashboardMain>
    </DashboardLayout>
  ),
}
