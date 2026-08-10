import React from 'react';
import './HeroSection.css';
import flowerImg from './assets/flower.png';

export default function HeroSection() {
  return (
    <section className="hero-container">
      {/* 1. Header Bar */}
      <header className="top-header">
        <span>UI/UX &amp; Web Designer</span>
        <span>Creative Portfolio</span>
      </header>

      {/* 2. Hero Title */}
      <div className="hero-title-wrap">
        <h1 className="hero-title" style={{ marginTop: '-32px' }}>PORTFOLIO</h1>
      </div>

      {/* Hero Profile PNG (z-index: 2 — in front of PORTFOLIO title, behind UI content) */}
      <img
        src="/images/profile-placeholder.png"
        alt="Jalbir Kanchan"
        aria-hidden="true"
        className="hero-profile-image"
      />

      {/* 3. Content Body Grid */}
      <div className="hero-body-grid" style={{ bottom: '-22px' }}>
        {/* Left Column */}
        <div className="left-col">
          <p className="tagline">
            I DESIGN DIGITAL<br />
            EXPERIENCES THAT<br />
            INSPIRE &amp; CONNECT
          </p>

          <button className="cta-button" type="button" style={{ marginBottom: '32px', marginTop: '5px' }}>
            Available for projects <span style={{ fontSize: '18px' }}>✦</span>
          </button>

          <div className="signature">
            Jalbir Kanchan
          </div>
        </div>

        {/* Right Column */}
        <div className="right-col" style={{ top: '-42px', left: '-75px' }}>
          <p className="bio-text">
            I'm a UI/UX and Web Designer<br />
            crafting elegant, functional<br />
            and user-centered digital<br />
            experiences.
          </p>

          <div className="location-block">
            <div>
              <div style={{ marginTop: '0px', marginBottom: '2px' }}>Based in any city</div>
              <div>Working worldwide</div>
            </div>
            <svg 
              width="35" 
              height="35" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              aria-label="Globe icon"
              style={{
                border: '1px solid rgba(186, 167, 150, 0.4)',
                borderRadius: '50%',
                padding: '6px'
              }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Decorative Flower Foreground */}
      <img 
        src={flowerImg} 
        alt="" 
        aria-hidden="true"
        className="flower-overlay" 
      />
    </section>
  );
}
