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
    text: 'Creating a more efficient order management experience for engineers ',
    highlight: null,
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/befe117fa011fa36706d8adf7da93e5248343996?width=80',
      alt: 'Verizon'
    }
  },
  {
    text: 'Designing an inclusive autonomous vehicle car-sharing app experience ',
    highlight: null,
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/480e8e6331ebaa9afe5eb428f661d04c61c06970?width=103',
      alt: 'PennDOT'
    }
  },
  {
    text: 'Stimulating smartphone growth & understanding brand switching behavior ',
    highlight: null,
    image: {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/349402280f99b7abc5b05d16fb89e713bbe801da?width=97',
      alt: 'Google'
    }
  }
]

const FADE_DURATION = 300

function buildHeroHtml(contentConfig) {
  if (!contentConfig) return ''

  const highlightPart = contentConfig.highlight
    ? `<div class="hero-highlight">${contentConfig.highlight}</div>`
    : ''

  return `${contentConfig.text}${highlightPart}<img src="${contentConfig.image.src}" alt="${contentConfig.image.alt}" class="hero-logo" />`
}

function fadeHeroContent(heroHeading, newContent, callback) {
  heroHeading.classList.add('hero-heading-fade-out')
  setTimeout(() => {
    heroHeading.innerHTML = newContent
    heroHeading.classList.remove('hero-heading-fade-out')
    heroHeading.classList.add('hero-heading-fade-in')
    callback?.()
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
  const originalHeroContent = heroHeading.innerHTML
  let currentActiveCardIndex = null

  cardLinks.forEach((link, cardIndex) => {
    link.addEventListener('mouseenter', () => {
      updateCardExpansion(cardLinks, link)

      const heroContent = CARD_HERO_CONTENT[cardIndex]
      if (heroContent && currentActiveCardIndex !== cardIndex) {
        const newHeroHtml = buildHeroHtml(heroContent)
        fadeHeroContent(heroHeading, newHeroHtml, () => {
          currentActiveCardIndex = cardIndex
        })
      }
    })

    link.addEventListener('mouseleave', () => {
      cardLinks.forEach(l => {
        l.classList.remove('compressed', 'expanded')
      })

      if (currentActiveCardIndex !== null) {
        fadeHeroContent(heroHeading, originalHeroContent, () => {
          currentActiveCardIndex = null
        })
      }
    })
  })
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

if (import.meta.hot) {
  import.meta.hot.accept()
}
