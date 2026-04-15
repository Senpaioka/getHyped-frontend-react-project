# Get Hyped — Marketing Agency Landing Page

A responsive single-page marketing website for **Get Hyped**. Built with React 19, Vite, Tailwind CSS v4, and GSAP for scroll-driven and interactive animations.

* Preview Link: https://get-hyped-react.netlify.app/
---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | v4 | Utility-first styling |
| GSAP | 3 (`@gsap/react`) | Animations & ScrollTrigger |
| React Router | v7 | Client-side routing |
| Lucide React | latest | Icon library |
| React Icons | 5 | Social media icons (footer) |

---

## Project Structure

```
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx              # App entry point
│   ├── index.css             # Global styles, Tailwind import, CSS custom properties
│   ├── App.jsx               # Root layout (Navbar + Outlet + Footer)
│   ├── router/
│   │   └── urls.jsx          # React Router route definitions
│   ├── pages/
│   │   └── Home.jsx          # Home page — composes all sections
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation bar
│   │   ├── Hero.jsx          # Hero headline section
│   │   ├── Card.jsx          # Stats & video cards section
│   │   ├── About.jsx         # About / team section
│   │   ├── Expert.jsx        # Expertise sticky-scroll cards
│   │   ├── Work.jsx          # Client work portfolio grid
│   │   ├── Brand.jsx         # Client logo marquee ticker
│   │   ├── Hyped.jsx         # CTA section
│   │   └── Footer.jsx        # Footer with contact info
│   └── ui/
│       └── MenuButton.jsx    # "Get Results" CTA button + contact form panel
```

---

## Responsive Breakpoints

| Name | Width |
|---|---|
| Mobile | 320px – 767px |
| Tablet | 768px – 1023px |
| Desktop | ≥ 1024px |

All breakpoints use Tailwind CSS v4 responsive prefixes (`sm:`, `md:`, `lg:`). No custom media queries except for the `--footer-clip` CSS custom property in `index.css`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---
