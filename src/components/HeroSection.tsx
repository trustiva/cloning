import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-squarespace-red-700 via-squarespace-red-600 to-squarespace-orange-500 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-squarespace-orange-400 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-squarespace-yellow-400 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-squarespace-orange-300 rounded-full opacity-40 blur-xl"></div>
        
        {/* Geometric Blocks */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-squarespace-orange-400 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-squarespace-yellow-400 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-squarespace-orange-300 transform -rotate-45"></div>
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display text-squarespace-white mb-8 leading-tight"
            >
              A website makes it real
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <button className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                GET STARTED
              </button>
              <p className="text-squarespace-white text-xl opacity-90">
                Get your free website trial today.<br />
                No credit card required.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Glass Sculptures */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Main Sculpture */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-40 bg-gradient-to-b from-squarespace-blue-400 to-squarespace-green-500 rounded-full opacity-80 shadow-strong"></div>
              </div>
              
              {/* Secondary Sculptures */}
              <div className="absolute top-40 left-10">
                <div className="w-20 h-24 bg-gradient-to-b from-squarespace-purple-400 to-squarespace-pink-500 rounded-t-full opacity-70 shadow-soft"></div>
              </div>
              
              <div className="absolute top-32 right-16">
                <div className="w-16 h-20 bg-gradient-to-b from-squarespace-yellow-400 to-squarespace-orange-500 rounded-full opacity-75 shadow-soft"></div>
              </div>
              
              <div className="absolute bottom-20 left-1/4">
                <div className="w-24 h-16 bg-gradient-to-r from-squarespace-green-400 to-squarespace-blue-500 rounded-full opacity-60 shadow-soft"></div>
              </div>
              
              <div className="absolute bottom-32 right-1/4">
                <div className="w-20 h-28 bg-gradient-to-b from-squarespace-pink-400 to-squarespace-purple-500 rounded-t-full opacity-65 shadow-soft"></div>
              </div>

              {/* Laptop Display */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-64 h-40 bg-squarespace-gray-800 rounded-lg shadow-strong border-2 border-squarespace-gray-700">
                  <div className="p-4 h-full">
                    <div className="bg-gradient-to-br from-squarespace-yellow-300 to-squarespace-pink-400 rounded h-full flex flex-col justify-center items-center text-center">
                      <h3 className="text-squarespace-black font-semibold text-sm mb-2">GALLERY</h3>
                      <h2 className="text-squarespace-black font-bold text-lg mb-1">Alex Santella</h2>
                      <p className="text-squarespace-black text-xs mb-3">GLASS ARTIST</p>
                      <button className="bg-squarespace-yellow-400 text-squarespace-black px-3 py-1 rounded text-xs font-medium">
                        DISCOVER MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-squarespace-white text-sm opacity-70">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-squarespace-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-squarespace-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
