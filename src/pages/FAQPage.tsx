import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search } from 'lucide-react'

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]))

  const faqItems = [
    {
      question: "What is Squarespace?",
      answer: "Squarespace is an all-in-one content management system (CMS) that allows you to create beautiful websites, online stores, and manage your online presence without needing to code. It provides templates, hosting, domain management, and marketing tools in one platform.",
      category: "General"
    },
    {
      question: "How do I create a website?",
      answer: "Creating a website with Squarespace is simple: 1) Choose a template and start a free trial, 2) Get a free custom domain name for the first year of an annual website plan, 3) Use our website builder to add your own text and photos, 4) Customize the site to fit your brand with hundreds of fonts, colors, and stock photos, 5) Don't have a logo? Make one for free with our online tool, 6) Publish your site and promote it using social media and email marketing tools.",
      category: "Getting Started"
    },
    {
      question: "Can I sell products online?",
      answer: "Yes! Squarespace offers comprehensive ecommerce features including product management, secure checkout, inventory tracking, shipping calculations, and tax management. You can sell physical products, digital downloads, services, and even accept donations.",
      category: "Ecommerce"
    },
    {
      question: "Is Squarespace good for SEO?",
      answer: "Absolutely. Squarespace includes built-in SEO tools like meta descriptions, title tags, clean URLs, mobile optimization, and integration with Google Analytics. All templates are built with SEO best practices in mind.",
      category: "SEO & Marketing"
    },
    {
      question: "What is the pricing?",
      answer: "Squarespace offers several plans starting with a free 14-day trial. Personal plans start at $16/month, Business plans at $23/month, and Commerce plans at $27/month when billed annually. All plans include hosting, SSL certificates, and 24/7 customer support.",
      category: "Pricing"
    },
    {
      question: "Can I connect a custom domain?",
      answer: "Yes, you can either register a new domain through Squarespace (first year free with annual plans) or transfer an existing domain from another provider. Squarespace is an ICANN-accredited registrar, so you can manage everything in one place.",
      category: "Domains"
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No coding knowledge is required! Squarespace is designed for beginners with a drag-and-drop interface. However, if you do know code, you can add custom CSS, HTML, and JavaScript for advanced customization.",
      category: "Technical"
    },
    {
      question: "How do I get help if I need it?",
      answer: "Squarespace provides 24/7 customer support through live chat, email, and phone. We also have an extensive Help Center with articles and video tutorials, plus a community forum where users can help each other.",
      category: "Support"
    }
  ]

  const filteredItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

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
            Frequently asked questions
          </h1>
          <p className="text-squarespace-gray-600 text-xl max-w-3xl mx-auto">
            Find answers to common questions about Squarespace and get help with your website.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-squarespace-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-squarespace-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-squarespace-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-squarespace-white border border-squarespace-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left p-6 hover:bg-squarespace-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-squarespace-blue-600 text-sm font-medium bg-squarespace-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-squarespace-black font-medium text-lg">
                    {item.question}
                  </span>
                </div>
                {expandedItems.has(index) ? (
                  <Minus size={20} className="text-squarespace-gray-400 flex-shrink-0 ml-4" />
                ) : (
                  <Plus size={20} className="text-squarespace-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedItems.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-squarespace-gray-100">
                      <p className="text-squarespace-gray-600 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-squarespace-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-squarespace-black mb-4">
              Still need help?
            </h2>
            <p className="text-squarespace-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-secondary">
                Visit Help Center
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQPage
