# Carousel

Image/content carousel with navigation controls and dots indicator. Built on embla-carousel-react.

## Import

```tsx
import {
  Carousel,
  CarouselContainer,
  CarouselSlide,
  CarouselControls,
  CarouselPrev,
  CarouselNext,
  CarouselDots
} from '@ui'
```

## Usage

### Basic

```tsx
<Carousel>
  <CarouselContainer>
    <CarouselSlide>
      <Image src="/slide1.jpg" alt="Slide 1" />
    </CarouselSlide>
    <CarouselSlide>
      <Image src="/slide2.jpg" alt="Slide 2" />
    </CarouselSlide>
    <CarouselSlide>
      <Image src="/slide3.jpg" alt="Slide 3" />
    </CarouselSlide>
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
  <CarouselDots />
</Carousel>
```

### With Autoplay

```tsx
<Carousel autoplay autoplayInterval={5000}>
  <CarouselContainer>
    {slides.map(slide => (
      <CarouselSlide key={slide.id}>
        <Image src={slide.image} alt={slide.alt} />
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselDots />
</Carousel>
```

### Loop Mode

```tsx
<Carousel loop>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Multiple Visible Slides

```tsx
<Carousel slidesToShow={3} gap={16}>
  <CarouselContainer>
    {products.map(product => (
      <CarouselSlide key={product.id}>
        <Card>{/* product content */}</Card>
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Custom Navigation Icons

```tsx
<Carousel>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev>
      <Icon name="arrow-left" />
    </CarouselPrev>
    <CarouselNext>
      <Icon name="arrow-right" />
    </CarouselNext>
  </CarouselControls>
</Carousel>
```

### Translated Labels

```tsx
<Carousel
  prevLabel={t('carousel.prev')}
  nextLabel={t('carousel.next')}
  slideLabel={(index, total) => t('carousel.slide', { index, total })}
>
  {/* content */}
</Carousel>
```

## Components

### Carousel

Root container that provides context to child components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loop` | `boolean` | `false` | Enable infinite loop |
| `autoplay` | `boolean` | `false` | Enable auto-advance |
| `autoplayInterval` | `number` | `4000` | Autoplay delay in ms |
| `slidesToShow` | `number` | `1` | Visible slides count |
| `gap` | `number` | `0` | Gap between slides in px |
| `startIndex` | `number` | `0` | Initial slide index |
| `prevLabel` | `string` | `'Previous'` | Prev button aria-label |
| `nextLabel` | `string` | `'Next'` | Next button aria-label |
| `slideLabel` | `(index, total) => string` | - | Slide aria-label function |
| `onSlideChange` | `(index: number) => void` | - | Slide change callback |
| `className` | `string` | - | Additional CSS class |

### CarouselContainer

Wrapper for slides. Required.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### CarouselSlide

Individual slide wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Slide content |
| `className` | `string` | - | Additional CSS class |

### CarouselControls

Container for prev/next buttons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### CarouselPrev / CarouselNext

Navigation buttons. Auto-disabled at boundaries (unless `loop`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Arrow icon | Custom content |
| `className` | `string` | - | Additional CSS class |

### CarouselDots

Pagination dots indicator.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

## Accessibility

- `role="region"` with `aria-roledescription="carousel"`
- Slides have `role="group"` with `aria-roledescription="slide"`
- Navigation buttons have proper `aria-label`
- Dots indicate current slide with `aria-current`
- Autoplay pauses on hover/focus

## Common Patterns

### Hero Carousel

```tsx
<Carousel autoplay loop>
  <CarouselContainer>
    {heroes.map(hero => (
      <CarouselSlide key={hero.id}>
        <Banner
          image={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
          cta={hero.cta}
        />
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselDots />
</Carousel>
```

### Product Carousel

```tsx
<Carousel slidesToShow={4} gap={24}>
  <CarouselContainer>
    {products.map(product => (
      <CarouselSlide key={product.id}>
        <Card>
          <Image src={product.image} alt={product.name} />
          <CardBody>
            <Title level="h3">{product.name}</Title>
            <p>${product.price}</p>
          </CardBody>
        </Card>
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

## Strapi Integration

```tsx
<Carousel
  autoplay={data.autoplay}
  loop={data.loop}
  autoplayInterval={data.interval || 4000}
>
  <CarouselContainer>
    {data.slides.map(slide => (
      <CarouselSlide key={slide.id}>
        <Image
          src={getMediaUrl(slide.image.url)}
          alt={slide.image.alternativeText}
        />
        {slide.caption && (
          <div className="carousel-caption">
            <Title level="h2">{slide.title}</Title>
            <p>{slide.caption}</p>
          </div>
        )}
      </CarouselSlide>
    ))}
  </CarouselContainer>
  {data.showDots && <CarouselDots />}
  {data.showControls && (
    <CarouselControls>
      <CarouselPrev />
      <CarouselNext />
    </CarouselControls>
  )}
</Carousel>
```
