# Development

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
pnpm release       # Build, test, bump version, commit & push
```

## Release & Versioning

### Version Strategy

The release script auto-bumps **minor** when patch reaches 99:

- Patch < 99: `1.0.50` → `1.0.51`
- Patch >= 99: `1.0.99` → `1.1.0`

### Release Workflow

```bash
# From react-components repo
pnpm release "commit message"

# Or use the pushui alias (from anywhere)
pushui "commit message"
```

`pushui` runs `/Users/charles/Web/webc/scripts/publish-and-update.sh` which:

1. Runs `pnpm release` (tests, builds, bumps version, pushes)
2. Waits for CI to publish to npm
3. Updates frontend to use the new version

## Dependencies

| Package                | Purpose                       |
|------------------------|-------------------------------|
| `clsx`                 | Conditional className utility |
| `embla-carousel-react` | Carousel functionality        |
| `lucide-react`         | Icon set                      |

## Package Exports

```typescript
// Components
import { Button, Header, Select } from '@webc-charles/components-react'

// CSS (import once at app root)
import '@webc-charles/components-react/index.css'
```

## SSR Compatibility

Compatible with Next.js, Remix, Gatsby. Uses `useId()` for stable hydration.

### Next.js

Rename imports to avoid conflicts:

```tsx
import { Image as BaseImage, Link as BaseLink } from '@webc-charles/components-react'
import Image from 'next/image'
import Link from 'next/link'
```
