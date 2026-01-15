import type { Meta, StoryObj } from '@storybook/react'
import { Button, Grid, GridItem, Link, Title } from 'components'
import {
  HeaderActions,
  HeaderLogo,
  HeaderMain,
  HeaderMobileDropdown,
  HeaderMobileDropdownLink,
  HeaderMobileLink,
  HeaderMobileMenu,
  HeaderMobileNav,
  HeaderMobileToggle,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemDropdownLink,
  HeaderNavItemLink,
  HeaderRoot,
  HeaderTopBar,
  HeaderTopBarItem,
  HeaderTopBarItemLink,
  HeaderTopBarLink,
} from './index'

const logoStyles = {
  fontSize: '2rem',
  fontWeight: 700,
  textDecoration: 'none',
  color: 'inherit',
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
    <HeaderNavItemDropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </HeaderNavItemDropdownLink>
    <HeaderNavItemDropdownLink asChild>
      <Link href="/">Services</Link>
    </HeaderNavItemDropdownLink>
    <HeaderNavItemDropdownLink asChild>
      <Link href="/">Formations</Link>
    </HeaderNavItemDropdownLink>
    <HeaderNavItemDropdownLink asChild>
      <Link href="/">Support</Link>
    </HeaderNavItemDropdownLink>
  </div>
)

const LanguageDropdown = () => (
  <div>
    <HeaderTopBarItemLink asChild>
      <Link href="/">Français</Link>
    </HeaderTopBarItemLink>
    <HeaderTopBarItemLink asChild>
      <Link href="/">English</Link>
    </HeaderTopBarItemLink>
    <HeaderTopBarItemLink asChild>
      <Link href="/">Español</Link>
    </HeaderTopBarItemLink>
    <HeaderTopBarItemLink asChild>
      <Link href="/">Deutsch</Link>
    </HeaderTopBarItemLink>
  </div>
)

const MegaMenuContent = () => (
  <Grid col={4} gap="md">
    <GridItem>
      <Title level="h4">Produits</Title>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </HeaderNavItemDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Consulting</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Intégration</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </HeaderNavItemDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Documentation</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">API</Link>
      </HeaderNavItemDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Free trial</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </HeaderNavItemDropdownLink>
      <HeaderNavItemDropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </HeaderNavItemDropdownLink>
    </GridItem>
  </Grid>
)

const MobileMenuContent = () => (
  <HeaderMobileMenu>
    <HeaderMobileNav>
      <HeaderMobileLink asChild>
        <Link href="/">Accueil</Link>
      </HeaderMobileLink>

      <HeaderMobileLink asChild>
        <Link href="/">Produits</Link>
      </HeaderMobileLink>

      <HeaderMobileLink asChild>
        <Link href="/">À propos</Link>
      </HeaderMobileLink>

      <HeaderMobileDropdown label="Produits">
        <HeaderMobileDropdownLink asChild>
          <Link href="/">Logiciels</Link>
        </HeaderMobileDropdownLink>
        <HeaderMobileDropdownLink asChild>
          <Link href="/">Services</Link>
        </HeaderMobileDropdownLink>
        <HeaderMobileDropdownLink asChild>
          <Link href="/">Formations</Link>
        </HeaderMobileDropdownLink>
      </HeaderMobileDropdown>

      <HeaderMobileDropdown label="Services">
        <HeaderMobileDropdownLink asChild>
          <Link href="/">Consulting</Link>
        </HeaderMobileDropdownLink>
        <HeaderMobileDropdownLink asChild>
          <Link href="/">Support</Link>
        </HeaderMobileDropdownLink>
      </HeaderMobileDropdown>
    </HeaderMobileNav>

    <HeaderMobileNav>
      <HeaderMobileLink asChild>
        <Link href="/">Contact</Link>
      </HeaderMobileLink>
      <HeaderMobileLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderMobileLink>
      <HeaderMobileLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderMobileLink>
    </HeaderMobileNav>

    <HeaderMobileNav>
      <Link appearance="outline" variant="primary">
        Connexion
      </Link>
      <Link appearance="button" variant="primary">
        Inscription
      </Link>
    </HeaderMobileNav>
  </HeaderMobileMenu>
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
            <HeaderNavItemLink asChild active>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">Produits</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">À propos</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItemLink>
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
        <MobileMenuContent />
      </HeaderMain>
    </HeaderRoot>
  ),
}

export const WithTopBar: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderTopBar>
        <HeaderTopBarLink asChild>
          <Link href="/">Aide</Link>
        </HeaderTopBarLink>
        <HeaderTopBarLink asChild>
          <Link href="/">Contact</Link>
        </HeaderTopBarLink>
        <HeaderTopBarItem dropdown={<LanguageDropdown />}>
          FR
        </HeaderTopBarItem>
      </HeaderTopBar>

      <HeaderMain>
        <HeaderLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderNavItem current>
            <HeaderNavItemLink asChild active>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">Produits</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">À propos</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Button appearance="button" variant="primary">
            Commencer
          </Button>
        </HeaderActions>

        <HeaderMobileToggle />
        <MobileMenuContent />
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
            <HeaderNavItemLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />} current>
            Produits
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Services
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Link href="/" appearance="button" variant="primary">
            Démo
          </Link>
        </HeaderActions>

        <HeaderMobileToggle />

        <MobileMenuContent />
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
            <HeaderNavItemLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
          <HeaderNavItem dropdown={<MegaMenuContent />} mega current>
            Solutions
          </HeaderNavItem>
          <HeaderNavItem dropdown={<ProductsDropdown />}>
            Produits
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavItemLink asChild>
              <Link href="/">Contact</Link>
            </HeaderNavItemLink>
          </HeaderNavItem>
        </HeaderNav>

        <HeaderActions>
          <Link href="/" appearance="outline" variant="primary">
            Se connecter
          </Link>
          <Link href="/" appearance="button" variant="primary">
            Essai gratuit
          </Link>
        </HeaderActions>

        <HeaderMobileToggle />
        <MobileMenuContent />
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
              <HeaderNavItemLink asChild active>
                <Link href="/" aria-current="page">
                  Accueil
                </Link>
              </HeaderNavItemLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavItemLink asChild>
                <Link href="/">Produits</Link>
              </HeaderNavItemLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavItemLink asChild>
                <Link href="/">Contact</Link>
              </HeaderNavItemLink>
            </HeaderNavItem>
          </HeaderNav>

          <HeaderActions>
            <Link href="/" appearance="button" variant="primary">
              CTA
            </Link>
          </HeaderActions>

          <HeaderMobileToggle />
          <MobileMenuContent />
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
