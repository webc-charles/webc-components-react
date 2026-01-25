# Testing

Tests focus on **meaningful behavior**, not implementation details.

## What to Test

- Accessibility: aria-label, aria-current, roles
- Props that affect rendered output (title, subtitle, status)
- Conditional rendering (null returns, different outputs)
- Polymorphic patterns (asChild behavior)
- Integration tests for compound components

## What NOT to Test

- CSS class names (`.variant-primary`, `.size-lg`)
- tagName checks (`element.tagName === 'DIV'`)
- className prop forwarding
- Obvious "renders children" tests
- ref forwarding (unless key feature)

## Examples

```typescript
// BAD - Testing CSS
expect(element.className).toMatch(/variant-primary/)

// BAD - Testing tagName
expect(element.tagName).toBe('DIV')

// GOOD - Testing accessibility
expect(link).toHaveAttribute('aria-current', 'page')

// GOOD - Testing conditional render
expect(container).toBeEmptyDOMElement()

// GOOD - Testing asChild
expect(screen.getByRole('button', { name: 'Logo' })).toBeInTheDocument()
```

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
