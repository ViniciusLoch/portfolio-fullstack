import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../components/layout'
import About from '../pages/about'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}