// Estructura común de las páginas internas: encabezado de sección + contenedor de contenido.
export default function InnerPage({ title, eyebrow, children }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-hero__title">{title}</h1>
          <span className="rule" aria-hidden="true" />
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          {children ?? (
            <div className="placeholder" role="note">
              <p>Rellenar.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
