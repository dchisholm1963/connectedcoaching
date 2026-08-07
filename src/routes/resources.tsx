import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/resources')({
  component: ResourcesPage,
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

const resources = [
  {
    name: 'Inluminance',
    url: 'https://inluminance.com',
    description: 'HSP Coaching with Willow McIntosh; specialist training in coaching Highly Sensitive Persons.',
    category: 'Relational Coaching',
  },
  {
    name: 'The Highly Sensitive Person',
    url: 'https://hsperson.com',
    description: 'Elaine Aron\'s foundational resource for understanding and embracing high sensitivity.',
    category: 'HSP Research',
  },
  {
    name: 'Thomas Hübl',
    url: 'https://thomashuebl.com',
    description: 'Collective and intergenerational trauma healing; a pioneering approach to trauma integration.',
    category: 'Trauma Healing',
  },
  {
    name: 'MSC Program: Mindful Self-Compassion',
    url: 'https://self-compassion.org/the-program',
    description: 'Kristen Neff\'s evidence-based self-compassion training program; the foundation of Donna\'s MSC teaching.',
    category: 'Self-Compassion',
  },
  {
    name: 'The Connection Institute',
    url: 'https://theconnectioninstitute.net',
    description: 'Dedicated to cultivating deep, authentic human connection through education and practice.',
    category: 'Connection',
  },
  {
    name: 'The Circling Institute',
    url: 'https://circlinginstitute.com',
    description: 'Guy Sengstock\'s Circling practice; a relational meditation for deepening presence and authentic relating.',
    category: 'Authentic Relating',
  },
  {
    name: 'Authentic Revolution',
    url: 'https://authrev.org',
    description: 'Sara Ness\'s global community for Authentic Relating; transformative relational practices and workshops.',
    category: 'Authentic Relating',
  },
  {
    name: 'Banyan',
    url: 'https://cloudsangha.co',
    description: 'Tara Brach & Jack Kornfield\'s online meditation community, where Donna teaches mindfulness.',
    category: 'Mindfulness',
  },
]

function ArrowIcon() {
  return (
    <svg className="cc-resource-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8.5 11.5a5 5 0 007.071 0l2-2a5 5 0 00-7.071-7.071L9 3.929" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.5 8.5a5 5 0 00-7.071 0l-2 2a5 5 0 007.071 7.071L11 16.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ResourcesPage() {
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
          <p className="cc-section-eyebrow">Further Learning</p>
          <h1 className="cc-section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Resources
          </h1>
          <p className="cc-section-lead" style={{ maxWidth: '620px' }}>
            Donna draws from a rich lineage of teachers, practices, and communities.
            These are the resources she returns to, studies with, and recommends most.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-resources-grid cc-fade-in">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cc-resource-card"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="cc-resource-icon">
                  <LinkIcon />
                </div>
                <div className="cc-resource-content">
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--terracotta)',
                      margin: '0 0 0.3rem',
                      fontWeight: 400,
                    }}
                  >
                    {r.category}
                  </p>
                  <h3>{r.name}</h3>
                  <p>{r.description}</p>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section
        className="cc-section"
        style={{
          background: 'var(--cream)',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <div className="cc-section-inner cc-fade-in">
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--warm-mid)',
              maxWidth: '640px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}
          >
            If you're curious about any of these resources or how they might apply to your
            own journey, Donna would be happy to speak with you.
          </p>
          <a
            href="mailto:dchisholm114@gmail.com?subject=Resources Question"
            className="btn-secondary"
          >
            Reach Out to Donna
          </a>
        </div>
      </section>

      {/* Media */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">Appearances & Talks</p>
            <h2 className="cc-section-title">Media</h2>
            <p className="cc-section-lead" style={{ maxWidth: '580px' }}>
              Podcast interviews, webinars, and community conversations where Donna
              shares her perspectives on relationships, mindfulness, grief, and belonging.
            </p>
          </div>
          <div className="cc-media-grid cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {[
              { title: 'How To Transform Your Mind & Relationships', platform: 'Janice Debo Podcast', date: 'March 27, 2025', videoId: 'HuFDzccEo1g', type: 'Podcast Interview' },
              { title: 'Donna Chisholm on Relational Healing', platform: 'Bend Health Guide', date: '2024', videoId: 'M9NdDo4hNp8', type: 'Video Interview' },
              { title: 'Grief & Loss', platform: 'Healthy Happy Hour', date: 'June 23, 2023', videoId: 'Vhk5rjVLy80', type: 'Podcast Episode' },
              { title: 'Belonging & Authenticity', platform: 'Connected Coaching Webinar', date: 'August 4, 2023', videoId: 's8-YlIfFHvE', type: 'Webinar' },
            ].map((item, i) => (
              <div key={i} className="cc-media-card" style={{ transitionDelay: `${i * 0.06}s` }}>
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
                  <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.4rem', fontWeight: 400 }}>
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
    </div>
  )
}
