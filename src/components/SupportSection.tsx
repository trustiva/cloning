import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SupportSection = () => {
  return (
    <section className="bg-squarespace-black py-20">
      <div className="container-max px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Title */}
          <div className="lg:col-span-2 flex items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display text-squarespace-white"
            >
              24/7 Support
            </motion.h2>
          </div>

          {/* Right Column - Support Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-squarespace-gray-900 border border-squarespace-gray-700 rounded-lg p-6 hover:border-squarespace-gray-600 transition-colors duration-200 group cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-squarespace-white mb-3">
                      Contact Support
                    </h3>
                    <p className="text-squarespace-gray-300 leading-relaxed">
                      Get help from our award-winning Customer Support team
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight 
                      size={20} 
                      className="text-squarespace-white group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* Webinars Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-squarespace-gray-900 border border-squarespace-gray-700 rounded-lg p-6 hover:border-squarespace-gray-600 transition-colors duration-200 group cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-squarespace-white mb-3">
                      Webinars
                    </h3>
                    <p className="text-squarespace-gray-300 leading-relaxed">
                      Free online sessions to learn the basics and refine your skills
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight 
                      size={20} 
                      className="text-squarespace-white group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
