# Image

Responsive image with object-fit controls, aspect ratio, border radius, and optional caption.

## Import

```tsx
import { Image } from '@ui'
```

## Usage

### Basic

```tsx
<Image src="/photo.jpg" alt="Description of image" />
```

### With Caption

```tsx
<Image
  src="/photo.jpg"
  alt="Sunset over mountains"
  caption="Photo by John Doe"
/>
```

### Object Fit

```tsx
<Image src="/photo.jpg" alt="Photo" fit="cover" />
<Image src="/photo.jpg" alt="Photo" fit="contain" />
<Image src="/photo.jpg" alt="Photo" fit="fill" />
<Image src="/photo.jpg" alt="Photo" fit="none" />
<Image src="/photo.jpg" alt="Photo" fit="scale-down" />
```

### Object Position

```tsx
<Image src="/photo.jpg" alt="Photo" fit="cover" position="center" />
<Image src="/photo.jpg" alt="Photo" fit="cover" position="top" />
<Image src="/photo.jpg" alt="Photo" fit="cover" position="bottom-right" />
```

### Aspect Ratio

```tsx
<Image src="/photo.jpg" alt="Photo" aspectRatio="16/9" fit="cover" />
<Image src="/photo.jpg" alt="Photo" aspectRatio="1/1" fit="cover" />
<Image src="/photo.jpg" alt="Photo" aspectRatio="4/3" fit="cover" />
```

### Border Radius

```tsx
<Image src="/photo.jpg" alt="Photo" radius="none" />
<Image src="/photo.jpg" alt="Photo" radius="small" />
<Image src="/photo.jpg" alt="Photo" radius="medium" />
<Image src="/photo.jpg" alt="Photo" radius="large" />
<Image src="/photo.jpg" alt="Photo" radius="full" />
```

### With Next.js Image (asChild)

```tsx
import NextImage from 'next/image'

<Image alt="Photo" asChild>
  <NextImage src="/photo.jpg" width={800} height={600} />
</Image>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | **required** | Alt text for accessibility |
| `fit` | `ImageFit` | - | Object-fit behavior |
| `position` | `ImagePosition` | - | Object-position alignment |
| `aspectRatio` | `string` | - | CSS aspect-ratio value |
| `radius` | `ImageRadius` | - | Border radius |
| `caption` | `ReactNode` | - | Caption below image |
| `asChild` | `boolean` | `false` | Render as child element (slot pattern) |
| `className` | `string` | - | Additional CSS class |

### ImageFit

```tsx
type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
```

### ImagePosition

```tsx
type ImagePosition =
  | 'center' | 'top' | 'bottom' | 'left' | 'right'
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
```

### ImageRadius

```tsx
type ImageRadius = 'none' | 'small' | 'medium' | 'large' | 'full'
```

## Accessibility

- `alt` is required
- When caption present, wraps in `<figure>` with `role="group"`
- `aria-labelledby` links to `<figcaption>`

## Strapi Integration

```tsx
<Image
  src={getMediaUrl(data.image.url)}
  alt={data.image.alternativeText || data.title}
  caption={data.caption}
  aspectRatio={data.aspectRatio}
  fit="cover"
/>
```
