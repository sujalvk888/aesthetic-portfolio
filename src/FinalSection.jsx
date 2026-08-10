import React from 'react';
import './FinalSection.css';
import flower4Img from './assets/flower4.png';
import flower5Img from './assets/flower5.png';

const highlights = [
  {
    num: '01',
    title: ['PATENT', 'APPLICATION'],
    desc: 'Published patent application demonstrating innovation, problem-solving and practical technical thinking with real-world impact.',
    icon: '/icons/patent.png',
    badge: 'PATENT PUBLISHED',
  },
  {
    num: '02',
    title: ['IEEE &', 'CERTIFICATIONS'],
    desc: 'Presented research at an IEEE Conference and earned professional certifications to strengthen technical expertise and practical knowledge.',
    icon: '/icons/ieee.png',
    badgeList: [
      'IEEE Conference Presentation',
      '3 Professional Certifications',
    ],
  },
  {
    num: '03',
    title: ['INTERNSHIP', 'EXPERIENCE'],
    desc: 'Completed a professional internship where I contributed to real-world projects and gained hands-on experience in modern development practices.',
    icon: '/icons/internship.png',
    badge: 'INTERNSHIP COMPLETED',
  },
];

export default function FinalSection() {
  return (
    <>
      {/* ── ROW 3 — CAREER HIGHLIGHTS ── */}
      <div className="highlights-block">
        <div className="highlights-header">
          <span className="section-label">CAREER HIGHLIGHTS <span className="star">✦</span></span>
          <span className="view-all">VIEW ALL HIGHLIGHTS →</span>
        </div>

        <div className="highlights-grid">
          {highlights.map((h) => (
            <div className="highlight-card" key={h.num}>
              {/* Top row: number + icon with ring */}
              <div className="highlight-top">
                <span className="section-number highlight-num">{h.num}</span>
                <div className="highlight-ring-wrap">
                  <div className="highlight-ring" aria-hidden="true" />
                  <img
                    className="highlight-flower"
                    src={flower4Img}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="highlight-icon-wrap">
                    <img src={h.icon} alt="" className="highlight-icon" />
                  </div>
                </div>
              </div>

              {/* Title — two lines */}
              <h3 className="highlight-title">
                {h.title[0]}<br />{h.title[1]}
              </h3>

              {/* Decorative divider */}
              <div className="highlight-divider" />

              <p className="highlight-desc">{h.desc}</p>

              {h.badgeList ? (
                <div className="highlight-badge-list">
                  {h.badgeList.map((item, idx) => (
                    <div className="highlight-badge-item" key={idx}>
                      <span className="bullet">•</span> {item}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="highlight-badge">
                  <span className="badge-star">✦</span> {h.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── ROW 4 — BOTTOM INFORMATION AREA / CONTACT ── */}
      <div className="contact-block">
        {/* Column 1 */}
        <div className="contact-col contact-col-1">
          <h2 className="contact-heading-large">LET&apos;S CREATE SOMETHING</h2>
          <div className="contact-signature">Amazing</div>
        </div>

        {/* Column 2 */}
        <div className="contact-col contact-col-2">
          <div className="contact-subheading">I&apos;M CURRENTLY OPEN FOR NEW PROJECTS</div>
          <p className="contact-text">
            Let&apos;s build something impactful and beautiful together.
          </p>
          <button className="contact-btn" type="button">
            SEND ME A MESSAGE <span style={{ fontSize: '15px', marginLeft: '6px' }}>✦</span>
          </button>
        </div>

        {/* Column 3 */}
        <div className="contact-col contact-col-3">
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon-wrap">
                <img src="/icons/email.png" alt="Email" className="contact-icon" />
              </div>
              <div className="contact-item-info">
                <span className="contact-item-label">EMAIL</span>
                <span className="contact-item-value">srushti@example.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="contact-icon" />
              </div>
              <div className="contact-item-info">
                <span className="contact-item-label">LINKEDIN</span>
                <span className="contact-item-value">linkedin.com/in/username</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <img src="/icons/github.png" alt="GitHub" className="contact-icon" />
              </div>
              <div className="contact-item-info">
                <span className="contact-item-label">GITHUB</span>
                <span className="contact-item-value">github.com/username</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <img src="/icons/location.png" alt="Location" className="contact-icon" />
              </div>
              <div className="contact-item-info">
                <span className="contact-item-label">LOCATION</span>
                <span className="contact-item-value">Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="contact-col contact-col-4">
          <div className="contact-portrait-wrap">
            <img
              src="/images/footer-profile.png"
              alt="Srushti G V"
              className="contact-portrait"
            />
          </div>
        </div>
      </div>

      {/* ── ROW 5 — BOTTOM FOOTER STRIP ── */}
      <div className="portfolio-footer-strip">
        <span>THANK YOU FOR VISITING <span className="star">✦</span></span>
      </div>

      {/* ── DECORATIVE FLOWER (TOP LAYER) — BOTTOM-RIGHT CORNER ── */}
      <img
        src={flower5Img}
        alt=""
        aria-hidden="true"
        className="footer-flower-overlay"
      />
    </>
  );
}
