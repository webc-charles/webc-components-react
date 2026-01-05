# @webc-charles/components-react

A lightweight, accessible React component library with CSS variables for easy theming.

## Install

```bash
npm install @webc-charles/components-react
# or
yarn add @webc-charles/components-react
```

## Setup

Import the styles in your app entry point:

```tsx
import '@webc-charles/components-react/styles.css'
```

---

## UI Components

### Button

```tsx
import { Button } from '@webc-charles/components-react'

<Button variant="primary" onClick={() => {}}>Click me</Button>
<Button variant="danger" appearance="outline" disabled>Disabled</Button>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'info' \| 'warning' \| 'contrast'` | `'default'` |
| `appearance` | `'default' \| 'underline' \| 'outline' \| 'button'` | `'default'` |

Extends all native `<button>` props.

---

### Link

```tsx
import { Link } from '@webc-charles/components-react'

<Link href="/about" variant="primary">About</Link>
<Link href="/docs" appearance="arrow">Documentation</Link>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'info' \| 'warning' \| 'contrast'` | `'default'` |
| `appearance` | `'default' \| 'underline' \| 'outline' \| 'arrow' \| 'button'` | `'default'` |
| `disabled` | `boolean` | `false` |

Extends all native `<a>` props.

---

### Badge

```tsx
import { Badge } from '@webc-charles/components-react'

<Badge variant="success">New</Badge>
<Badge variant="warning">Pending</Badge>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'info' \| 'warning'` | `'default'` |

Extends all native `<div>` props.

---

### Title

```tsx
import { Title } from '@webc-charles/components-react'

<Title level="h1">Page Title</Title>
<Title level="h2">Section Heading</Title>
```

| Prop | Type | Default |
|------|------|---------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` |

Extends all native `<h1>` props.

---

### Note

```tsx
import { Note, NoteHeader } from '@webc-charles/components-react'

<Note variant="warning">
  <NoteHeader variant="warning">Warning</NoteHeader>
  This action cannot be undone.
</Note>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'info' \| 'warning'` | `'default'` |

Extends all native `<div>` props.

---

### Image

```tsx
import { Image } from '@webc-charles/components-react'

<Image src="/photo.jpg" alt="Description" />
```

Extends all native `<img>` props.

---

## Layout Components

### Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@webc-charles/components-react'

<Card>
  <CardHeader><Title level="h3">Title</Title></CardHeader>
  <CardBody>Content goes here</CardBody>
  <CardFooter><Button>Save</Button></CardFooter>
</Card>
```

All Card sub-components extend native `<div>` props.

---

### Grid

A responsive grid system with breakpoint support.

```tsx
import { Grid, GridItem } from '@webc-charles/components-react'

<Grid col={3} gap="md">
  <GridItem>Item 1</GridItem>
  <GridItem col={2}>Spans 2 columns</GridItem>
</Grid>
```

**Grid Props:**

| Prop | Type | Description |
|------|------|-------------|
| `col` | `number` | Base column count |
| `colXS` `colSM` `colMD` `colLG` `colXL` | `number` | Responsive column counts |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Base gap size |
| `gapXS` `gapSM` `gapMD` `gapLG` `gapXL` | `GapSize` | Responsive gap sizes |

**GridItem Props:**

| Prop | Type | Description |
|------|------|-------------|
| `col` | `number` | Column span |
| `colXS` `colSM` `colMD` `colLG` `colXL` | `number` | Responsive column spans |
| `row` | `number` | Row span |
| `rowXS` `rowSM` `rowMD` `rowLG` `rowXL` | `number` | Responsive row spans |

---

### Banner

A hero/banner component with background image support.

```tsx
import { Banner, BannerContent, BannerTitle, BannerSubtitle, BannerText, BannerActions } from '@webc-charles/components-react'

<Banner backgroundImage="/hero.jpg" overlay="dark" minHeight="400px">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle level="h1">Welcome</BannerTitle>
    <BannerSubtitle>Subtitle text</BannerSubtitle>
    <BannerText>Description paragraph</BannerText>
    <BannerActions>
      <Button variant="primary">Get Started</Button>
    </BannerActions>
  </BannerContent>
</Banner>
```

**Banner Props:**

| Prop | Type | Default |
|------|------|---------|
| `backgroundImage` | `string` | - |
| `backgroundColor` | `string` | - |
| `horizontalAlign` | `'left' \| 'center' \| 'right'` | `'center'` |
| `verticalAlign` | `'start' \| 'center' \| 'end'` | `'center'` |
| `minHeight` | `string` | - |
| `overlay` | `'none' \| 'light' \| 'dark'` | `'none'` |

