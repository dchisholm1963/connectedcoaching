import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/why-work-with-me')({
  component: WhyWorkWithMePage,
  head: () => ({
    meta: [{ title: 'Why Work With Donna — Connected Coaching' }],
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

const outcomes = [
  {
    title: 'A Transformed Relationship with Yourself',
    body: 'Develop a kinder, more spacious relationship with your own inner life — your thoughts, emotions, and needs — as the foundation for healthier connections with others.',
  },
  {
    title: 'A Fearless Approach to Connection',
    body: 'Move through the world with greater openness and courage in relationship, no longer held back by fear of rejection, abandonment, or not being enough.',
  },
  {
    title: 'Respond Rather Than React',
    body: 'Cultivate the capacity to pause and choose your response — rather than being swept away by habitual, defensive, or reactive patterns under stress.',
  },
  {
    title: 'Confident, Clear Communication',
    body: 'Learn to express your needs, feelings, and boundaries with clarity, care, and confidence — even in difficult conversations.',
  },
  {
    title: 'A Deep Sense of Belonging',
    body: 'Experience what it feels like to truly belong — to yourself, to your relationships, and to the wider world around you.',
  },
  {
    title: 'Grace Over Self-Criticism',
    body: "Replace the inner critic's voice with something softer and truer — a capacity for self-compassion that becomes the ground for genuine growth.",
  },
  {
    title: 'Full Acceptance of Your Whole Self',
    body: 'Integrate the parts of yourself that have felt too much, too little, or simply too different — and arrive at a genuine sense of wholeness.',
  },
  {
    title: 'Meeting Difficult Emotions with Curiosity',
    body: 'Develop the inner resources to be with challenging feelings — grief, anger, fear — with curiosity and care rather than avoidance or overwhelm.',
  },
]

const testimonials = [
  {
    name: 'Diane',
    quote:
      'Working with Donna completely transformed how I show up in my relationships. She has a rare gift for helping you see your own patterns with compassion rather than judgment. I came in feeling chronically disconnected and left feeling like I finally understood myself at a level I never had before.',
  },
  {
    name: 'Marni',
    quote:
      'Donna creates the safest, most nurturing space I have ever experienced in any therapeutic or coaching relationship. Her deep listening and gentle attunement helped me heal wounds I had carried for decades. The way she holds presence changed something fundamental in how I relate to myself and to the people I love.',
  },
  {
    name: 'Alan',
    quote:
      'I was honestly skeptical of coaching before I found Donna. But her approach is grounded, practical, and quietly profound. She helped me understand how my nervous system was driving my reactions in conflict and gave me real, embodied tools to respond differently. My marriage is stronger than it has ever been.',
  },
]

function WhyWorkWithMePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useFadeIn(pageRef as React.RefObject<HTMLElement>)

  return (
    <div ref={pageRef}>
      {/* Header */}
      <section
        className="cc-section"
        style={{
          background: 'linear-gradient(150deg, var(--cream) 0%, var(--cream-mid) 100%)',
          padding: '5rem 2rem 4rem',
        }}
      >
        <div className="cc-section-inner">
          <p className="cc-section-eyebrow">Outcomes</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Why Work With Donna
          </h1>
          <p className="cc-section-lead" style={{ maxWidth: '620px' }}>
            What clients take away from working with Donna goes beyond information
            or insight — it becomes a lived, embodied shift in how they relate.
          </p>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">What You Can Expect</p>
            <h2 className="cc-section-title">Client Outcomes</h2>
          </div>
          <div className="cc-outcomes-grid cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {outcomes.map((item, i) => (
              <div key={i} className="cc-outcome-item">
                <div className="cc-outcome-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote Banner */}
      <section
        className="cc-section"
        style={{
          background: 'linear-gradient(135deg, var(--sage-dark) 0%, #4a6850 100%)',
          padding: '5rem 2rem',
        }}
      >
        <div className="cc-section-inner cc-fade-in">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--white-warm)',
                margin: '0 0 1.25rem',
                lineHeight: 1.5,
              }}
            >
              "The quality of our lives depends on the quality of our relationships."
            </p>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--sage-light)',
              }}
            >
              The foundation of Connected Coaching
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="cc-section bg-cream">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '1rem' }}>
            <p className="cc-section-eyebrow">Client Voices</p>
            <h2 className="cc-section-title">What Clients Say</h2>
          </div>
          <div className="cc-testimonials cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="cc-testimonial">
                <blockquote>"{t.quote}"</blockquote>
                <p className="cc-testimonial-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-section bg-cream-light" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <div className="cc-section-inner cc-fade-in">
          <h2 className="cc-section-title" style={{ margin: '0 auto 1rem' }}>
            Begin Your Journey
          </h2>
          <p className="cc-section-lead" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            A discovery call is the natural first step — a free conversation to see
            if working together feels like the right fit.
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
