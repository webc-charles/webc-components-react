import type { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoImage, LogoFallback } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
    },
    children: {
      control: false,
      description: 'Logo content (LogoImage or LogoFallback)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Playground: Story = {
  render: () => (
    <Logo href="/">
      <LogoFallback>ACME</LogoFallback>
    </Logo>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Logo href="/">
      <LogoImage
        src="https://via.placeholder.com/120x40?text=Logo"
        alt="Company Logo"
        width={120}
        height={40}
      />
    </Logo>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Logo href="/">
      <LogoFallback>Brand</LogoFallback>
    </Logo>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Logo asChild>
      <button type="button" onClick={() => alert('Logo clicked!')}>
        <LogoFallback>Click Me</LogoFallback>
      </button>
    </Logo>
  ),
}

export const CustomStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Logo href="/">
        <LogoFallback>Default</LogoFallback>
      </Logo>

      <Logo href="/" style={{ color: 'var(--color-secondary-1)' }}>
        <LogoFallback>Custom Color</LogoFallback>
      </Logo>

      <Logo href="/" className="custom-logo">
        <LogoFallback style={{ fontSize: '2rem' }}>Small</LogoFallback>
      </Logo>
    </div>
  ),
}

export const ImageFallbackComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div>
        <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>With Image:</p>
        <Logo href="/">
          <LogoImage
            src="https://via.placeholder.com/100x32?text=Logo"
            alt="Logo"
            width={100}
            height={32}
          />
        </Logo>
      </div>

      <div>
        <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>With Fallback:</p>
        <Logo href="/">
          <LogoFallback>ACME</LogoFallback>
        </Logo>
      </div>
    </div>
  ),
}
