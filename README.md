# Theme Changing Template by KhanDevs

A premium Next.js 15 landing page template featuring a unique **circular reveal theme transition** using the View Transitions API. Built with Tailwind CSS, shadcn/ui, and next-themes.

## 🚀 Quick Start

1.  **Clone & Install**
    ```bash
    git clone https://github.com/your-username/my-theme-template.git
    cd my-theme-template
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` to see the transition in action.

## 🛠 Features

-   **Next.js 15 App Router** (React 19)
-   **View Transitions API** for theme switching animations
-   **Shadcn/UI** components
-   **Tailwind CSS 4**
-   **Interactive Widgets** grid
-   Fully Responsive & Type-safe

## 🧩 Project Structure

-   `app/page.tsx`: Main landing page.
-   `app/globals.css`: Contains the **View Transition CSS rules** (Critical).
-   `components/Theme/theme-control.tsx`: The `ModeToggle` button logic.
-   `components/widgets/`: Example widgets (Clock, Weather, Stock).

## 💡 How to Add the Reveal Transition

To reproduce this effect in your own project:

### 1. CSS Rules (`app/globals.css`)
Add these rules to handle the view transition layers:
```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) { z-index: 1; }
::view-transition-new(root) { z-index: 9999; }
::view-transition-image-pair(root) { isolation: isolate; }
```

### 2. Mode Toggle Component
Use `document.startViewTransition` with a clip-path animation:

```tsx
// components/Theme/ModeToggle.tsx
const toggleTheme = () => {
    // ... calculate x, y from button center ...
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    
    document.startViewTransition(() => {
        setTheme(nextTheme);
    }).ready.then(() => {
        document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
            { duration: 500, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
        );
    });
};
```

### 3. Hydration Warning
Ensure your `html` tag has `suppressHydrationWarning`:
```tsx
// app/layout.tsx
<html lang="en" suppressHydrationWarning>
```

## 📦 Widgets
The showcase includes example widgets inspired by Wigggle UI. To add more:
```bash
npx shadcn@latest add card tabs
# Create your widget component in components/widgets/
```

## 🐛 Troubleshooting

-   **Hydration Mismatch**: Ensure `ThemeProvider` is mounted correctly in `layout.tsx` (client component).
-   **Transition Not Working**: Check if your browser supports View Transitions API (Chrome/Edge/Arc supported, Safari/Firefox partial/coming).
-   **"Animation ignored"**: Verify `z-index` rules in `globals.css`.

---
*Created by KhanDevs*
