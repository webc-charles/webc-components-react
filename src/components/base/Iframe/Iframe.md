# Iframe

Responsive iframe embed with configurable aspect ratio.

## Import

```tsx
import { Iframe } from '@ui'
```

## Usage

### YouTube Embed

```tsx
<Iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Video Title"
/>
```

### Custom Aspect Ratio

```tsx
<Iframe src={url} title="Video" aspectRatio="16/9" />  {/* default */}
<Iframe src={url} title="Video" aspectRatio="4/3" />
<Iframe src={url} title="Video" aspectRatio="1/1" />
<Iframe src={url} title="Video" aspectRatio="21/9" />
```

### Vimeo Embed

```tsx
<Iframe
  src="https://player.vimeo.com/video/123456789"
  title="Vimeo Video"
  aspectRatio="16/9"
/>
```

### Map Embed

```tsx
<Iframe
  src="https://www.google.com/maps/embed?pb=..."
  title="Office Location"
  aspectRatio="4/3"
/>
```

### Without Fullscreen

```tsx
<Iframe
  src={url}
  title="Embedded Content"
  allowFullScreen={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Source URL |
| `title` | `string` | **required** | Accessible title |
| `aspectRatio` | `string` | `'16/9'` | CSS aspect-ratio value |
| `allowFullScreen` | `boolean` | `true` | Allow fullscreen mode |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Loading behavior |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- `title` is required for screen readers
- Describes embedded content purpose

## Common Aspect Ratios

| Ratio | Use Case |
|-------|----------|
| `16/9` | Standard video, YouTube |
| `4/3` | Classic video, maps |
| `1/1` | Square embeds |
| `21/9` | Ultrawide video |
| `9/16` | Vertical video |

## Strapi Integration

```tsx
<Iframe
  src={data.embedUrl}
  title={data.title}
  aspectRatio={data.aspectRatio || '16/9'}
/>
```
