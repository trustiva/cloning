import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaText: string
  ctaLink: string
  layout: 'left' | 'right'
  backgroundColor: string
  textColor: string
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  layout,
  backgroundColor,
  textColor
}: FeatureSectionProps) => {
  const isLeftLayout = layout === 'left'

  return (
    <section className={`${backgroundColor} py-20`}>
      <div className="container-max px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isLeftLayout ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isLeftLayout ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${isLeftLayout ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <h2 className={`text-3xl md:text-4xl font-display ${textColor} leading-tight`}>
              {title}
            </h2>
            <p className={`${textColor.replace('text-', 'text-')} text-lg leading-relaxed opacity-80`}>
              {description}
            </p>
            <motion.a
              href={ctaLink}
              className={`inline-flex items-center space-x-2 font-semibold text-lg group ${
                textColor.includes('black') ? 'text-squarespace-blue-600 hover:text-squarespace-blue-700' : 'text-squarespace-white hover:text-squarespace-gray-200'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>{ctaText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isLeftLayout ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${isLeftLayout ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-96 object-cover rounded-lg shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
