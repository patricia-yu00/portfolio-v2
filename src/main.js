import './styles.css'
import { caseStudies } from './case-studies/index.js'
import { renderCaseStudy } from './case-studies/layout.js'
import { cards } from './cards/index.js'
import { renderCard } from './cards/layout.js'

const root = document.getElementById('app')

function updateNYCTime() {
  const now = new Date()
  const nycTime = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const timeElement = document.getElementById('nyc-time')
  if (timeElement) {
    timeElement.textContent = `NYC • ${nycTime}`
  }
}

function renderHome() {
  const cardHtml = cards
    .map((c) => `<a class="card-link" href="${c.link}" aria-label="Open ${c.slug} case">${renderCard(c)}</a>`)
    .join('')

  root.innerHTML = `
    <main class="portfolio-container">
      <div class="portfolio-content">
        <div class="hero-section">
          <h1 class="hero-heading">
            Hey there! I'm Patricia
            <button class="profile-pill" aria-label="View profile">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/2489a895dad2614ef19df70de9ef72204a4b9b5b?width=232" alt="Patricia profile" class="profile-image" />
            </button>
            <div style="margin-left: 1px;">,</div>
            a product designer shaping clarity out of complexity.
          </h1>
        </div>

        <div class="info-bar">
          <div class="currently-at">Currently @ Adobe</div>
          <a href="#interactive" class="interactive-link">Interactive mode</a>
          <div id="nyc-time" class="nyc-time">NYC • 00:00:00</div>
        </div>

        <div class="projects-grid">
          ${cardHtml}
        </div>
      </div>
    </main>
  `

  attachCardHoverHandlers()
  initCardDeck()
}

const CARD_HERO_CONTENT = [
  null,
  {
    text: 'Enhancing AI tools to improve workflows and ',
    highlight: 'adoption in finance',
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/53e0801a582dc2ca9d5bcc187c07165f688d51f6?width=140',
      alt: 'Moody\'s'
    }
  },
  {
    text: 'Creating a more efficient order management ',
    specialText: 'experience for engineers',
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/befe117fa011fa36706d8adf7da93e5248343996?width=80',
      alt: 'Verizon'
    },
    layout: 'horizontal'
  },
  {
    text: 'Designing an inclusive autonomous vehicle car-',
    specialText: 'sharing app experience',
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/480e8e6331ebaa9afe5eb428f661d04c61c06970?width=103',
      alt: 'PennDOT'
    },
    layout: 'horizontal'
  },
  {
    text: 'Stimulating smartphone growth & understanding ',
    specialText: 'brand switching behavior',
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/349402280f99b7abc5b05d16fb89e713bbe801da?width=97',
      alt: 'Google'
    },
    layout: 'horizontal'
  }
]

const FADE_DURATION = 350

function buildHeroHtml(contentConfig) {
  if (!contentConfig) return ''

  if (contentConfig.layout === 'horizontal' && contentConfig.specialText) {
    return `
      <div class="hero-content-block">
        <div>${contentConfig.text}</div>
        <div class="hero-special-text-line">
          <span class="hero-special-text">${contentConfig.specialText}</span>
          <img src="${contentConfig.image.src}" alt="${contentConfig.image.alt}" class="hero-logo" />
        </div>
      </div>
    `
  }

  const highlightPart = contentConfig.highlight
    ? `<div class="hero-highlight">${contentConfig.highlight}</div>`
    : ''

  return `${contentConfig.text}${highlightPart}<img src="${contentConfig.image.src}" alt="${contentConfig.image.alt}" class="hero-logo" />`
}

function fadeHeroContent(heroHeading, newContent, callback) {
  // 0) Reset classes so the next animation can start fresh
  heroHeading.classList.remove('hero-heading-fade-in', 'hero-heading-fade-out')
  void heroHeading.offsetWidth // force reflow to restart animations

  // 1) Fade OUT current content
  heroHeading.classList.add('hero-heading-fade-out')

  setTimeout(() => {
    // 2) Swap content after fade-out completes
    heroHeading.innerHTML = newContent

    // 3) Fade IN new content
    heroHeading.classList.remove('hero-heading-fade-out')
    void heroHeading.offsetWidth // reflow so fade-in restarts every time
    heroHeading.classList.add('hero-heading-fade-in')

    // 4) Clean up so future fades can retrigger
    setTimeout(() => {
      heroHeading.classList.remove('hero-heading-fade-in')
      callback?.()
    }, FADE_DURATION)
  }, FADE_DURATION)
}


