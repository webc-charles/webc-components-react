# Testing

Tests focus on **meaningful behavior**, not implementation details.

## What is Tested

- Accessibility: aria-label, aria-current, roles
- Props that affect rendered output (title, subtitle, status)
- Conditional rendering (null returns, different outputs)
- Polymorphic patterns (asChild behavior)
- Integration tests for compound components

## Running Tests

```bash
pnpm test          # Watch mode
pnpm test:run      # Run once
```

## Test File Pattern

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx   # Tests here
└── ...
```
