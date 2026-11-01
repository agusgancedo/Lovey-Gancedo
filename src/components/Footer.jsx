import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import { navItems, contactInfo } from '../data/navigation.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p className="site-footer__note">Propiedad intelectual desde 1936.</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="site-footer__title">Secciones</h2>
          <ul className="site-footer__list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Contacto</h2>
          <ul className="site-footer__list site-footer__contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>{contactInfo.phone}</span>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__title">Idioma</h2>
          <LanguageSelector className="lang--footer" />
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <small>© {year} Lovey &amp; Gancedo. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  )
}
