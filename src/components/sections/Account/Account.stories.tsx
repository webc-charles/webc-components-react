import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'base/Avatar'
import { Button } from 'form/Button'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
import { DashboardHeader } from 'sections/Dashboard'
import { AccountCard, AccountContainer, AccountForm } from './index'

const meta: Meta = {
  title: 'Sections/Account',
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

export const AccountPage: Story = {
  render: () => (
    <AccountContainer>
      <DashboardHeader
        title="Account"
        avatar={<Avatar name="johndoe" size="xl" />}
      >
        <p>Manage your account settings</p>
      </DashboardHeader>

      <AccountCard
        title="Profile"
        subtitle="Update your personal information"
      >
        <AccountForm>
          <InputText
            name="username"
            label="Username"
            placeholder="Enter your username"
            defaultValue="johndoe"
          />
          <InputText
            name="email"
            label="Email"
            placeholder="email@example.com"
            defaultValue="john@example.com"
          />
          <Button type="submit" variant="primary" appearance="button">
            Save Changes
          </Button>
        </AccountForm>
      </AccountCard>

      <AccountCard title="Avatar" subtitle="Upload a profile picture">
        <Button variant="default" appearance="outline">
          Change Avatar
        </Button>
      </AccountCard>

      <AccountCard title="Security" subtitle="Change your password">
        <AccountForm>
          <InputPassword
            name="currentPassword"
            label="Current Password"
            placeholder="Enter your current password"
          />
          <InputPassword
            name="newPassword"
            label="New Password"
            placeholder="Enter your new password"
          />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your new password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Update Password
          </Button>
        </AccountForm>
      </AccountCard>
    </AccountContainer>
  ),
}
