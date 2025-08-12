import { motion } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'

const DomainSearchSection = () => {
  return (
    <section className="bg-squarespace-gray-50 py-20">
      <div className="container-max px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display text-squarespace-black mb-8">
            Find a domain name for your website
          </h2>
          
          <div className="bg-squarespace-white rounded-lg p-8 shadow-soft mb-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-squarespace-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Start your search here"
                  className="w-full pl-12 pr-4 py-4 border border-squarespace-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-squarespace-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <button className="bg-squarespace-black text-squarespace-white px-8 py-4 rounded-lg font-semibold hover:bg-squarespace-gray-800 transition-colors duration-200">
                SEARCH
              </button>
            </div>
          </div>
          
          <p className="text-squarespace-gray-600 text-lg mb-6">
            Check domain name availability using our AI-powered domain search tool to get started.
          </p>
          
          <motion.a
            href="/domains"
            className="inline-flex items-center space-x-2 text-squarespace-blue-600 hover:text-squarespace-blue-700 font-medium text-lg group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Learn more about Domains</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default DomainSearchSection
