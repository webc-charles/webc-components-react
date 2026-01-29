# Components

## Overview

| Category       | Count | Components |
|----------------|-------|------------|
| **base/**      | 21    | Audio, Avatar, Badge, Breadcrumb, Divider, Iframe, Image, Layout, Link, Logo, Note, Pagination, Progress, RichText, Section, Skeleton, Spinner, Title, Toast, Tooltip, Video |
| **form/**      | 13    | Button, Checkbox, Date, File, Number, Password, Radio, Search, Select, Slider, Switch, Text, Textarea |
| **modules/**   | 8     | Accordion, Banner, Card, Carousel, Grid, Modal, Tab, Table |
| **sections/**  | 6     | Account, Auth, Dashboard, Footer, Header, Page |

## Base Components

### Audio / Video / Iframe

Media embedding with fallback support.

```tsx
<Audio src="/audio.mp3" title="Podcast" transcriptLabel="Transcript" />
<Video src="/video.mp4" poster="/poster.jpg" />
<Iframe src="https://youtube.com/embed/..." title="Video" aspectRatio="16/9" />
```

### Avatar

User avatar with image or initials fallback.

```tsx
<Avatar src="/photo.jpg" alt="John" name="John Doe" />
<Avatar name="John Doe" variant="primary" size="lg" />
```

### Badge

Status indicators.

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="danger">Expired</Badge>
```

### Breadcrumb

Navigation trail.

```tsx
<Breadcrumb aria-label="Navigation">
  <BreadcrumbItem><Link href="/">Home</Link></BreadcrumbItem>
  <BreadcrumbItem current>Products</BreadcrumbItem>
</Breadcrumb>
```

### Divider

Visual separator with optional text.

```tsx
<Divider />
<Divider variant="dashed" spacing={3} />
<Divider spacing={2} hidden />        {/* spacing only, no line */}
<Divider spacing={2}>or</Divider>     {/* with text */}
```

### Image

Responsive image with optional caption.

```tsx
<Image src="/photo.jpg" alt="Description" caption="Photo caption" />
<Image src="/photo.jpg" alt="Photo" fit="cover" radius="medium" />
```

### Layout

Content container with max-width and horizontal padding. Uses `--container-max-width` CSS variable.

```tsx
<Layout>
  <Title level="h1">Page Title</Title>
  <p>Content is centered and constrained to max-width.</p>
</Layout>
```

### Link

Navigation links with multiple appearances.

```tsx
<Link href="/about">About</Link>
<Link href="/signup" appearance="button" variant="primary">Sign up</Link>
```

### Note

Contextual messages.

```tsx
<Note variant="warning">
  <Title level="h3">Warning</Title>
  <p>This action cannot be undone.</p>
</Note>
```

### Pagination

Page navigation with accessibility.

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={setPage}
/>
```

### Progress / Spinner / Skeleton

Loading states.

```tsx
<Spinner variant="primary" size="lg" />
<Progress value={75} showLabel variant="success" />
<Skeleton variant="text" />
```

### RichText

CMS content rendering (WordPress, Strapi, etc.).

```tsx
<RichText html={cmsContent} />
```

### Section

Page section wrapper with optional header.

```tsx
<Section className="pv-5">
  <SectionHeader>
    <SectionTitle level="h2">Why Forgekit?</SectionTitle>
  </SectionHeader>
  <Layout>
    <Grid col={3} gap="md">
      {/* content */}
    </Grid>
  </Layout>
</Section>
```

### Title

Semantic headings.

```tsx
<Title level="h1">Page Title</Title>
<Title level="h2">Section</Title>
```

### Toast

Notifications via context.

```tsx
const { addToast } = useToasts()
addToast({ children: <p>Saved!</p> })
```

### Tooltip

Hover hints.

