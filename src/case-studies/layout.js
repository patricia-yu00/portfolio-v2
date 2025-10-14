export function renderCaseStudy(data) {
  const { title, hero, heroAlt, introduction, sections } = data
  const body = (sections || [])
    .map(
      (s) => `
      <section class="case-section">
        <h3 class="case-section-title">${s.title}</h3>
        ${
          (s.paragraphs || [])
            .map((p) => `<p class="case-paragraph">${p}</p>`) 
            .join('')
        }
      </section>`
    )
    .join('')

  return `
    <main class="case-container">
      <article class="case-study" itemscope itemtype="https://schema.org/CreativeWork">
        <header class="case-header">
          <a href="#" class="back-link" aria-label="Back to home">← Back</a>
          <h1 class="case-title" itemprop="headline">${title}</h1>
          <figure class="case-hero">
            <img src="${hero}" alt="${heroAlt}" class="case-hero-img" itemprop="image" />
          </figure>
          <p class="case-introduction" itemprop="description">${introduction}</p>
        </header>

        <div class="case-body-content">
          ${body}
        </div>
      </article>
    </main>
  `
}
