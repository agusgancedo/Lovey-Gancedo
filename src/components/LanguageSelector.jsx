import { useState } from 'react'
import { languages } from '../data/navigation.js'

// Solo visual en esta etapa: guarda la selección pero no traduce el sitio.
export default function LanguageSelector({ className = '' }) {
  const [current, setCurrent] = useState('es')

  return (
    <div className={`lang ${className}`} role="group" aria-label="Idioma">
      {languages.map(({ code, label, short }) => (
        <button
          key={code}
          type="button"
          className={`lang__btn${current === code ? ' is-active' : ''}`}
          aria-pressed={current === code}
          aria-label={label}
          title={label}
          lang={code}
          onClick={() => setCurrent(code)}
        >
          {short}
        </button>
      ))}
    </div>
  )
}
