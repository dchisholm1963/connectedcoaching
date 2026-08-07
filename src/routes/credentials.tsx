import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/credentials')({
  component: CredentialsPage,
  head: () => ({
    meta: [{ title: 'Credentials | Connected Coaching' }],
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

const credentials = [
  {
    num: '01',
    title: 'Mindfulness Meditation Teaching',
    items: [
      {
        text: 'Teacher at Banyan, founded by Tara Brach and Jack Kornfield. January 2024 — Present.',
        link: { href: 'https://banyantogether.com/teachers/tfnJUOPJjm21mdmA4O1U', label: 'View teacher profile' },
      },
    ],
  },
  {
    num: '02',
    title: 'Relational Coaching',
    items: [
      {
        text: 'Graduate of High-Sensory Coaching with Willow McIntosh, founder of Inluminance. Dec 2022.',
        link: { href: 'https://www.youtube.com/watch?v=tiMubaVIizg&t=231s', label: 'View full interview with Willow McIntosh' },
      },
    ],
  },
  {
    num: '03',
    title: 'Trauma Healing and Integration',
    items: [
      {
        text: 'Presenter at local Healing Trauma Conference, "Understanding Our Amazing Nervous System as a Tool for Healing Trauma And Disease." 2019.',
      },
      {
        text: "Graduate of Conscious Healing, Thomas Hübl's year-long intensive, with continuous study. 2019.",
      },
      {
        text: 'Ongoing independent research and study of healing trauma with an emphasis on Embodiment Practices and Nervous System Education and Regulation.',
      },
    ],
  },
  {
    num: '04',
    title: 'Mindfulness & Self-Compassion (MSC)',
    items: [
      {
        text: 'Graduate of year-long MSC Program by Kristen Neff, PhD and Chris Germer, PhD.',
      },
      {
        text: 'Current participant in numerous ongoing summits focusing on this beloved topic. Attended too many to list! 2018 — Present.',
      },
      {
        text: 'Ongoing independent research and study.',
      },
    ],
  },
  {
    num: '05',
    title: 'Embodiment & Somatic Practices',
    items: [
      {
        text: 'Registered Yoga Teacher (RYT) 200-Hour Program with Radiant Health Yoga. 2016.',
      },
      {
        text: 'Participant in Neurosomatic Mindfulness Program with Heart Mind Institute with Fleet Maull, PhD. 2020.',
      },
      {
        text: 'Participant in numerous Somatic and Embodiment Summits. Again, too many to list! 2016 — Present.',
      },
    ],
  },
  {
    num: '06',
    title: 'Physical Therapy & Nervous System Education',
    items: [
      {
        text: '1989 Graduate of Texas Women\'s University in Physical Therapy, specializing in neurological deficits, geriatric medicine, and rehabilitation.',
      },
      {
        text: 'Current participant in numerous ongoing summits with an emphasis on the Importance of Nervous System Regulation to Heal Trauma and Disease. 2017 — Present.',
      },
      {
        text: 'Independent research and study.',
      },
    ],
  },
]

function CredentialsPage() {
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
          <p className="cc-section-eyebrow">Training & Education</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Credentials
          </h1>
          <p className="cc-section-lead" style={{ maxWidth: '620px' }}>
            Donna's training spans multiple traditions and modalities, unified by a
            commitment to embodied, compassionate, relational healing.
          </p>
        </div>
      </section>

      {/* Credentials List */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            className="cc-fade-in"
          >
            {credentials.map((cred) => (
              <div
                key={cred.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '4rem 1fr',
                  gap: '1.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid var(--cream-border, rgba(180,160,130,0.2))',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: 'var(--terracotta)',
                    fontWeight: 400,
                    paddingTop: '0.2rem',
                  }}
                >
                  {cred.num}
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                      fontWeight: 500,
                      color: 'var(--warm-dark)',
                      margin: '0 0 1rem',
                    }}
                  >
                    {cred.title}
                  </h2>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {cred.items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 300,
                          color: 'var(--warm-mid)',
                          lineHeight: 1.75,
                          paddingLeft: '1.25rem',
                          borderLeft: '2px solid var(--terracotta)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.35rem',
                        }}
                      >
                        <span>{item.text}</span>
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: 'var(--terracotta)',
                              fontWeight: 400,
                              fontSize: '0.82rem',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                            }}
                          >
                            {item.link.label}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
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
          <p className="cc-section-lead" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            A discovery call is a free, no-pressure conversation to explore whether
            working together is a good fit.
          </p>
          <a
            href="https://calendly.com/connectedcoachingdc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </div>
  )
}
