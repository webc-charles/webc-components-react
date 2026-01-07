# @webc-charles/components-react

A lightweight, accessible React component library built with TypeScript, SCSS Modules, and React 19.

📚 **[Live Storybook Demo](https://webc-charles.github.io/webc-components-react/)**

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
  - [Form Components](#form-components)
  - [Display Components](#display-components)
  - [Feedback Components](#feedback-components)
  - [Layout Components](#layout-components)
- [Theming](#theming)
  - [Color Variants](#color-variants)
  - [Contrast Mode](#contrast-mode)
  - [CSS Variables](#css-variables)
- [Accessibility](#accessibility)
- [Architecture](#architecture)
- [TypeScript](#typescript)
- [Development](#development)
- [Browser Support](#browser-support)
- [Server-side Rendering](#server-side-rendering)

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
| `embla-carousel-react` | Slider/carousel functionality |
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
import '@webc-charles/components-react/styles'
```

---

## Quick Start

```tsx
import { Badge, Button, Note, NoteHeader } from '@webc-charles/components-react'

function App() {
  return (
    <div>
      <Button variant="primary" appearance="button">
        Click me
      </Button>

      <Badge variant="success">New</Badge>

      <Note variant="info">
        <NoteHeader>Information</NoteHeader>
        <p>This is an informational note.</p>
      </Note>
    </div>
  )
}
```

---

## Components

| Category | Components |
|----------|------------|
| **Form** | [Button](#button) · [InputText](#inputtext) · [InputPassword](#inputpassword) · [InputNumber](#inputnumber) · [InputTextarea](#inputtextarea) · [Checkbox](#checkbox) · [InputRadio](#inputradio) · [InputDate](#inputdate) · [Select](#select) |
| **Display** | [Badge](#badge) · [Note](#note) · [Title](#title) · [Image](#image) · [Link](#link) |
| **Feedback** | [Toast](#toast) · [Modal](#modal) |
| **Layout** | [Grid](#grid) · [Card](#card) · [Banner](#banner) · [Accordion](#accordion) · [Tab](#tab) · [Slider](#slider) |

### Form Components

#### Button

Interactive button with multiple variants and appearances.

```tsx
import { Button } from '@webc-charles/components-react'

// Appearances
<Button appearance="button">Solid button</Button>
<Button appearance="outline">Outline button</Button>
<Button appearance="underline">Underline link-style</Button>
<Button appearance="default">Text only</Button>

// Variants
<Button variant="primary" appearance="button">Primary</Button>
<Button variant="danger" appearance="button">Danger</Button>

// Loading state
<Button loading>Submitting...</Button>

// With icons
<Button appearance="button">
  <IconPlus /> Add item
</Button>
```

**Props**: Extends `ComponentPropsWithRef<'button'>`

| Prop         | Type                                                | Default     | Description                    |
| ------------ | --------------------------------------------------- | ----------- | ------------------------------ |
| `variant`    | `ColorVariant`                                      | `'default'` | Color theme                    |
| `appearance` | `'default' \| 'button' \| 'outline' \| 'underline'` | `'default'` | Visual style                   |
| `loading`    | `boolean`                                           | `false`     | Shows spinner, disables button |

---

#### InputText

Basic text input with label support.

```tsx
import { InputText } from '@webc-charles/components-react'

// Basic usage
<InputText
  label="Email"
  placeholder="Enter your email"
  type="email"
/>

// Without visible label (accessibility)
<InputText
  aria-label="Search"
  placeholder="Search..."
/>
```

**Props**: Extends `ComponentPropsWithRef<'input'>`

| Prop             | Type     | Description        |
| ---------------- | -------- | ------------------ |
| `label`          | `string` | Visible label text |
| `labelClassName` | `string` | Label custom class |
| `inputClassName` | `string` | Input custom class |

---

#### InputPassword

Password input with visibility toggle.

```tsx
import { InputPassword } from '@webc-charles/components-react'

// Basic usage
<InputPassword label="Password" placeholder="Enter password" />
```

**Props**: Same as InputText

---

#### InputNumber

Numeric input with increment/decrement buttons.

```tsx
import { InputNumber } from '@webc-charles/components-react'

// Controlled input with min/max
<InputNumber
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={0}
  max={100}
  step={1}
/>
```

**Props**: Extends `ComponentPropsWithRef<'input'>`

| Prop             | Type                      | Default | Description         |
| ---------------- | ------------------------- | ------- | ------------------- |
| `value`          | `number`                  | -       | Controlled value    |
| `onChange`       | `(value: number) => void` | -       | Change handler      |
| `min`            | `number`                  | -       | Minimum value       |
| `max`            | `number`                  | -       | Maximum value       |
| `step`           | `number`                  | `1`     | Increment step      |
| `incrementLabel` | `string`                  | i18n    | Accessibility label |
| `decrementLabel` | `string`                  | i18n    | Accessibility label |

---

#### InputTextarea

Multi-line text input with optional character count.

```tsx
import { InputTextarea } from '@webc-charles/components-react'

// With character count
<InputTextarea
  label="Bio"
  value={bio}
  onChange={setBio}
  maxLength={500}
  showCount
/>
```

**Props**: Extends `ComponentPropsWithRef<'textarea'>`

| Prop        | Type                      | Default | Description            |
| ----------- | ------------------------- | ------- | ---------------------- |
| `value`     | `string`                  | -       | Controlled value       |
| `onChange`  | `(value: string) => void` | -       | Change handler         |
| `maxLength` | `number`                  | -       | Maximum characters     |
| `showCount` | `boolean`                 | `false` | Show character counter |

---

#### Checkbox

Checkbox with custom styling.

```tsx
import { Checkbox } from '@webc-charles/components-react'

// Uncontrolled
<Checkbox label="Accept terms" defaultChecked />

// Controlled
<Checkbox
  label="Subscribe to newsletter"
  checked={subscribed}
  onChange={setSubscribed}
/>
```

**Props**:

| Prop             | Type                         | Description                  |
| ---------------- | ---------------------------- | ---------------------------- |
| `label`          | `string`                     | Label text                   |
| `checked`        | `boolean`                    | Controlled state             |
| `defaultChecked` | `boolean`                    | Initial state (uncontrolled) |
| `onChange`       | `(checked: boolean) => void` | Change handler               |
| `disabled`       | `boolean`                    | Disable interaction          |

---

#### InputRadio

Radio button group.

```tsx
import { InputRadio } from '@webc-charles/components-react'

// Horizontal radio group
<InputRadio
  label="Select size"
  name="size"
  value={size}
  onChange={setSize}
  direction="horizontal"
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]}
/>
```

**Props**:

| Prop        | Type                                                     | Default      | Description      |
| ----------- | -------------------------------------------------------- | ------------ | ---------------- |
| `options`   | `{ value: string; label: string; disabled?: boolean }[]` | -            | Radio options    |
| `value`     | `string`                                                 | -            | Selected value   |
| `onChange`  | `(value: string) => void`                                | -            | Change handler   |
| `name`      | `string`                                                 | -            | Form field name  |
| `direction` | `'vertical' \| 'horizontal'`                             | `'vertical'` | Layout direction |

---

#### InputDate

Date picker with calendar modal.

```tsx
import { InputDate } from '@webc-charles/components-react'

// Date picker with constraints
<InputDate
  label="Birth date"
  selected={birthDate}
  onChange={setBirthDate}
  dateFormat="dd/MM/yyyy"
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date()}
/>
```

**Props**:

| Prop          | Type                   | Default        | Description              |
| ------------- | ---------------------- | -------------- | ------------------------ |
| `selected`    | `Date \| null`         | -              | Selected date            |
| `onChange`    | `(date: Date) => void` | -              | Change handler           |
| `dateFormat`  | `string`               | `'yyyy-MM-dd'` | Display format           |
| `minDate`     | `Date`                 | -              | Earliest selectable date |
| `maxDate`     | `Date`                 | -              | Latest selectable date   |
| `placeholder` | `string`               | i18n           | Placeholder text         |

---

#### Select

Feature-rich select with single/multiple modes, search, and async loading.

```tsx
import {
  ChoiceClear,
  ChoiceList,
  ChoiceListItem,
  OptionList,
  OptionListItem,
  SelectActions,
  SelectModal,
  SelectPlaceholder,
  SelectRoot,
  SelectTrigger,
} from '@webc-charles/components-react'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

// Single select
function SingleSelect() {
  const [value, setValue] = useState<OptionTypes[]>([])

  return (
    <SelectRoot
      label="Select fruit"
      options={options}
      value={value}
      onChange={setValue}
    >
      <SelectPlaceholder />
      <SelectActions>
        <SelectTrigger />
      </SelectActions>

      <SelectModal>
        <OptionList controlId="fruit-select">
          {options.map((option, index) => (
            <OptionListItem key={option.value} option={option} index={index} />
          ))}
        </OptionList>
      </SelectModal>
    </SelectRoot>
  )
}

// Multiple select with search
function MultiSelect() {
  const [value, setValue] = useState<OptionTypes[]>([])

  return (
    <SelectRoot
      multiple
      searchable
      label="Select fruits"
      options={options}
      value={value}
      onChange={setValue}
    >
      <ChoiceList selectedOptions={value}>
        {value.map((option) => (
          <ChoiceListItem
            key={option.value}
            option={option}
            onRemove={(opt) =>
              setValue(value.filter((v) => v.value !== opt.value))
            }
          />
        ))}
      </ChoiceList>

      <SelectPlaceholder />

      <SelectActions>
        <ChoiceClear />
        <SelectTrigger />
      </SelectActions>

      <SelectModal>
        <OptionList controlId="fruits-select">
          {options.map((option, index) => (
            <OptionListItem key={option.value} option={option} index={index} />
          ))}
        </OptionList>
      </SelectModal>
    </SelectRoot>
  )
}

// Async search with infinite scroll
function AsyncSelect() {
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const handleSearch = async (query: string) => {
    setLoading(true)
    const results = await fetchOptions(query)
    setOptions(results)
    setLoading(false)
  }

  const handleLoadMore = async () => {
    const more = await fetchMoreOptions()
    setOptions((prev) => [...prev, ...more])
    setHasMore(more.length > 0)
  }

  return (
    <SelectRoot
      searchable
      options={options}
      onSearch={handleSearch}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      loading={loading}
      searchDebounce={300}
      // ...
    >
      {/* ... */}
    </SelectRoot>
  )
}
```

**SelectRoot Props**:

| Prop             | Type                             | Default | Description                       |
| ---------------- | -------------------------------- | ------- | --------------------------------- |
| `options`        | `OptionTypes[]`                  | -       | Available options                 |
| `value`          | `OptionTypes[]`                  | -       | Selected options                  |
| `onChange`       | `(value: OptionTypes[]) => void` | -       | Change handler                    |
| `multiple`       | `boolean`                        | `false` | Allow multiple selections         |
| `searchable`     | `boolean`                        | `false` | Enable search input               |
| `onSearch`       | `(query: string) => void`        | -       | Async search handler              |
| `searchDebounce` | `number`                         | `300`   | Search debounce ms                |
| `onLoadMore`     | `() => void`                     | -       | Infinite scroll handler           |
| `hasMore`        | `boolean`                        | -       | More items available              |
| `loading`        | `boolean`                        | -       | Show loading spinner              |
| `flip`           | `boolean`                        | `true`  | Flip menu when near viewport edge |
| `label`          | `string`                         | -       | Visible label                     |
| `placeholder`    | `string`                         | i18n    | Placeholder text                  |
| `disabled`       | `boolean`                        | `false` | Disable interaction               |

---

### Display Components

#### Badge

Small status indicator.

```tsx
import { Badge } from '@webc-charles/components-react'

// Status indicators
<Badge variant="success">Active</Badge>
<Badge variant="danger">Expired</Badge>
<Badge variant="warning">Pending</Badge>
```

**Props**: Extends `ComponentPropsWithRef<'div'>`

| Prop      | Type           | Default     |
| --------- | -------------- | ----------- |
| `variant` | `ColorVariant` | `'default'` |

---

#### Note

Callout/alert block for important information.

```tsx
import { Note, NoteHeader } from '@webc-charles/components-react'

// With header
<Note variant="warning">
  <NoteHeader>Warning</NoteHeader>
  <p>This action cannot be undone.</p>
</Note>

// Without header
<Note variant="info">
  <p>Your changes have been saved.</p>
</Note>
```

**Props**: Extends `ComponentPropsWithRef<'aside'>`

| Prop      | Type           | Default     |
| --------- | -------------- | ----------- |
| `variant` | `ColorVariant` | `'default'` |

---

#### Title

Semantic heading component.

```tsx
import { Title } from '@webc-charles/components-react'

// Semantic headings
<Title level="h1">Page Title</Title>
<Title level="h2">Section Title</Title>
<Title level="h3">Subsection</Title>
```

**Props**: Extends `ComponentPropsWithRef<'h1'>`

| Prop    | Type                                           | Default |
| ------- | ---------------------------------------------- | ------- |
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'`  |

---

#### Image

Basic image with required alt text.

```tsx
import { Image } from '@webc-charles/components-react'

// With alt text
<Image src="/photo.jpg" alt="Description of image" />

// Decorative image
<Image src="/decoration.png" alt="" />
```

**Props**: Extends `ComponentPropsWithRef<'img'>`

| Prop  | Type     | Required | Description                               |
| ----- | -------- | -------- | ----------------------------------------- |
| `alt` | `string` | **Yes**  | Alt text (use `""` for decorative images) |

---

#### Link

Styled anchor with appearances matching Button.

```tsx
import { Link } from '@webc-charles/components-react'

// Default link
<Link href="/about">About us</Link>

// Button style
<Link href="/signup" variant="primary" appearance="button">Sign up</Link>

// Underline style
<Link href="/learn" appearance="underline">Learn more</Link>

// Disabled state
<Link href="/premium" disabled>Premium (unavailable)</Link>
```

**Props**: Extends `ComponentPropsWithRef<'a'>`

| Prop         | Type                                                | Default     |
| ------------ | --------------------------------------------------- | ----------- |
| `variant`    | `ColorVariant`                                      | `'default'` |
| `appearance` | `'default' \| 'button' \| 'outline' \| 'underline'` | `'default'` |
| `disabled`   | `boolean`                                           | `false`     |

---

### Feedback Components

#### Toast

Non-blocking notification system.

```tsx
import {
  ToastBody,
  ToastHeader,
  Toasts,
  useToasts,
} from '@webc-charles/components-react'

// Wrap your app
function App() {
  return (
    <Toasts>
      <YourApp />
    </Toasts>
  )
}

// Use anywhere inside
function SaveButton() {
  const { addToast } = useToasts()

  const handleSave = async () => {
    await save()
    addToast({
      variant: 'success',
      duration: 5000, // ms, use Infinity to persist
      children: (
        <>
          <ToastHeader>Saved!</ToastHeader>
          <ToastBody>Your changes have been saved successfully.</ToastBody>
        </>
      ),
    })
  }

  return <Button onClick={handleSave}>Save</Button>
}
```

**Toast Variants**: `danger` and `warning` use `role="alert"` (assertive), others use `role="status"` (polite).

**addToast Options**:

| Prop         | Type           | Default     | Description             |
| ------------ | -------------- | ----------- | ----------------------- |
| `variant`    | `ColorVariant` | `'primary'` | Color theme             |
| `duration`   | `number`       | `10000`     | Auto-close delay (ms)   |
| `children`   | `ReactNode`    | -           | Toast content           |
| `closeLabel` | `string`       | i18n        | Close button aria-label |

---

#### Modal

Dialog/modal system.

```tsx
import { Modals, useModals } from '@webc-charles/components-react'
// Direct usage (controlled)
import { Modal } from '@webc-charles/components-react'

// Wrap your app
function App() {
  return (
    <Modals>
      <YourApp />
    </Modals>
  )
}

// Use anywhere inside
function DeleteButton() {
  const { addModal } = useModals()

  const handleClick = () => {
    addModal({
      title: 'Confirm Delete',
      size: 'sm', // 'sm' | 'md' | 'lg' | 'xl' | 'full'
      closeOnBackdrop: true,
      children: (
        <>
          <p>Are you sure you want to delete this item?</p>
          <Button variant="danger">Delete</Button>
        </>
      ),
    })
  }

  return <Button onClick={handleClick}>Delete</Button>
}

{
  showModal && (
    <Modal
      id={1}
      title="Edit Profile"
      size="md"
      onRemove={() => setShowModal(false)}
    >
      <form>...</form>
    </Modal>
  )
}
```

**Modal Props**:

| Prop              | Type                                     | Default    | Description                 |
| ----------------- | ---------------------------------------- | ---------- | --------------------------- |
| `title`           | `ReactNode`                              | -          | Header title                |
| `size`            | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'`     | Modal width                 |
| `closeOnBackdrop` | `boolean`                                | `false`    | Close when clicking outside |
| `hideCloseButton` | `boolean`                                | `false`    | Hide the X button           |
| `duration`        | `number`                                 | `Infinity` | Auto-close delay            |
| `closeLabel`      | `string`                                 | i18n       | Close button aria-label     |

**Accessibility Features**:

- Focus trap (Tab cycles within modal)
- Escape key closes modal
- Restores focus to trigger element on close
- `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- Body scroll lock

---

### Layout Components

#### Grid

Responsive CSS grid layout.

```tsx
import { Grid } from '@webc-charles/components-react'

// Basic grid
<Grid col={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Responsive
<Grid
  col={1}
  colSM={2}
  colMD={3}
  colLG={4}
  gap={2}
  gapMD={4}
>
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>
```

**Props**: Extends `ComponentPropsWithRef<'div'>`

| Prop              | Type   | Description              |
| ----------------- | ------ | ------------------------ |
| `col`             | `1-12` | Base column count        |
| `colXS`           | `1-12` | Columns at XS breakpoint |
| `colSM`           | `1-12` | Columns at SM breakpoint |
| `colMD`           | `1-12` | Columns at MD breakpoint |
| `colLG`           | `1-12` | Columns at LG breakpoint |
| `colXL`           | `1-12` | Columns at XL breakpoint |
| `gap`             | `1-10` | Base gap                 |
| `gapXS` - `gapXL` | `1-10` | Responsive gaps          |

---

#### Card

Content container with header, body, footer sections.

```tsx
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@webc-charles/components-react'

// Card with sections
<Card>
  <CardHeader>
    <Title level="h3">Card Title</Title>
  </CardHeader>
  <CardBody>
    <p>Card content goes here.</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

#### Banner

Hero/banner section with background and content positioning.

```tsx
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from '@webc-charles/components-react'

// Hero banner with overlay
<Banner
  backgroundImage="/hero.jpg"
  overlay="dark"
  minHeight="50rem"
  horizontalAlign="center"
  verticalAlign="center"
>
  <BannerContent textColor="light" textAlign="center" maxWidth="60rem">
    <BannerTitle>Welcome</BannerTitle>
    <BannerSubtitle>Build something amazing</BannerSubtitle>
    <BannerText>Get started with our component library.</BannerText>
    <BannerActions>
      <Button contrast appearance="button">
        Get Started
      </Button>
      <Link contrast appearance="outline">
        Learn More
      </Link>
    </BannerActions>
  </BannerContent>
</Banner>
```

**Props**:

| Prop              | Type                            | Default    | Description                 |
| ----------------- | ------------------------------- | ---------- | --------------------------- |
| `backgroundImage` | `string`                        | -          | Background image URL        |
| `backgroundColor` | `string`                        | -          | Background color            |
| `overlay`         | `'none' \| 'light' \| 'dark'`   | `'none'`   | Overlay effect              |
| `minHeight`       | `string`                        | `'40rem'`  | Minimum height              |
| `horizontalAlign` | `'left' \| 'center' \| 'right'` | `'left'`   | Content horizontal position |
| `verticalAlign`   | `'start' \| 'center' \| 'end'`  | `'center'` | Content vertical position   |

---

#### Accordion

Collapsible content sections.

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@webc-charles/components-react'

// Single mode (only one open at a time)
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple mode (multiple can be open)
<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  {/* ... */}
</Accordion>

// Non-collapsible (always one open)
<Accordion type="single" collapsible={false} defaultValue="item-1">
  {/* ... */}
</Accordion>

// Custom heading level for accessibility
<AccordionTrigger headingLevel="h2">Section Title</AccordionTrigger>
```

**Accordion Props**:

| Prop            | Type                     | Default    | Description                        |
| --------------- | ------------------------ | ---------- | ---------------------------------- |
| `type`          | `'single' \| 'multiple'` | `'single'` | Expansion mode                     |
| `defaultValue`  | `string \| string[]`     | -          | Initially expanded items           |
| `value`         | `string \| string[]`     | -          | Controlled expanded items          |
| `onValueChange` | `(value) => void`        | -          | Change handler                     |
| `collapsible`   | `boolean`                | `true`     | Allow collapsing all (single mode) |

**AccordionTrigger Props**:

| Prop           | Type                                           | Default | Description            |
| -------------- | ---------------------------------------------- | ------- | ---------------------- |
| `headingLevel` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h3'`  | Semantic heading level |

**Keyboard Navigation**: Arrow Up/Down, Home, End (with wrap-around)

---

#### Tab

Tabbed interface.

```tsx
import { Tab, TabList, TabButton, TabPanels, TabPanel } from '@webc-charles/components-react'

<Tab defaultValue="tab1">
  <TabList>
    <TabButton value="tab1">Overview</TabButton>
    <TabButton value="tab2">Features</TabButton>
    <TabButton value="tab3">Pricing</TabButton>
  </TabList>

  <TabPanels>
    <TabPanel value="tab1">Overview content...</TabPanel>
    <TabPanel value="tab2">Features content...</TabPanel>
    <TabPanel value="tab3">Pricing content...</TabPanel>
  </TabPanels>
</Tab>

// Controlled
const [activeTab, setActiveTab] = useState('tab1')

<Tab value={activeTab} onValueChange={setActiveTab}>
  {/* ... */}
</Tab>

// Styled tabs
<TabButton value="tab1" variant="primary" appearance="button">
  Tab 1
</TabButton>
```

**Keyboard Navigation**: Arrow Left/Right, Home, End

---

#### Slider

Carousel/slider using Embla.

```tsx
import {
  Slider,
  SliderContainer,
  SliderSlide,
  SliderControls,
  SliderPrev,
  SliderNext,
  SliderDots,
} from '@webc-charles/components-react'

<Slider options={{ loop: true, align: 'start' }}>
  <SliderContainer>
    <SliderSlide>Slide 1</SliderSlide>
    <SliderSlide>Slide 2</SliderSlide>
    <SliderSlide>Slide 3</SliderSlide>
  </SliderContainer>

  <SliderControls>
    <SliderPrev />
    <SliderDots />
    <SliderNext />
  </SliderControls>
</Slider>

// Custom controls
<SliderPrev label="Previous slide">
  <CustomIcon />
</SliderPrev>
```

**Slider Props**:

| Prop      | Type               | Description            |
| --------- | ------------------ | ---------------------- |
| `options` | `EmblaOptionsType` | Embla carousel options |

See [Embla Carousel docs](https://www.embla-carousel.com/api/options/) for available options.

---

## Theming

### Color Variants

All themed components accept a `variant` prop:

```tsx
type ColorVariant =
  | 'default' // Grey tones
  | 'primary' // Blue
  | 'secondary' // Purple
  | 'success' // Green
  | 'danger' // Red
  | 'warning' // Orange
  | 'info' // Cyan
```

### Contrast Mode

For dark backgrounds (banners, heroes), use the `contrast` boolean prop instead of a variant:

```tsx
// On dark backgrounds
<Button variant="primary" contrast appearance="button">Light button</Button>
<Link contrast>Light link</Link>
```

This inverts colors for readability on dark surfaces.

### CSS Variables

Override these in your CSS to customize the theme:

```css
:root {
  /* Base colors */
  --color-black: #000;
  --color-white: #fff;

  /* Grey scale */
  --color-grey-1: #333;
  --color-grey-2: #666;
  --color-grey-3: #737373;
  --color-grey-4: #949494;
  --color-grey-5: #ddd;
  --color-grey-6: #eee;

  /* Each variant has 4 levels */
  /* -1: Dark (hover state, text on light bg) */
  /* -2: Base (main color) */
  /* -3: Light (backgrounds) */
  /* -contrast: Vibrant color for dark backgrounds */

  --color-default-1: #222;
  --color-default-2: #666;
  --color-default-3: #eee;
  --color-default-contrast: #fff;

  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
  --color-primary-contrast: #60a5fa;

  --color-secondary-1: #3d1480;
  --color-secondary-2: #7c3aed;
  --color-secondary-3: #ede9fe;
  --color-secondary-contrast: #a78bfa;

  --color-success-1: #115129;
  --color-success-2: #15803d;
  --color-success-3: #dcfce7;
  --color-success-contrast: #4ade80;

  --color-danger-1: #5c1010;
  --color-danger-2: #dc2626;
  --color-danger-3: #fee2e2;
  --color-danger-contrast: #f87171;

  --color-warning-1: #71320b;
  --color-warning-2: #b45309;
  --color-warning-3: #fef3c7;
  --color-warning-contrast: #fbbf24;

  --color-info-1: #104b5d;
  --color-info-2: #0e7490;
  --color-info-3: #cffafe;
  --color-info-contrast: #22d3ee;

  /* Typography */
  --font-size-1: 1rem;
  --font-size-2: 1.2rem;
  --font-size-3: 1.4rem;
  --font-size-4: 1.6rem;
  --font-size-5: 1.8rem;
  --font-size-6: 2rem;

  /* Spacing & Sizing */
  --radius-small: 0.4rem;
  --radius-medium: 0.5rem;
  --radius-large: 0.6rem;
  --height-button: 4rem;
  --height-badge: 2.6rem;

  /* Z-index layers */
  --z-index-1: 100;
  --z-index-2: 200;
  --z-index-3: 300;
  --z-index-4: 400; /* Modals, dropdowns */
  --z-index-5: 500; /* Toasts */
}
```

---

## Accessibility

This library targets **WCAG 2.1 AA** compliance.

### Implemented Features

| Feature                 | Components                            | Standard   |
| ----------------------- | ------------------------------------- | ---------- |
| **Focus indicators**    | All interactive                       | WCAG 2.4.7 |
| **Color contrast**      | All variants ≥4.5:1                   | WCAG 1.4.3 |
| **Keyboard navigation** | Accordion, Tab, Select, Modal, Slider | WCAG 2.1.1 |
| **Focus trap**          | Modal, Select                         | WCAG 2.4.3 |
| **ARIA attributes**     | All components                        | WCAG 4.1.2 |
| **Live regions**        | Toast, Slider, Textarea               | WCAG 4.1.3 |
| **Required alt text**   | Image                                 | WCAG 1.1.1 |
| **Semantic HTML**       | Note (aside), headings                | WCAG 1.3.1 |

### Keyboard Patterns

| Component     | Keys                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **Accordion** | Arrow Up/Down (navigate), Home/End (first/last), Enter/Space (toggle) |
| **Tab**       | Arrow Left/Right (navigate), Home/End (first/last)                    |
| **Select**    | Arrow Up/Down (navigate), Enter (select), Escape (close), Tab (close) |
| **Modal**     | Tab (cycle focus), Escape (close)                                     |
| **Date**      | Arrows (navigate days), Enter/Space (select)                          |

### Screen Reader Support

- Toast uses `role="status"` (polite) or `role="alert"` (assertive for danger/warning)
- Modal uses `role="dialog"` with `aria-modal`, `aria-labelledby`, `aria-describedby`
- Select uses `role="combobox"` with `aria-expanded`, `aria-activedescendant`
- Accordion uses WAI-ARIA accordion pattern with `aria-expanded`, `aria-controls`

### Error Handling

Form components intentionally don't include built-in error states to allow flexibility. Implement errors using ARIA:

```tsx
<>
  <InputText
    aria-invalid={hasError}
    aria-describedby={hasError ? 'email-error' : undefined}
  />
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email
    </span>
  )}
</>
```

---

## Architecture

### File Structure

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx        # Component implementation
│   │   ├── ComponentName.types.ts   # TypeScript types
│   │   ├── ComponentName.module.scss # Scoped styles
│   │   ├── ComponentName.test.tsx   # Tests (Vitest)
│   │   ├── ComponentName.stories.tsx # Storybook stories
│   │   └── index.ts                 # Barrel export
│   └── index.ts                     # Main export
├── styles/
│   ├── root.scss        # CSS variables
│   ├── main.scss        # Global styles, focus indicators
│   ├── form.scss        # Form component mixins
│   ├── interactive.scss # Button/Link variant mixins
│   ├── variants.scss    # Color variant mixins
│   └── mq.scss          # Media query mixins
├── types/
│   ├── variants.ts      # Shared type definitions
│   └── index.ts
├── i18n/
│   ├── fr.json          # French translations
│   └── index.ts         # i18n utility
└── index.ts             # Package entry
```

### Component Patterns

**Simple Components** (Badge, Image, Title):

```tsx
export function Component({ ref, className, ...props }: ComponentTypes) {
  return (
    <element ref={ref} className={clsx(styles.base, className)} {...props} />
  )
}
```

**Compound Components** (Accordion, Tab, Select):

```tsx
const Context = createContext<ContextType | null>(null)

export function Root({ children }) {
  const value = useMemo(
    () => ({
      /* state */
    }),
    []
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function Child() {
  const ctx = useContext(Context)
  // ...
}
```

**Provider Components** (Toasts, Modals):

```tsx
export function Provider({ children }) {
  const [items, setItems] = useState([])
  // add/remove handlers
  return (
    <Context.Provider value={{ addItem, removeItem }}>
      {children}
      <ItemContainer>{items.map(...)}</ItemContainer>
    </Context.Provider>
  )
}
```

### Design Decisions

1. **No built-in form validation**: Keep components primitive, let consumers compose
2. **CSS Modules over CSS-in-JS**: Better performance, standard tooling
3. **Compound components for complex UI**: Flexible composition, clear hierarchy
4. **Context for state sharing**: Avoids prop drilling in compound components
5. **Portal for overlays**: Modal and Select menus render in body to avoid z-index issues
6. **Memo for list items**: Performance optimization for Select options

---

## TypeScript

### Extending Components

All components use `ComponentPropsWithRef<'element'>` for full HTML attribute support:

```tsx
// All native button props work
<Button
  type="submit"
  form="my-form"
  disabled={isSubmitting}
  aria-describedby="help-text"
>
  Submit
</Button>

// Ref forwarding (React 19 style)
const buttonRef = useRef<HTMLButtonElement>(null)
<Button ref={buttonRef}>Click</Button>
```

### Type Exports

```tsx
import type {
  BadgeTypes,
  // ... all component types
  ButtonAppearanceTypes,
  ButtonTypes,
  ColorVariant,
} from '@webc-charles/components-react'
```

---

## Development

### Setup

```bash
git clone <repo>
cd webc-components-react
npm install
```

### Scripts

```bash
npm run dev          # Start Storybook
npm run build        # Build library
npm run test         # Run Vitest tests
npm run test:watch   # Watch mode
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

### Testing

Tests use Vitest + React Testing Library:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Adding a New Component

1. Create folder: `src/components/NewComponent/`
2. Create files:
   - `NewComponent.tsx`
   - `NewComponent.types.ts`
   - `NewComponent.module.scss`
   - `NewComponent.test.tsx`
   - `NewComponent.stories.tsx`
   - `index.ts`
3. Export from `src/components/index.ts`
4. Add to this README

### i18n

Strings are in `src/i18n/fr.json`. Import with:

```tsx
import { str } from 'i18n'

<button aria-label={str.close_modal}>...</button>
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Server-side Rendering

All components support SSR and SSG (Static Site Generation). Works with Next.js, Remix, Gatsby, and other frameworks.

Components use React 18+ `useId()` for stable ARIA attributes during hydration.

### Usage with Next.js

Next.js has its own `Image` and `Link` components with built-in optimizations. To avoid naming conflicts, rename imports:

```tsx
// Rename our components to avoid conflicts with Next.js
import { Image as BaseImage, Link as BaseLink } from '@webc-charles/components-react'
import Image from 'next/image'
import Link from 'next/link'

// Use Next.js components for routing and image optimization
<Link href="/about">About</Link>
<Image src="/photo.jpg" alt="Photo" width={500} height={300} />

// Use our components for styled elements
<BaseLink href="https://external.com" appearance="button" variant="primary">
  External Link
</BaseLink>
```

---

## License

MIT
