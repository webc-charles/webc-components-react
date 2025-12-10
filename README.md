# @webc/components-react

A lightweight React component library with CSS variables for easy theming.

**[Demo](https://webc-charles.github.io/webc-components-react)**

## Quick Start

**1. Create a new React app**
```bash
npx create-react-app my-app
cd my-app
```

**2. Install the library**

First, create a `.npmrc` file in your project root:
```
@webc-charles:registry=https://npm.pkg.github.com
```

Then install:
```bash
npm install @webc-charles/components-react
```

**3. Import styles in `src/index.js`**
```jsx
import '@webc-charles/components-react/styles.css'
```

**4. Use components**
```jsx
import { Button, Card, CardHeader, CardBody } from '@webc-charles/components-react'

function App() {
  return (
    <Card>
      <CardHeader>Welcome</CardHeader>
      <CardBody>
        <Button variant="accent" action={() => console.log('clicked')}>
          Click me
        </Button>
      </CardBody>
    </Card>
  )
}
```

## Installation

Add to your `.npmrc`:
```
@webc-charles:registry=https://npm.pkg.github.com
```

Then:
```bash
npm install @webc-charles/components-react
```

## Setup

Import the styles once in your app entry point:

```tsx
import '@webc/components-react/styles.css'
```

## Theming

Components use CSS variables for styling. Override them in your own CSS:

```css
:root {
  --color-accent-2: #ff5500;
  --color-danger-2: #e74c3c;
  --font-size-4: 1.8rem;
}
```

See all available variables in the [CSS Variables](#css-variables) section.

---

## Components

### Alert

Displays a message with a variant style.

```tsx
import { Alert } from '@webc/components-react'

const Example = () => (
  <Alert variant="success" title="Success!">
    Your changes have been saved.
  </Alert>
)
```

| Prop       | Type                                                                    | Default  | Description   |
| ---------- | ----------------------------------------------------------------------- | -------- | ------------- |
| `title`    | `ReactNode`                                                             | -        | Alert title   |
| `children` | `ReactNode`                                                             | -        | Alert content |
| `variant`  | `'accent' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | `'info'` | Style variant |

---

### Badge

Small label for status or counts.

```tsx
import { Badge } from '@webc/components-react'

const Example = () => <Badge variant="success">New</Badge>
```

| Prop        | Type                                                        | Default     | Description          |
| ----------- | ----------------------------------------------------------- | ----------- | -------------------- |
| `children`  | `ReactNode`                                                 | -           | Badge content        |
| `variant`   | `'default' \| 'accent' \| 'warning' \| 'info' \| 'success'` | `'default'` | Style variant        |
| `className` | `string`                                                    | -           | Additional CSS class |

---

### Button

Button or link component.

```tsx
import { Button } from '@webc/components-react'

const Example = () => (
  <>
    <Button variant="accent" action={() => console.log('clicked')}>
      Click me
    </Button>

    <Button link="https://example.com">Visit site</Button>
  </>
)
```

| Prop       | Type                              | Default    | Description                  |
| ---------- | --------------------------------- | ---------- | ---------------------------- |
| `children` | `ReactNode`                       | -          | Button content               |
| `variant`  | `'basic' \| 'accent' \| 'danger'` | -          | Style variant                |
| `action`   | `() => void`                      | -          | Click handler                |
| `link`     | `string`                          | -          | Renders as `<a>` if provided |
| `disabled` | `boolean`                         | `false`    | Disabled state               |
| `type`     | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type                  |
| `title`    | `string`                          | -          | Title attribute              |

---

### Card

Container component with header, body, and footer sections.

```tsx
import { Card, CardBody, CardFooter, CardHeader } from '@webc/components-react'

const Example = () => (
  <Card>
    <CardHeader>Title</CardHeader>
    <CardBody>Content goes here</CardBody>
    <CardFooter>Footer actions</CardFooter>
  </Card>
)
```

All Card components accept `className` and `children` props.

---

### Grid

Responsive grid layout system (1-12 columns).

```tsx
import { Grid, GridItem } from '@webc/components-react'

const Example = () => (
  <Grid col={1} colMD={2} colLG={4} gap="md">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem colMD={2}>Wide item</GridItem>
    <GridItem>Item 4</GridItem>
  </Grid>
)
```

#### Grid Props

| Prop              | Type                                             | Default | Description          |
| ----------------- | ------------------------------------------------ | ------- | -------------------- |
| `col`             | `number`                                         | `1`     | Base columns (1-12)  |
| `colXS`           | `number`                                         | -       | Columns at ≥480px    |
| `colSM`           | `number`                                         | -       | Columns at ≥768px    |
| `colMD`           | `number`                                         | -       | Columns at ≥1024px   |
| `colLG`           | `number`                                         | -       | Columns at ≥1200px   |
| `colXL`           | `number`                                         | -       | Columns at ≥1400px   |
| `gap`             | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | -       | Gap size             |
| `gapXS` - `gapXL` | `GapSize`                                        | -       | Responsive gap sizes |

#### GridItem Props

| Prop              | Type     | Default | Description             |
| ----------------- | -------- | ------- | ----------------------- |
| `col`             | `number` | `1`     | Column span (1-12)      |
| `colXS` - `colXL` | `number` | -       | Responsive column spans |
| `row`             | `number` | -       | Row span (1-6)          |
| `rowXS` - `rowXL` | `number` | -       | Responsive row spans    |

---

### Modal

Modal dialog with focus trap and keyboard support.

```tsx
import { Modals, useModals } from '@webc/components-react'

// Wrap your app
function App() {
  return (
    <Modals>
      <MyComponent />
    </Modals>
  )
}

// Use the hook
function MyComponent() {
  const { addModal } = useModals()

  const openModal = () => {
    addModal({
      title: 'Confirm',
      children: <p>Are you sure?</p>,
      size: 'md',
      closeLabel: 'Close', // for i18n
    })
  }

  return <Button action={openModal}>Open Modal</Button>
}
```

| Prop              | Type                                     | Default         | Description                  |
| ----------------- | ---------------------------------------- | --------------- | ---------------------------- |
| `title`           | `ReactNode`                              | -               | Modal title                  |
| `children`        | `ReactNode`                              | -               | Modal content                |
| `size`            | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'`          | Modal size                   |
| `closeOnBackdrop` | `boolean`                                | `false`         | Close when clicking backdrop |
| `duration`        | `number`                                 | `Infinity`      | Auto-close after ms          |
| `closeLabel`      | `string`                                 | `'Close Modal'` | Close button label (a11y)    |

---

### Note

Simple note/callout component.

```tsx
import { Note } from '@webc/components-react'

;<Note variant="warning" title="Warning">
  This action cannot be undone.
</Note>
```

| Prop       | Type                                              | Default     | Description   |
| ---------- | ------------------------------------------------- | ----------- | ------------- |
| `title`    | `ReactNode`                                       | -           | Note title    |
| `children` | `ReactNode`                                       | -           | Note content  |
| `variant`  | `'default' \| 'danger' \| 'success' \| 'warning'` | `'default'` | Style variant |

---

### Title

Heading component with configurable level.

```tsx
import { Title } from '@webc/components-react'

<Title level="1">Page Title</Title>
<Title level="2">Section Title</Title>
```

| Prop        | Type                                     | Default | Description           |
| ----------- | ---------------------------------------- | ------- | --------------------- |
| `level`     | `'1' \| '2' \| '3' \| '4' \| '5' \| '6'` | `'1'`   | Heading level (h1-h6) |
| `children`  | `ReactNode`                              | -       | Title content         |
| `className` | `string`                                 | -       | Additional CSS class  |

---

### Toast

Toast notifications with auto-dismiss.

```tsx
import { Toasts, useToasts } from '@webc/components-react'

// Wrap your app
function App() {
  return (
    <Toasts>
      <MyComponent />
    </Toasts>
  )
}

// Use the hook
function MyComponent() {
  const { addToast } = useToasts()

  const notify = () => {
    addToast({
      title: 'Saved!',
      children: 'Your changes have been saved.',
      variant: 'success',
      duration: 5000,
      closeLabel: 'Dismiss',
    })
  }

  return <Button action={notify}>Save</Button>
}
```

| Prop         | Type                                                       | Default         | Description               |
| ------------ | ---------------------------------------------------------- | --------------- | ------------------------- |
| `title`      | `ReactNode`                                                | -               | Toast title               |
| `children`   | `ReactNode`                                                | -               | Toast content             |
| `variant`    | `'accent' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'accent'`      | Style variant             |
| `duration`   | `number`                                                   | `10000`         | Auto-dismiss after ms     |
| `closeLabel` | `string`                                                   | `'Close Toast'` | Close button label (a11y) |

---

### Form Components

#### InputNumber

Number input with increment/decrement buttons.

```tsx
import { InputNumber } from '@webc/components-react'

const [value, setValue] = useState(0)

<InputNumber
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={5}
  label="Quantity"
  incrementLabel="Add" // for i18n
  decrementLabel="Remove" // for i18n
/>
```

#### InputDate

Date picker component.

```tsx
import { InputDate } from '@webc/components-react'

const [date, setDate] = useState<Date | null>(null)

<InputDate
  selected={date}
  onChange={setDate}
  placeholder="Select date"
  dateFormat="dd/MM/yyyy"
/>
```

#### Checkbox

Checkbox input.

```tsx
import { Checkbox } from '@webc/components-react'

const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="I agree to the terms"
/>
```

---

## CSS Variables

```css
:root {
  --color-black: #000;
  --color-black-50: rgb(0 0 0 / 50%);
  --color-black-20: rgb(0 0 0 / 20%);
  --color-white: #fff;
  --color-white-50: rgb(255 255 255 / 20%);
  --color-grey-1: #383d41;
  --color-grey-2: #6c757d;
  --color-grey-3: #ccc;
  --color-grey-4: #f0f0f0;
  --color-grey-5: #f5f5f5;
  --color-grey-6: #fcfcfc;
  --color-accent-1: #004085;
  --color-accent-2: #007bff;
  --color-accent-3: #b8daff;
  --color-success-1: #155724;
  --color-success-2: #3fb259;
  --color-success-3: #d4edda;
  --color-danger-1: #a21a27;
  --color-danger-2: #dc1e31;
  --color-danger-3: #f8d7da;
  --color-warning-1: #856404;
  --color-warning-2: #b69943;
  --color-warning-3: #fff3cd;
  --color-info-1: #0c5460;
  --color-info-2: #3e929f;
  --color-info-3: #d1ecf1;
  --font-size-1: 1rem;
  --font-size-2: 1.2rem;
  --font-size-3: 1.4rem;
  --font-size-4: 1.6rem;
  --font-size-5: 1.8rem;
  --font-size-6: 2rem;
  --font-size-7: 2.5rem;
  --font-size-8: 3rem;
  --font-size-9: 4rem;
  --font-size-lg: 6rem;
  --font-size-xl: 8rem;
  --font-size-xxl: 14rem;
  --font-weight-md: 500;
  --font-weight-lg: 700;
  --z-index-1: 100;
  --z-index-2: 200;
  --z-index-3: 300;
  --z-index-4: 400;
  --z-index-5: 500;
  --z-index-6: 600;
  --screen-max-width: 168rem;
  --container-max-width: 120rem;
  --site-font: system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', arial, sans-serif;
  --fade-in: fade-in 0.2s ease-out forwards;
  --fade-in-up: fade-in-up 0.2s ease-out forwards;
}
```

---

## License

MIT
