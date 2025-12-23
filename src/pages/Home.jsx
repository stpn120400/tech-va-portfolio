import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import PrimaryButton from '../components/PrimaryButton'
import SectionHeader from '../components/SectionHeader'
import SystemsPanel from '../components/ui/SystemsPanel'

const previewCards = [
  {
    title: 'About Me',
    copy: 'Career objectives, bio, and what drives my work.',
    to: '/about',
  },
  {
    title: 'Experiences',
    copy: 'Professional history and technical VA engagements.',
    to: '/experiences',
  },
  {
    title: 'Portfolio',
    copy: 'Selected builds, automations, and recent experiments.',
    to: '/portfolio',
  },
]

function Home() {
  return (
    <div className="space-y-12">
      <GlassCard className="relative p-6 overflow-hidden sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" aria-hidden />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-navy-100/80">
              Tech Virtual Assistant
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Building reliable automation systems for modern operations.
              </h1>
              <p className="text-lg text-slate-200/85 sm:text-xl">
                I design AI-driven automations, calm dashboards, and polished microsites so founders can move faster with clarity.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryButton to="/portfolio">View Portfolio</PrimaryButton>
              <PrimaryButton to="/contact" variant="secondary">
                Contact Me
              </PrimaryButton>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200/75">
              <span className="badge-pill">Available for part-time and full-time engagements</span>
              <span className="badge-pill">Based in Asia/Manila (GMT+8) • Remote-first</span>
            </div>
          </div>

          <div className="relative z-10">
            <SystemsPanel />
          </div>
        </div>
      </GlassCard>

      <div className="space-y-6">
        <SectionHeader
          title="Navigate the work"
          subtitle="Quick links into the core sections of this portfolio."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewCards.map((item) => (
            <Link key={item.to} to={item.to} className="block">
              <GlassCard className="h-full p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.14em] text-navy-100/80">Section</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Open</span>
                </div>
                <p className="mt-3 text-slate-200/80">{item.copy}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
