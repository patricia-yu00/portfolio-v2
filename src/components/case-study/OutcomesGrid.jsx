import { motion } from 'framer-motion'

export default function OutcomesGrid({ title, outcomes, metrics, columns = 2 }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const data = outcomes || metrics || []

  return (
    <motion.section 
      className="case-section outcomes-section"
      variants={itemVariants}
    >
      {title && <h2 className="case-section-title">{title}</h2>}
      
      <div className={`outcomes-grid outcomes-cols-${columns}`}>
        {data.map((item, idx) => (
          <motion.div 
            key={idx}
            className="outcome-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            {item.metric && <div className="outcome-metric">{item.metric}</div>}
            {item.label && <div className="outcome-label">{item.label}</div>}
            {item.description && <p className="outcome-description">{item.description}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