**BannerContent Props:**

| Prop | Type | Default |
|------|------|---------|
| `maxWidth` | `string` | - |
| `textAlign` | `'left' \| 'center' \| 'right'` | - |
| `textColor` | `'light' \| 'dark'` | - |

---

## Feedback Components

### Modal

```tsx
import { Modals, useModals } from '@webc-charles/components-react'

function App() {
  return <Modals><MyComponent /></Modals>
}

function MyComponent() {
  const { addModal } = useModals()
  
  return (
    <Button onClick={() => addModal({
      title: 'Confirm',
      children: <p>Are you sure?</p>,
      size: 'md'
    })}>
      Open Modal
    </Button>
  )
}
```

**Modal Config:**

| Prop | Type | Default |
|------|------|---------|
| `title` | `ReactNode` | - |
| `children` | `ReactNode` | Required |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` |
| `closeOnBackdrop` | `boolean` | `true` |
| `duration` | `number` | - |
| `closeLabel` | `string` | `'Close'` |
| `hideCloseButton` | `boolean` | `false` |

---

### Toast

```tsx
import { Toasts, useToasts } from '@webc-charles/components-react'

function App() {
  return <Toasts><MyComponent /></Toasts>
}

function MyComponent() {
  const { addToast } = useToasts()
  
  return (
    <Button onClick={() => addToast({
      title: 'Saved',
      children: 'Your changes have been saved.',
      variant: 'success',
      duration: 5000
    })}>
      Save
    </Button>
  )
}
```

**Toast Config:**

| Prop | Type | Default |
|------|------|---------|
| `title` | `ReactNode` | - |
| `children` | `ReactNode` | Required |
| `variant` | `'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` |
| `duration` | `number` | `5000` |
| `closeLabel` | `string` | `'Close'` |

---

## Navigation Components

### Tab

```tsx
import { Tab, TabList, TabButton, TabPanels, TabPanel } from '@webc-charles/components-react'

<Tab defaultValue="tab1" onValueChange={(value) => console.log(value)}>
  <TabList>
    <TabButton value="tab1">Tab 1</TabButton>
    <TabButton value="tab2">Tab 2</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Content 1</TabPanel>
    <TabPanel value="tab2">Content 2</TabPanel>
  </TabPanels>
</Tab>
```

**Tab Props:**

| Prop | Type | Default |
|------|------|---------|
| `defaultValue` | `string` | Required |
| `value` | `string` | - |
| `onValueChange` | `(value: string) => void` | - |

---

### Slider

Carousel/slider built on Embla Carousel.

```tsx
import { Slider, SliderContainer, SliderSlide, SliderControls, SliderPrev, SliderNext, SliderDots } from '@webc-charles/components-react'

<Slider options={{ loop: true }}>
  <SliderContainer>
    <SliderSlide>Slide 1</SliderSlide>
    <SliderSlide>Slide 2</SliderSlide>
    <SliderSlide>Slide 3</SliderSlide>
  </SliderContainer>
  <SliderControls>
    <SliderPrev label="Previous slide" />
    <SliderDots label="Go to slide" />
    <SliderNext label="Next slide" />
  </SliderControls>
</Slider>
```

**Slider Props:**

| Prop | Type | Description |
|------|------|-------------|
| `options` | `EmblaOptionsType` | Embla Carousel options |

---

## Form Components

### InputText

```tsx
import { InputText } from '@webc-charles/components-react'

<InputText label="Email" placeholder="Enter email" type="email" />
```

| Prop | Type | Required |
|------|------|----------|
| `label` | `string` | Yes |
| `inputClassName` | `string` | No |
| `labelClassName` | `string` | No |

Extends all native `<input>` props.

---

### InputPassword

```tsx
import { InputPassword } from '@webc-charles/components-react'

<InputPassword label="Password" />
```

| Prop | Type | Required |
|------|------|----------|
| `label` | `string` | Yes |
| `inputClassName` | `string` | No |
| `labelClassName` | `string` | No |

Extends all native `<input>` props (except `type`).

---

### InputTextarea

```tsx
import { InputTextarea } from '@webc-charles/components-react'

const [value, setValue] = useState('')

<InputTextarea
  label="Bio"
  value={value}
  onChange={setValue}
  maxLength={280}
  showCount
/>
```

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `value` | `string` | - |
| `onChange` | `(value: string) => void` | - |
| `showCount` | `boolean` | `false` |
| `textareaClassName` | `string` | - |
| `labelClassName` | `string` | - |

