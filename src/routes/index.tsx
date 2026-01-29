import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../components/layout'
import About from '../pages/about'
import Projects from '../pages/projects'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}