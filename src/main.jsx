import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ensure GitHub Pages direct deep-links under the base path are converted to hash routes
// This keeps NotFound and other routes working consistently in production and preview.
(() => {
  const base = import.meta.env.BASE_URL || '/'
  const hasHash = typeof window !== 'undefined' && window.location.hash && window.location.hash.length > 1
  if (typeof window !== 'undefined' && !hasHash && base !== '/') {
    const path = window.location.pathname
    if (path.startsWith(base)) {
      const remainder = path.slice(base.length)
      if (remainder) {
        const search = window.location.search || ''
        const hash = window.location.hash || ''
        const target = base + '#/' + remainder + search + hash
        window.location.replace(target)
      }
    }
  }
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
