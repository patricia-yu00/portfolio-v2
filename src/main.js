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
            </button>, a product designer shaping clarity out of complexity.
          </h1>
        </div>

        <div class="info-bar">
          <div class="currently-at">Currently @ Adobe</div>
          <div id="nyc-time" class="nyc-time">NYC • 00:00:00</div>
          <a href="#interactive" class="interactive-link">Interactive mode</a>
        </div>

        <div class="card-size-controls" role="group" aria-label="Card size">
          <button class="size-btn size-down" aria-label="Decrease card size">−</button>
          <input type="range" min="0.8" max="1.4" step="0.02" value="1" class="size-slider" aria-label="Card size slider" />
          <button class="size-btn size-up" aria-label="Increase card size">+</button>
        </div>

        <div class="projects-grid">
          ${cardHtml}
        </div>
      </div>
    </main>
  `

  const slider = document.querySelector('.size-slider')
  const down = document.querySelector('.size-down')
  const up = document.querySelector('.size-up')

  const clamp = (v) => Math.max(0.8, Math.min(1.4, v))
  const setScale = (v) => {
    document.documentElement.style.setProperty('--card-scale', String(v))
    if (slider) slider.value = String(v)
  }

  slider?.addEventListener('input', (e) => setScale(parseFloat(e.target.value)))
  down?.addEventListener('click', () => setScale(clamp(parseFloat(slider.value) - 0.05)))
  up?.addEventListener('click', () => setScale(clamp(parseFloat(slider.value) + 0.05)))
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
