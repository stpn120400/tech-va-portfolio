import { technicalSkills, personalSkills } from '../../data/skills'
import GlassCard from '../GlassCard'

function SkillBadge({ skill }) {
  return (
    <span className="badge-pill bg-white/10 border border-white/15 text-white/90 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block transition-transform duration-200 hover:scale-105 hover:bg-white/15">
      {skill}
    </span>
  )
}

function SkillsSection() {
  return (
    <GlassCard className="p-6 sm:p-7">
      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
      <div className="mb-5">
        <h4 className="text-base font-semibold text-navy-100/90 mb-2">Technical Skills</h4>
        <div className="flex flex-wrap">
          {technicalSkills.map((skill, idx) => (
            <SkillBadge skill={skill} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-base font-semibold text-navy-100/90 mb-2">Personal Skills</h4>
        <div className="flex flex-wrap">
          {personalSkills.map((skill, idx) => (
            <SkillBadge skill={skill} key={idx} />
          ))}
        </div>
      </div>
    </GlassCard>
  )
}

export default SkillsSection
