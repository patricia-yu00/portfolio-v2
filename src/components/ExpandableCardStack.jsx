import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ExpandableCardStack({ cards, isExpanded, isCompressed, onHover, onHoverEnd }) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
  const [isStackHovered, setIsStackHovered] = useState(false)

  const getCardTransform = (index, isHovered) => {
    if (!isStackHovered) {
      return {
        x: index * 6,
        y: index * 6,
        rotate: 0,
        scale: 1,
        zIndex: cards.length - index
      }
    }

    const transforms = [
      { x: 0, y: 0, rotate: 0 },
      { x: -140, y: -60, rotate: -3 },
      { x: -280, y: -120, rotate: -6 }
    ]

    const transform = transforms[index] || transforms[0]

    return {
      x: transform.x,
      y: transform.y,
      rotate: transform.rotate,
      scale: isHovered ? 1.05 : 1,
      zIndex: isHovered ? 110 : 103 - index
    }
  }

  const containerVariants = {
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

  let state = 'normal'
  if (isExpanded) state = 'expanded'
  if (isCompressed) state = 'compressed'

  return (
    <motion.div
      className="card-link expandable-card-stack-wrapper"
      variants={containerVariants}
      animate={state}
    >
      <motion.div
        className="project-card"
        variants={projectCardVariants}
        animate={state}
      >
        <div
          className="expandable-card-stack"
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={() => {
            setIsStackHovered(false)
            setHoveredCardIndex(null)
          }}
        >
          {cards.map((card, index) => {
            const transform = getCardTransform(index, hoveredCardIndex === index)
            const CardWrapper = card.href ? Link : 'a'
            const linkProps = card.href
              ? { to: card.href }
              : { href: card.mailto || '#', onClick: (e) => !card.mailto && e.preventDefault() }

            return (
              <motion.div
                key={index}
                className="expandable-card"
                animate={{
                  x: transform.x,
                  y: transform.y,
                  rotate: transform.rotate,
                  scale: transform.scale,
                  zIndex: transform.zIndex
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                style={{
                  cursor: isStackHovered ? 'pointer' : 'default'
                }}
              >
                <CardWrapper
                  {...linkProps}
                  className="expandable-card-inner"
                  style={{
                    background: card.background,
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <span className="expandable-card-text">{card.label}</span>
                </CardWrapper>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
