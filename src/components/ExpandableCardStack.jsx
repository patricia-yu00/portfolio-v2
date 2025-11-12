import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ExpandableCardStack({ cards, isExpanded, isCompressed, onHover, onHoverEnd }) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
  const [isStackHovered, setIsStackHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const getCardTransform = (index, isHovered) => {
    if (!isStackHovered) {
      // Stacked state - offset cards slightly so you can see them
      return {
        x: index * 15,
        y: index * 10,
        rotate: 0,
        scale: 1,
        zIndex: cards.length - index
      }
    }

    // Expanded state - diagonal expansion up and to the left
    const diagonalOffset = 100
    const scale = isHovered ? 1.05 : 1
    // Offset to keep bottom card fixed (compensate for container height change from 256 to 381)
    const heightDiff = 125

    return {
      x: -index * diagonalOffset,
      y: heightDiff - (index * diagonalOffset),
      rotate: 0,
      scale: scale,
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
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <motion.div
        className="project-card"
        variants={projectCardVariants}
        animate={state}
      >
        <div
          className="expandable-card-stack"
          onMouseEnter={() => {
            setIsStackHovered(true)
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 500)
          }}
          onMouseLeave={() => {
            setIsStackHovered(false)
            setHoveredCardIndex(null)
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 500)
          }}
        >
          {cards.map((card, index) => {
            const transform = getCardTransform(index, hoveredCardIndex === index)
            const CardWrapper = card.href && !card.external ? Link : 'a'
            
            let linkProps = {}
            if (card.href) {
              if (card.external) {
                linkProps = {
                  href: card.href,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }
              } else {
                linkProps = { to: card.href }
              }
            } else if (card.mailto) {
              linkProps = { href: card.mailto }
            } else {
              linkProps = { href: '#', onClick: (e) => e.preventDefault() }
            }

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
                onMouseEnter={() => !isAnimating && setHoveredCardIndex(index)}
                onMouseLeave={() => !isAnimating && setHoveredCardIndex(null)}
                style={{
                  cursor: isStackHovered ? 'pointer' : 'default',
                  pointerEvents: isAnimating ? 'none' : 'auto'
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
