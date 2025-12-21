# Error Handling Implementation Guide

This portfolio now includes a complete, scalable error-handling system with user-safe error messages and polished error UI states.

## 📋 Overview

- ✅ **404 Page** — Clean "Page Not Found" with quick links
- ✅ **Maintenance Mode** — Toggle with `VITE_MAINTENANCE_MODE=true` in `.env`
- ✅ **Global Error Boundary** — Catches UI crashes and shows fallback UI
- ✅ **API Wrapper** — Normalized, safe error responses
- ✅ **Reusable Error Components** — `ErrorState`, `EmptyState`
- ✅ **Configuration-driven** — All error messages in `src/config/errorMessages.js`

## 🗂️ File Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx          # Global error boundary wrapper
│   └── ui/
│       ├── ErrorState.jsx         # Reusable error UI card
│       └── EmptyState.jsx         # Reusable empty state UI card
├── config/
│   └── errorMessages.js           # Centralized error message text
├── constants/
│   └── errorTypes.js              # Error type enums & HTTP codes
├── pages/
│   └── errors/
│       ├── NotFound.jsx           # 404 page
│       └── Maintenance.jsx        # Maintenance mode page
├── services/
│   └── api/
│       └── apiClient.js           # Fetch wrapper with error handling
└── utils/
    └── errorHandler.js            # Utility functions for safe error handling
```

## 🚀 Usage

### 1. **Enable Maintenance Mode**

Add to `.env`:
```
VITE_MAINTENANCE_MODE=true
```

Restart dev server. All routes (except Contact) now show the Maintenance page.

Disable by setting:
```
VITE_MAINTENANCE_MODE=false
```

### 2. **Use the API Wrapper**

```javascript
import { apiFetch, post } from '../services/api/apiClient'

// GET request
const { success, data, error } = await apiFetch('/api/endpoint')

// POST request
const { success, data, error } = await post('/api/contact', {
  name: 'John',
  email: 'john@example.com'
})

if (!success) {
  // error.type: 'network' | 'server' | 'validation' | 'auth' | 'notFound' | 'unknown'
  // error.message: safe user-facing message
  console.log(error.message)
}
```

### 3. **Use Error State Components**

```javascript
import ErrorState from '../components/ui/ErrorState'
import { ERROR_MESSAGES } from '../config/errorMessages'

<ErrorState
  title={ERROR_MESSAGES.API_ERROR.title}
  message={ERROR_MESSAGES.API_ERROR.message}
  onRetry={() => fetchData()}
  showRetry={true}
/>
```

### 4. **Create Safe Error Messages**

```javascript
import { createSafeError } from '../utils/errorHandler'

try {
  // Some operation
} catch (err) {
  const safeError = createSafeError(err, ERROR_TYPES.UNKNOWN)
  // safeError has: { type, message, title }
  setStatus({ type: 'error', message: safeError.message })
}
```

## 📄 Error Message Configuration

Edit `src/config/errorMessages.js` to update any user-facing error text:

```javascript
export const ERROR_MESSAGES = {
  NOT_FOUND: {
    title: 'Page Not Found',
    message: 'The page you\'re looking for doesn\'t exist or has been moved.'
  },
  NETWORK_ERROR: {
    title: 'Connection Error',
    message: 'Unable to connect. Please check your internet and try again.'
  },
  // ... more messages
}
```

## 🔒 Production Safety

- ✅ No raw stack traces shown in UI
- ✅ No internal error messages exposed
- ✅ Development errors logged to console only in `DEV` mode
- ✅ Production errors logged with safe, generic messages
- ✅ Error IDs generated for support reference (without exposing details)

## ⚙️ Configuration via Environment Variables

```
# .env
VITE_MAINTENANCE_MODE=false
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## 🧪 Testing Error Pages

1. **404 Page:** Navigate to `/invalid-page`
2. **Maintenance Mode:** Set `VITE_MAINTENANCE_MODE=true` in `.env`, restart dev server
3. **Error Boundary:** Simulate a component error by throwing in any component's render

## 📚 Further Enhancements

- Add error tracking service (Sentry, LogRocket)
- Implement retry logic with exponential backoff
- Add request timeout handling
- Create service health check
- Add analytics for error tracking

---

**All error pages are branded with the site's glassmorphism navy-blue theme and fully responsive.**
