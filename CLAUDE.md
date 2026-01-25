# CLAUDE.md

React component library with TypeScript and SCSS Modules. Components use English defaults with props for translated strings.

## Quick Reference

| Category      | Count | Examples |
|---------------|-------|----------|
| base/         | 19    | Avatar, Badge, Pagination, Toast |
| form/         | 13    | Button, Date, Search, Select |
| modules/      | 8     | Carousel, Modal, Tab, Table |
| sections/     | 6     | Header, Footer, Auth, Page |

## Commands

```bash
pnpm dev           # Storybook
pnpm build         # Build library
pnpm test          # Tests (watch)
pnpm lint          # Biome + Stylelint
pnpm release       # Build, bump, push
```

## Documentation

| Doc | Contents |
|-----|----------|
| [docs/architecture.md](docs/architecture.md) | Project structure, file patterns, TypeScript patterns, adding components |
| [docs/components.md](docs/components.md) | All components with usage examples |
| [docs/styling.md](docs/styling.md) | CSS variables, theming, color variants |
| [docs/i18n.md](docs/i18n.md) | Translatable props by component |
| [docs/testing.md](docs/testing.md) | Testing guidelines |
| [docs/development.md](docs/development.md) | Commands, release workflow, SSR |

## Communication Style

- Short status updates, not paragraphs
- One line per action during batch work
- Tables over lists, lists over prose
