# Hero & Layout Strategy

Planning document for flexible hero sections and header transparency.

---

## Current System

### Body Classes (set by Next.js layout)
```
menu.topNav  → body.with-top-nav
menu.mainNav → body.with-main-nav
```

### CSS Variables
```scss
--height-mobile-menu  // 6rem
--height-main-menu    // 6rem
--height-top-menu     // 3rem
```

### Body Padding (main.scss)
```scss
body {
  padding-top: var(--height-mobile-menu);  // mobile

  @include mq-md {
    &.with-top-nav { padding-top: var(--height-top-menu); }
    &.with-main-nav { padding-top: var(--height-main-menu); }
    &.with-main-nav.with-top-nav {
      padding-top: calc(var(--height-top-menu) + var(--height-main-menu));
    }
  }
}
```

### Limitations
- No per-page header control
- No transparent header option
- Hero height must be calculated manually
- Admin cannot easily create full-screen heroes

---

## Goals

1. **Simple utility classes** for common hero patterns
2. **Transparent header** support for immersive heroes
3. **Per-page control** from Strapi admin
4. **Per-section control** via class field
5. **Custom overrides** via minHeight field
6. **Mobile-first** responsive behavior

---

## Proposed Solution

### Phase 1: CSS Foundation

#### 1.1 Add computed header height variable

```scss
// main.scss
body {
  --header-height: var(--height-mobile-menu);

  @include mq-md {
    --header-height: 0;
    &.with-main-nav { --header-height: var(--height-main-menu); }
    &.with-top-nav { --header-height: var(--height-top-menu); }
    &.with-main-nav.with-top-nav {
      --header-height: calc(var(--height-main-menu) + var(--height-top-menu));
    }
  }
}
```

#### 1.2 Create layout.scss with hero utilities

```scss
// layout.scss

// Full viewport minus header - content below nav
.hero-screen {
  width: 100%;
  min-height: calc(100dvh - var(--header-height));
}

// True full screen - hero behind transparent nav
.hero-cover {
  width: 100%;
  min-height: 100dvh;
  margin-top: calc(-1 * var(--header-height));
}

// Variants with explicit heights
.hero-50 { min-height: 50vh; }
.hero-75 { min-height: 75vh; }
.hero-100 { min-height: 100vh; }
```

#### 1.3 Header transparency support

```scss
// HeaderMain.module.scss
body.header-transparent & {
  background-color: transparent;
}

// HeaderTop.module.scss
body.header-transparent & {
  background-color: transparent;
  border-bottom-color: transparent;
}
```

### Phase 2: Strapi Integration

#### 2.1 New "Header" Single Type

Separate from Menu (which handles navigation links). Header handles appearance/behavior.

**Content Type:** `api::header.header` (Single Type)

| Field | Type | Options | Default | Description |
|-------|------|---------|---------|-------------|
| `sticky` | Boolean | - | `true` | Fixed position header |
| `transparent` | Boolean | - | `false` | Default transparent mode |
| `transparentOnHero` | Boolean | - | `true` | Auto-transparent when page has hero-cover |
| `theme` | Enum | `auto`, `light`, `dark` | `auto` | Text color (auto = detect from bg) |
| `showOnScroll` | Enum | `always`, `up`, `down` | `always` | Hide/show on scroll direction |
| `solidOnScroll` | Boolean | - | `true` | Become solid background on scroll |
| `scrollThreshold` | Number | - | `50` | Pixels before scroll effects trigger |
| `backgroundColor` | Color | - | `#FFFFFF` | Background color when solid |
| `backgroundColorScrolled` | Color | - | `#FFFFFF` | Background color after scroll |
| `blur` | Boolean | - | `false` | Backdrop blur effect |
| `shadow` | Boolean | - | `false` | Box shadow |
| `borderBottom` | Boolean | - | `true` | Bottom border |

**Component:** `settings.header-settings` (reusable)

