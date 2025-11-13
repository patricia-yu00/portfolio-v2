import { motion } from 'framer-motion'

export default function TextSection({ title, content, paragraphs, align = 'left' }) {
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
      className={`case-section text-section text-${align}`} 
      variants={itemVariants}
    >
      {title && <h2 className="case-section-title">{title}</h2>}
      
      {content && <p className="case-paragraph">{content}</p>}
      
      {paragraphs && paragraphs.map((para, idx) => (
        <p key={idx} className="case-paragraph">
          {para}
        </p>
      ))}
    </motion.section>
  )
}