Extends all native `<textarea>` props.

---

### InputNumber

```tsx
import { InputNumber } from '@webc-charles/components-react'

const [value, setValue] = useState(0)

<InputNumber
  label="Quantity"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={1}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `value` | `number` | - |
| `onChange` | `(value: number) => void` | - |
| `min` | `number` | - |
| `max` | `number` | - |
| `step` | `number` | `1` |
| `incrementLabel` | `string` | `'Increment'` |
| `decrementLabel` | `string` | `'Decrement'` |

---

### InputDate

Custom accessible date picker.

```tsx
import { InputDate } from '@webc-charles/components-react'

const [date, setDate] = useState<Date | null>(null)

<InputDate
  label="Date of Birth"
  selected={date}
  onChange={setDate}
  placeholder="Select date"
  minDate={new Date('1900-01-01')}
  maxDate={new Date()}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `selected` | `Date \| null` | Required |
| `onChange` | `(date: Date \| null) => void` | Required |
| `onBlur` | `() => void` | - |
| `placeholder` | `string` | - |
| `dateFormat` | `string` | `'MM/dd/yyyy'` |
| `minDate` | `Date` | - |
| `maxDate` | `Date` | - |
| `disabled` | `boolean` | `false` |

---

### Checkbox

```tsx
import { Checkbox } from '@webc-charles/components-react'

const [checked, setChecked] = useState(false)

<Checkbox
  label="I agree to the terms"
  checked={checked}
  onChange={setChecked}
/>
```

| Prop | Type | Required |
|------|------|----------|
| `label` | `string` | No |
| `checked` | `boolean` | Yes |
| `onChange` | `(checked: boolean) => void` | Yes |
| `disabled` | `boolean` | No |
| `labelClassName` | `string` | No |

---

### InputRadio

```tsx
import { InputRadio } from '@webc-charles/components-react'

const [value, setValue] = useState('')

<InputRadio
  name="plan"
  label="Select plan"
  value={value}
  onChange={setValue}
  direction="horizontal"
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise', disabled: true },
  ]}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | Required |
| `label` | `string` | - |
| `value` | `string` | - |
| `onChange` | `(value: string) => void` | - |
| `options` | `{ value: string; label: string; disabled?: boolean }[]` | Required |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` |

---

## Theming

Override CSS variables to customize the library:

```css
:root {
  /* Colors (1=dark, 2=base, 3=light) */
  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
  
  --color-secondary-1: #3d1480;
  --color-secondary-2: #7c3aed;
  --color-secondary-3: #ede9fe;
  
  --color-success-1: #115129;
  --color-success-2: #16a34a;
  --color-success-3: #dcfce7;
  
  --color-danger-1: #7c1515;
  --color-danger-2: #dc2626;
  --color-danger-3: #fee2e2;
  
  --color-warning-1: #71320b;
  --color-warning-2: #d97706;
  --color-warning-3: #fef3c7;
  
  --color-info-1: #104b5d;
  --color-info-2: #0891b2;
  --color-info-3: #cffafe;
  
  /* Typography */
  --site-font: system-ui, -apple-system, sans-serif;
  --font-size-1: 1rem;
  --font-size-2: 1.2rem;
  --font-size-3: 1.4rem;
  --font-size-4: 1.6rem;
  --font-size-5: 1.8rem;
  --font-size-6: 2rem;
  --font-size-7: 2.5rem;
  --font-size-8: 3rem;
  
  /* Borders */
  --radius-small: 0.4rem;
  --radius-medium: 0.5rem;
  --radius-large: 0.6rem;
  
  /* Component heights */
  --height-button: 4rem;
  --height-badge: 2.6rem;
}
```

---

## TypeScript

All components export their types:

```tsx
import type {
  ButtonTypes,
  ButtonVariantTypes,
  LinkTypes,
  BadgeTypes,
  ModalConfigTypes,
  ToastConfigTypes,
  GridTypes,
  GridItemTypes,
  InputTextTypes,
  InputDateTypes,
  CheckboxTypes,
  InputRadioTypes,
} from '@webc-charles/components-react'
```

---

## Dependencies

- `clsx` - Conditional class names
- `embla-carousel-react` - Slider/carousel
- `lucide-react` - Icons

---

## License

MIT
