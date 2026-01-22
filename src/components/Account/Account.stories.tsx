import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
import { InputText } from '../Form/Text'
import { InputPassword } from '../Form/Password'
import { AccountContainer, AccountCard, AccountForm } from './index'

const meta: Meta<typeof AccountCard> = {
  title: 'Components/Account',
  component: AccountCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
    },
    children: {
      control: false,
      description: 'Card body content',
    },
  },
}

export default meta
type Story = StoryObj<typeof AccountCard>

export const Playground: Story = {
  render: () => (
    <AccountContainer>
      <AccountCard title="Profile" subtitle="Update your profile information">
        <AccountForm>
          <InputText name="username" label="Username" placeholder="Enter username" />
          <InputText name="email" label="Email" placeholder="Enter email" />
          <Button type="submit" variant="primary" appearance="button">
            Save Changes
          </Button>
        </AccountForm>
      </AccountCard>

      <AccountCard title="Security" subtitle="Change your password">
        <AccountForm>
          <InputPassword name="currentPassword" label="Current Password" />
          <InputPassword name="newPassword" label="New Password" />
          <InputPassword name="confirmPassword" label="Confirm Password" />
          <Button type="submit" variant="primary" appearance="button">
            Update Password
          </Button>
        </AccountForm>
      </AccountCard>
    </AccountContainer>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <AccountCard title="Profile Information" subtitle="Manage your account details">
      <AccountForm>
        <InputText name="username" label="Username" defaultValue="johndoe" />
        <InputText name="email" label="Email" defaultValue="john@example.com" />
        <InputText name="fullName" label="Full Name" defaultValue="John Doe" />
        <Button type="submit" variant="primary" appearance="button">
          Save Changes
        </Button>
      </AccountForm>
    </AccountCard>
  ),
}

export const SecurityCard: Story = {
  render: () => (
    <AccountCard title="Change Password" subtitle="Keep your account secure">
      <AccountForm>
        <InputPassword name="currentPassword" label="Current Password" placeholder="Enter current password" />
        <InputPassword name="newPassword" label="New Password" placeholder="Enter new password" />
        <InputPassword name="confirmPassword" label="Confirm New Password" placeholder="Confirm new password" />
        <Button type="submit" variant="primary" appearance="button">
          Update Password
        </Button>
      </AccountForm>
    </AccountCard>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <AccountCard title="Card Title" subtitle="Card subtitle text">
      <p>Card body content goes here.</p>
    </AccountCard>
  ),
}

export const WithoutSubtitle: Story = {
  render: () => (
    <AccountCard title="Notifications">
      <p>Manage your notification preferences here.</p>
    </AccountCard>
  ),
}

export const MultipleCards: Story = {
  render: () => (
    <AccountContainer>
      <AccountCard title="Profile" subtitle="Your personal information">
        <p>Profile content</p>
      </AccountCard>
      <AccountCard title="Security" subtitle="Password and authentication">
        <p>Security content</p>
      </AccountCard>
      <AccountCard title="Preferences" subtitle="Customize your experience">
        <p>Preferences content</p>
      </AccountCard>
    </AccountContainer>
  ),
}
