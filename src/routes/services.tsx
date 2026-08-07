import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="cc-form-success">
        <p>Thank you for reaching out. Donna will be in touch with you soon.</p>
      </div>
    )
  }

  return (
    <form className="cc-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="cc-form-row">
        <div className="cc-form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="cc-form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="cc-form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          placeholder="Tell Donna a bit about what brings you here and what you're hoping for..."
        />
      </div>
      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

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

function ServicesPage() {
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
          <p className="cc-section-eyebrow">Offerings</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Services &amp; Classes
          </h1>
          <div
            style={{
              borderLeft: '3px solid var(--terracotta)',
              paddingLeft: '1.5rem',
              marginTop: '1.5rem',
              maxWidth: '640px',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--warm-mid)',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              "Challenges are created in relationships, and can be healed in relationships."
            </p>
          </div>
        </div>
      </section>

      {/* Class Series */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">Group Classes</p>
            <h2 className="cc-section-title">Upcoming Class Series</h2>
            <p className="cc-section-lead">
              Small-group classes combining mindfulness, relational practice, and
              community. Limited to 6–8 participants to ensure depth of connection.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
            className="cc-fade-in"
          >
            {/* Connection & Belonging */}
            <div className="cc-class-card">
              <div className="cc-service-tag">New Series</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', margin: '0 0 0.5rem', fontWeight: 500 }}>
                Connection &amp; Belonging Class Series
              </h3>
              <ul className="cc-service-meta">
                <li>Ongoing Sundays</li>
                <li>4:00–5:30 PM PST</li>
                <li>Remote (online)</li>
                <li>6–8 participants</li>
              </ul>
              <div className="cc-price">$100 / 4 classes</div>
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="mailto:dchisholm114@gmail.com?subject=Connection & Belonging Class: Registration"
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.15)',
                    color: 'var(--white-warm)',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  Register by Email
                </a>
              </div>
            </div>

            {/* Mindfulness for Anxiety */}
            <div className="cc-class-card" style={{ background: 'linear-gradient(135deg, var(--terracotta) 0%, #a8593f 100%)' }}>
              <div className="cc-service-tag">New Series</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', margin: '0 0 0.5rem', fontWeight: 500 }}>
                Mindfulness For Anxiety Series
              </h3>
              <ul className="cc-service-meta">
                <li>Ongoing Tuesdays</li>
                <li>4:00–5:30 PM PST</li>
                <li>Remote (online)</li>
                <li>6–8 participants</li>
              </ul>
              <div className="cc-price">$100 / 4 classes</div>
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="mailto:dchisholm114@gmail.com?subject=Mindfulness for Anxiety Series: Registration"
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.15)',
                    color: 'var(--white-warm)',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  Register by Email
                </a>
              </div>
            </div>

            {/* Banyan Classes */}
            <div className="cc-service-card">
              <div className="cc-service-tag">Ongoing</div>
              <h3>Banyan Meditation Classes</h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--warm-muted)', lineHeight: 1.75, margin: '0.5rem 0 1.5rem' }}>
                Donna teaches regularly through Banyan, a community of mindfulness teachers
                in the tradition of Tara Brach and Jack Kornfield. Visit Banyan's website for
                current class schedule and registration.
              </p>
              <a
                href="https://banyantogether.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem' }}
              >
                Visit Banyan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="cc-section bg-cream">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">Private Sessions</p>
            <h2 className="cc-section-title">One-on-One &amp; Relational Coaching</h2>
            <p className="cc-section-lead">
              Private sessions offer a confidential, deeply attentive space for individual
              healing and growth, couples work, or family relational repair.
            </p>
          </div>
          <div className="cc-services-grid cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="cc-service-card">
              <div className="cc-service-tag">Individual</div>
              <h3>Individual Sessions</h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--warm-muted)', lineHeight: 1.75, margin: '0.5rem 0' }}>
                For individuals seeking to transform their relationship with themselves and
                others. Explores patterns, deepens self-awareness, and builds relational skills.
              </p>
              <div className="cc-price">$120 / session</div>
              <a
                href="mailto:dchisholm114@gmail.com?subject=Individual Session - Registration Inquiry"
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem', marginTop: '1rem', display: 'inline-block' }}
              >
                Register
              </a>
            </div>
            <div className="cc-service-card">
              <div className="cc-service-tag">Couples</div>
              <h3>Couples Sessions</h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--warm-muted)', lineHeight: 1.75, margin: '0.5rem 0' }}>
                For partners navigating communication challenges, disconnection, or conflict.
                Builds shared language, attunement practices, and pathways to deeper intimacy.
              </p>
              <div className="cc-price">$120 / session</div>
              <a
                href="mailto:dchisholm114@gmail.com?subject=Couples Session - Registration Inquiry"
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem', marginTop: '1rem', display: 'inline-block' }}
              >
                Register
              </a>
            </div>
            <div className="cc-service-card">
              <div className="cc-service-tag">Family</div>
              <h3>Family Sessions</h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--warm-muted)', lineHeight: 1.75, margin: '0.5rem 0' }}>
                For families looking to heal relational ruptures, improve communication, and
                create a foundation of safety, belonging, and authentic connection.
              </p>
              <div className="cc-price">$120 / session</div>
              <a
                href="mailto:dchisholm114@gmail.com?subject=Family Session - Registration Inquiry"
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem', marginTop: '1rem', display: 'inline-block' }}
              >
                Register
              </a>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--warm-muted)', marginTop: '2rem', fontWeight: 300, fontStyle: 'italic' }}>
            Scholarships are available on an individual basis. Reach out to discuss.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }} className="cc-fade-in">
            <a
              href="https://calendly.com/connectedcoachingdc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
            className="cc-fade-in"
          >
            <div>
              <p className="cc-section-eyebrow">Get in Touch</p>
              <h2 className="cc-section-title">Start the Conversation</h2>
              <p className="cc-section-lead">
                Not sure where to start? Send a message and Donna will get back to you
                personally. There's no commitment involved; just a conversation.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--warm-muted)', margin: 0, lineHeight: 1.7 }}>
                  You can also reach Donna directly at:<br />
                  <a
                    href="mailto:dchisholm114@gmail.com"
                    style={{ color: 'var(--terracotta)', fontWeight: 400 }}
                  >
                    dchisholm114@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
