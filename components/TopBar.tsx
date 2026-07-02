import { Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-brand-white text-sm py-2">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:+4700000000"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Phone size={13} />
            <span>+47 000 00 000</span>
          </a>
          <a
            href="mailto:post@narvikbrannkonsult.no"
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Mail size={13} />
            <span>post@narvikbrannkonsult.no</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-brand-orange transition-colors">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-brand-orange transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-brand-orange transition-colors">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
