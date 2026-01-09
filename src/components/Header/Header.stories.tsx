import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'
import { Button, Grid, GridItem, Link, Title } from 'components'
import {
  HeaderActions,
  HeaderLogo,
  HeaderMain,
  HeaderMobileMenu,
  HeaderMobileNavItem,
  HeaderMobileToggle,
  HeaderNav,
  HeaderNavItem,
  HeaderRoot,
  HeaderTopBar,
  HeaderTopBarItem,
  headerMobileMenuStyles,
  headerMobileNavItemStyles,
  headerNavItemStyles,
  headerTopBarItemStyles,
  headerTopBarStyles,
} from './index'

const logoStyles = {
  fontSize: '2rem',
  fontWeight: 700,
  textDecoration: 'none',
  color: 'inherit',
}

const hrStyles = {
  margin: '1.6rem 0',
  border: 'none',
  borderTop: '0.1rem solid var(--color-grey-6)',
}

const meta: Meta<typeof HeaderRoot> = {
  title: 'Components/Header',
  component: HeaderRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    sticky: {
      control: 'boolean',
      description: 'Sticky header',
    },
  },
}

export default meta
type Story = StoryObj<typeof HeaderRoot>

const { topBarLink } = headerTopBarStyles
const { dropdownLink: topBarDropdownLink } = headerTopBarItemStyles
const { navLink, navLinkActive, dropdownLink } = headerNavItemStyles
const { mobileLink } = headerMobileMenuStyles
const { subLink } = headerMobileNavItemStyles

const ProductsDropdown = () => (
  <div>
    <Link href="/" className={dropdownLink}>
      Logiciels
    </Link>
    <Link href="/" className={dropdownLink}>
      Services
    </Link>
    <Link href="/" className={dropdownLink}>
      Formations
    </Link>
    <Link href="/" className={dropdownLink}>
      Support
    </Link>
  </div>
)

const LanguageDropdown = () => (
  <div>
    <Link href="/" className={topBarDropdownLink}>
      Français
    </Link>
    <Link href="/" className={topBarDropdownLink}>
      English
    </Link>
    <Link href="/" className={topBarDropdownLink}>
      Español
    </Link>
    <Link href="/" className={topBarDropdownLink}>
      Deutsch
    </Link>
  </div>
)

const MegaMenuContent = () => (
  <Grid col={4} gap="md">
    <GridItem>
      <Title level="h4">Produits</Title>
      <Link href="/" className={dropdownLink}>
        Logiciel A
      </Link>
      <Link href="/" className={dropdownLink}>
        Logiciel B
      </Link>
      <Link href="/" className={dropdownLink}>
        Application Mobile
      </Link>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <Link href="/" className={dropdownLink}>
        Consulting
      </Link>
      <Link href="/" className={dropdownLink}>
        Intégration
      </Link>
      <Link href="/" className={dropdownLink}>
        Maintenance
      </Link>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <Link href="/" className={dropdownLink}>
        Documentation
      </Link>
      <Link href="/" className={dropdownLink}>
        Tutoriels
      </Link>
      <Link href="/" className={dropdownLink}>
        API
      </Link>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <Link href="/" className={dropdownLink}>
        Free trial
      </Link>
      <Link href="/" className={dropdownLink}>
        Book a demo
      </Link>
      <Link href="/" className={dropdownLink}>
        Contact sales
      </Link>
    </GridItem>
  </Grid>
)

export const Default: Story = {
  render: (args) => (
    <HeaderRoot {...args}>
      <HeaderMain>
        <HeaderLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem current>
            <Link
              href="/"
              className={clsx(navLink, navLinkActive)}
              aria-current="page"
            >
              Accueil
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Produits
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              À propos
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Contact
            </Link>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="outline" variant="primary">
            Connexion
          </Button>
          <Button appearance="button" variant="primary">
            Inscription
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />

        <HeaderMobileMenu>
          <Link href="/" className={mobileLink}>
            Accueil
          </Link>
          <Link href="/" className={mobileLink}>
            Produits
          </Link>
          <Link href="/" className={mobileLink}>
            À propos
          </Link>
          <Link href="/" className={mobileLink}>
            Contact
          </Link>
          <hr style={hrStyles} />
          <Button appearance="outline" style={{ width: '100%' }}>
            Connexion
          </Button>
          <Button
            appearance="button"
            variant="primary"
            style={{ width: '100%', marginTop: '0.8rem' }}
          >
            Inscription
          </Button>
        </HeaderMobileMenu>
      </HeaderMain>
    </HeaderRoot>
  ),
}

