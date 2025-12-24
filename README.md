# @webc/components-react

A lightweight React component library.

## Install

```bash
npm install @webc-charles/components-react
```

## Setup

```tsx
import '@webc-charles/components-react/styles.css'
```

## Components

### Button

```tsx
import { Button } from '@webc-charles/components-react'

<Button variant="primary" onClick={() => {}}>Click me</Button>
<Button variant="danger" disabled>Disabled</Button>
```

### Link

```tsx
import { Link } from '@webc-charles/components-react'

<Link href="/about" variant="primary">About</Link>
```

### Badge

```tsx
import { Badge } from '@webc-charles/components-react'

<Badge variant="success">New</Badge>
```

### Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@webc-charles/components-react'

<Card>
  <CardHeader><Title level="h3">Title</Title></CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter><Button>Save</Button></CardFooter>
</Card>
```

### Title

```tsx
import { Title } from '@webc-charles/components-react'

<Title level="h1">Page Title</Title>
<Title level="h2">Section</Title>
```

### Note

```tsx
import { Note } from '@webc-charles/components-react'

<Note variant="warning">This action cannot be undone.</Note>
```

### Grid

```tsx
import { Grid, GridItem } from '@webc-charles/components-react'

<Grid col={3} gap="md">
  <GridItem>1</GridItem>
  <GridItem col={2}>Spans 2</GridItem>
</Grid>
```

### Modal

```tsx
import { Modals, useModals } from '@webc-charles/components-react'

function App() {
  return <Modals><MyComponent /></Modals>
}

function MyComponent() {
  const { addModal } = useModals()
  
  return (
    <Button onClick={() => addModal({ title: 'Confirm', children: <p>Are you sure?</p> })}>
      Open
    </Button>
  )
}
```

### Toast

```tsx
import { Toasts, useToasts } from '@webc-charles/components-react'

function App() {
  return <Toasts><MyComponent /></Toasts>
}

function MyComponent() {
  const { addToast } = useToasts()
  
  return (
    <Button onClick={() => addToast({ title: 'Saved', variant: 'success' })}>
      Save
    </Button>
  )
}
```

## Form Components

### InputText

```tsx
import { InputText } from '@webc-charles/components-react'

<InputText label="Email" placeholder="Enter email" />
```

### InputPassword

```tsx
import { InputPassword } from '@webc-charles/components-react'

<InputPassword label="Password" />
```

### InputTextarea

```tsx
import { InputTextarea } from '@webc-charles/components-react'

<InputTextarea label="Bio" maxLength={280} showCount />
```

### InputNumber

```tsx
import { InputNumber } from '@webc-charles/components-react'

const [value, setValue] = useState(0)

<InputNumber label="Quantity" value={value} onChange={setValue} min={0} max={100} />
```

### InputDate

```tsx
import { InputDate } from '@webc-charles/components-react'

const [date, setDate] = useState<Date | null>(null)

<InputDate selected={date} onChange={setDate} placeholder="Select date" />
```

### Checkbox

```tsx
import { Checkbox } from '@webc-charles/components-react'

const [checked, setChecked] = useState(false)

<Checkbox label="I agree" checked={checked} onChange={setChecked} />
```

### InputRadio

```tsx
import { InputRadio } from '@webc-charles/components-react'

const [value, setValue] = useState('')

<InputRadio
  name="plan"
  label="Select plan"
  value={value}
  onChange={setValue}
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
  ]}
/>
```

## Theming

Override CSS variables:

```css
:root {
  --color-primary-2: #ff5500;
  --color-danger-2: #e74c3c;
}
```

## License

MIT
