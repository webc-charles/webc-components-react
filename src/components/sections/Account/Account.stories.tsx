import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'base/Avatar'
import { Note } from 'base/Note'
import { Button } from 'form/Button'
import { InputFile } from 'form/File'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
import { DashboardHeader, DashboardTitle } from 'sections/Dashboard'
import {
  AccountCard,
  AccountCardBody,
  AccountCardFooter,
  AccountCardHeader,
  AccountForm,
  AccountSection,
  AccountTitle,
} from './index'

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
    <AccountSection>
      <DashboardHeader>
        <DashboardTitle>Account</DashboardTitle>
        <p>Manage your account settings</p>
        <Avatar name="johndoe" size="xl" variant="primary" />
      </DashboardHeader>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Profile</AccountTitle>
          <p>Update your personal information</p>
        </AccountCardHeader>

        <AccountCardBody>
          <AccountForm>
            <InputText
              name="username"
              label="Username"
              placeholder="Enter your username"
              defaultValue="johndoe"
            />
            <Note variant="danger">An username error message</Note>
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
        </AccountCardBody>
      </AccountCard>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Avatar</AccountTitle>
          <p>Upload a profile picture</p>
        </AccountCardHeader>

        <AccountCardBody>
          <AccountForm>
            <InputFile
              name="avatar"
              accept="image/*"
              buttonText="Change Avatar"
            />
          </AccountForm>
        </AccountCardBody>

        <AccountCardFooter>
          <Note variant="danger">A submit form error message</Note>
        </AccountCardFooter>
      </AccountCard>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Security</AccountTitle>
          <p>Change your password</p>
        </AccountCardHeader>

        <AccountCardBody>
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
        </AccountCardBody>

        <AccountCardFooter>
          <Note variant="success">A submit form success message</Note>
        </AccountCardFooter>
      </AccountCard>
    </AccountSection>
  ),
}
