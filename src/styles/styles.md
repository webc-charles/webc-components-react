# Styles

CSS utilities, mixins, and design tokens.

## File Structure

| File | Purpose |
|------|---------|
| `root.scss` | CSS variables (colors, typography, spacing) |
| `reset.scss` | CSS reset and base element styles |
| `main.scss` | Body layout, header padding, lists, links |
| `font-size.scss` | Font size utility classes |
| `align.scss` | Flexbox and text alignment utilities |
| `spacing.scss` | Margin, padding, gap utilities |
| `color.scss` | Background and text color utilities |
| `typo.scss` | Typography mixins |

---

## CSS Variables

### Colors

```css
/* Base */
--color-black
--color-black-50, --color-black-20, --color-black-10
--color-white
--color-white-50, --color-white-20, , --color-white-10

/* Grey scale (1=dark, 7=light) */
--color-grey-1  /* #333 */
--color-grey-2  /* #666 */
--color-grey-3  /* #737373 */
--color-grey-4  /* #949494 */
--color-grey-5  /* #DDD */
--color-grey-6  /* #EEE */
--color-grey-7  /* #F5F5F5 */

/* Color variants: default, primary, secondary, success, danger, warning, info */
--color-{variant}-1        /* dark (hover, text on light) */
--color-{variant}-2        /* base (main color) */
--color-{variant}-3        /* light (background) */
--color-{variant}-contrast /* vibrant (for dark backgrounds) */
```

### Typography

```css
/* Font sizes */
--font-size-1  /* 1rem */
--font-size-2  /* 1.2rem */
--font-size-3  /* 1.4rem */
--font-size-4  /* 1.6rem (base) */
--font-size-5  /* 1.8rem */
--font-size-6  /* 2rem */
--font-size-7  /* 3rem */
--font-size-8  /* 4rem */
--font-size-9  /* 6rem */

/* Line height */
--line-height-heading  /* 1.2 */
--line-height-default  /* 1.4 */

/* Font weight */
--font-weight-body     /* 400 */
--font-weight-button   /* 600 */
--font-weight-strong   /* 600 */
--font-weight-heading  /* 800 */

/* Font family */
--site-font
```

### Spacing

```css
--spacing-1  /* 0.5rem */
--spacing-2  /* 1rem */
--spacing-3  /* 2rem */
--spacing-4  /* 3rem */
--spacing-5  /* 4rem */
--spacing-6  /* 5rem */
--spacing-7  /* 6rem */
--spacing-8  /* 8rem */
--spacing-9  /* 10rem */
```

### Layout

```css
--screen-max-width     /* 168rem */
--container-max-width  /* 120rem */
--height-mobile-menu   /* 6rem */
--height-main-menu     /* 6rem */
--height-top-menu      /* 3rem */
```

### Border Radius

```css
--radius-xs  /* 0.3rem */
--radius-sm  /* 0.4rem */
--radius-md  /* 0.5rem */
--radius-lg  /* 0.6rem */
```

### Z-Index

```css
--z-index-1  /* 100 */
--z-index-2  /* 200 */
--z-index-3  /* 300 */
--z-index-4  /* 400 */
--z-index-5  /* 500 */
--z-index-6  /* 600 */
```

### Transitions

```css
--transition-default  /* 0.2s ease */
```

---

## Utility Classes

### Spacing

Pattern: `{property}{direction?}-{breakpoint?}-{size}`

| Property | Description |
|----------|-------------|
| `m` | margin |
| `p` | padding |
| `g` | gap |

| Direction | Description |
|-----------|-------------|
| `t` | top |
| `r` | right |
| `b` | bottom |
| `l` | left |
| `v` | vertical (top + bottom) |
| `h` | horizontal (left + right) |

| Size | Value |
|------|-------|
| `1` | 0.5rem |
| `2` | 1rem |
| `3` | 2rem |
| `4` | 3rem |
| `5` | 4rem |
| `6` | 5rem |
| `7` | 6rem |
| `8` | 8rem |
| `9` | 10rem |

