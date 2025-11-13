import { motion } from 'framer-motion'
import TextSection from './TextSection'
import ImageSection from './ImageSection'

export default function TwoColumnSection({ left, right, gap = 'medium' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const renderColumn = (column) => {
    if (!column) return null

    switch (column.type) {
      case 'text':
        return <TextSection {...column} />
      case 'image':
        return <ImageSection {...column} />
      default:
        return <div>{column.content}</div>
    }
  }

  return (
    <motion.section 
      className={`case-section two-column-section gap-${gap}`}
      variants={itemVariants}
    >
      <div className="two-column-grid">
        <div className="column-left">
          {renderColumn(left)}
        </div>
        <div className="column-right">
          {renderColumn(right)}
        </div>
      </div>
    </motion.section>
  )
}

