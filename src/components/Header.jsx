import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Navbar from './Navbar.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import MobileMenu from './MobileMenu.jsx'
import { contactPath } from '../data/navigation.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <Navbar />
        <div className="site-header__actions">
          <LanguageSelector className="lang--header" />
          <Link to={contactPath} className="btn btn--outline-light site-header__contact">
            Contacto
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileMenu id="mobile-menu" open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
