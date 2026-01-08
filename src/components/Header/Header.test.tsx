import '@testing-library/jest-dom/vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  HeaderRoot,
  HeaderTopBar,
  HeaderTopBarItem,
  HeaderMain,
  HeaderLogo,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  HeaderMobileToggle,
  HeaderMobileMenu,
  HeaderMobileNavItem,
  headerNavItemStyles,
  headerTopBarItemStyles,
} from './index'

const { navLink } = headerNavItemStyles
const { dropdownLink: topBarDropdownLink } = headerTopBarItemStyles

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderLogo>Logo</HeaderLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders top bar', () => {
    render(
      <HeaderRoot>
        <HeaderTopBar>
          <a href="#">Help</a>
        </HeaderTopBar>
        <HeaderMain>
          <HeaderLogo>Logo</HeaderLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders top bar item with dropdown', () => {
    render(
      <HeaderRoot>
        <HeaderTopBar>
          <HeaderTopBarItem dropdown={
            <div>
              <a href="#" className={topBarDropdownLink}>Option 1</a>
              <a href="#" className={topBarDropdownLink}>Option 2</a>
            </div>
          }>
            Language
          </HeaderTopBarItem>
        </HeaderTopBar>
        <HeaderMain>
          <HeaderLogo>Logo</HeaderLogo>
        </HeaderMain>
      </HeaderRoot>
    )

    const trigger = screen.getByText('Language').closest('button')!
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Use fireEvent to avoid mouseenter triggering first
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders nav with aria-label', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderNav aria-label="Main menu">
            <HeaderNavItem>
              <a href="/" className={navLink}>Home</a>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderMain>
      </HeaderRoot>
    )
    const nav = document.querySelector('nav[aria-label="Main menu"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderNav>
            <HeaderNavItem>
              <a href="/" className={navLink}>Home</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="/about" className={navLink}>About</a>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders actions', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderActions>
            <button>Login</button>
          </HeaderActions>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMobileToggle data-testid="mobile-toggle" />
          <HeaderMobileMenu>
            <a href="/">Home</a>
          </HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile toggle has aria-controls', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMobileToggle data-testid="mobile-toggle" />
          <HeaderMobileMenu>Menu</HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    const menuId = toggle.getAttribute('aria-controls')
    expect(menuId).toBeTruthy()
    expect(document.getElementById(menuId!)).toBeInTheDocument()
  })

  it('applies sticky class', () => {
    render(
      <HeaderRoot sticky data-testid="header">
        <HeaderMain>
          <HeaderLogo>Logo</HeaderLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByTestId('header').className).toMatch(/sticky/)
  })

  it('dropdown has aria-haspopup and aria-expanded', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderNav>
            <HeaderNavItem dropdown={<div><a href="#">Option</a></div>}>
              Products
            </HeaderNavItem>
          </HeaderNav>
        </HeaderMain>
      </HeaderRoot>
    )

    const trigger = screen.getByText('Products').closest('button')!
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Use fireEvent to avoid mouseenter triggering first
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands mobile nav item', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMobileToggle data-testid="mobile-toggle" />
          <HeaderMobileMenu>
            <HeaderMobileNavItem label="Products">
              <div>
                <a href="#">Software</a>
              </div>
            </HeaderMobileNavItem>
          </HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>
    )

    await user.click(screen.getByTestId('mobile-toggle'))

    const expandButton = screen.getByText('Products').closest('button')!
    expect(expandButton).toHaveAttribute('aria-expanded', 'false')
    expect(expandButton).toHaveAttribute('aria-controls')

    await user.click(expandButton)
    expect(expandButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu on Escape', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMobileToggle data-testid="mobile-toggle" />
          <HeaderMobileMenu>
            <a href="/">Home</a>
          </HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(
      <HeaderRoot ref={ref}>
        <HeaderMain>
          <HeaderLogo>Logo</HeaderLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
