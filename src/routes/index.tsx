import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [{ title: 'Connected Coaching | Donna Chisholm' }],
  }),
})

const credentials = [
  {
    title: 'Mindfulness Meditation',
    sub: 'Banyan / Tara Brach · Certified Teacher',
  },
  {
    title: 'Relational Coaching',
    sub: 'Inluminance / Willow McIntosh · Certified Practitioner',
  },
  {
    title: 'Trauma Healing',
    sub: 'Thomas Hübl · Collective Trauma Integration',
  },
  {
    title: 'Mindfulness & Self-Compassion',
    sub: 'Kristen Neff & Chris Germer · MSC Teacher',
  },
  {
    title: 'Embodiment & Somatic Practices',
    sub: 'Body-centered relational work · RYT 200',
  },
  {
    title: 'Physical Therapy',
    sub: 'Texas Women\'s University · 1989 · Licensed PT',
  },
]

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return
    const els = ref.current.querySelectorAll<HTMLElement>('.cc-fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}


function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useFadeIn(pageRef as React.RefObject<HTMLElement>)

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="cc-hero">
        <div className="cc-hero-content">
          <p className="cc-hero-eyebrow">Bend, Oregon · Remote Practice</p>
          <h1>
            Strengthening <em>connection</em> in relationships.
          </h1>
          <p className="cc-hero-sub">
            A private practice designed for individuals, couples, and families ready
            to transform how they relate, to themselves and to the people they love.
          </p>
          <div className="cc-hero-actions">
            <a
              href="mailto:dchisholm114@gmail.com?subject=Discovery Call Request"
              className="btn-primary"
            >
              Book a Discovery Call
            </a>
            <Link to="/about" className="btn-secondary">
              Meet Donna
            </Link>
          </div>
        </div>
        <div className="cc-hero-visual">
          <div className="cc-organic-shape">
            <img src="/donna.jpg" alt="Donna Chisholm" className="cc-hero-photo" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-intro-block">
            <div className="cc-fade-in">
              <p className="cc-section-eyebrow">About the Practice</p>
              <h2 className="cc-section-title">
                Donna Chisholm
              </h2>
              <p className="cc-section-lead">
                Donna is a Relational Coach, Mindful Self-Compassion (MSC) Teacher, licensed
                Physical Therapist, Registered Yoga Teacher (RYT 200), and Authentic Relating
                Facilitator. Drawing on over three decades of clinical and personal healing work,
                she brings a rare depth of presence to every client relationship.
              </p>
              <div className="cc-hsp-badge" style={{ marginTop: '1.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.5l4.2-.9L8 1z" fill="var(--terracotta)" />
                </svg>
                <span>High Sensory Person (HSP), her superpower</span>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--warm-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                As a Highly Sensitive Person, Donna brings deep attunement, profound empathy,
                and a rare capacity for presence to her work, qualities that make her
                particularly gifted at guiding others through relational healing.
              </p>
            </div>
            <div className="cc-fade-in" style={{ transitionDelay: '0.15s' }}>
              <div className="cc-pullquote">
                <p>
                  "What I offer my clients is deep presence, listening, and attunement
                  practices in guiding them through relational challenges."
                </p>
                <cite>Donna Chisholm</cite>
              </div>
              <Link to="/about" className="btn-secondary">
                Read Donna's Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="cc-section bg-cream">
        <div className="cc-section-inner">
          <div style={{ marginBottom: '3rem' }} className="cc-fade-in">
            <p className="cc-section-eyebrow">Training & Credentials</p>
            <h2 className="cc-section-title">A Foundation Built on Depth</h2>
            <p className="cc-section-lead">
              Donna's training spans multiple lineages of healing, integrating mindfulness,
              somatic practice, relational neuroscience, and compassion-based teaching
              into a coherent, embodied approach.
            </p>
          </div>
          <div className="cc-creds-grid cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {credentials.map((c, i) => (
              <div key={i} className="cc-cred-item">
                <div className="cc-cred-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="cc-cred-title">{c.title}</h3>
                <p className="cc-cred-sub">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="cc-section"
        style={{
          background: 'linear-gradient(135deg, var(--terracotta) 0%, #a8593f 100%)',
          padding: '4rem 2rem',
        }}
      >
        <div
          className="cc-section-inner"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: 'var(--white-warm)',
                margin: '0 0 0.5rem',
                fontWeight: 400,
              }}
            >
              Challenges are created in relationships,
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontStyle: 'italic',
                color: 'rgba(250,247,240,0.8)',
                margin: 0,
                fontWeight: 300,
              }}
            >
              and can be healed in relationships.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-block',
                background: 'var(--white-warm)',
                color: 'var(--terracotta)',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.85rem 2rem',
                borderRadius: '2px',
              }}
            >
              View Services
            </Link>
            <a
              href="mailto:dchisholm114@gmail.com?subject=Discovery Call Request"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'var(--white-warm)',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.85rem 2rem',
                borderRadius: '2px',
                border: '1px solid rgba(250,247,240,0.5)',
              }}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
