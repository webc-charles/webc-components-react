# Styling

## CSS Variables

### Colors

7 variants with 4 levels each:

```scss
// Variants: default, primary, secondary, success, danger, warning, info
--color-{variant}-1        // Dark (hover)
--color-{variant}-2        // Base
--color-{variant}-3        // Light (background)
--color-{variant}-contrast // For dark backgrounds
```

### Z-index Layers

```scss
--z-100  // Dropdowns
--z-200  // Sticky elements
--z-300  // Fixed elements
--z-400  // Modal backdrop
--z-500  // Modal content
--z-600  // Toasts
```

### Typography

```scss
--font-family-sans
--font-family-mono
--font-size-1 through --font-size-9
--line-height-tight
--line-height-normal
--line-height-relaxed
```

### Spacing & Radius

```scss
--spacing-xs through --spacing-xl
--radius-sm, --radius-md, --radius-lg, --radius-full
```

## Color Variants

```typescript
type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
```

Used by: Button, Badge, Note, Spinner, Progress, Avatar, Switch, and more.

## Contrast Mode

For dark backgrounds, use `contrast` prop:

```tsx
<Button contrast appearance="button">Light button</Button>
<Spinner contrast />
```

## Customizing Theme

Override CSS variables in your CSS:

```css
:root {
  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
  --color-primary-contrast: #60a5fa;

  --font-size-4: 1.6rem;
  --radius-md: 0.5rem;
}
```

## Component SCSS Pattern

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

## Import Styles

Import base styles once at app entry:

```tsx
import '@webc-charles/components-react/index.css'
```