```json
{
  "collectionName": "components_settings_header",
  "info": {
    "displayName": "Header Settings",
    "icon": "layout"
  },
  "attributes": {
    "sticky": { "type": "boolean", "default": true },
    "transparent": { "type": "boolean", "default": false },
    "theme": {
      "type": "enumeration",
      "enum": ["auto", "light", "dark"],
      "default": "auto"
    },
    "solidOnScroll": { "type": "boolean", "default": true },
    "scrollThreshold": { "type": "integer", "default": 50 },
    "blur": { "type": "boolean", "default": false },
    "shadow": { "type": "boolean", "default": false }
  }
}
```

#### 2.2 Page-level overrides

Add to Page content-type - can override global Header settings:

| Field | Type | Options | Description |
|-------|------|---------|-------------|
| `headerOverride` | Component | `settings.header-settings` | Override header settings for this page |

This allows:
- Global defaults in Header single type
- Per-page overrides when needed (e.g., landing pages)

#### 2.3 Data Flow

```
┌─────────────────┐     ┌─────────────────┐
│  Header (global)│     │   Page (local)  │
│  ─────────────  │     │  ─────────────  │
│  sticky: true   │     │  headerOverride │
│  transparent: no│ ──► │  transparent: yes│ ──► Merged Settings
│  theme: auto    │     │  theme: light   │
└─────────────────┘     └─────────────────┘
```

```tsx
// layout.tsx
const headerSettings = {
  ...header,  // global defaults
  ...page?.headerOverride,  // page overrides
}
```

#### 2.4 Update Next.js layout

```tsx
// layout.tsx
const [menu, header, brand] = await Promise.all([
  getMenu(locale),
  getHeader(),  // new
  getBrand(),
])

// Merge with page overrides
const headerConfig = {
  ...header,
  ...page?.headerOverride,
}

<body
  className={clsx({
    'with-top-nav': menu?.topNav,
    'with-main-nav': menu?.mainNav,
    'header-sticky': headerConfig.sticky,
    'header-transparent': headerConfig.transparent,
    'header-solid-on-scroll': headerConfig.solidOnScroll,
    'header-blur': headerConfig.blur,
    'header-shadow': headerConfig.shadow,
  })}
  data-header-theme={headerConfig.theme}
  data-scroll-threshold={headerConfig.scrollThreshold}
>
```

#### 2.5 Banner component class field

Admin uses class field to add:
- `hero-screen` - full height minus header
- `hero-cover` - full height behind header
- `hero-50`, `hero-75` - partial heights
- Custom classes as needed

### Phase 3: Advanced Features

#### 3.1 Scroll-triggered header background

```scss
// Header becomes solid on scroll
body.header-transparent.scrolled & {
  background-color: var(--color-white);
  transition: background-color var(--transition-default);
}
```

```tsx
// useScrollHeader hook
useEffect(() => {
  const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 50)
  }
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

#### 3.2 Header theme (light/dark text)

```scss
// HeaderMain.module.scss
body.header-theme-light & {
  color: var(--color-white);

  a { color: var(--color-white); }
}

body.header-theme-dark & {
  color: var(--color-black);
}
```

#### 3.3 Modern CSS :has() (future)

```scss
// Auto-detect header presence without body classes
body:has(.header-main) {
  --header-height: var(--height-main-menu);
}

