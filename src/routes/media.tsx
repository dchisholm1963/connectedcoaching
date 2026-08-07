import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/media')({
  component: MediaPage,
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
    videoId: 'HuFDzccEo1g',
    type: 'Podcast Interview',
  },
  {
    title: 'Donna Chisholm on Relational Healing',
    platform: 'Bend Health Guide',
    date: '2024',
    videoId: 'M9NdDo4hNp8',
    type: 'Video Interview',
  },
  {
    title: 'Grief & Loss',
    platform: 'Healthy Happy Hour',
    date: 'June 23, 2023',
    videoId: 'Vhk5rjVLy80',
    type: 'Podcast Episode',
  },
  {
    title: 'Belonging & Authenticity',
    platform: 'Connected Coaching Webinar',
    date: 'August 4, 2023',
    videoId: 's8-YlIfFHvE',
    type: 'Webinar',
  },
]

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
            {mediaItems.map((item, i) => (
              <div
                key={i}
                className="cc-media-card"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="cc-media-thumb" style={{ background: 'none', padding: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
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
                </div>
              </div>
            ))}
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
