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

function attachCardHoverHandlers() {
  const grid = document.querySelector('.projects-grid')
  const heroHeading = document.querySelector('.hero-heading')
  if (!grid || !heroHeading) return

  const originalHeroContent = heroHeading.innerHTML
  let lastHovered = null
  let swapping = false

  // Single fade+swap routine that ALWAYS runs on change
  function fadeSwap(nextHtml) {
    // If we’re mid-swap, restart the animation cleanly
    heroHeading.classList.remove('hero-heading-fade-in')
    heroHeading.classList.add('hero-heading-fade-out')

    // Use transitionend if you’re using CSS transitions,
    // or animationend if you’re using CSS animations.
    const onEnd = () => {
      heroHeading.removeEventListener('transitionend', onEnd)
      heroHeading.removeEventListener('animationend', onEnd)
      heroHeading.innerHTML = nextHtml
      // flip classes to fade in
      heroHeading.classList.remove('hero-heading-fade-out')
      // force reflow so the fade-in always re-triggers
      void heroHeading.offsetWidth
      heroHeading.classList.add('hero-heading-fade-in')
      swapping = false
    }

    swapping = true
    // listen for either, in case your CSS uses one or the other
    heroHeading.addEventListener('transitionend', onEnd, { once: true })
    heroHeading.addEventListener('animationend', onEnd, { once: true })
  }

  // Event delegation: one listener for all cards
  grid.addEventListener('mouseover', (e) => {
    const link = e.target.closest('.card-link')
    if (!link || !grid.contains(link)) return

    // mark container state for CSS-based compress/expand
    if (!grid.classList.contains('is-hovering')) grid.classList.add('is-hovering')

    // if same card, do nothing
    if (lastHovered === link) return

    // update hovered class efficiently (no double loops)
    const prev = grid.querySelector('.card-link.hovered')
    if (prev) prev.classList.remove('hovered')
    link.classList.add('hovered')

    lastHovered = link

    // figure out index (1-based like your existing logic)
    const cardLinks = Array.from(grid.querySelectorAll('.card-link'))
    const index = cardLinks.indexOf(link)

    // choose hero content; if not in map, fall back to original
    const nextHtml = HERO_BY_INDEX[index] || originalHeroContent

    // run the fade every time the hovered card changes
    fadeSwap(nextHtml)
  })

  // When leaving the grid entirely, reset
  grid.addEventListener('mouseleave', () => {
    grid.classList.remove('is-hovering')
    const prev = grid.querySelector('.card-link.hovered')
    if (prev) prev.classList.remove('hovered')
    lastHovered = null
    fadeSwap(originalHeroContent)
  })
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
