import './styles.css'
import { caseStudies } from './case-studies/index.js'
import { renderCaseStudy } from './case-studies/layout.js'

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

        <div class="projects-grid">
          <a class="card-link" href="#/case/adobe" aria-label="Open Adobe case study">
            <div class="project-card" data-card="adobe">
              <div class="card-inner">
                <div class="card-background" style="background: #4532A5;"></div>
              </div>
            </div>
          </a>

          <a class="card-link" href="#/case/pattern" aria-label="Open pattern case study">
            <div class="project-card" data-card="pattern">
              <div class="card-inner">
                <div class="card-background pattern-card">
                  <div class="cube-pattern">
                    <div class="cube-row">
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                    </div>
                    <div class="cube-row">
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                    </div>
                    <div class="cube-row">
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                      <div class="cube"><div class="cube-top"></div><div class="cube-left"></div><div class="cube-right"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a class="card-link" href="#/case/adobe" aria-label="Open dashboard case study">
            <div class="project-card" data-card="dashboard">
              <div class="card-inner">
                <div class="card-background" style="background: #004066;">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=811" alt="Laptop" class="laptop-img" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/813b5804ef9945c52d2afa42cb52bee2c7d74daa?width=600" alt="Dashboard" class="dashboard-screen" />
                </div>
              </div>
            </div>
          </a>

          <a class="card-link" href="#/case/carmo" aria-label="Open Carmo case study">
            <div class="project-card" data-card="carmo">
              <div class="card-inner">
                <div class="card-background" style="background: #645CBD;">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/0c1a290705da79d10b9be9f5fd3a15b7d85a0d55?width=848" alt="Phone body" class="phone-body phone-1" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/1fb2bc4009a35d2e1c098a5bb273fbfdc314f276?width=212" alt="Phone screen" class="phone-screen phone-1-screen" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=848" alt="Phone body" class="phone-body phone-2" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/fa051d1d361b463a43f2bf6e3f664fd2b6fd0d06?width=210" alt="Phone screen" class="phone-screen phone-2-screen" />
                </div>
              </div>
            </div>
          </a>

          <a class="card-link" href="#/case/graphs" aria-label="Open graphs case study">
            <div class="project-card" data-card="graphs">
              <div class="card-inner">
                <div class="card-background" style="background: #264530;">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=630" alt="Graph page" class="graph-img" />
                </div>
              </div>
            </div>
          </a>

          <a class="card-link" href="#/case/carmo" aria-label="Open resume-style case study">
            <div class="project-card" data-card="resume">
              <div class="card-inner">
                <div class="card-background resume-card">
                  <div class="resume-stack">
                    <div class="resume-layer layer-3" style="background: #20437B;">
                      <span class="resume-text">Email</span>
                    </div>
                    <div class="resume-layer layer-2" style="background: #20577B;">
                      <span class="resume-text">About Me</span>
                    </div>
                    <div class="resume-layer layer-1" style="background: #20767B;">
                      <span class="resume-text">Resume</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  `
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
