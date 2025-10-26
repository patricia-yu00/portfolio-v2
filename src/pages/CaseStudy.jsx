import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudiesData } from '../data/caseStudies'

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
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
        <header className="case-header">
          <motion.div variants={itemVariants}>
            <Link to="/" className="back-link" aria-label="Back to home">
              ← Back
            </Link>
          </motion.div>

          <motion.h1 className="case-title" variants={itemVariants} itemprop="headline">
            {caseStudy.title}
          </motion.h1>

          <motion.figure className="case-hero" variants={itemVariants}>
            <img
              src={caseStudy.hero}
              alt={caseStudy.heroAlt}
              className="case-hero-img"
              itemprop="image"
            />
          </motion.figure>

          <motion.p className="case-introduction" variants={itemVariants} itemprop="description">
            {caseStudy.introduction}
          </motion.p>
        </header>

        <motion.div className="case-body-content" variants={containerVariants}>
          {caseStudy.sections.map((section, idx) => (
            <motion.section key={idx} className="case-section" variants={itemVariants}>
              <h3 className="case-section-title">{section.title}</h3>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="case-paragraph">
                  {para}
                </p>
              ))}
            </motion.section>
          ))}
        </motion.div>
      </article>
    </motion.main>
  )
}
