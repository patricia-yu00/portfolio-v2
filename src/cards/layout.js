export function renderCard(card) {
  const { slug, size = 'sm', background, content, stack } = card

  if (stack) {
    return `
      <div class="project-card card-stack" data-card="${slug}" data-size="${size}">
        <div class="card-inner">
          ${stack.map((stackCard, index) => `
            <div class="stacked-card stacked-card-${index}" style="transform: translate(${index * 6}px, ${index * 6}px); z-index: ${stack.length - index};">
              <div class="card-background" style="background: ${stackCard.background};">
                ${stackCard.content || ''}
              </div>
            </div>
          `).join('')}
          <div class="mouse-enter-trigger" data-framer-name="mouse-enter-trigger"></div>
        </div>
      </div>
    `
  }

  return `
    <div class="project-card" data-card="${slug}" data-size="${size}">
      <div class="card-inner">
        <div class="card-background" style="background: ${background};">
          ${content || ''}
        </div>
        <div class="mouse-enter-trigger" data-framer-name="mouse-enter-trigger"></div>
      </div>
    </div>
  `
}
