import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [{ title: 'About Donna — Connected Coaching' }],
  }),
})

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return
    const els = ref.current.querySelectorAll<HTMLElement>('.cc-fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useFadeIn(pageRef as React.RefObject<HTMLElement>)

  return (
    <div ref={pageRef}>
      {/* Page Header */}
      <section
        className="cc-section"
        style={{
          background: 'linear-gradient(150deg, var(--cream) 0%, var(--cream-mid) 100%)',
          padding: '5rem 2rem 4rem',
        }}
      >
        <div className="cc-section-inner">
          <p className="cc-section-eyebrow">About</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Donna Chisholm
          </h1>
          <p className="cc-section-lead" style={{ maxWidth: '640px' }}>
            Relational Coach · MSC Teacher · Physical Therapist · RYT 200 · Authentic Relating Facilitator
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-about-grid">
            {/* Photo */}
            <div className="cc-fade-in">
              <div
                className="cc-about-photo"
                aria-label="[PHOTO OF DONNA]"
              >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 52c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span style={{ textAlign: 'center' }}>Photo of Donna</span>
              </div>
            </div>

            {/* Bio text */}
            <div className="cc-fade-in" style={{ transitionDelay: '0.1s' }}>
              <p className="cc-section-eyebrow">Her Story</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 1.5rem', fontWeight: 400 }}>
                Healing That Begins from Within
              </h2>
              <div style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--warm-mid)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ margin: 0 }}>
                  Donna's path to relational coaching was forged through her own lived experience.
                  She draws from childhood trauma, the profound losses of family members to addiction
                  and suicide, the demands of single parenting, the grief of divorce, major career
                  change, and significant health struggles — a life that has required her to find
                  her way back to herself again and again.
                </p>
                <p style={{ margin: 0 }}>
                  These experiences didn't just prepare her for this work — they are the work.
                  They are the reason she understands the complexity of human relationships at a
                  depth that cannot be taught from a textbook. Every challenge she has moved
                  through has deepened her capacity to be present with others in theirs.
                </p>
                <p style={{ margin: 0 }}>
                  As a licensed Physical Therapist since 1989 (Texas Women's University), Donna
                  began her career in the body. Over time, she followed her curiosity into the
                  territory of the mind and heart — training in mindfulness, self-compassion,
                  somatic practices, collective trauma work, and relational coaching. Today, she
                  weaves all of these threads into a uniquely integrative practice.
                </p>
                <p style={{ margin: 0 }}>
                  Donna is also a Highly Sensitive Person (HSP). Far from a limitation, she has
                  come to understand her sensitivity as a profound gift — one that allows her to
                  attune to the subtle currents in a conversation, to hold space with extraordinary
                  care, and to meet each client exactly where they are.
                </p>
              </div>

              <div
                className="cc-hsp-badge"
                style={{ marginTop: '1.75rem', display: 'inline-flex' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.5l4.2-.9L8 1z" fill="var(--terracotta)" />
                </svg>
                <span>High Sensory Person (HSP) — her superpower</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section
        className="cc-section"
        style={{ background: 'var(--cream)', padding: '5rem 2rem' }}
      >
        <div className="cc-section-inner cc-fade-in">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="cc-pullquote">
              <p>
                "What I offer my clients is deep presence, listening, and attunement
                practices in guiding them through relational challenges."
              </p>
              <cite>— Donna Chisholm, Connected Coaching</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '3rem' }}>
            <p className="cc-section-eyebrow">Training & Credentials</p>
            <h2 className="cc-section-title">An Integrated Lineage</h2>
            <p className="cc-section-lead">
              Donna's training spans multiple traditions and modalities, unified by a
              commitment to embodied, compassionate, relational healing.
            </p>
          </div>
          <div className="cc-creds-grid cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {[
              { title: 'Mindfulness Meditation Teaching', sub: 'Banyan · Tara Brach · Certified Mindfulness Meditation Teacher' },
              { title: 'Relational Coaching', sub: 'Inluminance · Willow McIntosh · Certified Relational Coach' },
              { title: 'Trauma Healing', sub: 'Thomas Hübl · Collective Trauma Integration Process' },
              { title: 'Mindfulness & Self-Compassion', sub: 'Kristen Neff & Chris Germer · Mindful Self-Compassion (MSC) Teacher' },
              { title: 'Embodiment & Somatic Practices', sub: 'Body-centered relational work · Registered Yoga Teacher (RYT 200)' },
              { title: 'Physical Therapy', sub: 'Texas Women\'s University · 1989 · Licensed Physical Therapist' },
            ].map((c, i) => (
              <div key={i} className="cc-cred-item">
                <div className="cc-cred-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="cc-cred-title">{c.title}</h3>
                <p className="cc-cred-sub">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-section bg-cream" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <div className="cc-section-inner cc-fade-in">
          <h2 className="cc-section-title" style={{ margin: '0 auto 1rem' }}>
            Ready to Begin?
          </h2>
          <p
            className="cc-section-lead"
            style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}
          >
            A discovery call is a free, no-pressure conversation to explore whether
            working together is a good fit.
          </p>
          <a
            href="mailto:dchisholm114@gmail.com?subject=Discovery Call Request"
            className="btn-primary"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </div>
  )
}
