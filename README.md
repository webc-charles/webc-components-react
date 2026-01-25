# @webc-charles/components-react

A lightweight, accessible React component library built with TypeScript, SCSS Modules, and React 19.

📚 **[Live Storybook Demo](https://webc-charles.github.io/webc-components-react/)**

## Installation

```bash
npm install @webc-charles/components-react
```

```tsx
// Import styles once at app root
import '@webc-charles/components-react/index.css'

// Use components
import { Button, Badge, Title, Note } from '@webc-charles/components-react'
```

## Components

| Category       | Count | Components |
|----------------|-------|------------|
| **base/**      | 19    | Audio, Avatar, Badge, Breadcrumb, Divider, Iframe, Image, Link, Logo, Note, Pagination, Progress, RichText, Skeleton, Spinner, Title, Toast, Tooltip, Video |
| **form/**      | 13    | Button, Checkbox, Date, File, Number, Password, Radio, Search, Select, Slider, Switch, Text, Textarea |
| **modules/**   | 8     | Accordion, Banner, Card, Carousel, Grid, Modal, Tab, Table |
| **sections/**  | 6     | Account, Auth, Dashboard, Footer, Header, Page |

## Quick Example

```tsx
import { Button, Badge, Note, Title } from '@webc-charles/components-react'

function App() {
  return (
    <div>
      <Button variant="primary" appearance="button">Click me</Button>
      <Badge variant="success">New</Badge>
      <Note variant="info">
        <Title level="h3">Information</Title>
        <p>This is an informational note.</p>
      </Note>
    </div>
  )
}
```

## Documentation

| Doc | Contents |
|-----|----------|
| [docs/components.md](docs/components.md) | All components with usage examples |
| [docs/styling.md](docs/styling.md) | CSS variables, theming, color variants |
| [docs/i18n.md](docs/i18n.md) | Internationalization - translatable props |
| [docs/architecture.md](docs/architecture.md) | Project structure, patterns, adding components |
| [docs/testing.md](docs/testing.md) | Testing guidelines |
| [docs/development.md](docs/development.md) | Commands, release workflow, SSR |

## Key Features

- **Lightweight**: Minimal dependencies (clsx, embla-carousel-react, lucide-react)
- **Accessible**: WCAG AA, keyboard navigation, ARIA attributes
- **Type-safe**: Full TypeScript with `ComponentPropsWithRef` patterns
- **Customizable**: CSS variables for theming
- **SSR Compatible**: Works with Next.js, Remix, Gatsby

## Theming

Override CSS variables:

```css
:root {
  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
}
```

## Development

```bash
pnpm install
pnpm dev             # Start Storybook
pnpm build           # Build library
pnpm test            # Run tests
```

## License

MIT
