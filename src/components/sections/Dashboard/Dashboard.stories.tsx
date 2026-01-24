import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'base/Avatar'
import { Logo } from 'components/base'
import { LayoutDashboard, LogOut, UserCog } from 'lucide-react'
import {
  DashboardBrand,
  DashboardHeader,
  DashboardLayout,
  DashboardMain,
  DashboardNav,
  DashboardNavLink,
  DashboardSidebar,
  DashboardTitle,
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
          <Logo>Logo</Logo>
        </DashboardBrand>

        <DashboardNav title="General">
          <DashboardNavLink href="/dashboard" current>
            <LayoutDashboard size={21} />
            Dashboard
          </DashboardNavLink>
          <DashboardNavLink href="/dashboard/account">
            <UserCog size={21} />
            Account
          </DashboardNavLink>
        </DashboardNav>

        <DashboardNav title="Account">
          <DashboardNavLink asChild>
            <button type="button">
              <LogOut size={21} />
              Logout
            </button>
          </DashboardNavLink>
        </DashboardNav>
      </DashboardSidebar>

      <DashboardMain>
        <DashboardHeader>
          <DashboardTitle>Welcome Joe</DashboardTitle>
          <Avatar name="johndoe" size="xl" variant="primary" />
        </DashboardHeader>
      </DashboardMain>
    </DashboardLayout>
  ),
}
