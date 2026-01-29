import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../components/layout'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}