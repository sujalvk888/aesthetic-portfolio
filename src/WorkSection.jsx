import React from 'react';
import './WorkSection.css';
import flowerImg from './assets/flower.png';
import flower2Img from './assets/flower2.png';
import flower3Img from './assets/flower3.png';
import FinalSection from './FinalSection';

/* ── Tool icon components (outline / accent-pink style) ────────── */
const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <rect x="1" y="1" width="17" height="17" rx="8.5" />
    <rect x="20" y="1" width="17" height="17" rx="8.5" />
    <rect x="1" y="20" width="17" height="17" rx="8.5" />
    <rect x="1" y="39" width="17" height="17" rx="8.5" />
    <circle cx="28.5" cy="28.5" r="8.5" />
  </svg>
);

const WebflowIcon = () => (
  <svg viewBox="0 0 48 34" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="20">
    <path d="M34.5 0L24 20.5 19 10 12 25 3 0H0l12 34 7-15 5 10L36 0h-1.5z" strokeLinejoin="round"/>
    <path d="M36 0l12 34-9-9-3 9" strokeLinejoin="round"/>
  </svg>
);

const AdobeXDIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <rect x="1" y="1" width="30" height="30" rx="6" />
    <path d="M7 22l4.5-11 4.5 11M9 17.5h5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 11v11M20 11c3 0 5 1.5 5 4s-2 4-5 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 28 36" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
    <path d="M2 2h24l-12 12H2z" />
    <path d="M14 14l12 12H14v10l-12-12h12z" />
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 40 38" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <rect x="1" y="1" width="38" height="36" rx="7" />
    <path d="M9 25V13h6c2.5 0 4.5 1.5 4.5 3.5S17.5 20 15 20H9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 16c1.5-1 3.5-1 5 0 1.5 1 2 2.5 2 4s-.5 3-2 4c-1.5 1-3.5 1-5 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 36 38" fill="none" stroke="currentColor" strokeWidth="1.5" width="25" height="25">
    <path d="M5 6l26-3v29l-26 3V6z" />
    <path d="M11 12v15l10-2V10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 40 38" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <rect x="1" y="1" width="38" height="36" rx="7" />
    <path d="M10 25l5-12 5 12M12 21h6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="26" cy="14" r="1.5" fill="currentColor" />
    <path d="M26 18v7" strokeLinecap="round" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <path d="M12 4a2 2 0 0 1 0 4H8a2 2 0 0 1 0-4h4z" strokeLinecap="round"/>
    <path d="M4 12a2 2 0 0 1 4 0v4a2 2 0 0 1-4 0v-4z" strokeLinecap="round"/>
    <path d="M20 28a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4h-4z" strokeLinecap="round"/>
    <path d="M28 20a2 2 0 0 1-4 0v-4a2 2 0 0 1 4 0v4z" strokeLinecap="round"/>
    <path d="M4 20a2 2 0 0 1 4 0v2a2 2 0 0 1-4 0v-2z" strokeLinecap="round"/>
    <path d="M12 4a2 2 0 0 1 0 4H10a2 2 0 0 1 0-4h2z" strokeLinecap="round"/>
    <path d="M28 12a2 2 0 0 1-4 0V10a2 2 0 0 1 4 0v2z" strokeLinecap="round"/>
    <path d="M20 28a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4h-2z" strokeLinecap="round"/>
  </svg>
);

const tools = [
  { name: 'FIGMA',        icon: '/icons/figma.png',       alt: 'Figma' },
  { name: 'WEBFLOW',      icon: '/icons/webflow.png',     alt: 'Webflow' },
  { name: 'ADOBE XD',     icon: '/icons/adobe-xd.png',    alt: 'Adobe XD' },
  { name: 'FRAMER',       icon: '/icons/framer.png',      alt: 'Framer' },
  { name: 'PHOTOSHOP',    icon: '/icons/photoshop.png',   alt: 'Photoshop' },
  { name: 'NOTION',       icon: '/icons/notion.png',      alt: 'Notion' },
  { name: 'ILLUSTRATOR',  icon: '/icons/illustrator.png', alt: 'Illustrator' },
  { name: 'SLACK',        icon: '/icons/slack.png',       alt: 'Slack' },
];

const projects = [
  {
    num: '01',
    name: 'VELVET STUDIO',
    category: 'Branding & Web Design',
    tags: ['BRANDING', 'WEB DESIGN', 'UI/UX'],
  },
  {
    num: '02',
    name: 'AURORA SHOP',
    category: 'E-Commerce Design',
    tags: ['UI/UX', 'E-COMMERCE', 'WEB DESIGN'],
  },
  {
    num: '03',
    name: 'MINDSPACE',
    category: 'Landing Page Design',
    tags: ['LANDING PAGE', 'UI/UX', 'WEB DESIGN'],
  },
];

