import { motion } from 'framer-motion'

export default function ProcessSteps({ title, steps, layout = 'vertical' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  return (
    <motion.section 
      className={`case-section process-section process-${layout}`}
      variants={itemVariants}
    >
      {title && <h2 className="case-section-title">{title}</h2>}
      
      <div className="process-steps">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx} 
            className="process-step"
            custom={idx}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="step-number">{idx + 1}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              {step.description && <p className="step-description">{step.description}</p>}
              {step.image && (
                <img src={step.image} alt={step.title} className="step-image" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

