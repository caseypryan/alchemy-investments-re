# Alchemy Investments RE - Design System

## Overview
This design system is extracted from the Vercel deployment at `https://alchemy-investments-re.vercel.app`. The design follows a clean, professional real estate aesthetic with emphasis on trust, clarity, and conversion.

## Color Palette

### Primary Colors
- **Primary Blue**: `#4A90E2` - Main brand color for primary CTAs and key UI elements
  - Hover: `#3A80D2`
  - Light: `#e3f2fd` (for backgrounds)

- **Success Green**: `#22c55e` - Used for positive actions, phone numbers, and success states
  - Hover: `#16a34a`
  - Alternative: `#12C190` (hero CTA variant)

- **Trustpilot Green**: `#00b67a` - Specifically for Trustpilot rating display

### Text Colors
- **Primary Text**: `#1a1a1a` - Main headings
- **Secondary Text**: `#2b3d4f` - Section headings
- **Body Text**: `#333` - Regular content
- **Muted Text**: `#555` - Descriptions
- **Light Text**: `#888` - Tab labels, inactive states
- **Gray Text**: `#7c7c7c` - Media logos, subtle content

### Background Colors
- **White**: `#ffffff` - Cards, header, main backgrounds
- **Light Gray**: `#f8f9fb` - Section backgrounds (alternating)
- **Footer Dark**: `#1a1a1a` - Footer background

### Border Colors
- **Light**: `#e5e7eb` - Subtle dividers
- **Gray**: `#d1d5db` - Input borders

## Typography

### Font Families
- **Headings**: Nunito (Variable font)
- **Body**: Quicksand (Variable font)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

### Font Sizes
- **H1 (Hero)**: 44px, extrabold (800), line-height: 1.2
- **H2 (Section)**: 42px, bold (700)
- **H3 (Cards/Steps)**: 32px, bold (700)
- **H4 (Feature titles)**: 22px, bold (700)
- **Body Large**: 18px, normal (400)
- **Body Default**: 15px, normal (400)
- **Small**: 13px, semibold (600) - for labels/tabs
- **Extra Small**: 12px - for fine print

### Font Weights
- Normal: 400
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Line Heights
- **Tight**: 1.2 (headings)
- **Normal**: 1.6 (body text)
- **Relaxed**: Varies per component

## Spacing System

### Section Spacing
- **Desktop**: 80px vertical padding (py-20 = 5rem)
- **Mobile**: 48px vertical padding (py-12 = 3rem)

### Container
- **Max Width**: 1280px (max-w-7xl)
- **Padding**: 24px horizontal (px-6)

### Component Spacing
- **Card Padding**: 40px (p-10)
- **Grid Gap**: 32px (gap-8)
- **Large Gaps**: 64px (gap-16) for how-it-works section

## Border Radius

- **None**: 0px (hero CTA button)
- **Small**: 4px (standard buttons)
- **Default**: 8px (cards, inputs)
- **Large**: 12px (not currently used but available)
- **Full**: 9999px (circular badges, stat circles)

## Shadows

- **Small**: `shadow-sm` - Header, cards at rest
- **Default**: `shadow` - Not heavily used
- **Large**: `shadow-lg` - Hero form, step numbers
- **Extra Large**: `shadow-xl` - Hero form (4px border-white creates layered effect)

## Components

### Buttons

#### Primary (Find Agents)
```css
background: #4A90E2
hover: #3A80D2
color: white
font-size: 15px
font-weight: 600 (semibold)
padding: 10px 24px
border-radius: 4px
transition: colors 0.2s
```

#### Success (Contact/Get Started)
```css
background: #22c55e
hover: #16a34a
color: white
font-size: 15px
font-weight: 600
padding: 10px 24px
border-radius: 4px
```

#### Hero CTA (Get Started - Large)
```css
background: #12C190
hover: #10a87a
color: white
font-size: 16px (base)
font-weight: 600
padding: 16px 32px
border-radius: 0
border-left: none (when attached to input)
```

### Cards
```css
background: white
padding: 40px
border-radius: 8px
shadow: shadow-sm
hover: shadow-md (subtle lift)
transition: all 0.2s
```

### Inputs
```css
background: white
border: 2px solid #d1d5db
focus-border: #4A90E2
padding: 16px 20px
font-size: 16px (base)
border-radius: 8px
outline: none on focus
```

### Header
```css
background: white
height: 70px
shadow: shadow-sm
position: sticky
top: 0
z-index: 50
```

