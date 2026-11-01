import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout.jsx'
import Home from './pages/Home.jsx'
import Empresa from './pages/Empresa.jsx'
import Servicios from './pages/Servicios.jsx'
import InformacionUtil from './pages/InformacionUtil.jsx'
import Requisitos from './pages/Requisitos.jsx'
import Links from './pages/Links.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="informacion-util" element={<InformacionUtil />} />
        <Route path="requisitos" element={<Requisitos />} />
        <Route path="links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
