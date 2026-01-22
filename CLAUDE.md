# CLAUDE.md - React Component Library

## Project Overview

A React component library with 33+ components, built with TypeScript, SCSS Modules, and full i18n support (22 languages).

## Project Structure

```
webc-components-react/
├── src/
│   ├── components/          # 32 component folders
│   ├── styles/              # Global SCSS & CSS variables
│   ├── utils/               # Utilities, hooks, i18n
│   ├── types/               # Shared TypeScript types
│   └── index.ts             # Library entry point
├── dist/                    # Build output (ESM, CJS, types, CSS)
├── .storybook/              # Storybook config
└── scripts/                 # Build/release scripts
```

## Tech Stack

- **React**: 18/19 compatible
- **TypeScript**: Strict mode
- **Styling**: SCSS Modules + CSS Variables
- **Build**: tsup (ESM + CJS)
- **Testing**: Vitest + React Testing Library
- **Docs**: Storybook
- **Linting**: Biome (JS/TS), Stylelint (SCSS)
- **Icons**: lucide-react
- **Carousel**: embla-carousel-react

## Component File Pattern

```
ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.types.ts      # TypeScript types
├── ComponentName.module.scss   # Scoped styles
├── ComponentName.stories.tsx   # Storybook
├── ComponentName.test.tsx      # Tests
└── index.ts                    # Barrel export
```

---

## Components Inventory

### Form (13)
Button, InputText, InputPassword, InputNumber, InputTextarea, InputFile, InputSearch, InputDate, Checkbox, Switch, InputRadio, Select, Slider

### Display (11)
Avatar, Badge, Note, Table, Title, Image, Link, Audio, Video, Iframe, Divider, RichText

### Feedback (6)
Spinner, Progress, Skeleton, Tooltip, Toast, Modal

### Layout (10)
Grid, Card, Banner, Accordion, Tab, Carousel, Header, Footer, Breadcrumb, Pagination

---

## Header Component Architecture

Complex compound component with context:

```
Header/
├── HeaderRoot.tsx              # Context provider, state management
├── HeaderContext.tsx           # Context + useHeader hook
├── Top/                        # Top navigation section
│   ├── HeaderTop.tsx
│   ├── HeaderTopNav.tsx
│   ├── HeaderTopLink.tsx
│   └── HeaderTopDropdown.tsx
├── Main/                       # Main navigation section
│   ├── HeaderMain.tsx
│   ├── HeaderMainNav.tsx
│   ├── HeaderMainLink.tsx
│   ├── HeaderMainDropdown.tsx
│   └── HeaderMainMegamenu.tsx
├── Mobile/                     # Mobile menu
│   ├── HeaderMobile.tsx
│   ├── HeaderMobileTop.tsx
│   ├── HeaderMobileNav.tsx
│   ├── HeaderMobileLink.tsx
│   └── HeaderMobileToggle.tsx
├── useHeaderDropdown.ts        # Shared dropdown logic hook
└── useHeaderNavLabel.ts        # Nav aria-label hook with auto-numbering
```

### HeaderContext
```typescript
type HeaderContextTypes = {
  isOpen: boolean              // Mobile menu state
  toggle: () => void           // Toggle mobile menu
  mobileMenuId: string         // For aria-controls
  mobileToggleId: string       // For focus return
  registerNav: (type) => number  // Register nav, get index
  getNavCount: (type) => number  // Get total navs of type
}
```

### useHeaderDropdown Hook
Shared logic for desktop dropdowns:
- Open/close state
- Click outside detection
- Escape key handling
- Focus management
- Keyboard navigation (ArrowDown/Up)

### useHeaderNavLabel Hook
Auto-generates accessible nav labels:
- Returns custom label if provided
- Falls back to translated default (main_navigation, top_navigation, mobile_navigation)
- Appends index number if multiple navs of same type exist

---

## Footer Component Architecture

Structural compound component (no context needed):

```
Footer/
├── FooterRoot.tsx              # Semantic <footer> wrapper
├── Footer.types.ts             # TypeScript types
├── Main/                       # Main content section
│   ├── FooterMain.tsx          # Padding wrapper
│   ├── FooterMainNav.tsx       # Flex column for links
│   └── FooterMainLink.tsx      # Link with asChild pattern
└── Bottom/                     # Bottom bar section
    ├── FooterBottom.tsx        # Flex row for copyright/legal
    ├── FooterBottomNav.tsx     # Flex row for legal links
    └── FooterBottomLink.tsx    # Link with asChild pattern
```

### Design Philosophy
- **Structural only**: No opinionated colors/fonts - projects control visual styling
- **Composable**: Uses existing Grid, GridItem, Title components for layout
- **CSS Variables**: Customizable via `--footer-main-padding`, `--footer-nav-gap`, etc.