### Footer
```css
background: #1a1a1a
color: white
link-color: #9ca3af (gray-400)
link-hover: #22c55e
padding: 48px vertical (py-12)
```

### Navigation Links
```css
color: #333
hover: #22c55e (green accent)
font-size: 15px
font-weight: 400 (normal)
transition: colors 0.2s
```

### Hero Section
```css
min-height: 550px
background-image: url('/hero-drone.jpg')
background-size: cover
background-position: center
gradient-overlay: linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.8), rgba(255,255,255,0.4))
```

### Tabs (Selling/Buying Toggle)
```css
font-size: 13px
font-weight: 600 (semibold)
letter-spacing: 0.05em (tracking-wider)
padding-bottom: 8px
active-color: #333
active-border-bottom: 3px solid #22c55e
inactive-color: #888
inactive-border: none
transition: all 0.2s
```

### Stats/Badges
```css
circle-size: 48px (w-12 h-12)
background: #22c55e (green)
text-color: white
font-weight: 700
font-size: 18px (lg)
border-radius: full
display: flex center
```

### Trust Indicators
```css
trustpilot-star: #00b67a
bbb-badge: A+ in green circle
opacity: 60% for media logos
grayscale: applied to media logos
```

### Dividers
```css
height: 40px (h-10)
width: 1px (w-px)
background: #d1d5db (gray-300)
```

## Layout Patterns

### Alternating Sections
- White background → Light gray (`#f8f9fb`) → White → Light gray
- Consistent 80px vertical padding

### Grid System
- 3-column grid for features: `grid md:grid-cols-3 gap-8`
- 2-column grid for how-it-works: `grid md:grid-cols-2 gap-16`
- Max width containers: `max-w-6xl mx-auto` for content

### Responsive Breakpoints
- Mobile-first approach
- `md:` prefix for tablet/desktop (768px+)
- Hidden on mobile: `hidden md:flex` (nav links)
- Shown on mobile: `md:hidden` (hamburger menu)

## Iconography

- **Icon Size**: 80px (w-20 h-20) for feature icons
- **Icon Background**: Light blue circle (#e3f2fd)
- **Icon Color**: Primary blue (#4A90E2)
- **Stroke Width**: 3-4px for custom SVG icons
- **Style**: Outline/line icons, simple and clean

## Transitions & Animations

### Default Transitions
```css
transition: all 0.2s ease-in-out
transition: colors 0.2s
transition: opacity 0.2s
```

### Hover States
- Buttons: Background color darkens
- Links: Color changes to green (#22c55e)
- Cards: Shadow increases (sm → md)
- Logo: Opacity reduces to 90%

## Elevation Strategy

To elevate this design further, consider:

1. **More Whitespace**: Increase vertical rhythm between sections
2. **Sharper Typography**: Use tighter letter-spacing on headings
3. **Subtle Micro-interactions**: Add gentle scale transforms on button hovers
4. **Enhanced Shadows**: Use more nuanced shadow layers for depth
5. **Gradient Accents**: Introduce subtle gradients in CTAs
6. **Better Visual Hierarchy**: Stronger contrast between section backgrounds

## Tailwind Config Snippet

Add these to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          hover: '#3A80D2',
          light: '#e3f2fd',
        },
        success: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          alt: '#12C190',
        },
        trustpilot: '#00b67a',
        text: {
          primary: '#1a1a1a',
          secondary: '#2b3d4f',
          body: '#333',
          muted: '#555',
          light: '#888',
        },
        bg: {
          light: '#f8f9fb',
          footer: '#1a1a1a',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'hero': '44px',
        'section': '42px',
        'step': '32px',
        'feature': '22px',
      },
      spacing: {
        'header': '70px',
        'section': '80px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
}
```

## Google Fonts Import

Add to your `layout.tsx` or global CSS:

```javascript
import { Nunito, Quicksand } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})
```

## Key Design Characteristics

1. **Clean & Professional**: White space, clear hierarchy, simple layouts
2. **Trust-Focused**: BBB badge, Trustpilot ratings, years in business, properties sold
3. **Conversion-Optimized**: Multiple CTAs, clear value props, low-friction forms
4. **Mobile-First**: Responsive design with hamburger menu on mobile
5. **Brand Consistency**: Consistent use of green for success/phone, blue for primary actions
6. **Visual Rhythm**: Alternating section backgrounds create natural flow
7. **Social Proof**: Media logos, testimonials, stats prominently displayed
