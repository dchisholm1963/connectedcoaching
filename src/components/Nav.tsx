'use client'
import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/why-work-with-me', label: 'Why Donna' },
  { to: '/resources', label: 'Resources' },
  { to: '/media', label: 'Media' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className={`cc-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="cc-nav-inner">
          <Link to="/" className="cc-nav-logo">
            Connected Coaching
            <span>Donna Chisholm · Bend, OR</span>
          </Link>
          <ul className="cc-nav-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com/connectedcoachingdc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cc-nav-cta"
              >
                Book a Call
              </a>
            </li>
          </ul>
          <button
            className="cc-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`cc-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://calendly.com/connectedcoachingdc/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--terracotta)', fontWeight: 500 }}
        >
          Book a Discovery Call
        </a>
      </div>
    </>
  )
}
