import GlassCard from './GlassCard'
import PrimaryButton from './PrimaryButton'

function ErrorState({ title, message, onRetry, showRetry = true }) {
  return (
    <GlassCard className="p-8">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-slate-200/85">{message}</p>

        {showRetry && onRetry && (
          <div className="pt-4">
            <PrimaryButton onClick={onRetry} className="px-6">
              Try Again
            </PrimaryButton>
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export default ErrorState
