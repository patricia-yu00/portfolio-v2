import './styles.css'

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

      <div class="projects-section">
        <div class="projects-grid">
          <div class="project-card card-adobe">
            <svg width="211" height="257" viewBox="0 0 211 257" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_783_114668)">
                <path d="M181.615 4H29.9258C16.7119 4 6 14.7119 6 27.9258V225.074C6 238.288 16.7119 249 29.9258 249H181.615C194.829 249 205.541 238.288 205.541 225.074V27.9258C205.541 14.7119 194.829 4 181.615 4Z" fill="#4532A5"/>
                <path d="M42.8265 114.701V143.718H48.6835V146.398H39.9554V112.021H48.6835V114.701H42.8265ZM67.432 137.746C67.9425 137.746 68.4529 137.683 68.9633 137.555L68.7719 139.967C68.0573 140.222 67.2917 140.35 66.475 140.35C65.4797 140.35 64.6885 140.133 64.1016 139.699C63.5401 139.265 63.1828 138.538 63.0297 137.517C62.4427 138.41 61.575 139.112 60.4266 139.622C59.3037 140.107 58.1169 140.35 56.8664 140.35C54.9779 140.35 53.4211 139.916 52.1961 139.048C50.9711 138.155 50.3586 136.879 50.3586 135.22C50.3586 133.765 50.9966 132.515 52.2727 131.468C53.5487 130.396 55.399 129.656 57.8234 129.248L62.9148 128.406V127.334C62.9148 126.058 62.5193 125.037 61.7281 124.271C60.937 123.506 59.8396 123.123 58.4359 123.123C57.1599 123.123 56.0497 123.429 55.1055 124.042C54.1867 124.654 53.4721 125.56 52.9617 126.76L50.7031 125.114C51.2135 123.685 52.1578 122.549 53.5359 121.707C54.9396 120.864 56.5729 120.443 58.4359 120.443C60.7073 120.443 62.532 120.992 63.9102 122.089C65.2883 123.187 65.9773 124.807 65.9773 126.951V136.368C65.9773 136.828 66.0922 137.172 66.3219 137.402C66.5516 137.632 66.9216 137.746 67.432 137.746ZM57.0195 137.67C58.6273 137.67 60.0055 137.287 61.1539 136.521C62.3279 135.756 62.9148 134.761 62.9148 133.536V130.894L58.6273 131.698C56.9175 132.004 55.6414 132.451 54.7992 133.038C53.957 133.599 53.5359 134.327 53.5359 135.22C53.5359 136.011 53.8422 136.624 54.4547 137.057C55.0672 137.466 55.9221 137.67 57.0195 137.67ZM90.4163 112.021V139.967H87.7366L87.5452 136.636C86.9838 137.759 86.1161 138.665 84.9421 139.354C83.7937 140.018 82.4794 140.35 80.9991 140.35C78.3195 140.35 76.1885 139.469 74.6062 137.708C73.0494 135.922 72.271 133.485 72.271 130.396C72.271 127.308 73.0494 124.884 74.6062 123.123C76.1885 121.337 78.3195 120.443 80.9991 120.443C82.4028 120.443 83.6533 120.75 84.7507 121.362C85.8736 121.975 86.7413 122.791 87.3538 123.812V112.021H90.4163ZM81.3437 137.67C83.1812 137.67 84.6359 137.032 85.7077 135.756C86.8051 134.48 87.3538 132.77 87.3538 130.626V130.167C87.3538 128.023 86.8051 126.313 85.7077 125.037C84.6359 123.761 83.1812 123.123 81.3437 123.123C79.4807 123.123 78.0132 123.787 76.9413 125.114C75.8695 126.415 75.3335 128.176 75.3335 130.396C75.3335 132.617 75.8695 134.39 76.9413 135.718C78.0132 137.019 79.4807 137.67 81.3437 137.67ZM105.61 120.443C108.493 120.443 110.752 121.324 112.385 123.085C114.044 124.846 114.874 127.283 114.874 130.396C114.874 133.51 114.044 135.947 112.385 137.708C110.752 139.469 108.493 140.35 105.61 140.35C102.726 140.35 100.454 139.469 98.7954 137.708C97.1621 135.947 96.3454 133.51 96.3454 130.396C96.3454 127.283 97.1621 124.846 98.7954 123.085C100.454 121.324 102.726 120.443 105.61 120.443ZM105.61 123.085C103.67 123.085 102.152 123.736 101.054 125.037C99.9566 126.339 99.4079 128.125 99.4079 130.396C99.4079 132.668 99.9566 134.454 101.054 135.756C102.152 137.057 103.67 137.708 105.61 137.708C107.549 137.708 109.068 137.057 110.165 135.756C111.262 134.454 111.811 132.668 111.811 130.396C111.811 128.125 111.262 126.339 110.165 125.037C109.068 123.736 107.549 123.085 105.61 123.085ZM130.24 120.443C132.919 120.443 135.038 121.337 136.594 123.123C138.177 124.884 138.968 127.308 138.968 130.396C138.968 133.485 138.177 135.922 136.594 137.708C135.038 139.469 132.919 140.35 130.24 140.35C128.759 140.35 127.432 140.018 126.258 139.354C125.11 138.665 124.255 137.759 123.694 136.636L123.502 139.967H120.823V112.021H123.885V123.812C124.498 122.791 125.352 121.975 126.45 121.362C127.573 120.75 128.836 120.443 130.24 120.443ZM129.895 137.67C131.758 137.67 133.226 137.019 134.298 135.718C135.369 134.39 135.905 132.617 135.905 130.396C135.905 128.176 135.369 126.415 134.298 125.114C133.226 123.787 131.758 123.123 129.895 123.123C128.058 123.123 126.59 123.761 125.493 125.037C124.421 126.313 123.885 128.023 123.885 130.167V130.626C123.885 132.77 124.421 134.48 125.493 135.756C126.59 137.032 128.058 137.67 129.895 137.67ZM161.358 129.401C161.358 130.116 161.307 130.83 161.205 131.545H146.773C146.951 133.485 147.589 134.99 148.687 136.062C149.81 137.134 151.252 137.67 153.013 137.67C154.416 137.67 155.577 137.427 156.496 136.943C157.44 136.458 158.078 135.756 158.41 134.837L160.975 136.177C160.209 137.53 159.189 138.563 157.913 139.278C156.637 139.992 155.003 140.35 153.013 140.35C150.129 140.35 147.857 139.469 146.198 137.708C144.565 135.947 143.748 133.51 143.748 130.396C143.748 127.283 144.527 124.846 146.084 123.085C147.666 121.324 149.899 120.443 152.783 120.443C154.569 120.443 156.113 120.839 157.415 121.63C158.716 122.421 159.699 123.493 160.363 124.846C161.026 126.198 161.358 127.717 161.358 129.401ZM152.783 123.123C151.098 123.123 149.733 123.621 148.687 124.616C147.666 125.611 147.041 127.015 146.811 128.827H158.41C158.206 127.04 157.619 125.65 156.649 124.654C155.679 123.633 154.391 123.123 152.783 123.123ZM171.816 146.398H163.087V143.718H168.944V114.701H163.087V112.021H171.816V146.398Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_dd_783_114668" x="2.17188" y="2.08594" width="207.197" height="252.656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="0.478516"/>
                  <feGaussianBlur stdDeviation="0.717773"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_783_114668"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1.91406"/>
                  <feGaussianBlur stdDeviation="1.91406"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_783_114668" result="effect2_dropShadow_783_114668"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_783_114668" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          <div class="project-card card-moodys">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=422" alt="Welcome to Moody's AI" />
          </div>

          <div class="project-card card-dashboard">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d08981660cae0a752a01f3a73053b20cee7010d3?width=422" alt="Dashboard project" />
          </div>

          <div class="project-card card-carmo">
            <svg width="211" height="257" viewBox="0 0 211 257" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g filter="url(#filter0_dd_783_115164)">
                <mask id="mask0_783_115164" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="4" width="201" height="245">
                  <path d="M181.238 4H29.5488C16.335 4 5.62305 14.7119 5.62305 27.9258V225.074C5.62305 238.288 16.335 249 29.5488 249H181.238C194.452 249 205.164 238.288 205.164 225.074V27.9258C205.164 14.7119 194.452 4 181.238 4Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_783_115164)">
                  <path d="M181.238 4H29.5488C16.335 4 5.62305 14.7119 5.62305 27.9258V225.074C5.62305 238.288 16.335 249 29.5488 249H181.238C194.452 249 205.164 238.288 205.164 225.074V27.9258C205.164 14.7119 194.452 4 181.238 4Z" fill="url(#paint0_linear_783_115164)"/>
                  <path d="M195.674 -38.1094H15.1132C9.87194 -38.1094 5.62305 -33.8605 5.62305 -28.6192V316.55C5.62305 321.792 9.87194 326.041 15.1132 326.041H195.674C200.915 326.041 205.164 321.792 205.164 316.55V-28.6192C205.164 -33.8605 200.915 -38.1094 195.674 -38.1094Z" fill="url(#pattern0_783_115164)"/>
                  <path d="M205.166 -21.8398H-1.55273V274.84H205.166V-21.8398Z" fill="#554F9D" fill-opacity="0.3"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_dd_783_115164" x="1.79493" y="2.08594" width="207.197" height="252.656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="0.478516"/>
                  <feGaussianBlur stdDeviation="0.717773"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_783_115164"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1.91406"/>
                  <feGaussianBlur stdDeviation="1.91406"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_783_115164" result="effect2_dropShadow_783_115164"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_783_115164" result="shape"/>
                </filter>
                <pattern id="pattern0_783_115164" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_783_115164" transform="matrix(0.00241546 0 0 0.00132358 0 -0.092965)"/>
                </pattern>
                <linearGradient id="paint0_linear_783_115164" x1="105.394" y1="4" x2="105.394" y2="249" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4839FC"/>
                  <stop offset="1" stop-color="#5244F4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="project-card card-graphs">
            <svg width="211" height="257" viewBox="0 0 211 257" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g filter="url(#filter0_dd_783_115173)">
                <mask id="mask0_783_115173" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="4" width="200" height="245">
                  <path d="M181.779 4H30.0899C16.876 4 6.16406 14.7119 6.16406 27.9258V225.074C6.16406 238.288 16.876 249 30.0899 249H181.779C194.993 249 205.705 238.288 205.705 225.074V27.9258C205.705 14.7119 194.993 4 181.779 4Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_783_115173)">
                  <path d="M181.779 4H30.0899C16.876 4 6.16406 14.7119 6.16406 27.9258V225.074C6.16406 238.288 16.876 249 30.0899 249H181.779C194.993 249 205.705 238.288 205.705 225.074V27.9258C205.705 14.7119 194.993 4 181.779 4Z" fill="#264530"/>
                  <path d="M321.027 13.0918H6.16406V264.313H321.027V13.0918Z" fill="url(#pattern0_783_115173)"/>
                  <path d="M212.883 -21.8398H6.16406V274.84H212.883V-21.8398Z" fill="#254530" fill-opacity="0.3"/>
                  <path d="M212.883 -21.8398H6.16406V274.84H212.883V-21.8398Z" fill="#554F9D" fill-opacity="0.3"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_dd_783_115173" x="2.33594" y="2.08594" width="207.197" height="252.656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="0.478516"/>
                  <feGaussianBlur stdDeviation="0.717773"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_783_115173"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1.91406"/>
                  <feGaussianBlur stdDeviation="1.91406"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_783_115173" result="effect2_dropShadow_783_115173"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_783_115173" result="shape"/>
                </filter>
                <pattern id="pattern0_783_115173" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_783_115173" transform="matrix(0.000382776 0 0 0.000479846 -0.102749 -0.00336675)"/>
                </pattern>
              </defs>
            </svg>
          </div>
        </div>

        <div class="footer-section">
          <a href="#interactive" class="interactive-link">Interactive mode</a>
          
          <div class="footer-right">
            <div id="nyc-time" class="nyc-time">NYC • 00:00:00</div>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon linkedin-icon" aria-label="LinkedIn">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/65449a2fa48f72fda4606c46da6d791b96ed99d1?width=46" alt="LinkedIn" />
            </a>
            
            <a href="mailto:contact@patricia.com" class="social-icon mail-icon" aria-label="Email">
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3463 13.3166L0.61373 0.789665C0.996337 0.281618 1.51935 -0.00287652 2.0645 2.19321e-05H20.9355C21.4917 -0.00142952 22.0247 0.294687 22.4106 0.821585L11.7013 13.3165H11.7002C11.6216 13.4022 11.5155 13.4312 11.4171 13.3935L11.3463 13.3166ZM12.8678 15.0962C12.0872 16.0048 10.9129 16.0048 10.1322 15.0962C10.0713 15.0309 10.0194 14.9525 9.97846 14.8639L0 3.17461V21.2899C0.00663476 22.7836 0.926624 23.9913 2.06448 24H20.9355C22.0733 23.9913 22.9933 22.7836 23 21.2899V3.23704L12.8678 15.0962Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
`

updateNYCTime()
setInterval(updateNYCTime, 1000)

if (import.meta.hot) {
  import.meta.hot.accept()
}
