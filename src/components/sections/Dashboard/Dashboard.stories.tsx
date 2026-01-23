import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'base/Avatar'
import { Title } from 'base/Title'
import { LayoutDashboard, LogOut, UserCog } from 'lucide-react'
import {
  DashboardBrand,
  DashboardHeader,
  DashboardLayout,
  DashboardMain,
  DashboardNav,
  DashboardNavLink,
  DashboardSidebar,
} from './index'

const meta: Meta = {
  title: 'Sections/Dashboard',
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
type Story = StoryObj

export const DashboardPage: Story = {
  render: () => (
    <DashboardLayout>
      <DashboardSidebar>
        <DashboardBrand>
          <Title level="h2">Logo</Title>
        </DashboardBrand>

        <DashboardNav title="Menu">
          <DashboardNavLink href="/dashboard" current>
            <LayoutDashboard size={21} />
            Dashboard
          </DashboardNavLink>
          <DashboardNavLink href="/dashboard/account">
            <UserCog size={21} />
            Account
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
          title="Welcome johndoe"
          avatar={<Avatar name="johndoe" size="xl" />}
        />
      </DashboardMain>
    </DashboardLayout>
  ),
}
