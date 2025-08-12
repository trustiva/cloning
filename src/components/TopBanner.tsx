import { useState } from 'react'
import { Copy, Info, X } from 'lucide-react'

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('W8E20')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  if (!isVisible) return null

  return (
    <div className="bg-squarespace-black text-squarespace-white py-2 px-4">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm">
            For a limited time, take 20% off any new website plan. Use code at checkout:
          </span>
          <button
            onClick={handleCopyCode}
            className="bg-squarespace-gray-800 text-squarespace-white px-3 py-1 rounded-full text-sm font-medium hover:bg-squarespace-gray-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <span>W8E20</span>
            <Copy size={14} />
            {isCopied && (
              <span className="text-squarespace-green-400 text-xs">Copied!</span>
            )}
          </button>
          <Info size={16} className="text-squarespace-gray-400" />
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-squarespace-white hover:text-squarespace-gray-300 transition-colors duration-200"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default TopBanner
