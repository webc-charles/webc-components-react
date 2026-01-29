# Modal

Dialog overlay with focus trap, escape key handling, and body scroll lock.

## Import

```tsx
import { Modal } from '@ui'
```

## Usage

### Basic

```tsx
const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Title level="h2">Modal Title</Title>
  <p>Modal content goes here.</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>
```

### With Custom Width

```tsx
<Modal isOpen={isOpen} onClose={handleClose} width="600px">
  {/* content */}
</Modal>
```

### Prevent Close on Overlay Click

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnOverlayClick={false}
>
  <p>Must use close button or Escape key.</p>
  <Button onClick={handleClose}>Close</Button>
</Modal>
```

### Prevent Close on Escape

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnEscape={false}
>
  {/* content */}
</Modal>
```

### With Custom Close Button Label

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeLabel={t('modal.close')}
>
  {/* content */}
</Modal>
```

### Full Screen Mode

```tsx
<Modal isOpen={isOpen} onClose={handleClose} fullScreen>
  {/* full screen content */}
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Controls visibility |
| `onClose` | `() => void` | **required** | Close handler |
| `children` | `ReactNode` | - | Modal content |
| `width` | `string` | `'500px'` | Modal width |
| `fullScreen` | `boolean` | `false` | Full screen mode |
| `closeOnOverlayClick` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `closeLabel` | `string` | `'Close'` | Close button aria-label |
| `showCloseButton` | `boolean` | `true` | Show X close button |
| `className` | `string` | - | Class for modal content |
| `overlayClassName` | `string` | - | Class for backdrop |

## Behavior

- **Focus trap**: Tab cycles through focusable elements inside modal
- **Body scroll lock**: Prevents background scrolling when open
- **Portal rendering**: Renders at document root via portal
- **Focus restoration**: Returns focus to trigger element on close
- **Animation**: Fade in/out with scale transform

## Accessibility

- `role="dialog"` with `aria-modal="true"`
- Focus moves to modal on open
- Focus trapped within modal
- Escape key closes (unless disabled)
- `aria-label` on close button
- Focus returns to trigger on close

## Common Patterns

### Confirmation Dialog

```tsx
const [showConfirm, setShowConfirm] = useState(false)
const [pendingAction, setPendingAction] = useState(null)

const handleDelete = () => {
  setPendingAction('delete')
  setShowConfirm(true)
}

const confirmAction = () => {
  if (pendingAction === 'delete') {
    deleteItem()
  }
  setShowConfirm(false)
}

<Modal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  width="400px"
>
  <Title level="h2">Confirm Delete</Title>
  <p>Are you sure you want to delete this item?</p>
  <div className="flex justify-end g-2 mt-4">
    <Button appearance="ghost" onClick={() => setShowConfirm(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={confirmAction}>
      Delete
    </Button>
  </div>
</Modal>
```

### Form Modal

```tsx
<Modal isOpen={isOpen} onClose={handleClose} width="500px">
  <Title level="h2">Edit Profile</Title>
  <form onSubmit={handleSubmit}>
    <InputText
      label="Name"
      value={name}
      onChange={setName}
    />
    <InputTextarea
      label="Bio"
      value={bio}
      onChange={setBio}
    />
    <div className="flex justify-end g-2 mt-4">
      <Button appearance="ghost" onClick={handleClose}>
        Cancel
      </Button>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </div>
  </form>
</Modal>
```

### Image Lightbox

```tsx
<Modal
  isOpen={!!selectedImage}
  onClose={() => setSelectedImage(null)}
  width="90vw"
>
  <Image
    src={selectedImage?.url}
    alt={selectedImage?.alt}
    fit="contain"
  />
</Modal>
```

## Strapi Integration

```tsx
{data.modal && (
  <Modal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    width={data.modal.width || '500px'}
  >
    {data.modal.title && (
      <Title level="h2">{data.modal.title}</Title>
    )}
    <RichText html={data.modal.content} />
    {data.modal.cta && (
      <div className="mt-4">
        <Button
          as="a"
          href={data.modal.cta.url}
          variant="primary"
        >
          {data.modal.cta.label}
        </Button>
      </div>
    )}
  </Modal>
)}
```