export const WithTopBar: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderTopBar>
        <Link href="/" className={topBarLink}>
          Aide
        </Link>
        <Link href="/" className={topBarLink}>
          Contact
        </Link>
        <HeaderTopBarItem dropdown={<LanguageDropdown />}>FR</HeaderTopBarItem>
      </HeaderTopBar>
      <HeaderMain>
        <HeaderLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem current>
            <Link
              href="/"
              className={clsx(navLink, navLinkActive)}
              aria-current="page"
            >
              Accueil
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Produits
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              À propos
            </Link>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Commencer
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <Link href="/" className={mobileLink}>
            Accueil
          </Link>
          <Link href="/" className={mobileLink}>
            Produits
          </Link>
          <Link href="/" className={mobileLink}>
            À propos
          </Link>
        </HeaderMobileMenu>
      </HeaderMain>
    </HeaderRoot>
  ),
}

export const WithDropdowns: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderMain>
        <HeaderLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Accueil
            </Link>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />} current>
            Produits
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Services
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Contact
            </Link>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Démo
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <Link href="/" className={mobileLink}>
            Accueil
          </Link>
          <HeaderMobileNavItem label="Produits">
            <Link href="/" className={subLink}>
              Logiciels
            </Link>
            <Link href="/" className={subLink}>
              Services
            </Link>
            <Link href="/" className={subLink}>
              Formations
            </Link>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Services">
            <Link href="/" className={subLink}>
              Consulting
            </Link>
            <Link href="/" className={subLink}>
              Support
            </Link>
          </HeaderMobileNavItem>
          <Link href="/" className={mobileLink}>
            Contact
          </Link>
        </HeaderMobileMenu>
      </HeaderMain>
    </HeaderRoot>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderMain>
        <HeaderLogo>
          <Link href="/" style={logoStyles}>
            Enterprise
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Accueil
            </Link>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<MegaMenuContent />} mega current>
            Solutions
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Produits
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="/" className={navLink}>
              Contact
            </Link>
          </HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button appearance="outline" variant="primary">
            Se connecter
          </Button>
          <Button appearance="button" variant="primary">
            Essai gratuit
          </Button>
        </HeaderActions>
        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <Link href="/" className={mobileLink}>
            Accueil
          </Link>
          <HeaderMobileNavItem label="Solutions">
            <Link href="/" className={subLink}>
              Logiciel A
            </Link>
            <Link href="/" className={subLink}>
              Logiciel B
            </Link>
            <Link href="/" className={subLink}>
              Consulting
            </Link>
            <Link href="/" className={subLink}>
              Documentation
            </Link>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Produits">
            <Link href="/" className={subLink}>
              Logiciels
            </Link>
            <Link href="/" className={subLink}>
              Services
            </Link>
          </HeaderMobileNavItem>
          <Link href="/" className={mobileLink}>
            Contact
          </Link>
        </HeaderMobileMenu>
      </HeaderMain>
    </HeaderRoot>
  ),
}

export const Sticky: Story = {
  args: {
    sticky: true,
  },
  render: (args) => (
    <div>
      <HeaderRoot {...args}>
        <HeaderMain>
          <HeaderLogo>
            <Link href="/" style={logoStyles}>
              Sticky
            </Link>
          </HeaderLogo>

          <HeaderNav>
            <HeaderNavItem current>
              <Link
                href="/"
                className={clsx(navLink, navLinkActive)}
                aria-current="page"
              >
                Accueil
              </Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <Link href="/" className={navLink}>
                Produits
              </Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <Link href="/" className={navLink}>
                Contact
              </Link>
            </HeaderNavItem>
          </HeaderNav>

          <HeaderActions>
            <Button appearance="button" variant="primary">
              CTA
            </Button>
          </HeaderActions>

          <HeaderMobileToggle />
          <HeaderMobileMenu>
            <Link href="/" className={mobileLink}>
              Accueil
            </Link>
            <Link href="/" className={mobileLink}>
              Produits
            </Link>
            <Link href="/" className={mobileLink}>
              Contact
            </Link>
          </HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>

      <div style={{ padding: '2rem', height: '200vh' }}>
        <Title>Scroll down to see sticky header</Title>
        <p style={{ marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  ),
}
