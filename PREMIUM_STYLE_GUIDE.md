# CareerCraftly Premium Style Guide 🎨

## 🎨 Color Palette

### Primary Colors
```css
Black:     #0A0A0A    /* Primary text, headings */
White:     #FFFFFF    /* Backgrounds, cards */
Gray:      #A1A1A1    /* Secondary text */
```

### Accent Colors
```css
Primary Blue:   #4B68FF    /* Links, underlines, primary actions */
Purple:         #6A4BFF    /* Secondary accents */
Cyan:           #00E0FF    /* Glow effects, micro-interactions */
```

### Usage Guidelines
- **Headings**: Always use #0A0A0A for maximum contrast
- **Body Text**: Use #A1A1A1 for softer, premium feel
- **Interactive Elements**: #4B68FF for hover states
- **Glow Effects**: #00E0FF at 15% opacity for buttons
- **Backgrounds**: Pure white (#FFFFFF) or light gray (#F5F5F7)

---

## 📝 Typography

### Font Family
```css
font-family: 'Inter', sans-serif;
```

### Font Weights
- **Light**: 300 (rarely used)
- **Regular**: 400 (body text)
- **Medium**: 500 (subheadings)
- **Semi-Bold**: 600 (navigation, buttons)
- **Bold**: 700 (headings)

### Font Sizes
```css
/* Navigation */
nav-links: 15px;

/* Headings */
h1: 96px (desktop), 72px (mobile);
h2: 60px (desktop), 48px (mobile);
h3: 32px;
h4: 24px;

/* Body */
body: 16px;
small: 14px;
badge: 13px;
```

### Letter Spacing
```css
/* Headings */
h1-h6: -0.02em (tighter for large text);

/* Navigation & Buttons */
nav-links: 0.5px;
buttons: 0.5px;

/* Body */
body: normal;
```

---

## 🎭 Glassmorphism

### Navbar Glass Effect
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(18px);
-webkit-backdrop-filter: blur(18px);
border-bottom: 1px solid rgba(255, 255, 255, 0.3);
```

### Card Glass Effect
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.5);
```

### Usage Guidelines
- Use 40% opacity for overlays on video
- Use 70% opacity for cards on solid backgrounds
- Always include webkit prefix for Safari
- Pair with subtle borders for definition

---

## 💫 Shadows

### Premium Shadows
```css
/* Logo Shadow */
shadow-premium: 0 0 20px rgba(0, 0, 0, 0.06);

/* Card Shadow */
shadow-soft: 0 10px 30px -10px rgba(0, 0, 0, 0.05);

/* Hover Shadow */
shadow-hover: 0 20px 40px -10px rgba(0, 0, 0, 0.1);

/* Glow Effects */
glow-cyan: 0 0 25px rgba(0, 224, 255, 0.15);
glow-blue: 0 0 25px rgba(75, 104, 255, 0.2);
```

### Usage Guidelines
- Use premium shadow for logos and important elements
- Use soft shadow for cards at rest
- Use hover shadow for interactive cards
- Use glow effects sparingly for CTAs

---

## 🔘 Buttons

### Primary Button (Premium)
```css
background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
color: white;
padding: 14px 26px;
border-radius: 50px;
font-size: 15px;
font-weight: 600;
letter-spacing: 0.5px;

/* Hover */
box-shadow: 0 0 25px rgba(0, 224, 255, 0.15);
transform: translateY(-1px);
```

### Secondary Button
```css
background: white;
color: black;
padding: 14px 26px;
border-radius: 50px;
border: 2px solid #E5E5E5;
font-size: 15px;
font-weight: 600;

/* Hover */
border-color: black;
```

### Usage Guidelines
- Always use 50px border-radius for pill shape
- Maintain 14px vertical, 26px horizontal padding
- Use gradient for primary actions
- Use outline for secondary actions

---

## 🔗 Navigation Links

### Default State
```css
font-size: 15px;
font-weight: 600;
letter-spacing: 0.5px;
color: #A1A1A1;
position: relative;
padding-bottom: 4px;
```

### Hover State
```css
color: #0A0A0A;

/* Animated Underline */
::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 2px;
  background: #4B68FF;
  transform: translateX(-50%);
}
```

### Active State
```css
color: #0A0A0A;
/* Underline stays visible */
```

---

## 📐 Spacing System

### Container Spacing
```css
max-width: 1280px;
padding: 0 2rem;
margin: 0 auto;
```

### Section Spacing
```css
padding-top: 6rem;
padding-bottom: 6rem;
```

### Component Spacing
```css
/* Navbar */
padding: 24px 32px;

/* Cards */
padding: 32px;
gap: 32px;

/* Buttons */
padding: 14px 26px;

/* Logo */
space-x-4 (16px);

/* Navigation */
space-x-12 (48px);
```

### Usage Guidelines
- Use 6rem (96px) for section padding
- Use 2rem (32px) for card padding
- Use 48px between navigation items
- Use 16px around logo elements

---

## 🎬 Animations

### Timing Functions
```css
/* Standard */
transition: all 0.3s ease;

/* Premium */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Slow */
transition: all 0.5s ease;
```

### Common Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Underline Grow
```css
/* From center */
width: 0;
left: 50%;
transform: translateX(-50%);

/* On hover */
width: 100%;
```

#### Button Lift
```css
/* On hover */
transform: translateY(-1px);
box-shadow: 0 0 25px rgba(0, 224, 255, 0.15);
```

---

## 🎥 Video Background

### Video Container
```css
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: center;
```

### Video Element
```css
width: 100%;
height: 100%;
object-fit: contain;
filter: brightness(1.15) contrast(1.1);
opacity: 0.85;
```

### Overlay
```css
/* Minimal 5% gradient */
background: linear-gradient(
  to bottom,
  rgba(255, 255, 255, 0.05),
  transparent,
  rgba(255, 255, 255, 0.05)
);
```

---

## 🏷️ Badges

### Premium Badge
```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(12px);
border: 1px solid #E5E5E5;
border-radius: 50px;
padding: 10px 24px;
font-size: 13px;
font-weight: 600;
letter-spacing: 0.5px;
```

---

## 🎯 Logo Guidelines

### Navbar Logo
```css
/* Container */
width: 56px;
height: 56px;
background: white;
border-radius: 50%;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);

/* Image */
width: 40px;
height: 40px;
object-fit: contain;
```

### Hero Logo
```css
/* Container */
width: 128px;
height: 128px;
background: white;
border-radius: 50%;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);

/* Image */
width: 80px;
height: 80px;
object-fit: contain;
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* sm */
}

/* Tablet */
@media (max-width: 768px) {
  /* md */
}

/* Desktop */
@media (max-width: 1024px) {
  /* lg */
}

/* Large Desktop */
@media (max-width: 1280px) {
  /* xl */
}
```

---

## ✨ Premium Effects Checklist

### Must-Have Effects
- ✅ Glassmorphism on navbar
- ✅ Animated underlines on links
- ✅ Gradient buttons with glow
- ✅ Premium shadows on logos
- ✅ Smooth cubic-bezier transitions
- ✅ Video brightness/contrast enhancement
- ✅ Hover lift on buttons
- ✅ Center-out underline animation

### Optional Enhancements
- ⭐ Parallax scrolling
- ⭐ Scroll-triggered animations
- ⭐ Cursor trail effects
- ⭐ Particle backgrounds
- ⭐ 3D transforms

---

## 🎨 Design Principles

### 1. Luxury
- Generous spacing
- Premium materials (glass, shadows)
- High-quality typography
- Subtle animations

### 2. Minimal
- Clean layouts
- Focused content
- Essential elements only
- Reduced visual noise

### 3. Futuristic
- Glassmorphism
- Neon accents
- Smooth animations
- Modern aesthetics

### 4. Professional
- Consistent branding
- Polished interactions
- Attention to detail
- Enterprise-ready

---

## 🚀 Implementation Checklist

### For New Components
- [ ] Use CareerCraftly color palette
- [ ] Apply Inter font family
- [ ] Use 600+ font weight for emphasis
- [ ] Add 0.5px letter spacing to buttons/links
- [ ] Implement hover states with transitions
- [ ] Use premium shadows appropriately
- [ ] Maintain consistent spacing (48px, 32px, 16px)
- [ ] Add glassmorphism where appropriate
- [ ] Test on mobile and desktop
- [ ] Ensure accessibility (contrast, focus states)

---

## 📚 Resources

### Fonts
- Google Fonts: Inter (300, 400, 500, 600, 700)

### Icons
- Lucide React (consistent, modern icons)

### Animations
- Framer Motion (smooth, professional animations)

### Colors
- Use exact hex values from palette
- Test contrast ratios (WCAG AA minimum)

---

**Version**: 1.0
**Last Updated**: November 2024
**Status**: Production Ready ✅
