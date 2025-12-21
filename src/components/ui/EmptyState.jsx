import GlassCard from './GlassCard'
import PrimaryButton from './PrimaryButton'

function EmptyState({ title, message, cta, ctaTo, icon }) {
  return (
    <GlassCard className="p-8">
      <div className="space-y-4 text-center">
        {icon && <div className="text-5xl">{icon}</div>}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-slate-200/85">{message}</p>

        {cta && ctaTo && (
          <div className="pt-4">
            <PrimaryButton to={ctaTo} className="px-6">
              {cta}
            </PrimaryButton>
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export default EmptyState
