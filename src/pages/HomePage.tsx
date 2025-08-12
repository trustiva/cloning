import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import DomainSearchSection from '../components/DomainSearchSection'
import TemplateShowcaseSection from '../components/TemplateShowcaseSection'
import FAQSection from '../components/FAQSection'
import SupportSection from '../components/SupportSection'

const HomePage = () => {
  return (
    <div className="bg-squarespace-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Domain Search Section */}
      <DomainSearchSection />

      {/* Feature Sections */}
      <FeatureSection
        title="Create a website to showcase your business"
        description="Design a website using our industry-leading website templates, designer fonts, and color palettes."
        imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Portrait of a creative professional"
        ctaText="Create a website"
        ctaLink="/templates"
        layout="left"
        backgroundColor="bg-squarespace-gray-50"
        textColor="text-squarespace-black"
      />

      <FeatureSection
        title="Sell your products and offerings"
        description="Create an online store, book appointments, or sell your services or content—all on a single platform built just for you."
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="E-commerce store interface"
        ctaText="Sell online"
        ctaLink="/stores"
        layout="right"
        backgroundColor="bg-squarespace-gray-100"
        textColor="text-squarespace-black"
      />

      <FeatureSection
        title="Market your business"
        description="Promote your business and grow your customer base with email marketing, social media, and SEO tools."
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Marketing analytics dashboard"
        ctaText="Market your business"
        ctaLink="/marketing"
        layout="left"
        backgroundColor="bg-squarespace-gray-50"
        textColor="text-squarespace-black"
      />

      {/* Template Showcase */}
      <TemplateShowcaseSection />

      {/* Tools Section */}
      <section className="bg-squarespace-gray-900 py-20">
        <div className="container-max px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-squarespace-white mb-6">
              Tools to help you sell your time and expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Scheduling */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-squarespace-white">
                Schedule classes and appointments
              </h3>
              <p className="text-squarespace-gray-300 text-lg leading-relaxed">
                Take the hassle out of online scheduling with tools to keep your clients happy and your calendar booked. Promote your availability, accept payments, and more.
              </p>
              <button className="btn-secondary flex items-center space-x-2">
                <span>EXPLORE SCHEDULING</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Scheduling Interface Preview */}
            <div className="relative">
              <div className="bg-squarespace-gray-50 rounded-lg p-6 shadow-strong">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-squarespace-black">ROTATE STUDIO</h4>
                  <div className="flex items-center space-x-4 text-sm text-squarespace-gray-600">
                    <span>SCHEDULE</span>
                    <span>ABOUT</span>
                    <span>MERCH</span>
                    <span>CART</span>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-2xl font-bold text-squarespace-black mb-4">SCHEDULE</h5>
                  <div className="space-y-4">
                    <div className="bg-squarespace-white p-4 rounded-lg shadow-soft">
                      <h6 className="font-semibold text-squarespace-black">High Energy Top Hip Hop Hits</h6>
                      <p className="text-squarespace-gray-600 text-sm">1 Hour</p>
                      <p className="text-squarespace-gray-700 text-sm">60-Min easy-to-follow high energy hip hop dances with the best music.</p>
                      <button className="mt-2 bg-squarespace-black text-squarespace-white px-4 py-2 rounded text-sm font-medium">
                        Book
                      </button>
                    </div>
                    <div className="bg-squarespace-white p-4 rounded-lg shadow-soft">
                      <h6 className="font-semibold text-squarespace-black">Contemporary Interpretive</h6>
                      <p className="text-squarespace-gray-600 text-sm">1 Hour</p>
                      <p className="text-squarespace-gray-700 text-sm">60-Min combination movements focused on self-expression and emotion</p>
                      <button className="mt-2 bg-squarespace-black text-squarespace-white px-4 py-2 rounded text-sm font-medium">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Course Section */}
      <section className="bg-squarespace-gray-800 py-20">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-squarespace-white">
                Create an online course
              </h2>
              <p className="text-squarespace-gray-300 text-lg leading-relaxed">
                Turn your expertise into a passive income stream. Offer exclusive access to member-only content, create an online course, and paywall your content.
              </p>
              <button className="btn-secondary flex items-center space-x-2">
                <span>EXPLORE CONTENT & MEMBERSHIPS</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-squarespace-gray-50 rounded-lg p-6 shadow-strong">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-squarespace-black">Loam Bakery</h4>
                  <div className="flex items-center space-x-4 text-sm text-squarespace-gray-600">
                    <span>About</span>
                    <span>Classes</span>
                    <span>Account</span>
                  </div>
                </div>
                <h5 className="text-xl font-bold text-squarespace-black mb-4">Sourdough for Beginners</h5>
                <div className="bg-squarespace-yellow-400 h-2 rounded-full mb-4">
                  <div className="bg-squarespace-yellow-600 h-2 rounded-full w-1/4"></div>
                </div>
                <p className="text-sm text-squarespace-gray-600 mb-4">23% Progress</p>
                <div className="space-y-3">
                  <div className="border-l-4 border-squarespace-green-500 pl-3">
                    <h6 className="font-semibold text-squarespace-black">Fermentation</h6>
                    <p className="text-sm text-squarespace-gray-600">2 lessons - 00:32</p>
                  </div>
                  <div className="border-l-4 border-squarespace-yellow-500 pl-3">
                    <h6 className="font-semibold text-squarespace-black">Shaping</h6>
                    <p className="text-sm text-squarespace-gray-600">2 lessons - 00:36</p>
                  </div>
                  <div className="border-l-4 border-squarespace-gray-300 pl-3">
                    <h6 className="font-semibold text-squarespace-black">Baking</h6>
                    <p className="text-sm text-squarespace-gray-600">2 lessons - 00:46</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invoicing Section */}
      <section className="bg-squarespace-gray-900 py-20">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-squarespace-gray-50 rounded-lg p-6 shadow-strong">
                <div className="text-center">
                  <h4 className="font-semibold text-squarespace-black">ORTIZ PHOTOGRAPHY</h4>
                  <p className="text-squarespace-gray-600 text-sm">INVOICE #001</p>
                  <div className="my-4">
                    <h5 className="font-semibold text-squarespace-black">PORTRAITS - MAEVE</h5>
                    <p className="text-3xl font-bold text-squarespace-black">$1,350.00</p>
                    <p className="text-squarespace-gray-600 text-sm">DUE: NOV 15, 2023</p>
                  </div>
                  <button className="bg-squarespace-black text-squarespace-white px-6 py-3 rounded font-medium">
                    SEND INVOICE
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-squarespace-white">
                Get paid with invoices
              </h2>
              <p className="text-squarespace-gray-300 text-lg leading-relaxed">
                The simplest way to collect payments so you can focus on delivering projects and growing your business.
              </p>
              <button className="btn-secondary flex items-center space-x-2">
                <span>EXPLORE INVOICING</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Tools Section */}
      <section className="bg-squarespace-purple-100 py-20">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display text-squarespace-purple-900">
                Promote your business with built-in marketing tools
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-squarespace-purple-800 mb-2">
                    Grow your audience
                  </h3>
                  <p className="text-squarespace-purple-700">
                    Built-in SEO tools and social media integrations to maximize your reach and connect with your community.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-squarespace-purple-800 mb-2">
                    Engage with customers
                  </h3>
                  <p className="text-squarespace-purple-700">
                    Email campaigns that pull in your site's colors, products, and blog posts so your communications feel effortlessly on-brand.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-squarespace-purple-800 mb-2">
                    Optimize with analytics
                  </h3>
                  <p className="text-squarespace-purple-700">
                    Insights into who is visiting your site, how your online store is performing, and more.
                  </p>
                </div>
              </div>

              <button className="bg-squarespace-gray-200 border border-squarespace-gray-300 text-squarespace-black px-6 py-3 rounded font-medium hover:bg-squarespace-gray-300 transition-colors duration-200">
                EXPLORE MARKETING TOOLS
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-squarespace-purple-400 to-squarespace-blue-500 rounded-lg p-8 shadow-strong">
                <div className="bg-squarespace-white rounded-lg p-6 shadow-soft">
                  <p className="text-squarespace-purple-600 text-sm mb-2">Enjoy 10% off with code JELLY10</p>
                  <h4 className="text-squarespace-purple-800 font-semibold mb-1">Dig into Something Sweet</h4>
                  <h3 className="text-2xl font-bold text-squarespace-purple-900">
                    Jelly Cake <span className="text-lg font-normal">Season</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made with Squarespace Section */}
      <section className="bg-squarespace-gray-800 py-20">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-squarespace-gray-50 rounded-lg p-6 shadow-strong">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-squarespace-black">MEIWEN SEE</h4>
                  <div className="flex items-center space-x-4 text-sm text-squarespace-gray-600">
                    <span>Design</span>
                    <span>Photography</span>
                    <span>Journal</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-squarespace-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-squarespace-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-squarespace-gray-300 rounded-full"></div>
                  </div>
                  <p className="text-squarespace-black leading-relaxed">
                    Meiwen (/may-when/) is a <span className="underline">multidisciplinary designer</span> & <span className="underline">photographer</span> creating brand identities, digital experiences, and thoughtful imagery.
                  </p>
                </div>
                <div className="w-24 h-24 bg-squarespace-gray-200 rounded mx-auto"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-squarespace-white">
                Made with Squarespace
              </h2>
              <p className="text-squarespace-gray-300 text-lg leading-relaxed">
                Get inspired by a collection of websites made by Squarespace users just like you.
              </p>
              <button className="bg-squarespace-gray-200 border border-squarespace-gray-300 text-squarespace-black px-6 py-3 rounded font-medium hover:bg-squarespace-gray-300 transition-colors duration-200">
                VISIT SHOWCASE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Support Section */}
      <SupportSection />

      {/* Final CTA Section */}
      <section className="bg-squarespace-black py-20">
        <div className="container-max px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display text-squarespace-white mb-8"
          >
            Start your free website trial today
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <button className="btn-primary text-lg px-8 py-4">
              GET STARTED
            </button>
            <p className="text-squarespace-gray-300 text-lg">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
