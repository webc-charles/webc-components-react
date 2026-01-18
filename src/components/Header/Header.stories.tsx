import type { Meta, StoryObj } from '@storybook/react'
import { Button, Grid, GridItem, Link, Title } from 'components'
import {
  HeaderMain,
  HeaderMainDropdown,
  HeaderMainDropdownLink,
  HeaderMainLink,
  HeaderMainLogo,
  HeaderMainNav,
  HeaderMobile,
  HeaderMobileBar,
  HeaderMobileDropdown,
  HeaderMobileDropdownLink,
  HeaderMobileLink,
  HeaderMobileLogo,
  HeaderMobileMenu,
  HeaderMobileNav,
  HeaderMobileToggle,
  HeaderMobileTop,
  HeaderRoot,
  HeaderTop,
  HeaderTopDropdown,
  HeaderTopDropdownLink,
  HeaderTopLink,
  HeaderTopNav,
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
}

export default meta
type Story = StoryObj<typeof HeaderRoot>

const ProductsDropdown = () => (
  <div>
    <HeaderMainDropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </HeaderMainDropdownLink>
    <HeaderMainDropdownLink asChild>
      <Link href="/">Services</Link>
    </HeaderMainDropdownLink>
    <HeaderMainDropdownLink asChild>
      <Link href="/">Formations</Link>
    </HeaderMainDropdownLink>
    <HeaderMainDropdownLink asChild>
      <Link href="/">Support</Link>
    </HeaderMainDropdownLink>
  </div>
)

const LanguageDropdownContent = () => (
  <>
    <HeaderTopDropdownLink asChild>
      <Link href="/">Français</Link>
    </HeaderTopDropdownLink>
    <HeaderTopDropdownLink asChild>
      <Link href="/">English</Link>
    </HeaderTopDropdownLink>
    <HeaderTopDropdownLink asChild>
      <Link href="/">Español</Link>
    </HeaderTopDropdownLink>
    <HeaderTopDropdownLink asChild>
      <Link href="/">Deutsch</Link>
    </HeaderTopDropdownLink>
  </>
)

const MegaMenuContent = () => (
  <Grid col={4} gap="md">
    <GridItem>
      <Title level="h4">Produits</Title>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </HeaderMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Consulting</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Intégration</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </HeaderMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Documentation</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">API</Link>
      </HeaderMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Free trial</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </HeaderMainDropdownLink>
      <HeaderMainDropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </HeaderMainDropdownLink>
    </GridItem>
  </Grid>
)

const MobileMenuContent = () => (
  <HeaderMobileMenu>
    <HeaderMobileTop>
      <Title level="h3">Menu</Title>
      <HeaderMobileToggle />
    </HeaderMobileTop>

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
        <HeaderMainLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderMainLogo>

        <HeaderMainNav>
          <HeaderMainLink asChild current>
            <Link href="/" aria-current="page">
              Accueil
            </Link>
          </HeaderMainLink>
          <HeaderMainLink asChild>
            <Link href="/">Produits</Link>
          </HeaderMainLink>
          <HeaderMainLink asChild>
            <Link href="/">À propos</Link>
          </HeaderMainLink>
          <HeaderMainLink asChild>
            <Link href="/">Contact</Link>
          </HeaderMainLink>
        </HeaderMainNav>

        <HeaderMainNav>
          <Button appearance="outline" variant="primary">
            Connexion
          </Button>
          <Button appearance="button" variant="primary">
            Inscription
          </Button>
        </HeaderMainNav>
      </HeaderMain>

      <HeaderMobile>
        <HeaderMobileBar>
          <HeaderMobileLogo>
            <Link href="/" style={logoStyles}>
              Logo
            </Link>
          </HeaderMobileLogo>
          <HeaderMobileToggle />
        </HeaderMobileBar>
        <MobileMenuContent />
      </HeaderMobile>
    </HeaderRoot>
  ),
}

