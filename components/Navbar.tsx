'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/brannkonsept', label: 'Brannkonsept' },
  { href: '/brannprosjektering', label: 'Brannprosjektering' },
  { href: '/branninspeksjon', label: 'Branninspeksjon' },
  { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
  { href: '/om-oss', label: 'Om oss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-white shadow-md' : 'bg-brand-dark'
      }`}
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/">
            <Image
              src={scrolled ? '/images/logo-black.png' : '/images/logo-white.png'}
              alt="Brannkonsult AS"
              width={234}
              height={65}
              className="object-contain h-[52px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                  scrolled ? 'text-brand-black' : 'text-brand-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-5 py-2.5 rounded-[10px] hover:opacity-90 transition-opacity text-sm"
            >
              Kontakt oss
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden transition-colors ${
              scrolled ? 'text-brand-black' : 'text-brand-white'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-white border-t border-brand-gray">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-brand-black hover:text-brand-orange hover:bg-brand-lightgray font-medium transition-colors border-b border-brand-gray"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/kontakt-oss"
              onClick={() => setMobileOpen(false)}
              className="block bg-brand-orange text-brand-white font-bold px-5 py-3 rounded-[10px] text-center hover:opacity-90 transition-opacity"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
