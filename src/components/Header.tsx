import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import TopBanner from './TopBanner'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      label: 'PRODUCTS',
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Website Templates', href: '/templates' },
        { label: 'Websites', href: '/websites' },
        { label: 'Domains', href: '/domains' },
        { label: 'AI Website Builder', href: '/ai-builder' },
        { label: 'Online Stores', href: '/stores' },
        { label: 'Services', href: '/services' },
      ]
    },
    {
      label: 'RESOURCES',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Help Center', href: '/help' },
        { label: 'Forum', href: '/forum' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Blog', href: '/blog' },
        { label: 'Free Tools', href: '/tools' },
      ]
    }
  ]

  return (
    <header className="sticky top-0 z-50 bg-squarespace-black">
      <TopBanner />
      
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-squarespace-white rounded-sm flex items-center justify-center">
              <span className="text-squarespace-black font-bold text-xl">S</span>
            </div>
            <span className="text-squarespace-white font-semibold text-lg tracking-wide">
              SQUARESPACE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link flex items-center space-x-1">
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>
                
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-squarespace-gray-900 border border-squarespace-gray-700 rounded-lg shadow-strong py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-squarespace-white hover:bg-squarespace-gray-800 transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="btn-ghost font-semibold">
              LOG IN
            </Link>
            <Link to="/get-started" className="btn-primary">
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-squarespace-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-squarespace-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block text-squarespace-white hover:text-squarespace-gray-300 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-squarespace-gray-800 space-y-2">
                <Link
                  to="/login"
                  className="block text-squarespace-white hover:text-squarespace-gray-300 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LOG IN
                </Link>
                <Link
                  to="/get-started"
                  className="btn-primary inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GET STARTED
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