function updateCardExpansion(cardLinks, activeLink) {
  cardLinks.forEach(link => {
    link.classList.remove('compressed', 'expanded')
  })

  cardLinks.forEach(link => {
    if (link !== activeLink) {
      link.classList.add('compressed')
    } else {
      link.classList.add('expanded')
    }
  })
}

function attachCardHoverHandlers() {
  const cardLinks = document.querySelectorAll('.card-link')
  const heroHeading = document.querySelector('.hero-heading')
  if (!heroHeading || !cardLinks.length) return

  const originalHeroContent = heroHeading.innerHTML
  let currentActiveCardIndex = null

  // Helper to find whether we're still inside the grid
  const grid = document.querySelector('.projects-grid')

  cardLinks.forEach((link, cardIndex) => {
    link.addEventListener('mouseenter', () => {
      // Only apply hover behavior on desktop
      if (window.innerWidth > 768) {
        // Expand/compress via your existing helper
        updateCardExpansion(cardLinks, link)

        // Always fade when switching to a different card
        if (currentActiveCardIndex !== cardIndex) {
          const heroContent = CARD_HERO_CONTENT[cardIndex]
          const nextHtml = heroContent ? buildHeroHtml(heroContent) : originalHeroContent

          // Run the fade swap; update the active index after swap
          fadeHeroContent(heroHeading, nextHtml, () => {
            currentActiveCardIndex = cardIndex
          })
        }
      }
    })

    link.addEventListener('mouseleave', (e) => {
      // Only apply hover behavior on desktop
      if (window.innerWidth > 768) {
        // If we're moving to another card inside the grid, do NOT reset hero;
        // let the next mouseenter handle the fade to the new card.
        const toEl = e.relatedTarget
        const movingInsideAnotherCard =
          !!toEl && (!!toEl.closest && !!toEl.closest('.card-link') && grid && grid.contains(toEl))

        if (movingInsideAnotherCard) return

        // We left the grid (or to a non-card area): clear expansion classes
        cardLinks.forEach(l => {
          l.classList.remove('compressed', 'expanded')
        })

        // Fade back to original only when leaving card area entirely
        if (currentActiveCardIndex !== null) {
          fadeHeroContent(heroHeading, originalHeroContent, () => {
            currentActiveCardIndex = null
          })
        }
      }
    })
  })
}

