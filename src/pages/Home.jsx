import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import heroImage from '../assets/images/hero-estudio.jpg'
import { navItems, contactInfo } from '../data/navigation.js'

const serviceCards = navItems.filter((i) => i.to !== '/empresa')

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__image" src={heroImage} alt="Mazo de juez y balanza sobre un escritorio, con una biblioteca al fondo" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light">IP Law Office · Since 1936</p>
          <h1 className="hero__title">Lovey &amp; Gancedo</h1>
          <span className="rule rule--light" aria-hidden="true" />
          <p className="hero__lead">Marcas y patentes.</p>
          <div className="hero__actions">
            <Link to="/servicios" className="btn btn--accent">Ver servicios <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/#contacto" className="btn btn--outline-light">Contacto</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro">
          <div>
            <p className="eyebrow">El estudio</p>
            <h2 className="section__title">Introducción</h2>
            <span className="rule" aria-hidden="true" />
          </div>
          <div className="placeholder" role="note">
            <p>Espacio reservado para la introducción institucional del estudio.</p>
          </div>
        </div>
      </section>

      <section className="section section--tan">
        <div className="container">
          <p className="eyebrow">Explorar</p>
          <h2 className="section__title">Nuestras secciones</h2>
          <span className="rule" aria-hidden="true" />
          <ul className="cards">
            {serviceCards.map(({ to, label }, i) => (
              <li key={to}>
                <Link to={to} className="card">
                  <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="card__label">{label}</span>
                  <span className="card__hint">Descripción próximamente</span>
                  <ArrowRight className="card__arrow" size={22} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="section__title">Información institucional</h2>
          <span className="rule" aria-hidden="true" />
          <div className="info-grid">
            {[1, 2, 3].map((n) => (
              <div className="placeholder placeholder--tall" role="note" key={n}>
                <p>Bloque institucional {n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="contacto" tabIndex={-1}>
        <div className="container contact">
          <div>
            <p className="eyebrow eyebrow--light">Contacto</p>
            <h2 className="section__title section__title--light">Comuníquese con el estudio</h2>
            <span className="rule rule--light" aria-hidden="true" />
          </div>
          <ul className="contact__list">
            <li><MapPin size={22} aria-hidden="true" /><span>{contactInfo.address}</span></li>
            <li><Phone size={22} aria-hidden="true" /><span>{contactInfo.phone}</span></li>
            <li><Mail size={22} aria-hidden="true" /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}
