import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TemplatesPage from './pages/TemplatesPage'
import SupportPage from './pages/SupportPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  )
}

export default App
