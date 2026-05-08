import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="cc-footer">
      <div className="cc-footer-inner">
        <div className="cc-footer-top">
          <div className="cc-footer-brand">
            <h3>Connected Coaching</h3>
            <p>
              A private practice designed to strengthen connection in relationships.
              Based in Bend, Oregon. Serving clients remotely.
            </p>
          </div>
          <div className="cc-footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Donna</Link></li>
              <li><Link to="/services">Services &amp; Classes</Link></li>
              <li><Link to="/why-work-with-me">Why Work With Me</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/media">Media</Link></li>
            </ul>
          </div>
          <div className="cc-footer-col cc-footer-contact">
            <h4>Connect</h4>
            <p>
              Ready to begin?<br />
              <a href="mailto:dchisholm114@gmail.com">dchisholm114@gmail.com</a>
              <br /><br />
              Bend, Oregon<br />
              Remote sessions available<br /><br />
              <a href="https://calendly.com/connectedcoachingdc/30min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}>
                Book a Discovery Call
              </a>
            </p>
          </div>
        </div>
        <div className="cc-footer-bottom">
          <p>&copy; 2026 Connected Coaching · Donna Chisholm · All rights reserved.</p>
          <p style={{ fontSize: '0.72rem', opacity: 0.5 }}>Bend, Oregon</p>
        </div>
      </div>
    </footer>
  )
}
