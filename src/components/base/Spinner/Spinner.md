# Spinner

Animated loading indicator for async operations.

## Import

```tsx
import { Spinner } from '@ui'
```

## Usage

### Basic

```tsx
<Spinner />
```

### Sizes

```tsx
<Spinner size="sm" />  {/* 16px */}
<Spinner size="md" />  {/* 24px */}
<Spinner size="lg" />  {/* 32px */}
```

### Custom Label

```tsx
<Spinner label="Saving..." />
<Spinner label="Loading content" />
```

### Inline (Inside Buttons)

```tsx
<Button disabled>
  <Spinner size="sm" inline /> Submitting...
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `label` | `string` | `'Loading'` | Accessible label |
| `inline` | `boolean` | `false` | Remove role for inline use |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Uses `role="status"` to announce loading to screen readers
- `aria-label` provides description
- When `inline={true}`, removes role (parent should have `aria-busy`)

## Common Patterns

### Full Page Loading

```tsx
<div className="flex items-center justify-center" style={{ minHeight: '50vh' }}>
  <Spinner size="lg" label="Loading page content" />
</div>
```

### Button Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner size="sm" inline /> Processing...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### Section Loading

```tsx
{isLoading ? (
  <div className="flex items-center justify-center pv-5">
    <Spinner />
  </div>
) : (
  <Grid>{items.map(...)}</Grid>
)}
```

### With Text

```tsx
<div className="flex flex-col items-center g-2">
  <Spinner size="lg" />
  <p>Loading your dashboard...</p>
</div>
```

## Strapi Integration

```tsx
{isLoading && <Spinner label={t('loading')} />}
```
