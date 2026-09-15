import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Activitats from './pages/Activitats'
import Metodologia from './pages/Metodologia'
import Exemple from './pages/Exemple'
import Teoria from './pages/Teoria'
import Casos from './pages/Casos'
import CasDetail from './pages/CasDetail'
import Avaluacio from './pages/Avaluacio'
import Recursos from './pages/Recursos'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activitats" element={<Activitats />} />
        <Route path="/activitats/:num" element={<Activitats />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/exemple" element={<Exemple />} />
        <Route path="/teoria" element={<Teoria />} />
        <Route path="/teoria/:tema" element={<Teoria />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:casId" element={<CasDetail />} />
        <Route path="/avaluacio" element={<Avaluacio />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </Layout>
  )
}

export default App
