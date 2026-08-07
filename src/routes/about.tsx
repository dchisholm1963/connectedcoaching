import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
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
    title: 'Mindfulness Meditation Teaching',
    org: 'Banyan',
    orgSub: 'Founded by Tara Brach and Jack Kornfield',
    date: 'January 2024 – Present',
    bullets: [
      { text: 'Teacher at Banyan, an online mindfulness community in the tradition of Tara Brach and Jack Kornfield.' },
    ],
    link: { href: 'https://banyantogether.com/teachers/tfnJUOPJjm21mdmA4O1U', label: 'View teacher profile' },
  },
  {
    title: 'Relational Coaching',
    org: 'Inluminance',
    orgSub: 'Willow McIntosh, Founder',
    date: 'Dec 2022',
    bullets: [
      { text: 'Graduate of High-Sensory Coaching with Willow McIntosh, founder of Inluminance.' },
    ],
    link: { href: 'https://www.youtube.com/watch?v=tiMubaVIizg&t=231s', label: 'View full interview with Willow McIntosh' },
  },
  {
    title: 'Trauma Healing and Integration',
    org: 'Thomas Hübl · Independent Study',
    orgSub: '',
    date: '2019 – Present',
    bullets: [
      { text: 'Presenter at local Healing Trauma Conference, "Understanding Our Amazing Nervous System as a Tool for Healing Trauma And Disease." 2019.' },
      { text: "Graduate of Conscious Healing, Thomas Hübl's year-long intensive, with continuous study. 2019." },
      { text: 'Ongoing independent research and study of healing trauma with an emphasis on Embodiment Practices and Nervous System Education and Regulation.' },
    ],
  },
  {
    title: 'Mindfulness & Self-Compassion (MSC)',
    org: 'Kristen Neff, PhD & Chris Germer, PhD',
    orgSub: '',
    date: '2018 – Present',
    bullets: [
      { text: 'Graduate of year-long MSC Program by Kristen Neff, PhD and Chris Germer, PhD.' },
      { text: 'Current participant in numerous ongoing summits focusing on this beloved topic. Attended too many to list!' },
      { text: 'Ongoing independent research and study.' },
    ],
  },
  {
    title: 'Embodiment & Somatic Practices',
    org: 'Radiant Health Yoga · Heart Mind Institute',
    orgSub: '',
    date: '2016 – Present',
    bullets: [
      { text: 'Registered Yoga Teacher (RYT) 200-Hour Program with Radiant Health Yoga. 2016.' },
      { text: 'Participant in Neurosomatic Mindfulness Program with Heart Mind Institute with Fleet Maull, PhD. 2020.' },
      { text: 'Participant in numerous Somatic and Embodiment Summits. Again, too many to list!' },
    ],
  },
  {
    title: 'Physical Therapy & Nervous System Education',
    org: "Texas Women's University",
    orgSub: 'Licensed Physical Therapist',
    date: '1989 – Present',
    bullets: [
      { text: "1989 Graduate of Texas Women's University in Physical Therapy, specializing in neurological deficits, geriatric medicine, and rehabilitation." },
      { text: 'Current participant in numerous ongoing summits with an emphasis on the Importance of Nervous System Regulation to Heal Trauma and Disease. 2017 – Present.' },
      { text: 'Independent research and study.' },
    ],
  },
]

const outcomes = [
  {
    title: 'A Transformed Relationship with Yourself',
    body: 'Develop a kinder, more spacious relationship with your own inner life, including your thoughts, emotions, and needs, as the foundation for healthier connections with others.',
  },
  {
    title: 'A Fearless Approach to Connection',
    body: 'Move through the world with greater openness and courage in relationship, no longer held back by fear of rejection, abandonment, or not being enough.',
  },
  {
    title: 'Respond Rather Than React',
    body: 'Cultivate the capacity to pause and choose your response, rather than being swept away by habitual, defensive, or reactive patterns under stress.',
  },
  {
    title: 'Confident, Clear Communication',
    body: 'Learn to express your needs, feelings, and boundaries with clarity, care, and confidence, even in difficult conversations.',
  },
  {
    title: 'A Deep Sense of Belonging',
    body: 'Experience what it feels like to truly belong, to yourself, to your relationships, and to the wider world around you.',
  },
  {
    title: 'Grace Over Self-Criticism',
    body: "Replace the inner critic's voice with something softer and truer; a capacity for self-compassion that becomes the ground for genuine growth.",
  },
  {
    title: 'Full Acceptance of Your Whole Self',
    body: 'Integrate the parts of yourself that have felt too much, too little, or simply too different, arriving at a genuine sense of wholeness.',
  },
  {
    title: 'Meeting Difficult Emotions with Curiosity',
    body: 'Develop the inner resources to be with challenging feelings, including grief, anger, and fear, with curiosity and care rather than avoidance or overwhelm.',
  },
]

