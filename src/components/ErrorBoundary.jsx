import { Component } from 'react'
import { ERROR_MESSAGES } from '../config/errorMessages'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorId: null,
    }
  }

  static getDerivedStateFromError(error) {
    const errorId = `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    if (import.meta.env.DEV) {
      console.error('[Error Boundary]', error, `ID: ${errorId}`)
    }
    return { hasError: true, errorId }
  }

  componentDidCatch(error, errorInfo) {
    // Could send to error tracking service here (Sentry, LogRocket, etc.)
    if (import.meta.env.DEV) {
      console.error('[Error Boundary Details]', errorInfo)
    }
  }

  handleReload = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      const { title, message } = ERROR_MESSAGES.ERROR_BOUNDARY

      return (
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md space-y-6">
            <div className="glass-surface rounded-2xl border border-white/15 bg-white/10 p-8 shadow-glass">
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold text-white">{title}</h1>
                <p className="text-slate-200/85">{message}</p>

                {this.state.errorId && (
                  <div className="rounded-lg bg-white/5 p-3">
                    <p className="text-xs text-slate-300/70">Error ID: {this.state.errorId}</p>
                    <p className="text-xs text-slate-300/70">Share this ID if contacting support.</p>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <button
                    onClick={this.handleReload}
                    className="inline-flex items-center justify-center rounded-full bg-navy-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-400"
                  >
                    Go Home
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
