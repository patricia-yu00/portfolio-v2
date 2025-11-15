import { motion } from 'framer-motion'

export default function ImageSection({ 
  image, 
  images, 
  alt, 
  caption,
  title,
  subtitle,
  layout = 'standard' // 'standard', 'full-width', 'full-bleed', 'side-by-side', 'grid'
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  // Single image
  if (image) {
    return (
      <motion.figure 
        className={`case-section image-section image-${layout}`}
        variants={itemVariants}
      >
        {title && <h3 className="case-section-title">{title}</h3>}
        {subtitle && <p className="case-section-subtitle">{subtitle}</p>}
        <img src={image} alt={alt || caption || title || 'Case study image'} className="case-image" />
        {caption && <figcaption className="case-caption">{caption}</figcaption>}
      </motion.figure>
    )
  }

  // Multiple images
  if (images && images.length > 0) {
    return (
      <motion.figure 
        className={`case-section image-section image-${layout}`}
        variants={itemVariants}
      >
        <div className={`image-group image-group-${layout}`}>
          {images.map((img, idx) => (
            <div key={idx} className="image-item">
              <img 
                src={img.src || img} 
                alt={img.alt || `Image ${idx + 1}`} 
                className="case-image" 
              />
              {img.caption && <figcaption className="case-caption">{img.caption}</figcaption>}
            </div>
          ))}
        </div>
        {caption && <figcaption className="case-caption">{caption}</figcaption>}
      </motion.figure>
    )
  }

  return null
}

