import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import { contactPath } from '../data/navigation.js'

export default function MobileMenu({ id, open, onClose }) {
  return (
    <div id={id} className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
      <Navbar className="navbar navbar--mobile" onNavigate={onClose} />
      <div className="mobile-menu__footer">
        <Link to={contactPath} className="btn btn--accent" onClick={onClose}>
          Contacto
        </Link>
        <LanguageSelector />
      </div>
    </div>
  )
}
