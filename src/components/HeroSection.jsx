import { motion, AnimatePresence } from 'framer-motion'
import profileImage from '../assets/homepage/logos/homepageme.png'

export default function HeroSection({ content }) {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.35 } }
  }

  if (!content) {
    return (
      <div className="hero-heading">
        Hey there! I'm Patricia
        <button className="profile-pill" aria-label="View profile">
          <img
            src={profileImage}
            alt="Patricia profile"
            className="profile-image"
          />
        </button>
        <div style={{ marginLeft: '1px' }}>,</div>
        a product designer shaping clarity out of complexity.
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={JSON.stringify(content)}
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hero-heading"
      >
        <div className="hero-content-block">
          <div>{content.line1 || '\u00A0'}</div>
          <div>{content.line2 || '\u00A0'}</div>
          <div className="hero-special-text-line">
            <span className="hero-special-text">{content.line3 || '\u00A0'}</span>
            {content.image && <img src={content.image} alt={content.alt} className="hero-logo" />}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