const testimonials = [
  {
    name: 'Diane',
    quote:
      "I worked with Donna for several years during a very difficult time of transition and loss in my life. Her expertise in creating a safe space for me to process was critical in listening to (and trusting) my inner knowing and wisdom. With Donna's guidance and tools, this phase of trauma and upheaval became a chapter in my life of transformative growth and strength for me.",
  },
  {
    name: 'Marni',
    quote:
      "Donna has helped me set boundaries with family members and people I interact with, whether it be with work or friends. It's inner work that I use DAILY. The work she has done with me and my husband has been life changing. Our communication has been, without a doubt, something we have struggled with our whole marriage. I am so invested in her ability to see us in our raw vulnerable states of desire to be better for one another.",
  },
  {
    name: 'Alan',
    quote:
      "I have built the capacity and willingness to delve into myself working with Donna. I call it the courage to meet myself. I have learned how to trust being vulnerable, even as a male in Donna's presence, who meets me in a positive non-judgemental way. With Donna, I'm able to stay comfortable in continuing to ask questions, even when I don't have to know the answers. Everything Donna teaches, she practices herself in her own life. From feeling difficult emotions to communicating at a deeper level in my relationships with my wife and as a father to my two kids, Donna constantly teaches me how to apply what I'm learning in my everyday life, keeping it simple and relatable, so I can understand and practice. I now integrate mindful practices in my daily living to create more awareness and understanding of the world around me. This has given me a lot more ease and acceptance about myself and my family.",
  },
]

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
            <div className="cc-fade-in">
              <div className="cc-about-photo">
                <img src="/donna.jpg" alt="Donna Chisholm" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
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
                  change, and significant health struggles, a life that has required her to find
                  her way back to herself again and again.
                </p>
                <p style={{ margin: 0 }}>
                  These experiences didn't just prepare her for this work; they are the work.
                  They are the reason she understands the complexity of human relationships at a
                  depth that cannot be taught from a textbook. Every challenge she has moved
                  through has deepened her capacity to be present with others in theirs.
                </p>
                <p style={{ margin: 0 }}>
                  As a licensed Physical Therapist since 1989 (Texas Women's University), Donna
                  began her career in the body. Over time, she followed her curiosity into the
                  territory of the mind and heart, training in mindfulness, self-compassion,
                  somatic practices, collective trauma work, and relational coaching. Today, she
                  weaves all of these threads into a uniquely integrative practice.
                </p>
                <p style={{ margin: 0 }}>
                  Donna is also a Highly Sensitive Person (HSP). Far from a limitation, she has
                  come to understand her sensitivity as a profound gift, one that allows her to
                  attune to the subtle currents in a conversation, to hold space with extraordinary
                  care, and to meet each client exactly where they are.
                </p>
              </div>
              <div className="cc-hsp-badge" style={{ marginTop: '1.75rem', display: 'inline-flex' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1L2 5.5l4.2-.9L8 1z" fill="var(--terracotta)" />
                </svg>
                <span>High Sensory Person (HSP), her superpower</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section className="cc-section" style={{ background: 'var(--cream)', padding: '5rem 2rem' }}>
        <div className="cc-section-inner cc-fade-in">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="cc-pullquote">
              <p>
                "What I offer my clients is deep presence, listening, and attunement
                practices in guiding them through relational challenges."
              </p>
              <cite>Donna Chisholm, Connected Coaching</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">Training & Education</p>
            <h2 className="cc-section-title">Credentials</h2>
            <p className="cc-section-lead">
              Donna's training spans multiple traditions and modalities, unified by a
              commitment to embodied, compassionate and relational healing.
            </p>
          </div>
          <div className="cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {credentials.map((cred, i) => (
              <div
                key={i}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid rgba(180,160,130,0.2)',
                  maxWidth: '780px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', marginBottom: '0.2rem' }}>
                  <h3 style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--warm-dark)',
                    margin: 0,
                  }}>
                    {cred.title}
                  </h3>
                  <span style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: 'var(--warm-muted)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {cred.date}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--warm-mid)',
                  margin: '0 0 0.75rem',
                }}>
                  {cred.org}{cred.orgSub ? ` · ${cred.orgSub}` : ''}
                </p>
                <ul style={{ margin: '0 0 0 1.1rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {cred.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '0.88rem', fontWeight: 300, color: 'var(--warm-mid)', lineHeight: 1.75 }}>
                      {b.text}
                    </li>
                  ))}
                </ul>
                {cred.link && (
                  <a
                    href={cred.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      marginTop: '0.6rem',
                      color: 'var(--terracotta)',
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 400,
                      textDecoration: 'none',
                    }}
                  >
                    {cred.link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="cc-section bg-cream">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '2.5rem' }}>
            <p className="cc-section-eyebrow">What You Can Expect</p>
            <h2 className="cc-section-title">Client Outcomes</h2>
            <p className="cc-section-lead">
              What clients take away from working with Donna goes beyond information
              or insight; it becomes a lived, embodied shift in how they relate.
            </p>
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

      {/* Testimonials */}
      <section className="cc-section bg-cream-light">
        <div className="cc-section-inner">
          <div className="cc-fade-in" style={{ marginBottom: '1rem' }}>
            <p className="cc-section-eyebrow">Client Voices</p>
            <h2 className="cc-section-title">What Clients Say</h2>
          </div>
          <div className="cc-testimonials cc-fade-in" style={{ transitionDelay: '0.1s' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="cc-testimonial">
                <blockquote>"{t.quote}"</blockquote>
                <p className="cc-testimonial-name">{t.name}</p>
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
