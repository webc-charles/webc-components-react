import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  DashboardLayout,
  DashboardSidebar,
  DashboardBrand,
  DashboardMain,
  DashboardHeader,
  DashboardNav,
  DashboardNavLink,
} from './index'

describe('DashboardLayout', () => {
  it('renders with children', () => {
    render(<DashboardLayout data-testid="layout">Layout Content</DashboardLayout>)
    expect(screen.getByTestId('layout')).toBeInTheDocument()
    expect(screen.getByTestId('layout')).toHaveTextContent('Layout Content')
  })

  it('renders with custom className', () => {
    render(
      <DashboardLayout data-testid="layout" className="custom-class">
        Content
      </DashboardLayout>
    )
    expect(screen.getByTestId('layout')).toHaveClass('custom-class')
  })
})

describe('DashboardSidebar', () => {
  it('renders as aside element', () => {
    render(<DashboardSidebar data-testid="sidebar">Sidebar Content</DashboardSidebar>)
    expect(screen.getByTestId('sidebar').tagName).toBe('ASIDE')
  })

  it('renders with children', () => {
    render(<DashboardSidebar>Sidebar Content</DashboardSidebar>)
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <DashboardSidebar data-testid="sidebar" className="custom-class">
        Content
      </DashboardSidebar>
    )
    expect(screen.getByTestId('sidebar')).toHaveClass('custom-class')
  })
})

describe('DashboardBrand', () => {
  it('renders with children', () => {
    render(<DashboardBrand data-testid="brand">Brand Content</DashboardBrand>)
    expect(screen.getByTestId('brand')).toBeInTheDocument()
    expect(screen.getByTestId('brand')).toHaveTextContent('Brand Content')
  })

  it('renders with custom className', () => {
    render(
      <DashboardBrand data-testid="brand" className="custom-class">
        Content
      </DashboardBrand>
    )
    expect(screen.getByTestId('brand')).toHaveClass('custom-class')
  })
})

describe('DashboardMain', () => {
  it('renders as main element', () => {
    render(<DashboardMain data-testid="main">Main Content</DashboardMain>)
    expect(screen.getByTestId('main').tagName).toBe('MAIN')
  })

  it('renders with children', () => {
    render(<DashboardMain>Main Content</DashboardMain>)
    expect(screen.getByText('Main Content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <DashboardMain data-testid="main" className="custom-class">
        Content
      </DashboardMain>
    )
    expect(screen.getByTestId('main')).toHaveClass('custom-class')
  })
})

describe('DashboardHeader', () => {
  it('renders with title', () => {
    render(<DashboardHeader title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders with children', () => {
    render(
      <DashboardHeader title="Title">
        <p>Subtitle text</p>
      </DashboardHeader>
    )
    expect(screen.getByText('Subtitle text')).toBeInTheDocument()
  })

  it('renders with avatar', () => {
    render(
      <DashboardHeader
        title="Title"
        avatar={<span data-testid="avatar">Avatar</span>}
      />
    )
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <DashboardHeader title="Title" data-testid="header" className="custom-class" />
    )
    expect(screen.getByTestId('header')).toHaveClass('custom-class')
  })
})

describe('DashboardNav', () => {
  it('renders as nav element', () => {
    render(<DashboardNav data-testid="nav">Nav Content</DashboardNav>)
    expect(screen.getByTestId('nav').tagName).toBe('NAV')
  })

  it('renders with title', () => {
    render(<DashboardNav title="Navigation">Links</DashboardNav>)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('renders without title', () => {
    render(<DashboardNav data-testid="nav">Links</DashboardNav>)
    expect(screen.getByTestId('nav')).toBeInTheDocument()
  })

  it('renders with children', () => {
    render(<DashboardNav>Nav Children</DashboardNav>)
    expect(screen.getByText('Nav Children')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <DashboardNav data-testid="nav" className="custom-class">
        Content
      </DashboardNav>
    )
    expect(screen.getByTestId('nav')).toHaveClass('custom-class')
  })
})

describe('DashboardNavLink', () => {
  it('renders as anchor by default', () => {
    render(<DashboardNavLink href="/test">Link Text</DashboardNavLink>)
    const link = screen.getByText('Link Text')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders children', () => {
    render(<DashboardNavLink href="/test">Link Content</DashboardNavLink>)
    expect(screen.getByText('Link Content')).toBeInTheDocument()
  })

  it('renders with current state', () => {
    render(
      <DashboardNavLink href="/test" current>
        Current Link
      </DashboardNavLink>
    )
    const link = screen.getByText('Current Link')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('renders without current state', () => {
    render(<DashboardNavLink href="/test">Normal Link</DashboardNavLink>)
    const link = screen.getByText('Normal Link')
    expect(link).not.toHaveAttribute('aria-current')
  })

  it('renders with custom className', () => {
    render(
      <DashboardNavLink href="/test" className="custom-link">
        Link
      </DashboardNavLink>
    )
    expect(screen.getByText('Link')).toHaveClass('custom-link')
  })

  it('renders with asChild', () => {
    render(
      <DashboardNavLink asChild>
        <button type="button">Button Link</button>
      </DashboardNavLink>
    )
    const button = screen.getByText('Button Link')
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders with asChild and current state', () => {
    render(
      <DashboardNavLink asChild current>
        <button type="button">Current Button</button>
      </DashboardNavLink>
    )
    const button = screen.getByText('Current Button')
    expect(button).toHaveAttribute('aria-current', 'page')
  })
})

describe('Dashboard integration', () => {
  it('renders complete dashboard layout', () => {
    render(
      <DashboardLayout data-testid="layout">
        <DashboardSidebar data-testid="sidebar">
          <DashboardBrand>Logo</DashboardBrand>
          <DashboardNav title="Menu">
            <DashboardNavLink href="#" current>
              Dashboard
            </DashboardNavLink>
            <DashboardNavLink href="#">Settings</DashboardNavLink>
          </DashboardNav>
        </DashboardSidebar>

        <DashboardMain data-testid="main">
          <DashboardHeader title="Welcome" />
          <p>Content</p>
        </DashboardMain>
      </DashboardLayout>
    )

    expect(screen.getByTestId('layout')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })
})
