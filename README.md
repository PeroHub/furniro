# 🛋️ Furniro — Modern E-Commerce Furniture Store Template

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Furniro** is a production-ready, high-performance modern e-commerce storefront template tailored for interior design, luxury home decor, and Scandinavian furniture brands. Built on top of **Next.js 15 App Router**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, it features pixel-perfect layouts, responsive touch design, unified global cart state, and static pre-rendering (SSG).

---

## 🌟 Key Features

- **🏠 Comprehensive Homepage**:
  - Hero banner with warm cream call-to-action cards
  - "Browse The Range" category discovery (Dining, Living, Bedroom)
  - Interactive product grid with category filter pills, dynamic badge overlays (-30%, -50%, New), and "Show More" expansion
  - "50+ Beautiful Rooms" slider showcase and social community gallery

- **🛍️ Complete Shop Catalog (`/shop`)**:
  - Dual viewing modes: **4x4 Responsive Grid** and **Detailed List View**
  - Filtering by category (Chairs, Sofas, Tables, Lamps, Bedroom, Decor) and discount status
  - Dynamic sorting by price (ascending/descending) and alphabetical order
  - Integrated pagination controls and customer trust feature bar

- **🔍 Dynamic Single Product Detail Pages (`/product/[id]`)**:
  - Direct navigation from cards on both the Homepage and Shop page
  - Interactive multi-thumbnail gallery with active selection state and smooth image switching
  - Size selectors (L, XL, XS), color swatches, and quantity steppers
  - Dynamic star ratings and verified review counts
  - Tabbed specs (Description, Additional Information, Reviews)
  - Contextual "Related Products" recommendation carousel

- **🛒 Full E-Commerce Cart & Wishlist Workflow**:
  - **Slide-out Cart Drawer**: Quick slide-over drawer accessible from any page header, featuring animated item list, subtotal, quantity buttons, and direct checkout link
  - **Dedicated Cart Page (`/cart`)**: Complete cart table with unit price, item removal, quantity adjustment, subtotal recalculation, and demo-restore fallback
  - **Wishlist State**: Global wishlist toggling with heart icons and live badge counters
  - **Toast Notifications**: Interactive toast alerts for cart updates, wishlist actions, comparisons, and sharing

- **💳 Two-Column Checkout Experience (`/checkout`)**:
  - Asymmetric desktop grid with comprehensive billing details form
  - Live order breakdown synced directly to active cart items
  - Multiple payment methods (Direct Bank Transfer, Cash on Delivery) with explanatory guidelines
  - Built-in form validation, animated order processing, and modal order confirmation receipts with generated order numbers (`FUR-XXXXXX`)

- **⚖️ Side-by-Side Product Comparison (`/comparison`)**:
  - Detailed product comparison tables with spec rows: Dimensions, Warranty, Materials, Finishes, and direct "Add to Cart" actions

- **📝 Contact & Blog Pages**:
  - Interactive contact form (`/contact`) with instant validation and submitted message states
  - Editorial design blog index (`/blog`) with category filters, recent posts sidebar, and search input

- **⚡ Production Architecture**:
  - **Static Site Generation (SSG)**: Fast page loads with pre-rendered product routes via `generateStaticParams`
  - **Branded 404 Page (`/404`)**: Custom `not-found.tsx` with one-click return to home or catalog
  - **Error Boundary (`error.tsx`)**: Graceful crash recovery with "Try Again" functionality
  - **Branded Loading States (`loading.tsx`)**: Minimal gold spinner for seamless page transitions

---

## 🏗️ Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `^15.5` | React framework with App Router, server/client components, and SSG |
| **React** | `^19.2` | Core UI library |
| **TypeScript** | `^5.9` | Full type safety across products, context, forms, and props |
| **Tailwind CSS** | `^4.1` | Modern styling engine with native CSS nesting and `@tailwindcss/postcss` |
| **Motion** | `^12.2` | Smooth drawer transitions and modal animations |
| **Lucide React** | `^0.55` | Crisp, lightweight icons |

---

## 📁 Project Directory Structure