function initCardDeck() {
  const grid = document.querySelector('.projects-grid')
  const cardLinks = Array.from(document.querySelectorAll('.card-link'))
  const heroHeading = document.querySelector('.hero-heading')

  if (!grid || !cardLinks.length || window.innerWidth > 768) return

  const originalHeroContent = heroHeading.innerHTML
  let cardStack = Array.from({length: cards.length}, (_, i) => i)
  let isDragging = false
  let dragStartX = 0
  let dragStartY = 0
  let lastHeroIndex = null
  let topCardDomIndex = null
  const DRAG_THRESHOLD = 50
  const CARD_SCALE = 0.06
  const CARD_OPACITY = 0.12

  // Generate random offsets and rotations for each card position in deck
  const generateRandomOffsets = () => {
    return {
      y: (Math.random() - 0.5) * 35,
      x: (Math.random() - 0.5) * 35,
      rotate: (Math.random() - 0.5) * 8
    }
  }

  const cardOffsets = Array.from({length: cards.length}, generateRandomOffsets)

  function updateDeckLayout(skipHeroUpdate = false, dragDelta = 0, dragRotate = 0) {
    cardLinks.forEach((link, domIndex) => {
      const stackPosition = cardStack.indexOf(domIndex)
      if (stackPosition === -1) return

      const zIndex = cards.length - stackPosition
      const offsets = cardOffsets[stackPosition]
      const yOffset = stackPosition * 14 + offsets.y
      const xOffset = stackPosition * 10 + offsets.x
      const baseRotate = offsets.rotate
      const scale = 1 - stackPosition * CARD_SCALE
      const opacity = 1 - stackPosition * CARD_OPACITY

      if (stackPosition === 0) {
        // Top card - apply drag transform
        link.style.zIndex = zIndex
        link.style.transform = `translateY(${yOffset}px) translateX(${xOffset + dragDelta}px) scale(${scale}) rotateZ(${baseRotate + dragRotate}deg)`
        link.style.opacity = opacity
        link.style.transition = 'none'
      } else {
        // Stacked cards - smooth animation
        link.style.zIndex = zIndex
        link.style.transform = `translateY(${yOffset}px) translateX(${xOffset}px) scale(${scale}) rotateZ(${baseRotate}deg)`
        link.style.opacity = opacity
        link.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease'
      }
    })

    if (!skipHeroUpdate) {
      const topCardIndex = cardStack[0]
      if (lastHeroIndex !== topCardIndex) {
        const heroContent = CARD_HERO_CONTENT[topCardIndex]
        const nextHtml = heroContent ? buildHeroHtml(heroContent) : originalHeroContent
        fadeHeroContent(heroHeading, nextHtml)
        lastHeroIndex = topCardIndex
      }
    }
  }

  function handleDragEnd(deltaX) {
    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      if (deltaX > 0) {
        // Swipe right: move top card to bottom with new random offset
        const topCard = cardStack.shift()
        cardStack.push(topCard)
        // Generate new random position for the card that went to the back
        cardOffsets[cards.length - 1] = generateRandomOffsets()
      } else {
        // Swipe left: move bottom card to top with new random offset
        const bottomCard = cardStack.pop()
        cardStack.unshift(bottomCard)
        // Shift offsets so the new top card (previously bottom) has its offset at position 0
        cardOffsets.unshift(generateRandomOffsets())
        cardOffsets.pop()
      }
    }

    isDragging = false
    topCardDomIndex = null
    cardLinks.forEach(link => link.classList.remove('dragging'))
    updateDeckLayout()
  }

  cardLinks.forEach((link, domIndex) => {
    link.addEventListener('pointerdown', (e) => {
      const topCardDomIdx = cardStack[0]
      if (topCardDomIdx !== domIndex) return

      isDragging = true
      dragStartX = e.clientX
      dragStartY = e.clientY
      topCardDomIndex = domIndex
      link.classList.add('dragging')
    })

    link.addEventListener('pointermove', (e) => {
      if (!isDragging || topCardDomIndex !== domIndex) return

      const deltaX = e.clientX - dragStartX
      const deltaY = e.clientY - dragStartY

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      const dragRotate = Math.max(-15, Math.min(15, angle / 10))

      updateDeckLayout(true, deltaX, dragRotate)
    })

    link.addEventListener('pointerup', (e) => {
      if (!isDragging || topCardDomIndex !== domIndex) return

      const deltaX = e.clientX - dragStartX
      handleDragEnd(deltaX)
    })

    link.addEventListener('pointercancel', () => {
      if (topCardDomIndex !== domIndex) return
      isDragging = false
      link.classList.remove('dragging')
      topCardDomIndex = null
      updateDeckLayout()
    })
  })

  updateDeckLayout()
}


function renderCase(slug) {
  const data = caseStudies[slug]
  if (!data) {
    root.innerHTML = `
      <main class="case-container">
        <article class="case-study">
          <header class="case-header">
            <a href="#" class="back-link" aria-label="Back to home">← Back</a>
            <h1 class="case-title">Not found</h1>
            <p class="case-introduction">No case study exists for “${slug}”.</p>
          </header>
        </article>
      </main>
    `
    return
  }
  root.innerHTML = renderCaseStudy(data)
}

function route() {
  const hash = window.location.hash
  const match = hash.match(/^#\/case\/(.+)$/)
  if (match) {
    renderCase(match[1])
  } else {
    renderHome()
  }
  updateNYCTime()
}

route()
window.addEventListener('hashchange', route)
setInterval(updateNYCTime, 1000)

window.addEventListener('resize', () => {
  route()
})

if (import.meta.hot) {
  import.meta.hot.accept()
}
