import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Website Templates', href: '/templates' },
        { label: 'Websites', href: '/websites' },
        { label: 'Domains', href: '/domains' },
        { label: 'AI Website Builder', href: '/ai-builder' },
        { label: 'Design Intelligence', href: '/design-intelligence' },
        { label: 'Online Stores', href: '/stores' },
        { label: 'Services', href: '/services' },
        { label: 'Invoicing', href: '/invoicing' },
        { label: 'Scheduling', href: '/scheduling' },
        { label: 'Content & Memberships', href: '/memberships' },
        { label: 'Donations', href: '/donations' },
        { label: 'Payments', href: '/payments' },
        { label: 'Marketing Tools', href: '/marketing' },
        { label: 'Email Campaigns', href: '/email' },
        { label: 'Professional Email', href: '/professional-email' },
        { label: 'Feature List', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Customer Examples', href: '/examples' },
        { label: 'Squarespace Collection', href: '/collection' },
        { label: 'Fitness', href: '/fitness' },
        { label: 'Beauty', href: '/beauty' },
        { label: 'Photography', href: '/photography' },
        { label: 'Restaurants', href: '/restaurants' },
        { label: 'Art & Design', href: '/art-design' },
        { label: 'Wedding', href: '/wedding' },
        { label: 'Creators', href: '/creators' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'From Squarespace', href: '/from-squarespace', isSubheading: true },
        { label: 'Acuity Scheduling', href: '/acuity' },
        { label: 'Bio Sites', href: '/bio-sites' },
        { label: 'Unfold', href: '/unfold' },
      ]
    },
    {
      title: 'Programs',
      links: [
        { label: 'For Professionals', href: '/professionals' },
        { label: 'Affiliates', href: '/affiliates' },
        { label: 'Support', href: '/support', isSubheading: true },
        { label: 'Help Center', href: '/help' },
        { label: 'Forum', href: '/forum' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Hire an Expert', href: '/experts' },
        { label: 'Developer Blog', href: '/dev-blog' },
        { label: 'Developer Platform', href: '/dev-platform' },
        { label: 'System Status', href: '/status' },
        { label: 'Resources', href: '/resources', isSubheading: true },
        { label: 'Extensions', href: '/extensions' },
        { label: 'Squarespace Blog', href: '/blog' },
        { label: 'Free Tools', href: '/tools' },
        { label: 'Business Name Generator', href: '/name-generator' },
        { label: 'Logo Maker', href: '/logo-maker' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Our History', href: '/history' },
        { label: 'Our Brand', href: '/brand' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Newsroom', href: '/newsroom' },
        { label: 'Press & Media', href: '/press' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Follow', href: '/follow', isSubheading: true },
        { label: 'Instagram', href: 'https://instagram.com/squarespace' },
        { label: 'YouTube', href: 'https://youtube.com/squarespace' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/squarespace' },
        { label: 'Facebook', href: 'https://facebook.com/squarespace' },
        { label: 'X', href: 'https://x.com/squarespace' },
      ]
    }
  ]

  return (
    <footer className="bg-squarespace-black text-squarespace-white">
      {/* Main Footer Content */}
      <div className="container-max px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-squarespace-white rounded-sm flex items-center justify-center">
                <span className="text-squarespace-black font-bold text-xl">S</span>
              </div>
              <span className="text-squarespace-white font-semibold text-lg tracking-wide">
                SQUARESPACE
              </span>
            </div>
            <p className="text-squarespace-gray-300 text-lg">
              A website makes it real
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-squarespace-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isSubheading ? (
                      <span className="text-squarespace-gray-400 text-sm font-medium block mt-4 mb-2">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-squarespace-gray-300 hover:text-squarespace-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-squarespace-gray-800">
        <div className="container-max px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-squarespace-gray-400 text-sm">
                <img 
                  src="https://www.icann.org/sites/default/files/assets/icann-logo-2019.svg" 
                  alt="ICANN" 
                  className="h-6 w-auto opacity-60"
                />
                <span>We are an ICANN accredited registrar.</span>
              </div>
            </div>

            {/* Center - Language and Currency */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-squarespace-gray-400 text-sm">English</span>
                <ChevronDown size={16} className="text-squarespace-gray-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-squarespace-gray-400 text-sm">€ EUR</span>
                <ChevronDown size={16} className="text-squarespace-gray-400" />
              </div>
            </div>

            {/* Right Side - Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terms" className="text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200">
                Terms
              </Link>
              <Link to="/privacy" className="text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200">
                Privacy
              </Link>
              <Link to="/eu-legal" className="text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200">
                EU Legal
              </Link>
              <Link to="/security" className="text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200">
                Security Measures
              </Link>
              <Link to="/sitemap" className="text-squarespace-gray-400 hover:text-squarespace-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-squarespace-gray-800 mt-6">
            <p className="text-squarespace-gray-400 text-sm">
              © 2025 Squarespace, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
