import { motion } from 'framer-motion'

export default function QuoteSection({ quote, author, role, company }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.section 
      className="case-section quote-section"
      variants={itemVariants}
    >
      <blockquote className="case-quote">
        <p className="quote-text">"{quote}"</p>
        {(author || role || company) && (
          <footer className="quote-attribution">
            {author && <cite className="quote-author">{author}</cite>}
            {(role || company) && (
              <div className="quote-details">
                {role && <span className="quote-role">{role}</span>}
                {company && <span className="quote-company">{company}</span>}
              </div>
            )}
          </footer>
        )}
      </blockquote>
    </motion.section>
  )
}