| Breakpoint | Width |
|------------|-------|
| `sm` | ≥768px |
| `md` | ≥1024px |
| `lg` | ≥1200px |
| `xl` | ≥1400px |

```html
<!-- Base -->
<div class="m-3">margin all sides</div>
<div class="mt-2">margin top</div>
<div class="pv-4">padding vertical</div>
<div class="ph-3">padding horizontal</div>
<div class="g-2">gap</div>

<!-- Responsive -->
<div class="p-2 p-md-4 p-lg-5">responsive padding</div>
<div class="mt-2 mt-lg-4">responsive margin top</div>
<div class="g-2 g-md-3">responsive gap</div>
```

### Font Size

Pattern: `fs-{breakpoint?}-{size}`

| Size | Value |
|------|-------|
| `1` | 1rem |
| `2` | 1.2rem |
| `3` | 1.4rem |
| `4` | 1.6rem (base) |
| `5` | 1.8rem |
| `6` | 2rem |
| `7` | 3rem |
| `8` | 4rem |
| `9` | 6rem |

**Default heading sizes** (applied globally to h1-h6 tags):

| Tag | Size |
|-----|------|
| `h1` | fs-8 (4rem) |
| `h2` | fs-7 (3rem) |
| `h3` | fs-6 (2rem) |
| `h4` | fs-5 (1.8rem) |
| `h5` | fs-4 (1.6rem) |
| `h6` | fs-3 (1.4rem) |

```html
<!-- Base -->
<h2 class="fs-8">Large heading</h2>
<p class="fs-5">Larger text</p>

<!-- Responsive -->
<h1 class="fs-6 fs-md-8 fs-lg-9">Small on mobile, huge on desktop</h1>

<!-- SEO vs visual: h2 tag for SEO, fs-8 for h1 visual size -->
<h2 class="fs-8">Looks like h1, semantically h2</h2>
```

### Alignment

Pattern: `{property}-{breakpoint?}-{value}`

#### Text Align

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>

<!-- Responsive -->
<p class="text-center text-md-left">Center on mobile, left on desktop</p>
```

#### Flexbox

```html
<!-- Direction -->
<div class="flex-row">row</div>
<div class="flex-col">column</div>
<div class="flex-row-reverse">row reverse</div>
<div class="flex-col-reverse">column reverse</div>

<!-- Responsive direction -->
<div class="flex-col flex-md-row">column on mobile, row on desktop</div>

<!-- Justify content -->
<div class="justify-start">flex-start</div>
<div class="justify-center">center</div>
<div class="justify-end">flex-end</div>
<div class="justify-between">space-between</div>
<div class="justify-around">space-around</div>
<div class="justify-evenly">space-evenly</div>

<!-- Responsive justify -->
<div class="justify-center justify-md-between">center on mobile, between on desktop</div>

<!-- Align items -->
<div class="items-start">flex-start</div>
<div class="items-center">center</div>
<div class="items-end">flex-end</div>
<div class="items-stretch">stretch</div>
<div class="items-baseline">baseline</div>

<!-- Responsive items -->
<div class="items-center items-md-start">center on mobile, start on desktop</div>

<!-- Align self -->
<div class="self-start">flex-start</div>
<div class="self-center">center</div>
<div class="self-end">flex-end</div>

<!-- Responsive self -->
<div class="self-center self-lg-end">center on mobile, end on large</div>

<!-- Wrap -->
<div class="flex-wrap">wrap</div>
<div class="flex-nowrap">nowrap</div>

<!-- Responsive wrap -->
<div class="flex-wrap flex-md-nowrap">wrap on mobile, nowrap on desktop</div>
```

### Colors

#### Background

```html
<!-- Variants -->
<div class="bg-primary-1">dark primary</div>
<div class="bg-primary-2">base primary</div>
<div class="bg-primary-3">light primary</div>
<div class="bg-primary-contrast">contrast primary</div>

<!-- Grey -->
<div class="bg-grey-1">dark grey</div>
<div class="bg-grey-7">light grey</div>

