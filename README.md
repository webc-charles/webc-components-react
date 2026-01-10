# @webc-charles/components-react

A lightweight, accessible React component library built with TypeScript, SCSS Modules, and React 19.

📚 **[Live Storybook Demo](https://webc-charles.github.io/webc-components-react/)**

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
- [Theming](#theming)
- [Accessibility](#accessibility)
- [Development](#development)

---

## Overview

### Philosophy

- **Lightweight**: Minimal dependencies (clsx, embla-carousel-react, lucide-react)
- **Accessible**: WCAG AA compliant, proper ARIA implementation, keyboard navigation
- **Type-safe**: Full TypeScript support with `ComponentPropsWithRef` patterns
- **Customizable**: CSS variables for theming, className props for overrides
- **Primitive**: Components are intentionally simple - compose them as needed

### Bundle Size

Estimated ~30-50kb gzipped (no heavy framework dependencies)

### Dependencies

| Package                | Purpose                       |
| ---------------------- | ----------------------------- |
| `clsx`                 | Conditional className utility |
| `embla-carousel-react` | Carousel functionality        |
| `lucide-react`         | Icon set                      |

---

## Installation

```bash
npm install @webc-charles/components-react
```

### Peer Dependencies

```bash
npm install react react-dom
```

### Import Styles

Import the base styles in your app entry point:

```tsx
import '@webc-charles/components-react/styles.css'
```

---

## Quick Start

```tsx
import { Badge, Button, Note, Title } from '@webc-charles/components-react'

function App() {
  return (
    <div>
      <Button variant="primary" appearance="button">
        Click me
      </Button>

      <Badge variant="success">New</Badge>

      <Note variant="info">
        <Title level="h3">Information</Title>
        <p>This is an informational note.</p>
      </Note>
    </div>
  )
}
```

---

## Components

### Overview

| Category     | Components                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **Form**     | Button · InputText · InputPassword · InputNumber · InputTextarea · InputFile · InputSearch · Checkbox · Switch · InputRadio · InputDate · Select · Slider |
| **Display**  | Avatar · Badge · Note · Title · Image · Link · Audio · Video · Iframe · Divider · RichText                                    |
| **Feedback** | Spinner · Progress · Skeleton · Tooltip · Toast · Modal                                                                       |
| **Layout**   | Grid · Card · Banner · Accordion · Tab · Carousel · Header · Breadcrumb · Pagination                                          |

---

### Form Components

#### Button

```tsx
<Button appearance="button" variant="primary">Click me</Button>
<Button appearance="outline">Outline</Button>
<Button loading>Submitting...</Button>
```

| Prop         | Type                                                | Default     |
| ------------ | --------------------------------------------------- | ----------- |
| `variant`    | `ColorVariant`                                      | `'default'` |
| `appearance` | `'default' \| 'button' \| 'outline' \| 'underline'` | `'default'` |
| `loading`    | `boolean`                                           | `false`     |

#### InputText

Text input with support for text, email, URL, and telephone types.

```tsx
<InputText label="Name" placeholder="Enter name" />
<InputText label="Email" type="email" placeholder="you@example.com" />
<InputText label="Website" type="url" placeholder="https://..." />
<InputText label="Phone" type="tel" placeholder="+33 6 12 34 56 78" />
```

| Prop             | Type                                | Default    |
| ---------------- | ----------------------------------- | ---------- |
| `label`          | `string`                            | -          |
| `type`           | `'text' \| 'email' \| 'url' \| 'tel'` | `'text'`   |
| `inputClassName` | `string`                            | -          |
| `labelClassName` | `string`                            | -          |

#### InputPassword / InputNumber / InputTextarea

```tsx
<InputPassword label="Password" />
<InputNumber label="Quantity" min={0} max={100} />
<InputTextarea label="Bio" maxLength={500} showCount />
```

#### InputFile

```tsx
<InputFile label="Upload" />
<InputFile label="Drop files here" dropzone multiple />
```

#### InputSearch

```tsx
<InputSearch label="Search" placeholder="Search..." onSearch={handleSearch} />
```

#### Checkbox / Switch

```tsx
<Checkbox label="Accept terms" />
<Switch label="Dark mode" variant="success" />
```

#### InputRadio

```tsx
<InputRadio
  label="Size"
  name="size"
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]}
/>
```

#### InputDate

```tsx
<InputDate label="Birth date" selected={date} onChange={setDate} />
```

#### Select

Compound component for single/multiple selection with search and async loading.

```tsx
<SelectRoot label="Fruit" options={options} value={value} onChange={setValue}>
  <SelectPlaceholder />
  <SelectActions>
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="fruit">
      {options.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

#### Slider

Range slider with single or dual thumbs, marks, and value labels.

```tsx
// Basic slider
<Slider defaultValue={30} aria-label="Volume" />

// With value label
<Slider value={value} onChange={setValue} valueLabelDisplay="auto" />

// Range slider
<Slider range value={[20, 80]} onChange={setRange} valueLabelDisplay="on" />

// With custom marks
<Slider
  defaultValue={20}
  marks={[
    { value: 0, label: '0°C' },
    { value: 50, label: '50°C' },
    { value: 100, label: '100°C' },
  ]}
  valueLabelDisplay="auto"
/>

// Vertical orientation
<Slider orientation="vertical" defaultValue={50} />
```

| Prop                | Type                                     | Default        |
| ------------------- | ---------------------------------------- | -------------- |
| `min`               | `number`                                 | `0`            |
| `max`               | `number`                                 | `100`          |
| `step`              | `number \| null`                         | `1`            |
| `range`             | `boolean`                                | `false`        |
| `value`             | `number \| [number, number]`             | -              |
| `defaultValue`      | `number \| [number, number]`             | -              |
| `orientation`       | `'horizontal' \| 'vertical'`             | `'horizontal'` |
| `size`              | `'sm' \| 'md'`                           | `'md'`         |
| `track`             | `'normal' \| 'inverted' \| false`        | `'normal'`     |
| `marks`             | `boolean \| SliderMark[]`                | `false`        |
| `valueLabelDisplay` | `'auto' \| 'on' \| 'off'`                | `'off'`        |
| `valueLabelFormat`  | `(value: number) => string`              | -              |
| `minDistance`       | `number` (range only)                    | `0`            |
| `disableSwap`       | `boolean` (range only)                   | `false`        |
| `onChange`          | `(value) => void`                        | -              |
| `onChangeCommitted` | `(value) => void`                        | -              |

---

### Display Components

#### Avatar

```tsx
<Avatar src="/photo.jpg" alt="John" name="John Doe" />
<Avatar name="John Doe" variant="primary" size="lg" />
```

#### Badge

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="danger">Expired</Badge>
```

#### Note

```tsx
<Note variant="warning">
  <Title level="h3">Warning</Title>
  <p>This action cannot be undone.</p>
</Note>
```

#### Title

```tsx
<Title level="h1">Page Title</Title>
<Title level="h2">Section</Title>
```

#### Image

```tsx
<Image src="/photo.jpg" alt="Description" caption="Photo caption" />
<Image src="/photo.jpg" alt="Photo" fit="cover" radius="medium" />
```

#### Link

```tsx
<Link href="/about">About</Link>
<Link href="/signup" appearance="button" variant="primary">Sign up</Link>
```

#### Audio

```tsx
<Audio
  src="/audio.mp3"
  title="Podcast Episode"
  caption="Duration: 45 min"
  transcriptHref="/transcript.txt"
/>
```

#### Video

```tsx
<Video
  src="/video.mp4"
  poster="/poster.jpg"
  caption="Video description"
  radius="md"
/>
```

#### Iframe

```tsx
<Iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video"
  aspectRatio="16/9"
/>
```

#### Divider

Horizontal rule with line style and spacing options.

```tsx
<Divider />
<Divider variant="dashed" spacing="lg" />
<Divider variant="dotted" spacing="xl" />
```

| Prop      | Type                                       | Default    |
| --------- | ------------------------------------------ | ---------- |
| `variant` | `'solid' \| 'dashed' \| 'dotted'`          | `'solid'`  |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'`   | `'md'`     |

#### RichText

For CMS content (WordPress, Strapi, etc.). Styles all HTML elements.

```tsx
<RichText html={cmsContent} />
<RichText>
  <h2>Title</h2>
  <p>Paragraph with <a href="#">link</a>.</p>
</RichText>
```

---

### Feedback Components

#### Spinner

```tsx
<Spinner />
<Spinner variant="primary" size="lg" />
<Spinner contrast /> {/* For dark backgrounds */}
```

#### Progress

```tsx
<Progress value={60} />
<Progress value={75} showLabel variant="success" />
<Progress indeterminate />
```

#### Skeleton

```tsx
<Skeleton variant="text" />
<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="rect" height={200} />
```

#### Tooltip

```tsx
<Tooltip content="Help text" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

#### Toast

```tsx
// Wrap app with <Toasts>
const { addToast } = useToasts()

addToast({
  children: (
    <>
      <Title level="h3">Saved!</Title>
      <p>Changes saved successfully.</p>
    </>
  ),
})
```

#### Modal

```tsx
// Wrap app with <Modals>
const { addModal } = useModals()

addModal({
  title: 'Confirm',
  size: 'sm',
  children: <p>Are you sure?</p>,
})
```

---

### Layout Components

#### Grid

```tsx
<Grid col={1} colMD={2} colLG={3} gap={4}>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

#### Card

```tsx
<Card>
  <CardHeader><Title level="h3">Title</Title></CardHeader>
  <CardBody><p>Content</p></CardBody>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>
```

#### Banner

```tsx
<Banner backgroundImage="/hero.jpg" overlay="dark" minHeight="50rem">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Welcome</BannerTitle>
    <BannerSubtitle>Build something amazing</BannerSubtitle>
    <BannerActions>
      <Button contrast appearance="button">Get Started</Button>
    </BannerActions>
  </BannerContent>
</Banner>
```

#### Accordion

```tsx
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Tab

```tsx
<Tab defaultValue="tab1">
  <TabList>
    <TabButton value="tab1">Overview</TabButton>
    <TabButton value="tab2">Features</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Overview content</TabPanel>
    <TabPanel value="tab2">Features content</TabPanel>
  </TabPanels>
</Tab>
```

#### Carousel

```tsx
<Carousel options={{ loop: true }}>
  <CarouselContainer>
    <CarouselSlide>Slide 1</CarouselSlide>
    <CarouselSlide>Slide 2</CarouselSlide>
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselDots />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

#### Header

Responsive header with navigation, mobile menu, and top bar.

```tsx
<HeaderRoot>
  <HeaderTopBar>
    <HeaderTopBarItem>Contact: 01 23 456 789</HeaderTopBarItem>
  </HeaderTopBar>
  <HeaderMain>
    <HeaderLogo>
      <img src="/logo.svg" alt="Logo" />
    </HeaderLogo>
    <HeaderNav>
      <HeaderNavItem href="/">Home</HeaderNavItem>
      <HeaderNavItem href="/about">About</HeaderNavItem>
    </HeaderNav>
    <HeaderActions>
      <Button appearance="button">Sign in</Button>
    </HeaderActions>
    <HeaderMobileToggle />
  </HeaderMain>
  <HeaderMobileMenu>
    <HeaderMobileNavItem href="/">Home</HeaderMobileNavItem>
    <HeaderMobileNavItem href="/about">About</HeaderMobileNavItem>
  </HeaderMobileMenu>
</HeaderRoot>
```

#### Breadcrumb

```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem current>Details</BreadcrumbItem>
</Breadcrumb>
```

#### Pagination

```tsx
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

---

## Theming

### Color Variants

```tsx
type ColorVariant =
  | 'default'   // Grey
  | 'primary'   // Blue
  | 'secondary' // Purple
  | 'success'   // Green
  | 'danger'    // Red
  | 'warning'   // Orange
  | 'info'      // Cyan
```

### Contrast Mode

For dark backgrounds, use `contrast` prop:

```tsx
<Button contrast appearance="button">Light button</Button>
<Spinner contrast />
```

### CSS Variables

Override in your CSS:

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

### Utility Classes

Background and text color classes are available:

```html
<div class="bg-primary-3 text-primary-1">Primary light</div>
<div class="bg-danger-2 text-white">Danger</div>
<div class="bg-grey-6 text-grey-1">Grey</div>
```

---

## Accessibility

- **WCAG 2.1 AA** compliant
- Keyboard navigation (Arrow keys, Tab, Enter, Escape)
- Focus trap in Modal/Select
- ARIA attributes on all components
- Live regions for Toast
- Required alt text on Image

---

## Development

```bash
npm install
npm run storybook    # Start Storybook
npm run build        # Build library
npm run test         # Run tests
npm run stylelint    # Lint SCSS
```

### File Structure

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.types.ts
│   │   ├── ComponentName.module.scss
│   │   ├── ComponentName.test.tsx
│   │   ├── ComponentName.stories.tsx
│   │   └── index.ts
├── styles/
│   ├── root.scss      # CSS variables
│   ├── main.scss      # Global reset
│   ├── typo.scss      # Typography mixins
│   ├── color.scss     # Color mixins & utilities
│   ├── form.scss      # Form mixins
│   └── index.scss     # Entry point
├── i18n/
│   └── fr.json        # French translations
└── types/
    └── variants.ts    # Shared types
```

---

## Server-side Rendering

Compatible with Next.js, Remix, Gatsby. Uses `useId()` for stable hydration.

### Next.js

Rename imports to avoid conflicts:

```tsx
import { Image as BaseImage, Link as BaseLink } from '@webc-charles/components-react'
import Image from 'next/image'
import Link from 'next/link'
```

---

## License

MIT