body:has(.header-top):has(.header-main) {
  --header-height: calc(var(--height-top-menu) + var(--height-main-menu));
}
```

---

## Admin Usage Examples

### Standard page with hero
```
Banner class: "hero-screen"
Page headerTransparent: false
```
→ Hero fills viewport below header

### Immersive landing page
```
Banner class: "hero-cover"
Page headerTransparent: true
Page headerTheme: "light"
```
→ Hero fills entire viewport, header overlays with white text

### Partial hero
```
Banner class: "hero-75"
Banner minHeight: (empty, uses class)
```
→ Hero is 75% of viewport

### Custom height
```
Banner class: (empty)
Banner minHeight: "600px"
```
→ Hero is exactly 600px

---

## File Changes Summary

### webc-components-react

| File | Action |
|------|--------|
| `src/styles/main.scss` | Add `--header-height` variable, header modifier classes |
| `src/styles/base/layout.scss` | Create with hero utilities |
| `src/styles/index.scss` | Import layout.scss |
| `HeaderMain.module.scss` | Add transparent, blur, shadow modes |
| `HeaderTop.module.scss` | Add transparent mode |
| `HeaderRoot.tsx` | Add scroll detection hook |
| `docs/styling.md` | Document new utilities |

### webc-strapi-next

| File | Action |
|------|--------|
| `backend/src/api/header/` | **New** - Header single type API |
| `backend/src/components/settings/header-settings.json` | **New** - Reusable header settings component |
| `backend/src/api/page/content-types/page/schema.json` | Add `headerOverride` component field |
| `packages/types/index.ts` | Add `Header`, `HeaderSettings` interfaces |
| `frontend/features/header/services/api.ts` | **New** - `getHeader()` function |
| `frontend/features/header/index.ts` | Export new service |
| `frontend/app/[locale]/(public)/layout.tsx` | Fetch header, merge with page overrides, add body classes |
| `frontend/hooks/useScrollHeader.ts` | **New** - Scroll detection hook |

---

## Strapi Schema Examples

### Header Single Type
`backend/src/api/header/content-types/header/schema.json`

```json
{
  "kind": "singleType",
  "collectionName": "headers",
  "info": {
    "singularName": "header",
    "pluralName": "headers",
    "displayName": "Header",
    "description": "Global header appearance and behavior settings"
  },
  "options": { "draftAndPublish": false },
  "attributes": {
    "sticky": { "type": "boolean", "default": true },
    "transparent": { "type": "boolean", "default": false },
    "theme": {
      "type": "enumeration",
      "enum": ["auto", "light", "dark"],
      "default": "auto"
    },
    "solidOnScroll": { "type": "boolean", "default": true },
    "scrollThreshold": { "type": "integer", "default": 50, "min": 0, "max": 500 },
    "backgroundColor": {
      "type": "customField",
      "customField": "plugin::color-picker.color"
    },
    "blur": { "type": "boolean", "default": false },
    "shadow": { "type": "boolean", "default": false },
    "borderBottom": { "type": "boolean", "default": true }
  }
}
```

### Header Settings Component (reusable)
`backend/src/components/settings/header-settings.json`

```json
{
  "collectionName": "components_settings_header_settings",
  "info": {
    "displayName": "Header Settings",
    "icon": "cog",
    "description": "Override header settings for this page"
  },
  "attributes": {
    "transparent": { "type": "boolean" },
    "theme": {
      "type": "enumeration",
      "enum": ["auto", "light", "dark"]
    },
    "solidOnScroll": { "type": "boolean" }
  }
}
```

### Page Schema Addition
```json
{
  "headerOverride": {
    "type": "component",
    "component": "settings.header-settings",
    "pluginOptions": {
      "i18n": { "localized": false }
    }
  }
}
```

---

## TypeScript Interfaces

```ts
// packages/types/index.ts

export interface HeaderSettings {
  id: number
  transparent?: boolean
  theme?: 'auto' | 'light' | 'dark'
  solidOnScroll?: boolean
}

export interface Header {
  id: number
  documentId: string
  sticky?: boolean
  transparent?: boolean
  theme?: 'auto' | 'light' | 'dark'
  solidOnScroll?: boolean
  scrollThreshold?: number
  backgroundColor?: string
  blur?: boolean
  shadow?: boolean
  borderBottom?: boolean
}

export interface Page {
  // ... existing fields
  headerOverride?: HeaderSettings
}
```

---

## Open Questions

1. Should `hero-cover` automatically imply `header-transparent`?
2. Do we need responsive hero classes? (`hero-screen hero-md-75`)
3. Should we support different header configs per locale?
4. How to handle footer for true full-screen layouts?
5. Do we need a `hero-center` utility for vertical centering?
6. Should Header settings be duplicated for mobile vs desktop?
7. Do we need logo variant switching (light/dark logo based on header theme)?

---

## Priority

| Phase | Effort | Value |
|-------|--------|-------|
| Phase 1 (CSS) | Low | High |
| Phase 2 (Strapi) | Medium | High |
| Phase 3 (Advanced) | Medium | Medium |

Recommend starting with Phase 1 to unblock basic use cases.
