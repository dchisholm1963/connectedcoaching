import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/why-work-with-me')({
  component: WhyWorkWithMePage,
  head: () => ({
    meta: [{ title: 'Why Work With Donna | Connected Coaching' }],
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
      'I worked with Donna for several years during a very difficult time of transition and loss in my life. Her expertise in creating a safe space for me to process was critical in listening to (and trusting) my inner knowing and wisdom. With Donna\'s guidance and tools, this phase of trauma and upheaval became a chapter in my life of transformative growth and strength for me.',
  },
  {
    name: 'Marni',
    quote:
      'Donna has helped me set boundaries with family members and people I interact with, whether it be with work or friends. It\'s inner work that I use DAILY. The work she has done with me and my husband has been life changing. Our communication has been, without a doubt, something we have struggled with our whole marriage. I am so invested in her ability to see us in our raw vulnerable states of desire to be better for one another.',
  },
  {
    name: 'Alan',
    quote:
      'I have built the capacity and willingness to delve into myself working with Donna. I call it the courage to meet myself. I have learned how to trust being vulnerable, even as a male in Donna\'s presence, who meets me in a positive non-judgemental way. With Donna, I\'m able to stay comfortable in continuing to ask questions, even when I don\'t have to know the answers. Everything Donna teaches, she practices herself in her own life. From feeling difficult emotions to communicating at a deeper level in my relationships with my wife and as a father to my two kids, Donna constantly teaches me how to apply what I\'m learning in my everyday life, keeping it simple and relatable, so I can understand and practice. I now integrate mindful practices in my daily living to create more awareness and understanding of the world around me. This has given me a lot more ease and acceptance about myself and my family.',
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
            or insight; it becomes a lived, embodied shift in how they relate.
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
                <p className="cc-testimonial-name">{t.name}</p>
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
            A discovery call is the natural first step; a free conversation to see
            if working together feels like the right fit.
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
