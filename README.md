<div align="center">

# 💊 PharmaStop

**Premium Pharmacy Management System — Marketing & Product Landing Page**

*Clinical-grade multi-branch inventory tracking, real-time analytics, and shift coordination — built specifically for Ethiopian pharmacies.*

[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

---

**Developed by [BitLabs Technology PLC](https://bitlabsbuild.com)**

</div>

## 📖 About

PharmaStop is a premium, high-conversion marketing and product showcase landing page for a **clinical-grade desktop pharmacy management application** designed and built specifically for pharmacies in **Ethiopia**. The landing page features interactive product demonstrations, live UI mockups, and a fully functional demo scheduling flow — all presented in a polished, enterprise-grade design.

> **Note:** This repository contains the **marketing landing page** (a React web application), not the desktop PharmaStop application itself.

## ✨ Key Features

### Interactive Product Demonstrations
- **Live Dashboard Mockup** — A fully interactive desktop app UI simulation embedded in the hero section, featuring a navigable sidebar, real-time sales metrics in ETB (Ethiopian Birr), a POS checkout flow with an `[F12] Complete Sale` button, and a weekly profit trend chart.
- **POS Counter Sandbox** — Add items to a cart, process payments, and receive locally-generated receipt numbers.
- **Margin Calculator** — Input wholesale and retail prices to calculate net profit and margin percentages in real-time, with color-coded health indicators.
- **Shift Tracker** — Toggle between day and night shifts to view active pharmacy staff rosters.
- **Branch Transfer Simulator** — Simulate inter-branch medicine stock transfers between locations (Bole, Piazza, etc.) with animated routing states.

### Product Showcase Screens (Deep Dive)
- **Counter Sales & Checkout** — Full-fidelity POS screen mockup with line items, VAT calculations, and payment confirmation.
- **Medicine Storage & Batches** — Inventory table with batch codes, expiry dates, stock levels, and branch locations, including low-stock visual alerts.
- **Monthly Profitability Reports** — Branch-level profitability bar charts with audit verification badges.

### Lead Generation & Conversion
- **Demo Scheduler Modal** — A 3-step animated overlay (date selection → pharmacy info form → confirmation) powered by Framer Motion, complete with East Africa Time slots.
- **Multiple CTA Touchpoints** — "Book a Free Live Demo" buttons woven into the navbar, hero, and footer sections.

### Additional Sections
- **Enterprise Metrics Bar** — Highlighting offline capability, multi-branch balance, and ETB-precision tracking.
- **FAQ Accordion** — Interactive expandable Q&A section addressing common pharmacy owner concerns.
- **Conversion Footer** — Company information, product module links, local compliance standards, and corporate trust links.

## 🛠 Tech Stack

| Layer           | Technology                                                         |
| --------------- | ------------------------------------------------------------------ |
| **Framework**   | [React 19](https://react.dev/) with TypeScript 5.8                 |
| **Build Tool**  | [Vite 6](https://vite.dev/) with HMR                              |
| **Styling**     | [Tailwind CSS 4](https://tailwindcss.com/) (Vite plugin)          |
| **Animations**  | [Motion (Framer Motion) 12](https://motion.dev/)                  |
| **Icons**       | [Lucide React](https://lucide.dev/)                                |
| **Typography**  | Google Fonts — Inter, Outfit, JetBrains Mono                      |
| **AI Backend**  | [Google Gemini API](https://ai.google.dev/) (`@google/genai`)     |
| **Server**      | Express 4 (for API proxy / server-side Gemini calls)               |
| **Runtime**     | Node.js (ES Modules)                                               |

## 📁 Project Structure

```
PharmaStop/
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.ts             # Vite configuration with Tailwind & React plugins
├── tsconfig.json              # TypeScript configuration (ES2022, bundler resolution)
├── metadata.json              # App metadata for AI Studio deployment
├── .env.example               # Environment variable template
├── .gitignore                 # Git ignore rules
│
├── src/
│   ├── main.tsx               # React DOM entry point (StrictMode)
│   ├── App.tsx                # Root application component & layout orchestrator
│   ├── index.css              # Global styles, custom fonts, theme tokens, keyframes
│   │
│   └── components/
│       ├── Navbar.tsx          # Sticky navigation bar with scroll effects & mobile menu
│       ├── Hero.tsx            # Hero section with interactive desktop app mockup
│       ├── Features.tsx        # 4-module interactive feature grid (POS, Margins, Shifts, Transfers)
│       ├── DeepDive.tsx        # Tabbed app screenshot showcase (POS, Inventory, Reports)
│       ├── Metrics.tsx         # Enterprise metrics display (Offline, Multi-Branch, ETB tracking)
│       ├── FAQ.tsx             # Expandable FAQ accordion
│       ├── Footer.tsx          # CTA banner, footer columns, legal disclaimer
│       └── DemoScheduler.tsx   # Multi-step demo booking modal with Framer Motion animations
│
└── assets/
    └── .aistudio/             # AI Studio configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ (LTS recommended)
- **npm** v9+ (comes with Node.js)
- A **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/apikey) (required for server-side AI features)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/PharmaStop.git
   cd PharmaStop
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and set your values:

   ```env
   GEMINI_API_KEY="your_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at **http://localhost:3000**.

## 📜 Available Scripts

| Script            | Command             | Description                                       |
| ----------------- | -------------------- | ------------------------------------------------- |
| **`dev`**         | `npm run dev`        | Start Vite dev server on port 3000 with HMR       |
| **`build`**       | `npm run build`      | Create optimized production build in `dist/`       |
| **`preview`**     | `npm run preview`    | Locally preview the production build               |
| **`lint`**        | `npm run lint`       | Run TypeScript type-checking (`tsc --noEmit`)     |
| **`clean`**       | `npm run clean`      | Remove `dist/` and `server.js` build artifacts     |

## 🔐 Environment Variables

| Variable          | Required | Description                                                        |
| ----------------- | -------- | ------------------------------------------------------------------ |
| `GEMINI_API_KEY`  | Yes      | API key for Google Gemini AI. Obtain from AI Studio.               |
| `APP_URL`         | No       | The URL where the app is hosted. Used for self-referential links.  |

> **Security:** The `.gitignore` is configured to exclude all `.env*` files except `.env.example`. Never commit your API keys.

## 🧩 Component Architecture

```
App
├── Navbar              → Sticky header, scroll-aware styling, mobile hamburger menu
├── Hero                → Value proposition copy + interactive desktop app mockup
│   └── Dashboard       → Sidebar nav, metric cards, POS cart, profit chart (all interactive)
├── Features            → 2×2 grid of interactive sandbox modules
│   ├── POS Counter     → Add items, checkout, generate receipt numbers
│   ├── Margin Calc     → Real-time profit/margin calculation with inputs
│   ├── Shift Tracker   → Day/Night toggle with staff rosters
│   └── Branch Transfer → Simulate inter-branch stock routing
├── DeepDive            → Tab-switched app screen mockups
│   ├── Counter Sales   → Full checkout screen with VAT
│   ├── Medicine Hub    → Inventory table with batch/expiry data
│   └── Profitability   → Branch comparison bar charts
├── Metrics             → 3-column enterprise stats display
├── FAQ                 → Accordion-style Q&A
├── Footer              → CTA block, 4-column links, legal row
└── DemoScheduler       → Modal overlay (3-step booking wizard)
```

## 🎨 Design System

- **Fonts:** Inter (body), Outfit (display/headings), JetBrains Mono (data/code)
- **Color Palette:** Slate-based neutrals with sky and teal accents; rose for alerts
- **Custom Utilities:** `medical-grid` and `medical-grid-fine` background patterns for clinical aesthetic
- **Custom Animations:** `pill-split-top` / `pill-split-bottom` keyframes for the logo pill-splitting effect on load
- **Scrollbar Styling:** Custom webkit scrollbars matching the slate design system

## 🌍 Localization

The application is tailored for the **Ethiopian market**:
- All currency values displayed in **ETB (Ethiopian Birr)**
- Branch locations reference Ethiopian cities (Bole, Megenagna, Piazza)
- Demo scheduling uses **East Africa Time (EAT)** timezone
- Staff names reflect Ethiopian naming conventions
- Phone number placeholders use the **+251** country code
- VAT calculations use the **15% Ethiopian standard rate**

## 📄 License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for details.

```
Copyright © 2026 BitLabs Technology PLC. All rights reserved.
```

---

<div align="center">

**Built with ❤️ by [BitLabs Technology PLC](https://bitlabsbuild.com)**

[Request a Demo](https://bitlabsbuild.com) · [support@bitlabsbuild.com](mailto:support@bitlabsbuild.com)

</div>
