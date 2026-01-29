# Video

HTML5 video player with multiple sources, captions, poster image, and optional caption.

## Import

```tsx
import { Video } from '@ui'
```

## Usage

### Basic

```tsx
<Video src="/videos/intro.mp4" />
```

### With Poster Image

```tsx
<Video
  src="/videos/demo.mp4"
  poster="/images/demo-poster.jpg"
/>
```

### Multiple Sources (Browser Compatibility)

```tsx
<Video
  sources={[
    { src: '/videos/clip.webm', type: 'video/webm' },
    { src: '/videos/clip.mp4', type: 'video/mp4' },
  ]}
  poster="/images/poster.jpg"
/>
```

### With Captions/Subtitles

```tsx
<Video
  src="/videos/interview.mp4"
  tracks={[
    {
      src: '/captions/en.vtt',
      kind: 'captions',
      srclang: 'en',
      label: 'English',
      default: true,
    },
    {
      src: '/captions/fr.vtt',
      kind: 'subtitles',
      srclang: 'fr',
      label: 'French',
    },
  ]}
/>
```

### Aspect Ratio

```tsx
<Video src="/videos/clip.mp4" aspectRatio="16/9" />
<Video src="/videos/clip.mp4" aspectRatio="4/3" />
<Video src="/videos/clip.mp4" aspectRatio="1/1" />
```

### Border Radius

```tsx
<Video src="/videos/clip.mp4" radius="none" />
<Video src="/videos/clip.mp4" radius="sm" />
<Video src="/videos/clip.mp4" radius="md" />
<Video src="/videos/clip.mp4" radius="lg" />
```

### With Caption

```tsx
<Video
  src="/videos/tutorial.mp4"
  caption="Step-by-step tutorial video"
/>
```

### Custom Fallback

```tsx
<Video
  src="/videos/clip.mp4"
  fallbackText="Video not supported."
  fallbackLinkText="Download the video"
/>
```

### Without Controls

```tsx
<Video
  src="/videos/background.mp4"
  controls={false}
  autoPlay
  loop
  muted
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL |
| `sources` | `VideoSource[]` | - | Multiple sources for compatibility |
| `tracks` | `VideoTrack[]` | - | Caption/subtitle tracks |
| `poster` | `string` | - | Poster image URL |
| `aspectRatio` | `string` | - | CSS aspect-ratio value |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg'` | - | Border radius |
| `caption` | `ReactNode` | - | Caption below video |
| `controls` | `boolean` | `true` | Show video controls |
| `fallback` | `ReactNode` | - | Custom fallback content |
| `fallbackText` | `string` | `"Your browser doesn't support HTML video."` | Fallback text |
| `fallbackLinkText` | `string` | `'link to the video'` | Fallback link text |
| `className` | `string` | - | Additional CSS class |

### VideoSource Type

```tsx
type VideoSource = {
  src: string   // URL to video file
  type: string  // MIME type (e.g., 'video/mp4', 'video/webm')
}
```

### VideoTrack Type

```tsx
type VideoTrack = {
  src: string      // URL to VTT file
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
  srclang: string  // Language code (e.g., 'en', 'fr')
  label: string    // Display label
  default?: boolean
}
```

## Accessibility

- Uses `<figure>` with `role="group"` when caption present
- `aria-labelledby` links to caption
- Supports captions via `<track>` elements
- Fallback content for unsupported browsers

## Strapi Integration

```tsx
<Video
  src={getMediaUrl(data.video.url)}
  poster={data.poster && getMediaUrl(data.poster.url)}
  caption={data.caption}
  tracks={data.captions?.map(c => ({
    src: getMediaUrl(c.file.url),
    kind: 'captions',
    srclang: c.language,
    label: c.label,
  }))}
/>
```
