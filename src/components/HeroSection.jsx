import { motion, AnimatePresence } from 'framer-motion'

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
            src="https://api.builder.io/api/v1/image/assets/TEMP/2489a895dad2614ef19df70de9ef72204a4b9b5b?width=232"
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
        {content.layout === 'horizontal' && content.specialText ? (
          <div className="hero-content-block">
            <div>{content.text}</div>
            <div className="hero-special-text-line">
              <span className="hero-special-text">{content.specialText}</span>
              <img src={content.image} alt={content.alt} className="hero-logo" />
            </div>
          </div>
        ) : (
          <>
            {content.text}
            {content.highlight && (
              <div className="hero-highlight">{content.highlight}</div>
            )}
            <img src={content.image} alt={content.alt} className="hero-logo" />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
