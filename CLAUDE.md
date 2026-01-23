# CLAUDE.md - React Component Library

## Project Overview

A React component library built with TypeScript, SCSS Modules, and full i18n support (22 languages).

## Project Structure

```
webc-components-react/
├── src/
│   ├── components/
│   │   ├── base/           # Atomic UI elements (19)
│   │   ├── form/           # Form inputs and controls (13)
│   │   ├── modules/        # Content wrappers (8)
│   │   └── sections/       # Page-level layouts (6)
│   ├── styles/             # Global SCSS & CSS variables
│   ├── utils/              # Utilities, hooks
│   ├── i18n/               # Translations (22 languages)
│   ├── types/              # Shared TypeScript types
│   └── index.ts            # Library entry point
├── dist/                   # Build output (ESM, CJS, types, CSS)
└── .storybook/             # Storybook config
```

## Path Aliases

Use these aliases for imports (configured in tsconfig, vitest, storybook):

```typescript
import { Button } from 'form/Button'
import { Title } from 'base/Title'
import { Card } from 'modules/Card'
import { Header } from 'sections/Header'
import type { ColorVariant } from 'types'
import { useI18n } from 'i18n'
```

---

## Components by Category

### base/ - Atomic UI Elements (19)
Audio, Avatar, Badge, Breadcrumb, Divider, Iframe, Image, Link, Logo, Note, Pagination, Progress, RichText, Skeleton, Spinner, Title, Toast, Tooltip, Video

### form/ - Form Inputs (13)
Button, Checkbox, Date, File, Number, Password, Radio, Search, Select, Slider, Switch, Text, Textarea

### modules/ - Content Wrappers (8)
Accordion, Banner, Card, Carousel, Grid, Modal, Tab, Table

### sections/ - Page Layouts (6)
Account, Auth, Dashboard, Footer, Header, Page

---

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

## Header Component Architecture

Complex compound component with context:

```
sections/Header/
├── HeaderRoot.tsx              # Context provider, state management
├── HeaderContext.tsx           # Context + useHeader hook
├── Top/                        # Top navigation section
├── Main/                       # Main navigation section
├── Mobile/                     # Mobile menu
├── useHeaderDropdown.ts        # Shared dropdown logic hook
└── useHeaderNavLabel.ts        # Nav aria-label hook
```

## Footer Component Architecture

Structural compound component (no context needed):

```
sections/Footer/
├── FooterRoot.tsx              # Semantic <footer> wrapper
├── Main/                       # Main content section
└── Bottom/                     # Bottom bar section
```

---

## Styling System

### CSS Variables (root.scss)

**Colors** - 7 variants, 4 levels each:
```scss
// Variants: default, primary, secondary, success, danger, warning, info
--color-{variant}-1        // Dark (hover)
--color-{variant}-2        // Base
--color-{variant}-3        // Light (background)
--color-{variant}-contrast // For dark backgrounds
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
@use 'styles/color' as *;

.component {
  // Base styles
}

@each $variant in $color-variants {
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
import { I18nProvider, useI18n } from 'i18n'

// Provider at app root
<I18nProvider locale="en">
  <App />
</I18nProvider>

// In components
const t = useI18n()
t.close        // "Close"
t.months[0]    // "January"
```

---

## TypeScript Patterns

### Component Props Pattern
```typescript
import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

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

## Adding a New Component

1. **Choose category**: `base/`, `form/`, `modules/`, or `sections/`

2. **Create folder**: `src/components/{category}/MyComponent/`

3. **Create files**:
```typescript
// MyComponent.types.ts
import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

export type MyComponentTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}

// MyComponent.tsx
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
      className={clsx(styles.root, styles[`variant-${variant}`], className)}
      {...rest}
    >
      {children}
    </div>
  )
}

// index.ts
export { MyComponent } from './MyComponent'
export type { MyComponentTypes } from './MyComponent.types'
```

4. **Register** in `src/components/{category}/index.ts`:
```typescript
export * from './MyComponent'
```

---

## Testing Guidelines

Tests should focus on **meaningful behavior**, not implementation details.

### What to Test
- Accessibility: aria-label, aria-current, roles
- Props that affect rendered output (title, subtitle, status)
- Conditional rendering (null returns, different outputs)
- Polymorphic patterns (asChild behavior)
- Integration tests for compound components

### What NOT to Test
- CSS class names (`.variant-primary`, `.size-lg`)
- tagName checks (`element.tagName === 'DIV'`)
- className prop forwarding
- Obvious "renders children" tests
- ref forwarding (unless key feature)

### Examples
```typescript
// ❌ BAD - Testing CSS
expect(element.className).toMatch(/variant-primary/)

// ❌ BAD - Testing tagName
expect(element.tagName).toBe('DIV')

// ✅ GOOD - Testing accessibility
expect(link).toHaveAttribute('aria-current', 'page')

// ✅ GOOD - Testing conditional render
expect(container).toBeEmptyDOMElement()

// ✅ GOOD - Testing asChild
expect(screen.getByRole('button', { name: 'Logo' })).toBeInTheDocument()
```

---

## Commands

```bash
pnpm dev           # Storybook dev server
pnpm build         # Build library
pnpm test          # Run tests (watch)
pnpm test:run      # Run tests once
pnpm lint          # Biome check
pnpm lint:fix      # Biome fix
pnpm lint:css      # Stylelint check
pnpm lint:css:fix  # Stylelint fix
```

## Package Exports

```typescript
// Components
import { Button, Header, Select } from '@webc-charles/components-react'

// i18n
import { I18nProvider, useI18n } from '@webc-charles/components-react'

// CSS (import once at app root)
import '@webc-charles/components-react/index.css'
```
