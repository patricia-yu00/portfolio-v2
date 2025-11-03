import resumeImg from './cards-cover/resume.png'
import aboutmeImg from './cards-cover/aboutme.png'
import emailImg from './cards-cover/email.png'

const resumeCard = {
  slug: 'resume',
  size: 'sm',
  background: 'transparent',
  customClass: 'card-stack',
  content: `
    <div class="stack-container">
      <a href="#/resume" class="stack-layer layer-1" style="background-image: url(${resumeImg});">
        <span class="stack-label">Resume</span>
      </a>
      <a href="#/about" class="stack-layer layer-2" style="background-image: url(${aboutmeImg});">
        <span class="stack-label">About Me</span>
      </a>
      <a href="#/email" class="stack-layer layer-3" style="background-image: url(${emailImg});">
        <span class="stack-label">Email</span>
      </a>
    </div>
  `
}

export default resumeCard
