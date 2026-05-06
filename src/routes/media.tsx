import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/media')({
  component: MediaPage,
  head: () => ({
    meta: [{ title: 'Media — Connected Coaching' }],
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

const mediaItems = [
  {
    title: 'How To Transform Your Mind & Relationships',
    platform: 'Janice Debo Podcast',
    date: 'March 27, 2025',
    url: 'https://youtube.com/watch?v=HuFDzccEo1g',
    type: 'Podcast Interview',
  },
  {
    title: 'Donna Chisholm on Relational Healing',
    platform: 'Bend Health Guide',
    date: '2024',
    url: 'https://youtube.com/watch?v=M9NdDo4hNp8',
    type: 'Video Interview',
  },
  {
    title: 'Grief & Loss',
    platform: 'Healthy Happy Hour',
    date: 'June 23, 2023',
    url: 'https://youtube.com/watch?v=Vhk5rjVLy80',
    type: 'Podcast Episode',
  },
  {
    title: 'Grief & Loss',
    platform: 'Connected Coaching Webinar',
    date: 'August 4, 2023',
    url: null,
    type: 'Webinar',
  },
  {
    title: 'Belonging & Authenticity',
    platform: 'Connected Coaching Webinar',
    date: 'August 4, 2023',
    url: 'https://youtube.com/watch?v=s8-YlIfFHvE',
    type: 'Webinar',
  },
]

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.5l11 6.5-11 6.5V5.5z" fill="white" />
    </svg>
  )
}

function MediaPage() {
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
          <p className="cc-section-eyebrow">Appearances & Talks</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Media
          </h1>
          <p className="cc-section-lead" style={{ maxWidth: '580px' }}>
            Podcast interviews, webinars, and community conversations where Donna
            shares her perspectives on relationships, mindfulness, grief, and belonging.
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-media-grid cc-fade-in">
            {mediaItems.map((item, i) => {
              const card = (
                <div
                  className="cc-media-card"
                  key={i}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="cc-media-thumb">
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, hsl(${100 + i * 25}, 25%, 72%) 0%, hsl(${120 + i * 20}, 30%, 55%) 100%)`,
                        opacity: 0.6,
                      }}
                    />
                    {item.url && (
                      <div className="cc-media-play">
                        <PlayIcon />
                      </div>
                    )}
                    {!item.url && (
                      <div
                        style={{
                          position: 'relative',
                          background: 'rgba(44,31,24,0.3)',
                          padding: '0.5rem 1rem',
                          borderRadius: '2px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Jost, sans-serif',
                            fontSize: '0.7rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(250,247,240,0.8)',
                          }}
                        >
                          Recording Unavailable
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="cc-media-info">
                    <div
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontSize: '0.65rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--terracotta)',
                        marginBottom: '0.4rem',
                        fontWeight: 400,
                      }}
                    >
                      {item.type}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.platform}</p>
                    <div className="cc-media-date">{item.date}</div>
                    {item.url && (
                      <div style={{ marginTop: '1.25rem' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontFamily: 'Jost, sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--sage-dark)',
                            fontWeight: 400,
                          }}
                        >
                          Watch on YouTube
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )

              return item.url ? (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {card}
                </a>
              ) : (
                <div key={i}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter/Invite */}
      <section
        className="cc-section bg-cream"
        style={{ padding: '5rem 2rem', textAlign: 'center' }}
      >
        <div className="cc-section-inner cc-fade-in">
          <p className="cc-section-eyebrow" style={{ textAlign: 'center' }}>Stay Connected</p>
          <h2
            className="cc-section-title"
            style={{ margin: '0 auto 1rem', textAlign: 'center' }}
          >
            Want to Be Notified of Upcoming Events?
          </h2>
          <p
            className="cc-section-lead"
            style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}
          >
            Reach out to get on Donna's mailing list for new class announcements,
            webinars, and community events.
          </p>
          <a
            href="mailto:dchisholm114@gmail.com?subject=Please add me to your mailing list"
            className="btn-primary"
          >
            Join the Mailing List
          </a>
        </div>
      </section>
    </div>
  )
}
