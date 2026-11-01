import { Link } from 'react-router-dom'
import InnerPage from '../components/InnerPage.jsx'

export default function NotFound() {
  return (
    <InnerPage title="Página no encontrada" eyebrow="Error 404">
      <p><Link to="/" className="btn btn--primary">Volver al inicio</Link></p>
    </InnerPage>
  )
}
