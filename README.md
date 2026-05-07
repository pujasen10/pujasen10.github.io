# The Loopy Looms 🧶

A personal portfolio website for **The Loopy Looms** — a handcrafted crochet portfolio featuring amigurumi, bag charms, coasters and nature-inspired keepsakes, made one stitch at a time.

🔗 Instagram: [@theloopylooms](https://www.instagram.com/theloopylooms/)

---

## About

A single-page portfolio site built with **Angular 19** (standalone components). It showcases handmade crochet work and links visitors to the Instagram profile.

## Features

- Fully responsive (mobile, tablet, desktop)
- Hero section with stats and floating badge
- Portfolio cards (Amigurumi, Bag Charms, Home Decor)
- Craft process section (4 steps)
- About / story section with layered image layout
- Pull quote section
- Instagram feed grid (8 photos)
- Botanical SVG doodles as decorative accents
- Smooth scroll navigation

## Structure

```
loopylooms/
├── src/
│   ├── index.html
│   ├── main.ts               # Bootstraps the standalone AppComponent
│   ├── styles.css
│   └── app/
│       ├── app.component.ts
│       ├── app.component.html
│       └── components/
│           ├── nav/
│           ├── hero/
│           ├── botanical-divider/
│           ├── creations/
│           ├── process/
│           ├── about/
│           ├── pull-quote/
│           ├── instagram/
│           └── footer/
├── images/                   # All product/portfolio photos
├── angular.json
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Angular 19** (standalone components, no NgModules)
- **TypeScript 5.6**
- CSS3 (custom properties, grid, flexbox, `clamp()`)
- Google Fonts — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Jost](https://fonts.google.com/specimen/Jost)
- Inline SVG for icons and botanical doodles
- Deployed via **Cloudflare Pages**

## Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/loopylooms.git
cd loopylooms

# Install dependencies
npm install

# Start dev server
npm start
# → http://localhost:4200
```

## Building for Production

```bash
npm run build
# Output: dist/loopylooms/
```

## Customisation

Design tokens (colours, spacing) are defined as CSS custom properties in `src/styles.css`:

```css
:root {
  --cream:  #fdf8f2;
  --sage:   #8aa898;
  --rose:   #c9798a;
  --brown:  #3d3530;
  /* ... */
}
```

To swap photos, replace the image files in the `images/` folder and update the `src` attributes in the relevant component templates under `src/app/components/`.

---

*Made with 🧶 & lots of love — The Loopy Looms*