```tsx
<Tooltip content="Help text" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

## Form Components

### Button

```tsx
<Button appearance="button" variant="primary">Click me</Button>
<Button appearance="outline">Outline</Button>
<Button loading>Submitting...</Button>
```

### InputText / InputPassword / InputNumber / InputTextarea

```tsx
<InputText label="Name" placeholder="Enter name" />
<InputPassword label="Password" />
<InputNumber label="Quantity" min={0} max={100} />
<InputTextarea label="Bio" maxLength={500} showCount />
```

### InputFile

```tsx
<InputFile label="Upload" />
<InputFile label="Drop files here" dropzone multiple />
```

### Checkbox / Switch

```tsx
<Checkbox label="Accept terms" />
<Switch label="Dark mode" variant="success" />
```

### InputRadio

```tsx
<InputRadio
  label="Size"
  name="size"
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]}
/>
```

### InputDate

```tsx
<InputDate label="Birth date" selected={date} onChange={setDate} />
```

### InputSearch

```tsx
<InputSearch
  mode="dropdown"
  results={results}
  onSearch={handleSearch}
  onSelect={handleSelect}
/>
```

### Select

Compound component for single/multiple selection.

```tsx
<SelectRoot options={options} value={value} onChange={setValue}>
  <SelectPlaceholder />
  <SelectActions>
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="fruit">
      {options.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

### Slider

```tsx
<Slider defaultValue={30} aria-label="Volume" />
<Slider range value={[20, 80]} onChange={setRange} valueLabelDisplay="on" />
```

## Module Components

### Accordion

```tsx
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Banner

```tsx
<Banner backgroundImage="/hero.jpg" overlay="dark" minHeight="50rem">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Welcome</BannerTitle>
    <BannerSubtitle>Build something amazing</BannerSubtitle>
  </BannerContent>
</Banner>
```

### Card

```tsx
<Card>
  <CardHeader><Title level="h3">Title</Title></CardHeader>
  <CardBody><p>Content</p></CardBody>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>
```

### Carousel

```tsx
<Carousel options={{ loop: true }}>
  <CarouselContainer>
    <CarouselSlide>Slide 1</CarouselSlide>
  </CarouselContainer>
  <CarouselNav />
</Carousel>
```

### Grid

```tsx
<Grid col={1} colMD={2} colLG={3} gap={4}>
  <Card>...</Card>
</Grid>
```

### Modal

```tsx
const { addModal } = useModals()
addModal({ title: 'Confirm', children: <p>Are you sure?</p> })
```

### Tab

```tsx
<Tab defaultValue="tab1">
  <TabList>
    <TabButton value="tab1">Tab 1</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Content</TabPanel>
  </TabPanels>
</Tab>
```

### Table

```tsx
<Table hoverable>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Section Components

### Header

Responsive header with top bar, main navigation, and mobile menu.

```tsx
<HeaderRoot sticky>
  <HeaderTop>
    <HeaderTopNav>
      <HeaderTopLink asChild><Link href="/help">Help</Link></HeaderTopLink>
    </HeaderTopNav>
  </HeaderTop>

  <HeaderMain>
    <HeaderMainLogo><Link href="/">Logo</Link></HeaderMainLogo>
    <HeaderMainNav>
      <HeaderMainLink asChild current><Link href="/">Home</Link></HeaderMainLink>
    </HeaderMainNav>
  </HeaderMain>

  <HeaderMobile>
    <HeaderMobileBar>
      <HeaderMobileLogo><Link href="/">Logo</Link></HeaderMobileLogo>
      <HeaderMobileToggle />
    </HeaderMobileBar>
    <HeaderMobileMenu>
      <HeaderMobileNav>
        <HeaderMobileLink asChild><Link href="/">Home</Link></HeaderMobileLink>
      </HeaderMobileNav>
    </HeaderMobileMenu>
  </HeaderMobile>
</HeaderRoot>
```

### Footer

```tsx
<FooterRoot>
  <FooterMain>
    <Grid col={1} colMD={4} gap="lg">
      <GridItem>
        <Title level="h3">Company</Title>
        <FooterMainNav>
          <FooterMainLink asChild><Link href="/about">About</Link></FooterMainLink>
        </FooterMainNav>
      </GridItem>
    </Grid>
  </FooterMain>
  <FooterBottom>
    <span>&copy; 2026 Company</span>
    <FooterBottomNav>
      <FooterBottomLink asChild><Link href="/privacy">Privacy</Link></FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

### Auth / Account / Dashboard / Page

Section components for common page layouts. See Storybook for examples.