const steps = [
  { num: '01', title: 'DISCOVER',  desc: 'Understanding your goals,\naudience and vision.' },
  { num: '02', title: 'DEFINE',    desc: 'Research, analysis and\nstrategy development.' },
  { num: '03', title: 'DESIGN',    desc: 'Crafting wireframes,\nlayouts and visual UI.' },
  { num: '04', title: 'DEVELOP',   desc: 'Bringing the design to life\nwith clean, responsive code.' },
  { num: '05', title: 'DELIVER',   desc: 'Testing, optimization and\nlaunch with care.' },
];


export default function WorkSection() {
  return (
    <section className="work-section">

      {/* ────────────────────────────────────────────────────────────
          LAYER 1 — DECORATIVE BACKGROUND
          Independent background layer. Uses absolute positioning and
          does NOT participate in the Portfolio Panel layout.
      ──────────────────────────────────────────────────────────── */}
      <div className="work-bg-layer" aria-hidden="true">
        {/* Left decorative flower */}
        <div className="work-bg-flower">
          <div className="work-bg-flower-placeholder" />
        </div>

        {/* Top-left decorative flower (flower2.png) — anchored to top-left corner behind panel */}
        <img
          src={flower2Img}
          alt=""
          className="work-bg-flower-topleft"
        />

        {/* Right continuous decorative flower (behind Hero & Portfolio Panel) */}
        <img
          src={flowerImg}
          alt=""
          className="work-bg-flower-right"
        />
      </div>

      {/* ────────────────────────────────────────────────────────────
          LAYER 2 — PORTFOLIO PANEL
          Independent container for Selected Projects, My Process, and
          Tools I Use. Repositionable without moving Layer 1.
      ──────────────────────────────────────────────────────────── */}
      <div className="portfolio-panel">

      {/* ── ROW 1 — SELECTED PROJECTS ── */}
      <div className="projects-block">

        {/* Section header */}
        <div className="projects-header">
          <span className="section-label">SELECTED PROJECTS <span className="star">✦</span></span>
          <span className="view-all">VIEW ALL PROJECTS →</span>
        </div>

        {/* Project cards grid */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={p.num}>
              {/* Card header */}
              <div className="card-meta">
                <span className="card-num">{p.num}</span>
                <div>
                  <div className="card-name">{p.name}</div>
                  <div className="card-category">{p.category}</div>
                </div>
              </div>

              {/* Placeholder image */}
              <div className="card-image-wrap">
                <div className="card-image-placeholder">
                  <span className="placeholder-label">Project Preview</span>
                </div>
              </div>

              {/* Tags */}
              <div className="card-tags">
                {p.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ROW 2 — PROCESS + TOOLS ── */}
      <div className="bottom-row">

        {/* ── LEFT: My Process ── */}
        <div className="process-block">
          <div className="process-header">
            <span className="section-label">MY PROCESS <span className="star">✦</span></span>
          </div>

          <div className="process-body">
            {/* Steps list */}
            <div className="steps-list">
              {steps.map(s => (
                <div className="step-item" key={s.num}>
                  <span className="section-number step-num">{s.num}</span>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flower + quote column (large thin arc + flower3.png + quote) */}
            <div className="process-flower-col">
              {/* Large thin circular arc (replaces straight vertical divider) */}
              <div className="process-arc" aria-hidden="true" />

              {/* Decorative floating flower (flower3.png) */}
              <img
                src={flower3Img}
                alt=""
                className="process-flower-img"
              />

              {/* Quote text below flower, aligned slightly left of flower center */}
              <p className="process-quote">
                A thoughtful<br />
                process for<br />
                meaningful<br />
                results.
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Tools I Use ── */}
        <div className="tools-block">
          <div className="tools-header">
            <span className="section-label">TOOLS I USE <span className="star">✦</span></span>
          </div>

          <div className="tools-grid">
            {tools.map(({ name, icon, alt }) => (
              <div className="tool-card" key={name}>
                <div className="tool-icon-placeholder">
                  <img
                    src={icon}
                    alt={alt}
                    className="tool-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="tool-name">{name}</span>
              </div>
            ))}
          </div>

          <div className="tools-footer">
            &amp; MORE GREAT TOOLS
          </div>
        </div>

      </div>

      <FinalSection />

      </div>{/* end .portfolio-panel */}
    </section>
  );
}
