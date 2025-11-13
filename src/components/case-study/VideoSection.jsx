import { motion } from 'framer-motion'

export default function VideoSection({ src, poster, caption, layout = 'standard' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.figure 
      className={`case-section video-section video-${layout}`}
      variants={itemVariants}
    >
      <video 
        className="case-video" 
        controls 
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption && <figcaption className="case-caption">{caption}</figcaption>}
    </motion.figure>
  )
}

