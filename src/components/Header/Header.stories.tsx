import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
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
const { navLink, dropdownLink } = headerNavItemStyles
const { mobileLink } = headerMobileMenuStyles
const { subLink } = headerMobileNavItemStyles

const ProductsDropdown = () => (
  <div>
    <a href="/" className={dropdownLink}>
      Logiciels
    </a>
    <a href="/" className={dropdownLink}>
      Services
    </a>
    <a href="/" className={dropdownLink}>
      Formations
    </a>
    <a href="/" className={dropdownLink}>
      Support
    </a>
  </div>
)

const LanguageDropdown = () => (
  <div>
    <a href="/" className={topBarDropdownLink}>
      Français
    </a>
    <a href="/" className={topBarDropdownLink}>
      English
    </a>
    <a href="/" className={topBarDropdownLink}>
      Español
    </a>
    <a href="/" className={topBarDropdownLink}>
      Deutsch
    </a>
  </div>
)

const MegaMenuContent = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
    }}
  >
    <div>
      <strong
        style={{
          display: 'block',
          padding: '0.5rem 1.2rem',
          color: '#666',
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        }}
      >
        Produits
      </strong>
      <a href="/" className={dropdownLink}>
        Logiciel A
      </a>
      <a href="/" className={dropdownLink}>
        Logiciel B
      </a>
      <a href="/" className={dropdownLink}>
        Application Mobile
      </a>
    </div>
    <div>
      <strong
        style={{
          display: 'block',
          padding: '0.5rem 1.2rem',
          color: '#666',
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        }}
      >
        Services
      </strong>
      <a href="/" className={dropdownLink}>
        Consulting
      </a>
      <a href="/" className={dropdownLink}>
        Intégration
      </a>
      <a href="/" className={dropdownLink}>
        Maintenance
      </a>
    </div>
    <div>
      <strong
        style={{
          display: 'block',
          padding: '0.5rem 1.2rem',
          color: '#666',
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        }}
      >
        Ressources
      </strong>
      <a href="/" className={dropdownLink}>
        Documentation
      </a>
      <a href="/" className={dropdownLink}>
        Tutoriels
      </a>
      <a href="/" className={dropdownLink}>
        API
      </a>
    </div>
  </div>
)

export const Default: Story = {
  render: (args) => (
    <HeaderRoot {...args}>
      <HeaderMain>
        <HeaderLogo>
          <a
            href="/"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Logo
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Accueil
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Produits
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              À propos
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Contact
            </a>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="outline">Connexion</Button>
          <Button appearance="button" variant="primary">
            Inscription
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <a href="/" className={mobileLink}>
            Accueil
          </a>
          <a href="/" className={mobileLink}>
            Produits
          </a>
          <a href="/" className={mobileLink}>
            À propos
          </a>
          <a href="/" className={mobileLink}>
            Contact
          </a>
          <hr
            style={{
              margin: '1.6rem 0',
              border: 'none',
              borderTop: '0.1rem solid #eee',
            }}
          />
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
        <a href="/" className={topBarLink}>
          Aide
        </a>
        <a href="/" className={topBarLink}>
          Contact
        </a>
        <HeaderTopBarItem dropdown={<LanguageDropdown />}>FR</HeaderTopBarItem>
      </HeaderTopBar>
      <HeaderMain>
        <HeaderLogo>
          <a
            href="/"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Logo
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Accueil
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Produits
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              À propos
            </a>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Commencer
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <a href="/" className={mobileLink}>
            Accueil
          </a>
          <a href="/" className={mobileLink}>
            Produits
          </a>
          <a href="/" className={mobileLink}>
            À propos
          </a>
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
          <a
            href="/"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Logo
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Accueil
            </a>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Produits
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Services
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Contact
            </a>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Démo
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <a href="/" className={mobileLink}>
            Accueil
          </a>
          <HeaderMobileNavItem label="Produits">
            <a href="/" className={subLink}>
              Logiciels
            </a>
            <a href="/" className={subLink}>
              Services
            </a>
            <a href="/" className={subLink}>
              Formations
            </a>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Services">
            <a href="/" className={subLink}>
              Consulting
            </a>
            <a href="/" className={subLink}>
              Support
            </a>
          </HeaderMobileNavItem>
          <a href="/" className={mobileLink}>
            Contact
          </a>
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
          <a
            href="/"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Enterprise
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Accueil
            </a>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<MegaMenuContent />} mega>
            Solutions
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Produits
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="/" className={navLink}>
              Contact
            </a>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="outline">Se connecter</Button>
          <Button appearance="button" variant="primary">
            Essai gratuit
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <a href="/" className={mobileLink}>
            Accueil
          </a>
          <HeaderMobileNavItem label="Solutions">
            <a href="/" className={subLink}>
              Logiciel A
            </a>
            <a href="/" className={subLink}>
              Logiciel B
            </a>
            <a href="/" className={subLink}>
              Consulting
            </a>
            <a href="/" className={subLink}>
              Documentation
            </a>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Produits">
            <a href="/" className={subLink}>
              Logiciels
            </a>
            <a href="/" className={subLink}>
              Services
            </a>
          </HeaderMobileNavItem>
          <a href="/" className={mobileLink}>
            Contact
          </a>
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
            <a
              href="/"
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Sticky
            </a>
          </HeaderLogo>

          <HeaderNav>
            <HeaderNavItem>
              <a href="/" className={navLink}>
                Accueil
              </a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="/" className={navLink}>
                Produits
              </a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="/" className={navLink}>
                Contact
              </a>
            </HeaderNavItem>
          </HeaderNav>

          <HeaderActions>
            <Button appearance="button" variant="primary">
              CTA
            </Button>
          </HeaderActions>

          <HeaderMobileToggle />
          <HeaderMobileMenu>
            <a href="/" className={mobileLink}>
              Accueil
            </a>
            <a href="/" className={mobileLink}>
              Produits
            </a>
            <a href="/" className={mobileLink}>
              Contact
            </a>
          </HeaderMobileMenu>
        </HeaderMain>
      </HeaderRoot>

      <div style={{ padding: '2rem', height: '200vh' }}>
        <h1>Scroll down to see sticky header</h1>
        <p style={{ marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  ),
}
