import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { GridItem, Link, Title } from '../'
import {
  FooterBottom,
  FooterBottomLink,
  FooterBottomNav,
  FooterMain,
  FooterMainLink,
  FooterMainNav,
  FooterRoot,
} from './index'

describe('Footer', () => {
  it('renders footer element', () => {
    render(
      <FooterRoot data-testid="footer">
        <FooterBottom>
          <span>Copyright</span>
        </FooterBottom>
      </FooterRoot>
    )
    expect(screen.getByTestId('footer').tagName).toBe('FOOTER')
  })

  it('renders FooterMain with GridItem and Title', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <GridItem>
            <Title level="h3">Company</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </FooterMain>
      </FooterRoot>
    )
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders FooterMainNav with aria-label', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <FooterMainNav aria-label="Company links">
            <FooterMainLink asChild>
              <Link href="#">Link</Link>
            </FooterMainLink>
          </FooterMainNav>
        </FooterMain>
      </FooterRoot>
    )
    const nav = document.querySelector('nav[aria-label="Company links"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders FooterMainLink with current state', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <FooterMainNav>
            <FooterMainLink asChild current>
              <Link href="#">Current Link</Link>
            </FooterMainLink>
          </FooterMainNav>
        </FooterMain>
      </FooterRoot>
    )
    const link = screen.getByText('Current Link')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('renders FooterBottom section', () => {
    render(
      <FooterRoot>
        <FooterBottom>
          <span>&copy; 2026 Company</span>
        </FooterBottom>
      </FooterRoot>
    )
    expect(screen.getByText(/2026 Company/)).toBeInTheDocument()
  })

  it('renders FooterBottomNav with links', () => {
    render(
      <FooterRoot>
        <FooterBottom>
          <FooterBottomNav aria-label="Legal links">
            <FooterBottomLink asChild>
              <Link href="#">Privacy</Link>
            </FooterBottomLink>
            <FooterBottomLink asChild>
              <Link href="#">Terms</Link>
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>
      </FooterRoot>
    )
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    const nav = document.querySelector('nav[aria-label="Legal links"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders FooterBottomLink with current state', () => {
    render(
      <FooterRoot>
        <FooterBottom>
          <FooterBottomNav>
            <FooterBottomLink asChild current>
              <Link href="#">Current</Link>
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>
      </FooterRoot>
    )
    const link = screen.getByText('Current')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('forwards ref to footer element', () => {
    const ref = { current: null }
    render(
      <FooterRoot ref={ref}>
        <FooterBottom>
          <span>Content</span>
        </FooterBottom>
      </FooterRoot>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect((ref.current as HTMLElement).tagName).toBe('FOOTER')
  })

  it('applies custom className', () => {
    render(
      <FooterRoot className="custom-footer" data-testid="footer">
        <FooterBottom>
          <span>Content</span>
        </FooterBottom>
      </FooterRoot>
    )
    expect(screen.getByTestId('footer')).toHaveClass('custom-footer')
  })

  it('renders complete footer with all sections', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <GridItem>
            <Title level="h3">Section 1</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Link 1</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Link 2</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <Title level="h3">Section 2</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Link 3</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </FooterMain>
        <FooterBottom>
          <span>&copy; 2026</span>
          <FooterBottomNav>
            <FooterBottomLink asChild>
              <Link href="#">Privacy</Link>
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>
      </FooterRoot>
    )

    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
    expect(screen.getByText('Link 3')).toBeInTheDocument()
    expect(screen.getByText(/2026/)).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })
})