```text
furniro/
├── app/
│   ├── blog/                   # Blog page & articles
│   ├── cart/                   # Dedicated Shopping Cart page
│   ├── checkout/               # Checkout & Payment page
│   ├── comparison/             # Side-by-side Product Comparison
│   ├── contact/                # Contact page with interactive form
│   ├── product/
│   │   ├── [id]/               # Dynamic Single Product Page (SSG)
│   │   │   └── page.tsx
│   │   ├── asgaard-sofa/       # Direct alias route
│   │   └── page.tsx            # Query-parameter fallback product page
│   ├── shop/                   # Catalog with grid/list, filters & sorting
│   ├── error.tsx               # Global error boundary
│   ├── globals.css             # Tailwind v4 styles & typography imports
│   ├── layout.tsx              # Root HTML & StoreProvider wrapper
│   ├── loading.tsx             # Branded loading spinner
│   ├── not-found.tsx           # Custom 404 page
│   └── page.tsx                # Homepage landing page
├── components/
│   ├── blog/                   # BlogPostCard, BlogPostList, BlogSidebar
│   ├── cart/                   # CartDrawer, CartTable, CartTotals, ShoppingCartDrawer
│   ├── checkout/               # BillingForm, OrderSummaryAndPayment
│   ├── comparison/             # ComparisonTable, ComparisonTopCards
│   ├── contact/                # ContactForm, ContactInfo, ContactHeader
│   ├── home/                   # HeroBanner, BrowseRange, ProductCard, ProductGrid...
│   ├── layout/                 # Header, Footer, MainLayout
│   ├── product/                # ProductGallery, ProductInfo, ProductTabs, RelatedProducts...
│   ├── shop/                   # FilterBar, Pagination, ProductCatalogGrid, FeatureBar
│   └── ui/                     # Toast notifications & UI helpers
├── context/
│   └── StoreContext.tsx        # React Context managing Cart, Wishlist, Drawer & Toasts
├── lib/
│   ├── products.ts             # Central catalog database, product schemas & lookup helpers
│   └── utils.ts                # Utility functions & class merges
├── public/
│   └── images/                 # Optimized product photos, lifestyle images & banners
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js build configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/furniro.git
cd furniro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will hot-reload automatically on file changes.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 🛠️ Customization Guide

### 1. Adding or Modifying Products

All product records are centralized in [`lib/products.ts`](lib/products.ts). To add a product, simply append a new object to `INITIAL_PRODUCTS` or `MORE_PRODUCTS`:

```typescript
{
  id: 'velvet-armchair',
  name: 'Nordic Velvet Armchair',
  subtitle: 'Scandinavian accent chair',
  price: 4500000,
  originalPrice: 5200000,
  image: '/images/product_cafe_chair_1793965648211.jpg',
  images: [
    '/images/product_cafe_chair_1793965648211.jpg',
    '/images/hero_scandinavian_room_1793965621222.jpg',
  ],
  badge: { type: 'discount', text: '-15%' },
  category: 'chair',
  rating: 4.9,
  reviewsCount: 14,
  sku: 'SS013',
  tags: 'Chair, Velvet, Living, Accent',
  description: 'Handcrafted luxury armchair wrapped in stain-resistant velvet fabric.',
}
```

The app's helper `getProductById` automatically resolves both exact IDs and slugified names (e.g., `/product/velvet-armchair`).

### 2. Currency and Price Formatting

Pricing is configured in [`lib/products.ts`](lib/products.ts) and [`context/StoreContext.tsx`](context/StoreContext.tsx) via `formatNaira`:

```typescript
export function formatNaira(amount: number): string {
  return `₦ ${amount.toLocaleString('en-US')}`;
}
```

To switch to USD ($), EUR (€), or GBP (£), change the currency symbol and formatting locale:

```typescript
export function formatPrice(amount: number): string {
  return `$ ${(amount / 1000).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}
```

### 3. Integrating a Real Payment Gateway

In [`components/checkout/OrderSummaryAndPayment.tsx`](components/checkout/OrderSummaryAndPayment.tsx), the `handlePlaceOrder` function handles checkout submissions. You can integrate Stripe, PayPal, or Paystack by replacing the simulated timeout with your API call:

```typescript
const handlePlaceOrder = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, billingData, paymentMethod: selectedPayment }),
  });
  
  const { url } = await response.json();
  window.location.href = url; // Redirect to Stripe Checkout
};
```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server at `localhost:3000`.
- `npm run build`: Compiles TypeScript, runs static generation for product routes, and creates an optimized production build.
- `npm run start`: Runs the built Next.js production server.
- `npm run lint`: Runs ESLint across all `.ts` and `.tsx` files to ensure zero syntax or linting violations.
- `npm run clean`: Cleans the `.next` build cache.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub/GitLab repository.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js 15 and sets the build command to `next build`.
4. Click **Deploy**.

### Deploy with Docker

A standard Next.js standalone container configuration can be used:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📄 License

This template is open-source and released under the [MIT License](LICENSE). You are free to use it for personal, commercial, and client projects.
