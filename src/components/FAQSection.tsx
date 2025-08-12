import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]))

  const faqItems = [
    {
      question: "What is Squarespace?",
      answer: "Squarespace is an all-in-one content management system (CMS) that allows you to create beautiful websites, online stores, and manage your online presence without needing to code. It provides templates, hosting, domain management, and marketing tools in one platform."
    },
    {
      question: "How do I create a website?",
      answer: "Creating a website with Squarespace is simple: 1) Choose a template and start a free trial, 2) Get a free custom domain name for the first year of an annual website plan, 3) Use our website builder to add your own text and photos, 4) Customize the site to fit your brand with hundreds of fonts, colors, and stock photos, 5) Don't have a logo? Make one for free with our online tool, 6) Publish your site and promote it using social media and email marketing tools."
    },
    {
      question: "Can I sell products online?",
      answer: "Yes! Squarespace offers comprehensive ecommerce features including product management, secure checkout, inventory tracking, shipping calculations, and tax management. You can sell physical products, digital downloads, services, and even accept donations."
    },
    {
      question: "Is Squarespace good for SEO?",
      answer: "Absolutely. Squarespace includes built-in SEO tools like meta descriptions, title tags, clean URLs, mobile optimization, and integration with Google Analytics. All templates are built with SEO best practices in mind."
    },
    {
      question: "What is the pricing?",
      answer: "Squarespace offers several plans starting with a free 14-day trial. Personal plans start at $16/month, Business plans at $23/month, and Commerce plans at $27/month when billed annually. All plans include hosting, SSL certificates, and 24/7 customer support."
    },
    {
      question: "Can I connect a custom domain?",
      answer: "Yes, you can either register a new domain through Squarespace (first year free with annual plans) or transfer an existing domain from another provider. Squarespace is an ICANN-accredited registrar, so you can manage everything in one place."
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No coding knowledge is required! Squarespace is designed for beginners with a drag-and-drop interface. However, if you do know code, you can add custom CSS, HTML, and JavaScript for advanced customization."
    }
  ]

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
              Frequently asked questions
            </motion.h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-3 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-squarespace-gray-800 pb-4"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-squarespace-gray-200 transition-colors duration-200"
                >
                  <span className="text-squarespace-white font-medium text-lg">
                    {item.question}
                  </span>
                  {expandedItems.has(index) ? (
                    <Minus size={20} className="text-squarespace-gray-400 flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-squarespace-gray-400 flex-shrink-0" />
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
                      <div className="pb-4">
                        <p className="text-squarespace-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
