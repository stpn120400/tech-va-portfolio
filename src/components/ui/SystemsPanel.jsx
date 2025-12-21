import AnimatedIcon from '../icons/AnimatedIcon'
import * as Icons from '../icons/icons'
import * as Tools from '../../data/tools'
import * as Data from '../../data/workflows'

function resolveIcon(name) {
  return Icons[name] || Icons.Lightbulb
}

function SystemsPanel() {
  // Resilient access to data (supports named and default exports)
  const tools = Tools.coreTools || (Tools.default ? Tools.default.coreTools : [])
  const patterns = Data.workflowPatterns || (Data.default ? Data.default.workflowPatterns : [])
  const characteristics =
    Data.systemCharacteristics || (Data.default ? Data.default.systemCharacteristics : [])

  return (
    <div className="group glass-surface relative rounded-3xl border border-white/20 p-6 shadow-glass overflow-hidden">
      <div className="mb-4 flex items-center justify-between text-sm text-white/90">
        <p className="font-semibold">Systems & Workflows</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Capabilities</span>
      </div>

      <div className="space-y-5">
        {/* Core Tools */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-navy-100/80">Core Tools In Use</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((tool) => {
              const Icon = resolveIcon(tool.icon)
              return (
                <div key={tool.key} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/8 transition-colors">
                  <AnimatedIcon icon={Icon} size={18} color="text-white/90" animationType="hover-scale" ariaLabel={tool.label} />
                  <span className="text-sm text-white/85">{tool.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Workflow Patterns */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-navy-100/80">Workflow Patterns</p>
          <div className="mt-3 space-y-2">
            {patterns.map((item) => {
              const Icon = resolveIcon(item.icon)
              return (
                <div key={item.key} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <AnimatedIcon icon={Icon} size={18} color="text-white/85" animationType="none" ariaLabel={item.label} />
                  <span className="text-sm text-white/85">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* System Characteristics */}
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-navy-100/80">System Characteristics</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {characteristics.map((ch) => {
              const Icon = resolveIcon(ch.icon)
              return (
                <span key={ch.key} className="badge-pill bg-white/8 border border-white/10 text-white/85 inline-flex items-center gap-2">
                  <AnimatedIcon icon={Icon} size={16} color="text-white/85" animationType="none" ariaLabel={ch.label} />
                  {ch.label}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* Soft background accents */}
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-navy-400/20 blur-[70px]" aria-hidden />
      <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-sky-300/20 blur-[70px]" aria-hidden />
    </div>
  )
}

export default SystemsPanel
