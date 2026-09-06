<div align="center">

# ⚡ Sarthak Pandey — Developer Portfolio 2.0

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

A high-performance, animation-rich, modern developer portfolio web application built with **Next.js 15 (App Router)**, **React 19**, **GSAP**, **Lenis Smooth Scroll**, and **Tailwind CSS**.

[Explore Portfolio](https://github.com/Sarthak-Pandey) · [Report Bug](https://github.com/Sarthak-Pandey/Protofilio_Web/issues) · [Request Feature](https://github.com/Sarthak-Pandey/Protofilio_Web/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Connect & Socials](#-connect--socials)
- [Attribution & License](#-attribution--license)

---

## 🌟 Overview

This repository contains the complete source code for **Sarthak Pandey's** personal developer portfolio. Built with modern software engineering practices, clean modular architecture, and ultra-smooth micro-interactions, it showcases full-stack web applications, AI integrations, competitive programming experience, and software engineering capabilities.

---

## ✨ Key Features

- **🎨 Modern Dark Aesthetic**: Tailored HSL color palette with sleek dark theme elevation and glassmorphism.
- **⚡ Ultra-Smooth Scrolling**: Powered by `@studio-freight/lenis` (`ReactLenis`) for inertia scrolling across desktop and mobile.
- **🎭 GSAP & ScrollTrigger Animations**: Staggered text entrances, page transition overlays, section reveals, and interactive hover effects.
- **💻 Custom Cursor System**: Responsive magnetic cursor tracking with hover states across interactive links and cards.
- **⚡ Preloader Experience**: Custom 7-letter animated preloader (`SARTHAK`) with smooth GSAP timelines.
- **📱 Fully Responsive Layout**: Tailored viewports from mobile (320px) to ultra-wide desktop (1440px+).
- **🔎 Dynamic SEO & Sitemap**: Auto-generated `sitemap.xml`, OpenGraph metadata tags, and structured JSON-LD schemas.

---

## 🛠️ Tech Stack

### Core Framework & Logic
- **Framework**: [Next.js 15.2 (App Router)](https://nextjs.org/)
- **Library**: [React 19 (RC)](https://react.dev/)
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)

### Styling & Design System
- **CSS Framework**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Official Devicon SVGs
- **Typography**: Anton (Display Headings) + Roboto Flex (Body Text)

### Animation Engine
- **Motion & Scroll**: [GSAP 3.12](https://greensock.com/gsap/) + `@gsap/react`
- **Smooth Scroll**: [Lenis 1.1](https://lenis.darkroom.engineering/)

---

## 📁 Featured Projects

### 1. 🛍️ **Snitch** — Full-Stack E-Commerce & 3D Catalog
> **Tech**: React, Redux Toolkit, Three.js, Node.js, Express, MongoDB, ImageKit, Tailwind CSS  
> Full-stack e-commerce web application featuring a Three.js 3D product canvas viewport, Mongoose user/product schemas, JWT auth middleware, and Redux central state management.  
> 🔗 [GitHub Repository](https://github.com/Sarthak-Pandey/Snitch)

### 2. 💬 **Chat Application** — AI Dev Assistant & Realtime Chat
> **Tech**: React, Node.js, Express, MongoDB, Socket.io, Google GenAI, LangChain, Nodemailer  
> AI-powered developer assistant and realtime chat application. Features autonomous tool calling (GitHub, npm, StackOverflow) via LangChain, Socket.io websockets, and OTP email verification.  
> 🔗 [GitHub Repository](https://github.com/Sarthak-Pandey/Chat_Application)

### 3. 📊 **Spendily** — Smart Expense Manager & AI Coach
> **Tech**: Python, Flask, SQLite, Pytest, pytest-flask, HTML5/CSS3  
> Smart financial management platform built with Python Flask and SQLite, featuring an AI Financial Coach blueprint, transaction analytics, and comprehensive Pytest suite.  
> 🔗 [GitHub Repository](https://github.com/Sarthak-Pandey/Spendily)

### 4. ⚔️ **AI Battle Arena** — Multi-LLM Battle & Automated Judge
> **Tech**: TypeScript, Express, LangGraph, Node.js, React, Tailwind CSS  
> Multi-LLM competition platform where AI language models compete on complex programming problems, evaluated by an automated LangGraph AI Judge workflow.  
> 🔗 [GitHub Repository](https://github.com/Sarthak-Pandey/Ai-Battle-arena)

### 5. ✅ **ToDo App (AI-Assisted)** — Modern Task Management
> **Tech**: Astro, TypeScript, Tailwind CSS, LocalStorage  
> Lightweight task management app built with Astro and TypeScript, featuring priority tagging, local state persistence, and clean UI components.  
> 🔗 [GitHub Repository](https://github.com/Sarthak-Pandey/ToDo-App-Ai-Assistance)

### 6. 🎓 **StudySync** — Educational Platform Landing Page
> **Tech**: HTML5, CSS3, JavaScript, Flexbox/Grid  
> Responsive educational platform landing page showcasing clean UI design, responsive grid layouts, and smooth CSS keyframe animations.  
> 🔗 [Live Demo](https://sarthak-pandey.github.io/StudySync/)

---

## 📂 Project Architecture

```
portfolio-2.0/
├── app/
│   ├── _components/          # Core section components (Banner, AboutMe, Skills, Projects, etc.)
│   ├── projects/[slug]/      # Dynamic project detail routes
│   ├── globals.css           # Global HSL CSS design system tokens
│   ├── layout.tsx            # Root layout, fonts, metadata & smooth scroll provider
│   ├── page.tsx              # Main portfolio landing page
│   └── sitemap.ts            # Dynamic environment-driven sitemap generator
├── components/
│   ├── CustomCursor.tsx      # Magnetic custom cursor effect
│   ├── Footer.tsx            # Clean footer with attribution & social links
│   ├── Navbar.tsx            # Fullscreen drawer menu navigation
│   ├── Preloader.tsx         # Animated 7-letter GSAP preloader
│   └── ParticleBackground.tsx# Interactive Canvas particle background
├── lib/
│   ├── data.ts               # Centralized portfolio data (Projects, Skills, Education, Info)
│   └── utils.ts              # Classname merge utility (clsx + tailwind-merge)
├── public/
│   ├── logo/                 # Official technology SVG & PNG logos
│   └── projects/             # Verified project thumbnails and screenshots
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind theme extension & custom HSL colors
└── package.json              # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sarthak-Pandey/Protofilio_Web.git
   cd Protofilio_Web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🔧 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with hot-reloading |
| `npm run build` | Compiles production bundle and static page exports |
| `npm run start` | Runs production server build locally |
| `npm run lint` | Runs Next.js ESLint code checks |

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory (optional for local deployment):

```env
NEXT_PUBLIC_SITE_URL=https://sarthakpandey.dev
```

---

## 🤝 Connect & Socials

- **GitHub**: [@Sarthak-Pandey](https://github.com/Sarthak-Pandey)
- **LinkedIn**: [Sarthak Pandey](https://www.linkedin.com/in/sarthak-pandey-481248307/)
- **Instagram**: [@sar_thak.io](https://www.instagram.com/sar_thak.io/)
- **Email**: [sarthakpandey5667@gmail.com](mailto:sarthakpandey5667@gmail.com)

---

## 📜 Attribution & License

- **Design & Code**: Maintained by [Sarthak Pandey](https://github.com/Sarthak-Pandey).
- **License**: Distributed under the [MIT License](LICENSE).

<div align="center">
  <sub>Built with ❤️ by Sarthak Pandey</sub>
</div>
