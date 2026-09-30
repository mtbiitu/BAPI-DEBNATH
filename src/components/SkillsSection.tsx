import React from 'react';
import { SKILLS } from '../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <div id="section-skills">
      <section
        id="skills"
        className="skills-section"
        style={{ padding: '60px 20px 80px', background: 'transparent' }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="section-header center-text">
              <h2>Core Competencies</h2>
            </div>
            <p
              style={{
                marginTop: 8,
                color: '#64748b',
                fontSize: '0.96rem',
                maxWidth: 520,
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.5,
              }}
            >
              From hardware to software — the tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="skills-grid-container">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="skill-card-mobile neomorphic-skill-card"
                tabIndex={0}
              >
                <div
                  className="skill-icon-wrap"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: skill.color,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.25), 2px 4px 10px rgba(150, 168, 192, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <i className={`${skill.icon} text-xl`} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, width: '100%' }}>
                  <div
                    className="skill-title"
                    style={{
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: '#1D1D1F',
                      letterSpacing: '-0.015em',
                      marginBottom: 3,
                      lineHeight: 1.25,
                    }}
                  >
                    {skill.title}
                  </div>
                  <div
                    className="skill-desc"
                    style={{
                      fontSize: '0.78rem',
                      color: '#64748b',
                      fontWeight: 500,
                      lineHeight: 1.38,
                    }}
                  >
                    {skill.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
