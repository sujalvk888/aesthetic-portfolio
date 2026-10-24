<div align="center">

# ✦ SUJAL V KANCHAN ✦
### Creative Frontend & UI/UX Designer Portfolio

<p align="center">
  A bespoke, high-performance web portfolio crafted with an editorial aesthetic, layered visual composition, and modern frontend architecture.
</p>

[![Live Demo](https://img.shields.io/badge/Demo-Live_Website-0D0D0D?style=for-the-badge&logo=vercel&logoColor=white)](https://sk-aesthetic-portfolio-nu.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-0D0D0D?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-0D0D0D?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vite.dev/)
[![Status](https://img.shields.io/badge/Status-Deployed_%26_Active-success?style=for-the-badge)](https://sk-aesthetic-portfolio-nu.vercel.app/)

<br/>

[**🌐 Explore Live Experience**](https://sk-aesthetic-portfolio-nu.vercel.app/) &nbsp;&bull;&nbsp; [**📂 GitHub Repository**](https://github.com/sujalvk888/aesthetic-portfolio) &nbsp;&bull;&nbsp; [**✉️ Contact Author**](mailto:sujal.vk888@gmail.com)

<br/>
<hr style="border: 1px solid #242424;" />
<br/>

</div>

## 📑 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features & Sections](#-key-features--sections)
- [Design Philosophy & System](#-design-philosophy--system)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [NPM Scripts](#-npm-scripts)
- [Performance & Best Practices](#-performance--best-practices)
- [Author & Connect](#-author--connect)

---

## 🌟 Project Overview

This repository contains the complete frontend codebase for my personal portfolio. Designed to demonstrate a synthesis of **fine-art editorial aesthetics** and **modern frontend development**, the portfolio moves away from standard cookie-cutter layouts in favor of an architectural, multi-layered visual experience.

> *"I design digital experiences that inspire & connect."*

### Core Highlights
- **Editorial Typography:** Harmonious balance between classic serifs, Japanese mincho forms, script accents, and clean sans-serif UI typography.
- **Layered Spatial Depth:** Absolute and relative coordinate layering where botanical elements intersect with typography and layout containers to create 3D depth.
- **Pure CSS Architecture:** Ultra-lean performance using pure CSS Grid, Flexbox, and CSS Custom Properties without heavy third-party UI libraries.
- **Engineered Micro-Interactions:** Custom hover states, SVG circular arcs, responsive image masking, and responsive layout flow.

---

## 🎨 Key Features & Sections

The portfolio is structured into modular sections, each crafted with intentional visual hierarchy:

### 1. Hero Experience (`HeroSection.jsx`)
- **Architectural Dual Header:** Clean uppercase masthead communicating roles and creative discipline.
- **Oversized Typography Layering:** Prominent background typography (`PORTFOLIO`) positioned behind high-resolution masked portrait assets.
- **Editorial Column Layout:** Asymmetrical split featuring the primary tagline, signature script, global availability badge, and worldwide interactive globe marker.

### 2. Selected Works Showcase (`WorkSection.jsx`)
Curated showcase of design and development projects featuring category chips, numerical sequencing, and tag taxonomies:
| Project # | Name | Category | Core Disciplines |
| :---: | :--- | :--- | :--- |
| **01** | **Velvet Studio** | Branding & Web Design | `BRANDING`, `WEB DESIGN`, `UI/UX` |
| **02** | **Aurora Shop** | E-Commerce Design | `UI/UX`, `E-COMMERCE`, `WEB DESIGN` |
| **03** | **MindSpace** | Landing Page Design | `LANDING PAGE`, `UI/UX`, `WEB DESIGN` |

### 3. Five-Stage Process (`My Process`)
A structured product design methodology visualized with custom SVG circular arcs and accent graphics:
1. **01 Discover:** In-depth research, vision alignment, and goal definition.
2. **02 Define:** Strategic synthesis, audience analysis, and requirement roadmap.
3. **03 Design:** High-fidelity wireframing, layout composition, and visual UI design.
4. **04 Develop:** Translation to clean, semantic, and performant code.
5. **05 Deliver:** Quality assurance, browser optimization, accessibility, and launch.

### 4. Professional Toolkit (`Tools I Use`)
Interactive grid showcasing core design and developer tooling:
- **Design & Prototyping:** Figma, Adobe XD, Framer, Photoshop, Adobe Illustrator
- **Development & No-Code:** Webflow, React, HTML5/CSS3
- **Collaboration & Workflow:** Notion, Slack

### 5. Career Highlights (`FinalSection.jsx`)
- 💡 **Patent Published:** Published patent application demonstrating practical problem-solving and technical innovation.
- 🎓 **IEEE Presentation & Certifications:** Research presentation at an IEEE conference and 3 professional credentials.
- 💼 **Internship Experience:** Hands-on industry experience building and deploying modern software.

### 6. Interactive Contact Block
Direct communication portal displaying contact details, portrait imagery, social links, and current availability for project engagements.

---

## 🖋️ Design Philosophy & System

### 🎨 Color Palette
The color tokens reflect an earthy, high-contrast, editorial palette:
- **Onyx Canvas:** `#0D0D0D` (Deep background grounding)
- **Coffee Bean:** `#180B0D` (Rich shadow undertones)
- **Night Bordeaux:** `#34161E` (Radial glow atmosphere)
- **Khaki Beige:** `#BAA796` (Subtle borders & accent lines)
- **Accent Rose/Pink:** `#793F49` (Accent highlights)
- **Off-White Text:** `#E5D8CC` (High-contrast reading typography)
- **Muted Sand:** `#CBBBB0` (Secondary captions & body descriptions)

### 🔤 Typography Stack
| Role | Font Family | Character |
| :--- | :--- | :--- |
| **Hero Display Titles** | `Playfair Display`, `BIZ UDMincho` | High-fashion, classic editorial serif |
| **Numerals & Counters** | `Libertinus Serif` | Timeless editorial numerals (`01`–`05`) |
| **UI Body & Technical Data** | `Inter` | Clean, crisp, neutral geometric sans-serif |
| **Personal Signature & Accent** | `Alex Brush`, `Ronthel Brush` | Fluid, organic cursive flourish |

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Modular component architecture and state handling |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) | Lightning-fast HMR and optimized production bundles |
| **Styling** | Vanilla CSS3 | Custom CSS Grid, Flexbox, CSS Variables, Zero-overhead styles |
| **Static Analysis** | [Oxlint](https://oxc.rs/) | High-speed Rust-based linting for JavaScript & React |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) | Edge network deployment and automated git integrations |

---

## 📂 Project Architecture

```
aesthetic-portfolio/
├── public/
│   ├── favicon.svg             # Vector favicon
│   ├── fonts/                  # Custom display typography (Ronthel Brush)
│   ├── icons/                  # High-res SVG and PNG tool/social icons
│   └── images/                 # Portrait graphics & masked depth overlays
├── src/
│   ├── assets/                 # Botanical graphics & layered visual assets
│   ├── App.css                 # Base app layout rules
│   ├── App.jsx                 # Root container integrating sections
│   ├── FinalSection.css        # Career highlights and contact layout styles
│   ├── FinalSection.jsx        # Highlights & Contact footer component
│   ├── HeroSection.css         # Hero layout, radial gradients & typography
│   ├── HeroSection.jsx         # Hero section & title overlay component
│   ├── WorkSection.css         # Projects grid, process arc & tools styling
│   ├── WorkSection.jsx         # Selected works, 5-stage process & toolkit
│   ├── index.css               # Global reset, variables & base body styles
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML5 template with Google Fonts preconnections
├── package.json                # Project dependencies and script declarations
├── vite.config.js              # Vite configuration with React plugin
└── README.md                   # Comprehensive repository documentation
```

---

## 🚀 Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sujalvk888/aesthetic-portfolio.git
   cd aesthetic-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` to explore the live local build.

---

## 📜 NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with instant HMR |
| `npm run build` | Compiles and optimizes assets into production-ready `/dist` bundle |
| `npm run preview` | Locally serves the production build for testing |
| `npm run lint` | Runs Oxlint to inspect code quality and React best practices |

---

## ⚡ Performance & Best Practices

- **Zero Heavy UI Libraries:** Avoided bloated runtime component libraries in favor of pure CSS, guaranteeing minimal JavaScript payload and near-instant First Contentful Paint (FCP).
- **Modern Asset Compression:** Utilizes WebP and optimized PNGs with explicit dimensional attributes to prevent Cumulative Layout Shift (CLS).
- **Responsive Layout Grids:** Seamlessly adjusts from mobile screens (<480px) to ultra-wide desktop monitors (>1920px) using CSS media queries and flexible clamp/calc scaling.

---

## 📬 Author & Connect

**Sujal V Kanchan**  
*UI/UX & Frontend Web Designer*

- 🌐 **Live Portfolio:** [sk-aesthetic-portfolio-nu.vercel.app](https://sk-aesthetic-portfolio-nu.vercel.app/)
- 💼 **LinkedIn:** [linkedin.com/in/sujal-v-kanchan](https://linkedin.com/in/sujal-v-kanchan)
- 🐙 **GitHub:** [@sujalvk888](https://github.com/sujalvk888)
- ✉️ **Email:** [sujal.vk888@gmail.com](mailto:sujal.vk888@gmail.com)

---

<div align="center">
  <sub>Designed & Developed with precision by Sujal V Kanchan • Deployed on Vercel</sub>
</div>
