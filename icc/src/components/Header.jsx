import React, { useState } from 'react'
import { MenuIcon, X as CloseIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigation = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Live Scores',
      path: '/live-scores',
    },
    {
      label: 'Rankings',
      path: '/rankings',
    },
    {
      label: 'News',
      path: '/news',
    },
    {
      label: 'Photos',
      path: '/photos',
    },
    {
      label: 'Videos',
      path: '/videos',
    },
  ]
  return (
    <header className="bg-[#061325] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-[#28B6CE] text-2xl font-bold mr-2">ICC</h1>
          <span className="text-white font-semibold">Cricket</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path ? 'text-[#28B6CE] font-semibold' : 'text-gray-300 hover:text-[#28B6CE]'} transition-colors duration-200`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#061325] px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${location.pathname === item.path ? 'text-[#28B6CE] font-semibold' : 'text-gray-300 hover:text-[#28B6CE]'} transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
const NavLink = ({ label, isActive = false }) => {
  return (
    <a
      href="#"
      className={`${isActive ? 'text-[#28B6CE] font-semibold' : 'text-gray-300 hover:text-[#28B6CE]'} transition-colors duration-200`}
    >
      {label}
    </a>
  )
}
