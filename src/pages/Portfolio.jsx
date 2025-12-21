import { useState } from 'react'
import PortfolioRow from '../components/PortfolioRow'
import SectionHeader from '../components/SectionHeader'
import ImageModal from '../components/ImageModal'
import { portfolioItems } from '../data/portfolio'

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Portfolio"
        subtitle="Selected builds, automations, and interface work."
      />

      <div className="space-y-6">
        {portfolioItems.map((project) => (
          <PortfolioRow
            key={project.id}
            project={project}
            onImageClick={() => setSelectedImage(project.image)}
          />
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        src={selectedImage}
        alt="Portfolio project screenshot"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}

export default Portfolio
