# Grid

Responsive grid layout with flexible columns and gap options.

## Import

```tsx
import { Grid, GridItem } from '@ui'
```

## Usage

### Basic

```tsx
<Grid col={3} gap="md">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Grid>
```

### Responsive Columns

```tsx
<Grid col={1} colSM={2} colMD={3} colLG={4} gap="md">
  {items.map(item => (
    <Card key={item.id}>{item.title}</Card>
  ))}
</Grid>
```

### Responsive Gap

```tsx
<Grid col={3} gap="sm" gapMD="md" gapLG="lg">
  {/* content */}
</Grid>
```

### Masonry Layout

```tsx
<Grid col={3} gap="md" masonry>
  {images.map(img => (
    <Image key={img.id} src={img.url} alt={img.alt} />
  ))}
</Grid>
```

### With GridItem

```tsx
<Grid col={4} gap="md">
  <GridItem col={2}>
    <Card>Spans 2 columns</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
</Grid>
```

## Props

### Grid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `col` | `number` | - | Number of columns |
| `colXS` | `number` | - | Columns at XS breakpoint |
| `colSM` | `number` | - | Columns at SM breakpoint (768px) |
| `colMD` | `number` | - | Columns at MD breakpoint (1024px) |
| `colLG` | `number` | - | Columns at LG breakpoint (1200px) |
| `colXL` | `number` | - | Columns at XL breakpoint (1400px) |
| `gap` | `GapSize` | - | Gap between items |
| `gapXS-gapXL` | `GapSize` | - | Responsive gap |
| `masonry` | `boolean` | `false` | Enable masonry layout |
| `className` | `string` | - | Additional CSS class |

### GridItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `col` | `number` | - | Column span |
| `colXS-colXL` | `number` | - | Responsive column span |
| `row` | `number` | - | Row span |
| `rowXS-rowXL` | `number` | - | Responsive row span |
| `className` | `string` | - | Additional CSS class |

### GapSize

```tsx
type GapSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

| Gap | Value |
|-----|-------|
| `none` | 0 |
| `xs` | 0.5rem |
| `sm` | 1rem |
| `md` | 1.5rem |
| `lg` | 2rem |
| `xl` | 3rem |

## Common Patterns

### Product Grid

```tsx
<Grid col={1} colSM={2} colMD={3} colLG={4} gap="md">
  {products.map(product => (
    <Card key={product.id}>
      <Image src={product.image} alt={product.name} />
      <CardBody>
        <Title level="h3">{product.name}</Title>
        <p>${product.price}</p>
      </CardBody>
    </Card>
  ))}
</Grid>
```

### Feature Cards

```tsx
<Section className="pv-5">
  <Layout>
    <Grid col={1} colMD={3} gap="lg">
      <Card className="text-center p-4">
        <Icon name="rocket" size="xl" />
        <Title level="h3">Fast</Title>
        <p>Lightning quick performance</p>
      </Card>
      {/* more cards */}
    </Grid>
  </Layout>
</Section>
```

### Mixed Sizes

```tsx
<Grid col={4} gap="md">
  <GridItem col={2} row={2}>
    <Card className="h-full">Featured</Card>
  </GridItem>
  <GridItem><Card>Small 1</Card></GridItem>
  <GridItem><Card>Small 2</Card></GridItem>
  <GridItem><Card>Small 3</Card></GridItem>
  <GridItem><Card>Small 4</Card></GridItem>
</Grid>
```

## Strapi Integration

```tsx
<Grid
  col={1}
  colSM={2}
  colMD={data.columns || 3}
  gap={data.gap || 'md'}
>
  {data.cards.map(card => (
    <Card key={card.id}>
      {/* card content */}
    </Card>
  ))}
</Grid>
```
