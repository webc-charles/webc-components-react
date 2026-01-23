import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { AccountContainer, AccountCard, AccountForm } from './index'

describe('AccountCard', () => {
  it('renders with title and subtitle', () => {
    render(
      <AccountCard title="Profile" subtitle="Edit your profile">
        Content
      </AccountCard>
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit your profile')).toBeInTheDocument()
  })
})

describe('Account integration', () => {
  it('renders complete account layout', () => {
    render(
      <AccountContainer>
        <AccountCard title="Profile" subtitle="Edit your profile">
          <AccountForm>
            <input type="text" placeholder="Username" />
            <button type="submit">Save</button>
          </AccountForm>
        </AccountCard>
      </AccountContainer>
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit your profile')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })
})
