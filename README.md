# 🏢 Mini Real Estate Floor Selector

An interactive real estate visualizer that lets users explore towers, view individual floors, and preview apartment layouts in a clean, responsive UI.

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-0ea5e9?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-%20%20-2B2A33?logo=vercel&logoColor=white)

- **React + TypeScript**
- **Vite** for fast dev/build
- **Tailwind CSS** for utility styling
- **shadcn/ui** for accessible, headless UI components
- **React Router DOM** for routing
- Custom theming & layout control via custom hooks

---

## ✨ Features

- Browse towers (A, B, C) visually
- View up to 15 floors per tower
- 3–4 apartment layouts per floor
- Clickable layout preview with full metadata
- Hover + touch-friendly animations
- Responsive and mobile-optimized

---

## ⚠️ Limitations / Tradeoffs

- Data is currently static/dummy (`/data/*.ts`)
- No backend or CMS integration (for now)
- SVG fallbacks used in place of real floorplans
- Built as a **prototype**, not a final product

---

## 🧪 Getting Started

```bash
# Clone the project
git clone https://github.com/Elvicharde/mini-floor-selector-app.git
cd floor-selector

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Built with ☕ + 💻 by @elvicharde

