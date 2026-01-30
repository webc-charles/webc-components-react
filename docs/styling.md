# Styling

Quick reference for CSS utilities and theming. See [detailed documentation](../src/styles/styles.md) for mixins and full API.

## CSS Variables

### Colors

| Variable | Description |
|----------|-------------|
| `--color-{variant}-1` | Dark (hover state) |
| `--color-{variant}-2` | Base color |
| `--color-{variant}-3` | Light (background) |
| `--color-{variant}-contrast` | For dark backgrounds |
| `--color-grey-1` to `--color-grey-7` | Grey scale (1=dark, 7=light) |
| `--color-black`, `--color-white` | Black and white |

Variants: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`

### Spacing

| Variable | Value |
|----------|-------|
| `--spacing-1` | 0.5rem |
| `--spacing-2` | 1rem |
| `--spacing-3` | 2rem |
| `--spacing-4` | 3rem |
| `--spacing-5` | 4rem |
| `--spacing-6` | 5rem |
| `--spacing-7` | 6rem |
| `--spacing-8` | 8rem |
| `--spacing-9` | 10rem |

### Typography

| Variable | Value |
|----------|-------|
| `--font-size-1` to `--font-size-8` | 1rem to 3rem |
| `--font-weight-md` | 400 |
| `--font-weight-lg` | 600 |
| `--font-weight-xl` | 800 |

### Layout

| Variable | Value |
|----------|-------|
| `--container-max-width` | 120rem |
| `--radius-sm/md/lg` | 0.4/0.5/0.6rem |
| `--z-index-1` to `--z-index-6` | 100-600 |

## Utility Classes

### Spacing

Pattern: `{property}{direction?}-{breakpoint?}-{size}`

```html
<!-- Margin -->
<div class="m-3">all sides</div>
<div class="mt-2">top</div>
<div class="mv-4">vertical</div>
<div class="mh-3">horizontal</div>

<!-- Padding -->
<div class="p-3">all sides</div>
<div class="pt-2">top</div>
<div class="pv-4">vertical</div>

<!-- Gap -->
<div class="g-2">gap</div>

<!-- Responsive -->
<div class="p-2 p-md-4 p-lg-5">responsive</div>
```

| Direction | Props |
|-----------|-------|
| `t/r/b/l` | top/right/bottom/left |
| `v` | top + bottom |
| `h` | left + right |

| Breakpoint | Width |
|------------|-------|
| `sm` | ≥768px |
| `md` | ≥1024px |
| `lg` | ≥1200px |
| `xl` | ≥1400px |

### Alignment

```html
<!-- Text -->
<p class="text-center">centered</p>
<p class="text-left text-md-center">responsive</p>

<!-- Flexbox -->
<div class="flex-col flex-md-row">direction</div>
<div class="justify-center">justify</div>
<div class="items-center">align</div>
<div class="flex-wrap">wrap</div>
```

| Class | Values |
|-------|--------|
| `text-{align}` | left, center, right |
| `justify-{value}` | start, center, end, between, around, evenly |
| `items-{value}` | start, center, end, stretch, baseline |
| `self-{value}` | start, center, end, stretch, baseline |
| `flex-{dir}` | row, col, row-reverse, col-reverse |

### Colors

```html
<!-- Background -->
<div class="bg-primary-2">primary</div>
<div class="bg-grey-6">light grey</div>
<div class="bg-white">white</div>

<!-- Text -->
<p class="text-primary-2">primary</p>
<p class="text-grey-2">muted</p>
<p class="text-danger-2">error</p>
```

### Typography

```html
<span class="uppercase">UPPERCASE</span>
<span class="capitalize">Capitalize</span>
<span class="lowercase">lowercase</span>
```

## Theming

Override CSS variables:

```css
:root {
  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
  --color-primary-contrast: #60a5fa;
}
```

## Contrast Mode

For dark backgrounds:

```tsx
<Button contrast appearance="button">Light button</Button>
<Spinner contrast />
```

## Import

```tsx
import '@webc-charles/components-react/index.css'
```

## Detailed Documentation

For mixins and full SCSS API, see [src/styles/styles.md](../src/styles/styles.md).
