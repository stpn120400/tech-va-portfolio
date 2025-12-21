import { useEffect, useRef } from 'react'
import AnimatedIcon from './icons/AnimatedIcon'
import { X } from './icons/icons'

/**
 * ImageModal Component
 * Accessible lightbox/modal for displaying enlarged images
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {boolean} isOpen - Whether modal is open
 * @param {function} onClose - Callback to close modal
 * @param {string} caption - Optional image caption
 */
function ImageModal({ src, alt, isOpen, onClose, caption }) {
  const modalRef = useRef(null)
  const imageRef = useRef(null)

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Handle click outside image to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      {/* Modal Container */}
      <div className="relative max-h-[90vh] max-w-[95vw] animate-[fadeInScale_0.3s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-lg bg-white/15 p-2 backdrop-blur-lg transition-all hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2"
          aria-label="Close image modal"
        >
          <AnimatedIcon
            icon={X}
            size={20}
            color="text-white"
            animationType="none"
            ariaLabel={null}
          />
        </button>

        {/* Image Container with Glassmorphism */}
        <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur-lg sm:p-4">
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption (optional) */}
          {caption && (
            <p
              id="image-modal-title"
              className="mt-3 text-center text-sm text-slate-200/80"
            >
              {caption}
            </p>
          )}
        </div>

        {/* Hint Text */}
        <p className="mt-3 text-center text-xs text-slate-300/60">
          Press ESC or click outside to close
        </p>
      </div>
    </div>
  )
}

export default ImageModal
