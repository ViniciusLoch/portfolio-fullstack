import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full h-16 bg-gray-900 text-white flex items-center px-6">
      <Link to="/" className="text-lg font-semibold hover:text-orange-500">
        Vinicius Loch
      </Link>
      <Link to="/about" className="text-lg font-semibold hover:text-orange-500">
        About
      </Link>
      <Link to="/projects" className="text-lg font-semibold hover:text-orange-500">
        Projects
      </Link>
    </header>
  )
}