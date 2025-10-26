import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { cardsData, heroContent } from '../data/cards'

export default function CardGrid({ onCardHover }) {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [cardStack, setCardStack] = useState(cardsData.map((_, i) => i))
  const [isDragging, setIsDragging] = useState(false)
  const [dragDelta, setDragDelta] = useState(0)
  const [dragRotate, setDragRotate] = useState(0)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const gridRef = useRef(null)
  const cardRefsRef = useRef({})

  const DRAG_THRESHOLD = 50
  const CARD_SCALE = 0.06

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleCardHover = (index) => {
    if (!isMobile) {
      setExpandedIndex(index)
      onCardHover(index)
    }
  }

  const handleCardHoverEnd = () => {
    if (!isMobile) {
      setExpandedIndex(null)
      onCardHover(null)
    }
  }

  const handlePointerDown = (e, index) => {
    if (isMobile && cardStack[0] === index) {
      setIsDragging(true)
      dragStartRef.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handlePointerMove = (e) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStartRef.current.x
    const deltaY = e.clientY - dragStartRef.current.y

    setDragDelta(deltaX)

    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    const rotate = Math.max(-15, Math.min(15, angle / 10))
    setDragRotate(rotate)
  }

  const handlePointerUp = (e) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStartRef.current.x

    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      if (deltaX > 0) {
        // Swipe right
        const newStack = [...cardStack]
        const topCard = newStack.shift()
        newStack.push(topCard)
        setCardStack(newStack)
      } else {
        // Swipe left
        const newStack = [...cardStack]
        const bottomCard = newStack.pop()
        newStack.unshift(bottomCard)
        setCardStack(newStack)
      }
    }

    setIsDragging(false)
    setDragDelta(0)
    setDragRotate(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  if (isMobile) {
    return (
      <motion.div
        className="projects-grid"
        ref={gridRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {cardsData.map((card, domIndex) => {
          const stackPosition = cardStack.indexOf(domIndex)
          if (stackPosition === -1) return null

          const zIndex = cardsData.length - stackPosition
          const yOffset = stackPosition * 14
          const xOffset = stackPosition * 10
          const scale = 1 - stackPosition * CARD_SCALE

          const isTopCard = stackPosition === 0

          return (
            <motion.div
              key={domIndex}
              className="card-link"
              style={{
                position: 'absolute',
                width: '280px',
                height: '340px',
                zIndex,
                transform: isTopCard
                  ? `translateY(${yOffset}px) translateX(${xOffset + dragDelta}px) scale(${scale}) rotateZ(${dragRotate}deg)`
                  : `translateY(${yOffset}px) translateX(${xOffset}px) scale(${scale})`
              }}
              onPointerDown={(e) => handlePointerDown(e, domIndex)}
              animate={{}}
            >
              <div className="project-card" style={{ width: '100%', height: '100%' }}>
                <div className="card-inner">
                  {card.stack ? (
                    <div className="resume-stack">
                      {card.stack.map((stackCard, idx) => (
                        <div
                          key={idx}
                          className="resume-layer"
                          style={{
                            zIndex: card.stack.length - idx,
                            transform: `translate(${idx * 6}px, ${idx * 6}px)`
                          }}
                        >
                          <img
                            src={stackCard.image}
                            alt={stackCard.alt}
                            className="card-cover-image"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="card-background"
                      style={{ background: card.background }}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="card-cover-image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    )
  }

  return (
    <motion.div
      className="projects-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={gridRef}
    >
      {cardsData.map((card, index) => (
        <ProjectCard
          key={index}
          card={card}
          isExpanded={expandedIndex === index}
          isCompressed={expandedIndex !== null && expandedIndex !== index}
          onHover={() => handleCardHover(index)}
          onHoverEnd={handleCardHoverEnd}
          cardLink={cardRefsRef.current[index]}
        />
      ))}
    </motion.div>
  )
}
