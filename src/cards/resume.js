import resumeImg from './cards-cover/resume.png'
import aboutmeImg from './cards-cover/aboutme.png'
import emailImg from './cards-cover/email.png'
import resumeTextImg from './cards-cover/Resumetext.png'
import aboutmeTextImg from './cards-cover/AboutMetext.png'
import emailTextImg from './cards-cover/Emailtext.png'

const resumeCard = {
  slug: 'resume',
  size: 'sm',
  background: 'transparent',
  customClass: 'card-stack',
  content: `
    <div class="stack-container">
      <a href="#/resume" class="stack-layer layer-1" style="--layer-color: #20767B; background-color: #20767B;">
        <img src="${resumeTextImg}" alt="Resume" class="stack-text-img" />
      </a>
      <a href="#/about" class="stack-layer layer-2" style="--layer-color: #20577B; background-color: #20577B;">
        <img src="${aboutmeTextImg}" alt="About Me" class="stack-text-img" />
      </a>
      <a href="#/email" class="stack-layer layer-3" style="--layer-color: #20437B; background-color: #20437B;">
        <img src="${emailTextImg}" alt="Email" class="stack-text-img" />
      </a>
    </div>
  `
}

export default resumeCard
