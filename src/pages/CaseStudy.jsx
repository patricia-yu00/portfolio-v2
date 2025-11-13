import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudiesData } from '../data/caseStudies'
import { CaseStudyHeader, SectionRenderer } from '../components/case-study'

export default function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudiesData[slug]

  if (!caseStudy) {
    return (
      <main className="case-container">
        <article className="case-study">
          <header className="case-header">
            <Link to="/" className="back-link" aria-label="Back to home">
              ← Back
            </Link>
            <h1 className="case-title">Not found</h1>
            <p className="case-introduction">No case study exists for "{slug}".</p>
          </header>
        </article>
      </main>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.main
      className="case-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <article className="case-study" itemScope itemType="https://schema.org/CreativeWork">
        <CaseStudyHeader
          title={caseStudy.title}
          company={caseStudy.company}
          role={caseStudy.role}
          timeline={caseStudy.timeline}
          hero={caseStudy.hero}
          heroAlt={caseStudy.heroAlt}
          introduction={caseStudy.introduction}
        />

        <motion.div className="case-body-content" variants={containerVariants}>
          {caseStudy.sections && caseStudy.sections.map((section, idx) => (
            <SectionRenderer key={idx} section={section} />
          ))}
        </motion.div>
      </article>
    </motion.main>
  )
}
