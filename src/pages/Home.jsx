import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import CardGrid from '../components/CardGrid'
import { heroContent } from '../data/cards'

export default function Home() {
  const [nycTime, setNycTime] = useState('')
  const [activeCardIndex, setActiveCardIndex] = useState(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const time = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setNycTime(`NYC • ${time}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCardHover = (index) => {
    setActiveCardIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.main
      className="portfolio-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="portfolio-content">
        <motion.div
          className="hero-section"
          variants={itemVariants}
        >
          <HeroSection content={heroContent[activeCardIndex]} />
        </motion.div>

        <motion.div
          className="info-bar"
          variants={itemVariants}
        >
          <div className="currently-at">Currently @ Adobe</div>
          <a href="#interactive" className="interactive-link">Interactive mode</a>
          <div className="nyc-time">{nycTime}</div>
        </motion.div>

        <CardGrid onCardHover={handleCardHover} />
      </div>
    </motion.main>
  )
}
