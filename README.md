# Theme Changing Template — KhanDevs

A **production-ready Next.js theme template** demonstrating a correct and modern
implementation of light and dark mode switching using the **View Transitions API**.

This repository is focused on **theming architecture**, not UI gimmicks.
It serves as a reference implementation for smooth, predictable, and hydration-safe
theme transitions in real-world applications.

Built with **Next.js App Router**, **Tailwind CSS 4**, **shadcn/ui**, and **next-themes**.

---

## Quick Start

### 1. Clone and install dependencies

```bash
git clone https://github.com/Rjk-Jami/theme_changing_template.git
cd theme_changing_template
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open:  
http://localhost:3000

---

## Purpose

Most theme implementations suffer from:

- Flickering during hydration
- Abrupt or jarring theme changes
- Server/client theme mismatch
- Hard-to-maintain hacks

This template demonstrates:

- **Correct class-based theming**
- **Single-button theme toggle**
- **Circular reveal transition** originating from the toggle button
- **Hydration-safe behavior**
- **Token-based styling** using CSS variables

---

## Features

- Next.js App Router (Next.js 15 / React 19 ready)
- View Transitions API for theme switching
- Circular `clip-path` reveal animation
- Tailwind CSS 4 with design tokens
- shadcn/ui component foundation
- Fully responsive
- Type-safe and production-oriented

---

## Project Structure

```txt
app/
├─ layout.tsx          # ThemeProvider + hydration handling
├─ page.tsx            # One-page landing demo
└─ globals.css         # Theme tokens + View Transition rules (critical)

components/
├─ Theme/
│  └─ theme-control.tsx   # ModeToggle with circular reveal animation
├─ Layout/
│  ├─ Header.tsx
│  └─ Footer.tsx
└─ widgets/               # Optional demo widgets
```

---

## How the Theme Transition Works

The transition uses the **View Transitions API** to animate between
the old and new DOM snapshots.

### 1. Global CSS (Required)

Add the following to `app/globals.css`:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-image-pair(root) {
  isolation: isolate;
}
```

---

### 2. Theme Toggle Logic

```tsx
const toggleTheme = () => {
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  document.startViewTransition(() => {
    setTheme(nextTheme)
  }).ready.then(() => {
    document.documentElement.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(.2,.8,.2,1)",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  })
}
```

---

### 3. Hydration Safety

```tsx
<html lang="en" suppressHydrationWarning>
```

---

## Widgets (Optional)

Widgets are included only to demonstrate theme consistency.

```bash
npx shadcn@latest add card
```

---

## Browser Support

- Chrome / Edge / Arc — Supported
- Safari — Partial
- Firefox — Not supported

---

---

Created by **KhanDevs**
