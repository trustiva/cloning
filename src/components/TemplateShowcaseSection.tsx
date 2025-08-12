import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const TemplateShowcaseSection = () => {
  return (
    <section className="bg-squarespace-gray-50 py-20">
      <div className="container-max px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display text-squarespace-black">
              Website templates for every purpose
            </h2>
            <p className="text-squarespace-gray-600 text-lg leading-relaxed">
              Start with a flexible designer template or build your own, then customize to fit your style and professional needs using our drag-and-drop website builder. Use Squarespace AI to generate a personalized website template that works for you.
            </p>
            <a
              href="/templates"
              className="inline-flex items-center space-x-2 text-squarespace-blue-600 hover:text-squarespace-blue-700 font-medium text-lg group"
            >
              <span>Browse templates</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Right Column - Template Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-squarespace-white rounded-lg shadow-strong overflow-hidden">
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
              <div className="relative h-80 bg-gradient-to-br from-squarespace-orange-400 via-squarespace-yellow-400 to-squarespace-green-500">
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
    </section>
  )
}

export default TemplateShowcaseSection