<!-- Black/White -->
<div class="bg-black">black</div>
<div class="bg-white">white</div>
```

#### Text

```html
<!-- Variants -->
<p class="text-primary-1">dark primary</p>
<p class="text-primary-2">base primary</p>
<p class="text-danger-2">danger</p>
<p class="text-success-2">success</p>

<!-- Grey -->
<p class="text-grey-2">muted text</p>

<!-- Black/White -->
<p class="text-black">black</p>
<p class="text-white">white</p>
```

### Typography

```html
<span class="capitalize">capitalize</span>
<span class="uppercase">uppercase</span>
<span class="lowercase">lowercase</span>
```

### Lists

```html
<ul class="disc">bulleted list</ul>
<ul class="chevron">chevron list</ul>
<ul class="decimal">numbered list</ul>
```

---

## Mixins

Import mixins in SCSS modules:

```scss
@use 'styles/mq' as *;
@use 'styles/typo' as *;
@use 'styles/form' as *;
@use 'styles/action' as *;
@use 'styles/anim' as *;
@use 'styles/color' as *;
```

### Media Queries

```scss
@use 'styles/mq' as *;

.component {
  padding: 1rem;

  @include mq-xs { /* ≥480px */ }
  @include mq-sm { /* ≥768px */ }
  @include mq-md { /* ≥1024px */ }
  @include mq-lg { /* ≥1200px */ }
  @include mq-xl { /* ≥1400px */ }
}
```

### Typography

```scss
@use 'styles/typo' as *;

.heading {
  @include base-heading;
}

.link {
  @include base-link;
}

.paragraph {
  @include base-paragraph;
}

.code-block {
  @include base-code-block;
}

.code-inline {
  @include base-code-inline;
}

.keyboard {
  @include base-keyboard;
}

.note {
  @include base-note;
}

.blockquote {
  @include base-blockquote;
}

.caption {
  @include base-caption;
}

.table {
  @include base-table;
}

.hr {
  @include base-hr;
}

.mark {
  @include base-mark;
}

.rich-text {
  @include base-list;
}
```

### Form

```scss
@use 'styles/form' as *;

.field {
  @include form-wrapper;
}

.label {
  @include form-label;
}

.input {
  @include form-input;
}

.disabled {
  @include form-disabled;
}

.spinner {
  @include form-spinner;
}
```

### Action (Button/Link)

```scss
@use 'styles/action' as *;

.button {
  @include action-base;
  @include action-appearances;
  @include action-variants;
  @include action-disabled;
}

.close-button {
  @include action-close;
}
```

### Animation

```scss
@use 'styles/anim' as *;

.fade {
  @include anim-fade;
}

.scale {
  @include anim-scale;
}

.slide-up {
  @include anim-slide-up;
}
```

Animation classes use `.active` and `.removing` states:

```html
<div class="fade">hidden</div>
<div class="fade active">visible</div>
<div class="fade removing">fading out</div>
```

### Color Variants

```scss
@use 'styles/color' as *;

.alert {
  @include color-variants('variant-');
}
```

Generates classes for all variants:
- `.variant-default`
- `.variant-primary`
- `.variant-secondary`
- `.variant-success`
- `.variant-danger`
- `.variant-warning`
- `.variant-info`

---

## Common Patterns

### Responsive Layout

```html
<div class="flex-col flex-md-row g-3 g-lg-4">
  <div class="p-3 p-md-4">Sidebar</div>
  <div class="p-3 p-md-4">Content</div>
</div>
```

### Centered Card

```html
<div class="flex justify-center items-center p-4">
  <div class="bg-white p-4">Card content</div>
</div>
```

### Section Spacing

```html
<section class="pv-4 pv-lg-5">
  <div class="text-center mb-4">
    <h2>Section Title</h2>
  </div>
  <div class="g-3">Content</div>
</section>
```

### Status Colors

```html
<span class="text-success-2">Success message</span>
<span class="text-danger-2">Error message</span>
<span class="text-warning-2">Warning message</span>
<div class="bg-info-3 p-3">Info box</div>
```
