import { NavLink } from 'react-router-dom'
import { navItems } from '../data/navigation.js'

export default function Navbar({ className = 'navbar', onNavigate }) {
  return (
    <nav className={className} aria-label="Principal">
      <ul className="navbar__list">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => `navbar__link${isActive ? ' is-active' : ''}`}
              onClick={onNavigate}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
