import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CaseStudyHeader({ title, company, role, timeline, hero, heroAlt, introduction }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <header className="case-header">
      <motion.div variants={itemVariants}>
        <Link to="/" className="back-link" aria-label="Back to home">
          ← Back
        </Link>
      </motion.div>

      <motion.h1 className="case-title" variants={itemVariants} itemProp="headline">
        {title}
      </motion.h1>

      {(company || role || timeline) && (
        <motion.div className="case-meta" variants={itemVariants}>
          {company && <div className="case-meta-item"><strong>Company:</strong> {company}</div>}
          {role && <div className="case-meta-item"><strong>Role:</strong> {role}</div>}
          {timeline && <div className="case-meta-item"><strong>Timeline:</strong> {timeline}</div>}
        </motion.div>
      )}

      {hero && (
        <motion.figure className="case-hero" variants={itemVariants}>
          <img
            src={hero}
            alt={heroAlt || `${title} hero image`}
            className="case-hero-img"
            itemProp="image"
          />
        </motion.figure>
      )}

      {introduction && (
        <motion.p className="case-introduction" variants={itemVariants} itemProp="description">
          {introduction}
        </motion.p>
      )}
    </header>
  )
}

