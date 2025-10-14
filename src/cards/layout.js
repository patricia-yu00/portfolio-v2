export function renderCard(card) {
  const { slug, size = 'sm', background, content } = card
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
