import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const TemplatesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Local Business')

  const categories = [
    'Online Store',
    'Local Business',
    'Portfolio',
    'Restaurant',
    'Services',
    'Personal',
    'Courses',
    'Memberships'
  ]

  const templates = [
    {
      name: 'Klipsan',
      category: 'Local Business',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'A modern fitness and wellness template'
    },
    {
      name: 'Reseda',
      category: 'Portfolio',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Perfect for creative professionals'
    },
    {
      name: 'Belisa',
      category: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant dining experience showcase'
    }
  ]

  return (
    <div className="bg-squarespace-white min-h-screen">
      <div className="container-max px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Categories */}
          <div className="lg:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display text-squarespace-black mb-8"
            >
              Website templates for every purpose
            </motion.h1>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-squarespace-blue-50 text-squarespace-blue-700 border-l-4 border-squarespace-blue-500'
                      : 'text-squarespace-gray-600 hover:text-squarespace-black hover:bg-squarespace-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category}</span>
                    {activeCategory === category && (
                      <ArrowRight size={16} className="text-squarespace-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="/templates/all"
                className="inline-flex items-center space-x-2 text-squarespace-blue-600 hover:text-squarespace-blue-700 font-medium group"
              >
                <span>Explore all</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column - Template Preview */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-squarespace-gray-50 rounded-lg p-6">
                <p className="text-squarespace-gray-600 text-lg leading-relaxed">
                  Start with a flexible designer template or build your own, then customize to fit your style and professional needs using our drag-and-drop website builder. Use Squarespace AI to generate a personalized website template that works for you.
                </p>
              </div>

              {/* Template Preview */}
              <div className="bg-squarespace-white rounded-lg shadow-strong overflow-hidden border border-squarespace-gray-200">
                {/* Template Header */}
                <div className="bg-squarespace-gray-100 px-6 py-4 border-b border-squarespace-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-squarespace-black">KLIPSAN</h3>
                    <div className="flex items-center space-x-4 text-sm text-squarespace-gray-600">
                      <span>About</span>
                      <span>Schedule</span>
                      <span>Contact</span>
                      <span>Store</span>
                      <span>Login</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-squarespace-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-squarespace-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-squarespace-gray-300 rounded"></div>
                      <div className="relative">
                        <div className="w-6 h-6 bg-squarespace-gray-300 rounded"></div>
                        <span className="absolute -top-2 -right-2 bg-squarespace-red-500 text-squarespace-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template Content */}
                <div className="relative h-96 bg-gradient-to-br from-squarespace-orange-400 via-squarespace-yellow-400 to-squarespace-green-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-squarespace-white">
                      <h1 className="text-4xl font-bold mb-4">TRAIN ON YOUR OWN TIME</h1>
                      <button className="bg-squarespace-black text-squarespace-white px-6 py-3 rounded-full font-semibold hover:bg-squarespace-gray-800 transition-colors duration-200">
                        JOIN OUR GYM
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 bg-squarespace-gray-800 text-squarespace-white px-2 py-1 rounded text-xs">
                    1.00
                  </div>
                  <div className="absolute bottom-4 left-4 bg-squarespace-gray-800 text-squarespace-white p-2 rounded">
                    <div className="w-4 h-4 border-2 border-squarespace-white rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplatesPage
