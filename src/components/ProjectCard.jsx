import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({
  card,
  isExpanded,
  isCompressed,
  onHover,
  onHoverEnd,
  cardLink
}) {
  const cardVariants = {
    compressed: {
      flex: 0.908,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    expanded: {
      flex: 1.451,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    normal: {
      flex: 1,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  }

  const projectCardVariants = {
    compressed: {
      height: 256,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    expanded: {
      height: 381,
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    normal: {
      height: 256,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  }

  const shadowVariants = {
    compressed: {
      boxShadow: '0 1.875px 3.75px 1.406px rgba(0, 0, 0, 0.15), 0 0.469px 1.406px 0 rgba(0, 0, 0, 0.30)',
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    expanded: {
      boxShadow: '0 8px 16px 4px rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.35)',
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
    normal: {
      boxShadow: '0 1.875px 3.75px 1.406px rgba(0, 0, 0, 0.15), 0 0.469px 1.406px 0 rgba(0, 0, 0, 0.30)',
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  }

  let state = 'normal'
  if (isExpanded) state = 'expanded'
  if (isCompressed) state = 'compressed'

  const cardContent = (
    <motion.div
      className="project-card"
      variants={projectCardVariants}
      animate={state}
    >
      <div className="card-inner">
        {card.stack ? (
          <div className="resume-stack">
            {card.stack.map((stackCard, index) => (
              <motion.div
                key={index}
                className="resume-layer"
                style={{
                  zIndex: card.stack.length - index,
                  transform: `translate(${index * 6}px, ${index * 6}px)`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="resume-card-background">
                  <img
                    src={stackCard.image}
                    alt={stackCard.alt}
                    className="card-cover-image"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="card-background"
            style={{ background: card.background }}
            variants={shadowVariants}
            animate={state}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="card-cover-image"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )

  const wrapper = (
    <motion.div
      className="card-link"
      variants={cardVariants}
      animate={state}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      ref={cardLink}
    >
      {cardContent}
    </motion.div>
  )

  if (card.stack || !card.slug) {
    return wrapper
  }

  return (
    <Link to={`/case/${card.slug}`} style={{ textDecoration: 'none' }}>
      <motion.div
        className="card-link"
        variants={cardVariants}
        animate={state}
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        ref={cardLink}
      >
        {cardContent}
      </motion.div>
    </Link>
  )
}