### Usage Pattern
```tsx
<FooterRoot style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
  <FooterMain>
    <Grid col={4} gap="lg">
      <GridItem>
        <Title level="h3">Company</Title>
        <FooterMainNav>
          <FooterMainLink asChild><Link href="#">About</Link></FooterMainLink>
        </FooterMainNav>
      </GridItem>
    </Grid>
  </FooterMain>
  <FooterBottom>
    <span>© 2026</span>
    <FooterBottomNav>
      <FooterBottomLink asChild><Link href="#">Privacy</Link></FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

---

## Styling System

### CSS Variables (root.scss)

**Colors** - 7 variants, 4 levels each:
```scss
// Variants: default, primary, secondary, success, danger, warning, info
--color-{variant}-1    // Dark (hover)
--color-{variant}-2    // Base
--color-{variant}-3    // Light (background)
--color-{variant}-contrast  // For dark backgrounds
```

**Typography**:
```scss
--font-size-1 through --font-size-8
--font-weight-sm, --font-weight-md, --font-weight-lg
```

**Z-index Layers**:
```scss
--z-100  // Dropdowns
--z-200  // Sticky elements
--z-300  // Fixed elements
--z-400  // Modal backdrop
--z-500  // Modal content
--z-600  // Toasts
```

### Component SCSS Pattern
```scss
.component {
  // Base styles
}

// Size variants
.size-sm { ... }
.size-md { ... }

// Color variants using loop
@each $variant in $variants {
  .variant-#{$variant} {
    background-color: var(--color-#{$variant}-3);
    color: var(--color-#{$variant}-1);
  }
}
```

---

## i18n System

### 22 Supported Languages
en, fr, de, es, it, pt, nl, pl, sv, da, fi, el, cs, hu, ro, bg, hr, sk, sl, et, lv, lt

### Usage
```typescript
// Provider at app root
<I18nProvider locale="en">
  <App />
</I18nProvider>

// In components
const t = useI18n()
console.log(t.close)  // "Close"
console.log(t.months[0])  // "January"
```

### Translation Keys
```json
{
  "loading": "Loading",
  "menu": "Menu",
  "close": "Close",
  "main_navigation": "Main navigation",
  "top_navigation": "Top navigation",
  "mobile_navigation": "Mobile navigation",
  "months": ["January", ...],
  "days_short": ["Sun", ...]
}
```

---

## TypeScript Patterns

### Component Props Pattern
```typescript
import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from '../../types'

export type ComponentTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
  size?: 'sm' | 'md' | 'lg'
}
```

### Shared Types (types/)
```typescript
export type ColorVariant =
  | 'default' | 'primary' | 'secondary'
  | 'success' | 'danger' | 'warning' | 'info'
```

---

## Context Providers

### ModalsContext
```typescript
const { addModal, removeModal } = useModals()
addModal({
  title: 'Confirm',
  children: <p>Are you sure?</p>,
  onClose: () => {}
})
```

### ToastsContext
```typescript
const { addToast } = useToasts()
addToast({
  message: 'Success!',
  variant: 'success',
  duration: 3000
})
```

---

## Adding a New Component

1. **Create folder**: `src/components/MyComponent/`

2. **Types** (`MyComponent.types.ts`):
```typescript
import type { ComponentPropsWithRef } from 'react'
export type MyComponentTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}
```

3. **Component** (`MyComponent.tsx`):
```typescript
import clsx from 'clsx'
import styles from './MyComponent.module.scss'
import type { MyComponentTypes } from './MyComponent.types'

export function MyComponent({
  ref,
  variant = 'default',
  className,
  children,
  ...rest
}: MyComponentTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.myComponent, styles[`variant-${variant}`], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
```

4. **Styles** (`MyComponent.module.scss`):
```scss
.myComponent {
  display: flex;
}

@each $variant in $variants {
  .variant-#{$variant} {
    background-color: var(--color-#{$variant}-3);
  }
}
```

5. **Export** (`index.ts`):
```typescript
export { MyComponent } from './MyComponent'
export type { MyComponentTypes } from './MyComponent.types'
```

6. **Register** (`src/components/index.ts`):
```typescript
export * from './MyComponent'
```

---

## Commands

```bash
pnpm dev           # Storybook dev server
pnpm build         # Build library
pnpm test          # Run tests (watch)
pnpm test:run      # Run tests once
pnpm storybook     # Storybook on :6006
pnpm lint          # Biome check
pnpm lint:fix      # Biome fix
```

## Build Output

```
dist/
├── index.js       # CommonJS
├── index.mjs      # ESM
├── index.d.ts     # TypeScript declarations
└── index.css      # Compiled global styles
```

## Package Exports

```typescript
// Components
import { Button, Header, Select } from '@webc-charles/components-react'

// i18n
import { I18nProvider, useI18n } from '@webc-charles/components-react'

// CSS (import once at app root)
import '@webc-charles/components-react/index.css'

// SCSS variables (optional, for custom builds)
import '@webc-charles/components-react/scss/root.scss'
```
