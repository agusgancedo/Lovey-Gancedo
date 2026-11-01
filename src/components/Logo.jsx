import { Link } from 'react-router-dom'

export default function Logo({ variant = 'light' }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Lovey & Gancedo — ir al inicio">
      <span className="logo__name">Lovey &amp; Gancedo</span>
      <span className="logo__tag">IP Law Office · Since 1936</span>
    </Link>
  )
}