export const WithTopBar: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderTop>
        <HeaderTopNav>
          <HeaderTopLink asChild>
            <Link href="/">Aide</Link>
          </HeaderTopLink>
          <HeaderTopLink asChild>
            <Link href="/">Contact</Link>
          </HeaderTopLink>
          <HeaderTopDropdown label="FR">
            <LanguageDropdownContent />
          </HeaderTopDropdown>
        </HeaderTopNav>
      </HeaderTop>

      <HeaderMain>
        <HeaderMainLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderMainLogo>

        <HeaderMainNav>
          <HeaderMainLink asChild current>
            <Link href="/" aria-current="page">
              Accueil
            </Link>
          </HeaderMainLink>
          <HeaderMainLink asChild>
            <Link href="/">Produits</Link>
          </HeaderMainLink>
          <HeaderMainLink asChild>
            <Link href="/">À propos</Link>
          </HeaderMainLink>
        </HeaderMainNav>

        <HeaderMainNav>
          <Button appearance="button" variant="primary">
            Commencer
          </Button>
        </HeaderMainNav>
      </HeaderMain>

      <HeaderMobile>
        <HeaderMobileBar>
          <HeaderMobileLogo>
            <Link href="/" style={logoStyles}>
              Logo
            </Link>
          </HeaderMobileLogo>
          <HeaderMobileToggle />
        </HeaderMobileBar>
        <MobileMenuContent />
      </HeaderMobile>
    </HeaderRoot>
  ),
}

export const WithDropdowns: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderMain>
        <HeaderMainLogo>
          <Link href="/" style={logoStyles}>
            Logo
          </Link>
        </HeaderMainLogo>

        <HeaderMainNav>
          <HeaderMainLink asChild>
            <Link href="/">Accueil</Link>
          </HeaderMainLink>
          <HeaderMainDropdown label="Produits" current>
            <ProductsDropdown />
          </HeaderMainDropdown>
          <HeaderMainDropdown label="Services">
            <ProductsDropdown />
          </HeaderMainDropdown>
          <HeaderMainLink asChild>
            <Link href="/">Contact</Link>
          </HeaderMainLink>
        </HeaderMainNav>

        <HeaderMainNav>
          <Link href="/" appearance="button" variant="primary">
            Démo
          </Link>
        </HeaderMainNav>
      </HeaderMain>

      <HeaderMobile>
        <HeaderMobileBar>
          <HeaderMobileLogo>
            <Link href="/" style={logoStyles}>
              Logo
            </Link>
          </HeaderMobileLogo>
          <HeaderMobileToggle />
        </HeaderMobileBar>
        <MobileMenuContent />
      </HeaderMobile>
    </HeaderRoot>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <HeaderRoot>
      <HeaderMain>
        <HeaderMainLogo>
          <Link href="/" style={logoStyles}>
            Enterprise
          </Link>
        </HeaderMainLogo>

        <HeaderMainNav>
          <HeaderMainLink asChild>
            <Link href="/">Accueil</Link>
          </HeaderMainLink>
          <HeaderMainDropdown label="Solutions" mega current>
            <MegaMenuContent />
          </HeaderMainDropdown>
          <HeaderMainDropdown label="Produits">
            <ProductsDropdown />
          </HeaderMainDropdown>
          <HeaderMainLink asChild>
            <Link href="/">Contact</Link>
          </HeaderMainLink>
        </HeaderMainNav>

        <HeaderMainNav>
          <Link href="/" appearance="outline" variant="primary">
            Se connecter
          </Link>
          <Link href="/" appearance="button" variant="primary">
            Essai gratuit
          </Link>
        </HeaderMainNav>
      </HeaderMain>

      <HeaderMobile>
        <HeaderMobileBar>
          <HeaderMobileLogo>
            <Link href="/" style={logoStyles}>
              Logo
            </Link>
          </HeaderMobileLogo>
          <HeaderMobileToggle />
        </HeaderMobileBar>
        <MobileMenuContent />
      </HeaderMobile>
    </HeaderRoot>
  ),
}
