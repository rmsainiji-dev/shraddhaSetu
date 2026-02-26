# 🕉 ShraddhaSetu — श्रद्धा का पवित्र सेतु

A **production-ready** Hindu devotional platform built with **Next.js 14 App Router** with full static export, SEO optimization, and elegant temple-inspired design.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🎨 **Design** | Temple-inspired luxury UI — saffron + crimson + gold palette |
| 📱 **Responsive** | Mobile-first, works on all devices |
| ⚡ **Performance** | Static export, no JS overhead, CDN-ready |
| 🔍 **SEO** | Full meta tags, OG, Schema.org JSON-LD per page |
| 🌐 **Languages** | Hindi + Sanskrit (English-ready structure) |
| ♿ **Accessibility** | Semantic HTML, ARIA labels, skip nav |
| 🗺 **Sitemap** | `sitemap.xml` + `robots.txt` included |

---

## 📁 Project Structure

```
shraddhaSetu/
├── app/
│   ├── layout.jsx                       # Root layout (Header + Footer + fonts)
│   ├── page.jsx                         # Homepage
│   ├── not-found.jsx                    # 404 page
│   ├── hanuman-chalisa-hindi/
│   │   └── page.jsx                     # Hindi Chalisa (5 sections)
│   └── hanuman-chalisa-sanskrit/
│       └── page.jsx                     # Sanskrit Chalisa (5 sections)
│
├── components/
│   ├── Header.jsx                       # Sticky header + mobile nav
│   ├── Footer.jsx                       # Footer with links
│   ├── DevotionalCard.jsx               # Reusable content card
│   └── seoUtils.js                      # JSON-LD structured data helpers
│
├── styles/
│   └── globals.css                      # Complete design system (CSS variables)
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── next.config.js                       # Static export config
├── package.json
└── README.md
```

---

## 📄 Pages Overview

### 1. `/` — Homepage
- Hero with animated OM symbol
- Stats strip (40 chaupais, 2 languages, 100% free)
- Introduction about ShraddhaSetu
- Featured devotional content cards
- Why choose ShraddhaSetu section
- Full footer with navigation

### 2. `/hanuman-chalisa-hindi` — हनुमान चालीसा हिंदी
- ✅ Section 1: Complete Hanuman Chalisa (all 40 chaupais + dohas)
- ✅ Section 2: Artha — meaning of selected chaupais
- ✅ Section 3: Mahatmya — importance and benefits
- ✅ Section 4: Kab Padhen — when and how to recite
- ✅ Section 5: FAQs (3 questions with Schema.org markup)

### 3. `/hanuman-chalisa-sanskrit` — हनुमान चालीसा संस्कृत
- Same 5-section structure
- Sanskrit shloka transliteration
- Sanskrit-specific FAQs
- Language switch to Hindi

---

## 🚀 Setup & Run

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# 1. Unzip the project
unzip shraddhaSetu.zip
cd shraddhaSetu

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → Open http://localhost:3000
```

### Production Build

```bash
# Build static export
npm run build

# Output is in the /out folder
# This folder contains all static HTML/CSS/JS files
```

---

## 🌐 Deployment

### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Note: Comment out 'output: "export"' in next.config.js for Vercel
# Vercel handles static generation automatically
```

### Option B: GitHub Pages

1. **Update `next.config.js`** — Uncomment and set `basePath`:
```js
basePath: '/shraddhaSetu', // Replace with your GitHub repo name
```

2. **Create `.github/workflows/deploy.yml`**:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch

### Option C: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Option D: Any Static Host

After `npm run build`, the `/out` folder contains pure static files.
Upload this folder to any web host (Apache, Nginx, S3, Cloudflare Pages, etc.).

---

## 🎨 Customization

### Change Domain
Replace `https://www.shraddhaSetu.in` in:
- `app/layout.jsx` → `metadataBase`
- `app/page.jsx` → `alternates.canonical`
- `app/hanuman-chalisa-hindi/page.jsx` → `alternates.canonical`
- `app/hanuman-chalisa-sanskrit/page.jsx` → `alternates.canonical`
- `components/seoUtils.js` → `SITE_URL`
- `public/sitemap.xml`
- `public/robots.txt`

### Change Colors
Edit CSS variables in `styles/globals.css` under `:root`:
```css
:root {
  --crimson: #7C1D1D;      /* Header, titles */
  --saffron: #D4620A;      /* Accents, links */
  --gold: #B8860A;         /* Gold accents */
  --parchment: #FDF6EC;    /* Background */
}
```

### Add New Pages
1. Create `app/[your-page]/page.jsx`
2. Add to `components/Header.jsx` navItems
3. Add to `components/Footer.jsx` footerLinks
4. Add to `public/sitemap.xml`
5. Use `articleJsonLd()` from `components/seoUtils.js`

---

## 📈 SEO Checklist

- ✅ Dynamic `<title>` per page using Next.js metadata API
- ✅ Meta `description` per page
- ✅ Open Graph (`og:title`, `og:description`, `og:url`, `og:type`)
- ✅ Twitter card meta
- ✅ Canonical URLs via `alternates.canonical`
- ✅ Schema.org `Article` JSON-LD on content pages
- ✅ Schema.org `FAQPage` JSON-LD on chalisa pages
- ✅ Schema.org `BreadcrumbList` JSON-LD
- ✅ Schema.org `WebSite` JSON-LD on homepage
- ✅ `robots.txt` with sitemap reference
- ✅ `sitemap.xml` with `hreflang` annotations
- ✅ H1 → H2 → H3 heading hierarchy
- ✅ `lang="hi"` on `<html>` element
- ✅ `itemScope`/`itemProp` microdata on articles
- ✅ ARIA labels and roles
- ✅ Internal linking between pages
- ✅ Breadcrumb navigation

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18
- **CSS**: Pure CSS with CSS variables (no Tailwind, no styled-components)
- **Fonts**: Google Fonts — Noto Serif Devanagari, Vesper Libre, EB Garamond
- **Icons**: Unicode emoji (no icon library needed)
- **Deployment**: Static export → any CDN

---

## 📊 Performance Notes

- Zero client-side JS on static pages (React only for mobile menu toggle)
- Google Fonts loaded with `preconnect` hints
- CSS variables for consistent theming without duplication
- No external CSS frameworks = minimal CSS payload
- All images use `unoptimized: true` for static export compatibility

---

🙏 **जय श्री राम | जय बजरंगबली**

*ShraddhaSetu — श्रद्धा का पवित्र सेतु*
