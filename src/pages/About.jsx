import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import PersonalInfoCard from '../components/PersonalInfoCard'
import aboutData from '../data/about.js'

function About() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="About Me"
        subtitle="A concise overview of how I work, what I value, and the skills I bring to each engagement."
      />

      <PersonalInfoCard aboutData={aboutData} />

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">Career Objectives</h3>
          <p className="mt-3 text-slate-200/85">{aboutData.careerObjectives}</p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">Short Bio</h3>
          <p className="mt-3 text-slate-200/85">{aboutData.shortBio}</p>
        </GlassCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <ul className="mt-3 space-y-2 text-slate-200/85">
            {aboutData.education && aboutData.education.map((item, idx) => (
              <li key={idx}>• {item.program ? `${item.program}, ${item.school} (${item.years})` : item}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-6 sm:p-7 lg:col-span-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">Achievements & Responsibilities</h3>
              <ul className="mt-3 space-y-2 text-slate-200/85">
                {aboutData.achievementsAndResponsibilities && aboutData.achievementsAndResponsibilities.map((item, idx) => (
                  <li key={idx}>• <span className="font-semibold">{item.title}:</span> {item.details}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Certificates & Licenses</h3>
              <ul className="mt-3 space-y-2 text-slate-200/85">
                {aboutData.certificatesAndLicenses && aboutData.certificatesAndLicenses.map((cert, idx) => (
                  <li key={idx}>• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

export default About
