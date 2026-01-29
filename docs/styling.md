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

### Font Weights

```scss
--font-weight-md: 400;  // Body text (inherited from body)
--font-weight-lg: 600;  // Subtitles, labels
--font-weight-xl: 800;  // Headings, buttons
```

Body sets `font-weight: var(--font-weight-md)`, so most elements inherit it automatically.

### Spacing

```scss
--spacing-1: 0.5rem;
--spacing-2: 1rem;
--spacing-3: 2rem;
--spacing-4: 3rem;
--spacing-5: 4rem;
```

### Spacing Utility Classes

Bootstrap-style margin, padding, and gap utilities:

```html
<!-- Base -->
<div class="m-1">margin: 0.5rem</div>
<div class="mt-2">margin-top: 1rem</div>
<div class="mv-3">margin vertical (top + bottom)</div>
<div class="p-3">padding: 2rem</div>
<div class="ph-4">padding horizontal (left + right)</div>
<div class="g-2">gap: 1rem</div>

<!-- Responsive (breakpoint-size) -->
<div class="m-1 m-md-3 m-lg-5">responsive margin</div>
<div class="pv-2 pv-lg-4">responsive padding vertical</div>
<div class="g-1 g-md-3">responsive gap</div>
```

| Prefix | Property |
|--------|----------|
| `m-` | margin (all sides) |
| `mt-`, `mr-`, `mb-`, `ml-` | margin-top/right/bottom/left |
| `mv-`, `mh-` | margin vertical/horizontal |
| `p-` | padding (all sides) |
| `pt-`, `pr-`, `pb-`, `pl-` | padding-top/right/bottom/left |
| `pv-`, `ph-` | padding vertical/horizontal |
| `g-` | gap |

Breakpoints: `sm` (768px), `md` (1024px), `lg` (1200px), `xl` (1400px)

### Alignment Utility Classes

Text alignment, flexbox justify/align utilities:

```html
<!-- Text alignment -->
<div class="text-center">centered text</div>
<div class="text-left text-md-center">responsive text align</div>

<!-- Flex justify -->
<div class="justify-center">justify-content: center</div>
<div class="justify-between">justify-content: space-between</div>

<!-- Flex align -->
<div class="items-center">align-items: center</div>
<div class="self-end">align-self: flex-end</div>

<!-- Flex direction -->
<div class="flex-col flex-md-row">column on mobile, row on desktop</div>
```

| Class | Property |
|-------|----------|
| `text-left`, `text-center`, `text-right` | text-align |
| `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly` | justify-content |
| `items-start`, `items-center`, `items-end`, `items-stretch`, `items-baseline` | align-items |
| `self-start`, `self-center`, `self-end`, `self-stretch`, `self-baseline` | align-self |
| `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse` | flex-direction |
| `flex-wrap`, `flex-nowrap` | flex-wrap |

Responsive variants: `text-md-center`, `flex-lg-row`, etc.

### Border Radius

```scss
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
