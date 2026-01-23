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
import '@webc-charles/components-react/index.css'
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

| Category       | Components                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| **base/**      | Audio, Avatar, Badge, Breadcrumb, Divider, Iframe, Image, Link, Logo, Note, Pagination, Progress, RichText, Skeleton, Spinner, Title, Toast, Tooltip, Video |
| **form/**      | Button, Checkbox, Date, File, Number, Password, Radio, Search, Select, Slider, Switch, Text, Textarea             |
| **modules/**   | Accordion, Banner, Card, Carousel, Grid, Modal, Tab, Table                                                        |
| **sections/**  | Account, Auth, Dashboard, Footer, Header, Page                                                                    |

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
```

| Prop             | Type                                  | Default  |
| ---------------- | ------------------------------------- | -------- |
| `label`          | `string`                              | -        |
| `type`           | `'text' \| 'email' \| 'url' \| 'tel'` | `'text'` |

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

Compound component for single/multiple selection with search.

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
<Slider defaultValue={30} aria-label="Volume" />
<Slider range value={[20, 80]} onChange={setRange} valueLabelDisplay="on" />
<Slider orientation="vertical" defaultValue={50} />
```

| Prop                | Type                              | Default        |
| ------------------- | --------------------------------- | -------------- |
| `min`               | `number`                          | `0`            |
| `max`               | `number`                          | `100`          |
| `range`             | `boolean`                         | `false`        |
| `orientation`       | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| `valueLabelDisplay` | `'auto' \| 'on' \| 'off'`         | `'off'`        |

---

### Display Components (base/)

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

#### Audio / Video / Iframe

```tsx
<Audio src="/audio.mp3" title="Podcast" />
<Video src="/video.mp4" poster="/poster.jpg" />
<Iframe src="https://youtube.com/embed/..." title="Video" aspectRatio="16/9" />
```

#### Divider

```tsx
<Divider />
<Divider variant="dashed" spacing="lg" />
```

#### RichText

For CMS content (WordPress, Strapi, etc.). Styles all HTML elements.

```tsx
<RichText html={cmsContent} />
```

---

### Feedback Components (base/)

#### Spinner / Progress / Skeleton

```tsx
<Spinner variant="primary" size="lg" />
<Progress value={75} showLabel variant="success" />
<Skeleton variant="text" />
```

#### Tooltip

```tsx
<Tooltip content="Help text" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

#### Toast / Modal

```tsx
// Wrap app with <Toasts> / <Modals>
const { addToast } = useToasts()
const { addModal } = useModals()

addToast({ children: <p>Saved!</p> })
addModal({ title: 'Confirm', children: <p>Are you sure?</p> })
```

---

### Layout Components (modules/)

#### Grid

```tsx
<Grid col={1} colMD={2} colLG={3} gap={4}>
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

#### Table

```tsx
<Table hoverable>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Accordion / Tab / Carousel

```tsx
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>

<Tab defaultValue="tab1">
  <TabList>
    <TabButton value="tab1">Tab 1</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Content</TabPanel>
  </TabPanels>
</Tab>

<Carousel options={{ loop: true }}>
  <CarouselContainer>
    <CarouselSlide>Slide 1</CarouselSlide>
  </CarouselContainer>
</Carousel>
```

#### Banner

```tsx
<Banner backgroundImage="/hero.jpg" overlay="dark" minHeight="50rem">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Welcome</BannerTitle>
    <BannerSubtitle>Build something amazing</BannerSubtitle>
  </BannerContent>
</Banner>
```

---

### Page Layout Components (sections/)

#### Header

Responsive header with top bar, main navigation, and mobile menu.

```tsx
<HeaderRoot sticky>
  <HeaderTop>
    <HeaderTopNav>
      <HeaderTopLink asChild><Link href="/help">Help</Link></HeaderTopLink>
    </HeaderTopNav>
  </HeaderTop>

  <HeaderMain>
    <HeaderMainLogo><Link href="/">Logo</Link></HeaderMainLogo>
    <HeaderMainNav>
      <HeaderMainLink asChild current><Link href="/">Home</Link></HeaderMainLink>
      <HeaderMainDropdown label="Products" href="/products">
        <HeaderMainDropdownLink asChild>
          <Link href="/products/software">Software</Link>
        </HeaderMainDropdownLink>
      </HeaderMainDropdown>
    </HeaderMainNav>
  </HeaderMain>

  <HeaderMobile>
    <HeaderMobileBar>
      <HeaderMobileLogo><Link href="/">Logo</Link></HeaderMobileLogo>
      <HeaderMobileToggle />
    </HeaderMobileBar>
    <HeaderMobileMenu>
      <HeaderMobileNav>
        <HeaderMobileLink asChild><Link href="/">Home</Link></HeaderMobileLink>
      </HeaderMobileNav>
    </HeaderMobileMenu>
  </HeaderMobile>
</HeaderRoot>
```

#### Footer

Structural footer - projects control visual styling via CSS.

```tsx
<FooterRoot style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
  <FooterMain>
    <Grid col={1} colMD={4} gap="lg">
      <GridItem>
        <Title level="h3">Company</Title>
        <FooterMainNav>
          <FooterMainLink asChild><Link href="/about">About</Link></FooterMainLink>
        </FooterMainNav>
      </GridItem>
    </Grid>
  </FooterMain>
  <FooterBottom>
    <span>&copy; 2026 Company</span>
    <FooterBottomNav>
      <FooterBottomLink asChild><Link href="/privacy">Privacy</Link></FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

#### Auth / Account / Dashboard / Page

Section components for common page layouts. See Storybook for examples.

---

## Theming

### Color Variants

```tsx
type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
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

---

## Accessibility

- **WCAG 2.1 AA** compliant
- Keyboard navigation (Arrow keys, Tab, Enter, Escape)
- Focus trap in Modal/Select
- ARIA attributes on all components
- Live regions for Toast

---

## Development

```bash
pnpm install
pnpm dev             # Start Storybook
pnpm build           # Build library
pnpm test            # Run tests
pnpm lint            # Lint JS/TS (Biome)
pnpm lint:css        # Lint SCSS (Stylelint)
```

### File Structure

```
src/
├── components/
│   ├── base/        # Atomic UI elements
│   ├── form/        # Form inputs
│   ├── modules/     # Content wrappers
│   └── sections/    # Page layouts
├── styles/          # Global SCSS & CSS variables
├── i18n/            # Translations (22 languages)
├── types/           # Shared TypeScript types
└── utils/           # Utilities & hooks
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
