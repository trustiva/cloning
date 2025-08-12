import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, BookOpen, Users, Video } from 'lucide-react'

const SupportPage = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Contact Support',
      description: 'Get help from our award-winning Customer Support team',
      href: '/contact',
      color: 'bg-squarespace-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Help Center',
      description: 'Browse our comprehensive knowledge base and guides',
      href: '/help',
      color: 'bg-squarespace-green-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other Squarespace users and share tips',
      href: '/forum',
      color: 'bg-squarespace-purple-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides and learn new features',
      href: '/tutorials',
      color: 'bg-squarespace-orange-500'
    }
  ]

  return (
    <div className="bg-squarespace-white min-h-screen">
      <div className="container-max px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display text-squarespace-black mb-6">
            24/7 Support
          </h1>
          <p className="text-squarespace-gray-600 text-xl max-w-3xl mx-auto">
            We're here to help you succeed with your website. Get support anytime, anywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-squarespace-white border border-squarespace-gray-200 rounded-lg p-6 hover:shadow-soft transition-all duration-200 group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className={`${option.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <option.icon size={24} className="text-squarespace-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-squarespace-black mb-3">
                    {option.title}
                  </h3>
                  <p className="text-squarespace-gray-600 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                
                <div className="flex justify-end mt-4">
                  <ArrowRight 
                    size={20} 
                    className="text-squarespace-gray-400 group-hover:translate-x-1 transition-transform duration-200" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-squarespace-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-squarespace-black mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-squarespace-gray-600 mb-6">
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SupportPage
