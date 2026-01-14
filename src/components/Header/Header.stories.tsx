import type { Meta, StoryObj } from '@storybook/react'
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

const ProductsDropdown = () => (
  <div>
    <HeaderNavItem.DropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </HeaderNavItem.DropdownLink>
    <HeaderNavItem.DropdownLink asChild>
      <Link href="/">Services</Link>
    </HeaderNavItem.DropdownLink>
    <HeaderNavItem.DropdownLink asChild>
      <Link href="/">Formations</Link>
    </HeaderNavItem.DropdownLink>
    <HeaderNavItem.DropdownLink asChild>
      <Link href="/">Support</Link>
    </HeaderNavItem.DropdownLink>
  </div>
)

const LanguageDropdown = () => (
  <div>
    <HeaderTopBarItem.Link asChild>
      <Link href="/">Français</Link>
    </HeaderTopBarItem.Link>
    <HeaderTopBarItem.Link asChild>
      <Link href="/">English</Link>
    </HeaderTopBarItem.Link>
    <HeaderTopBarItem.Link asChild>
      <Link href="/">Español</Link>
    </HeaderTopBarItem.Link>
    <HeaderTopBarItem.Link asChild>
      <Link href="/">Deutsch</Link>
    </HeaderTopBarItem.Link>
  </div>
)

const MegaMenuContent = () => (
  <Grid col={4} gap="md">
    <GridItem>
      <Title level="h4">Produits</Title>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </HeaderNavItem.DropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Consulting</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Intégration</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </HeaderNavItem.DropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Documentation</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">API</Link>
      </HeaderNavItem.DropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Free trial</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </HeaderNavItem.DropdownLink>
      <HeaderNavItem.DropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </HeaderNavItem.DropdownLink>
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
            <HeaderNavItem.Link asChild active>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">Produits</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">À propos</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItem.Link>
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
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Accueil</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Produits</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">À propos</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Contact</Link>
          </HeaderMobileMenu.Link>
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
        <HeaderTopBar.Link asChild>
          <Link href="/">Aide</Link>
        </HeaderTopBar.Link>
        <HeaderTopBar.Link asChild>
          <Link href="/">Contact</Link>
        </HeaderTopBar.Link>
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
            <HeaderNavItem.Link asChild active>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">Produits</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">À propos</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Commencer
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Accueil</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Produits</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">À propos</Link>
          </HeaderMobileMenu.Link>
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
            <HeaderNavItem.Link asChild>
              <Link href="/">Accueil</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />} current>
            Produits
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Services
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Démo
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <HeaderMobileMenu>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Accueil</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileNavItem label="Produits">
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Logiciels</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Services</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Formations</Link>
            </HeaderMobileNavItem.Link>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Services">
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Consulting</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Support</Link>
            </HeaderMobileNavItem.Link>
          </HeaderMobileNavItem>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Contact</Link>
          </HeaderMobileMenu.Link>
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
            <HeaderNavItem.Link asChild>
              <Link href="/">Accueil</Link>
            </HeaderNavItem.Link>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<MegaMenuContent />} mega current>
            Solutions
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Produits
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItem.Link asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItem.Link>
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
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Accueil</Link>
          </HeaderMobileMenu.Link>
          <HeaderMobileNavItem label="Solutions">
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Logiciel A</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Logiciel B</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Consulting</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Documentation</Link>
            </HeaderMobileNavItem.Link>
          </HeaderMobileNavItem>
          <HeaderMobileNavItem label="Produits">
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Logiciels</Link>
            </HeaderMobileNavItem.Link>
            <HeaderMobileNavItem.Link asChild>
              <Link href="/">Services</Link>
            </HeaderMobileNavItem.Link>
          </HeaderMobileNavItem>
          <HeaderMobileMenu.Link asChild>
            <Link href="/">Contact</Link>
          </HeaderMobileMenu.Link>
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
              <HeaderNavItem.Link asChild active>
                <Link href="/" aria-current="page">
                  Accueil
                </Link>
              </HeaderNavItem.Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavItem.Link asChild>
                <Link href="/">Produits</Link>
              </HeaderNavItem.Link>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavItem.Link asChild>
                <Link href="/">Contact</Link>
              </HeaderNavItem.Link>
            </HeaderNavItem>
          </HeaderNav>

          <HeaderActions>
            <Button appearance="button" variant="primary">
              CTA
            </Button>
          </HeaderActions>

          <HeaderMobileToggle />
          <HeaderMobileMenu>
            <HeaderMobileMenu.Link asChild>
              <Link href="/">Accueil</Link>
            </HeaderMobileMenu.Link>
            <HeaderMobileMenu.Link asChild>
              <Link href="/">Produits</Link>
            </HeaderMobileMenu.Link>
            <HeaderMobileMenu.Link asChild>
              <Link href="/">Contact</Link>
            </HeaderMobileMenu.Link>
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
