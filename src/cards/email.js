import emailImg from './cards-cover/email.png'

const emailCard = {
  slug: 'email',
  size: 'sm',
  background: 'transparent',
  content: `
    <img src="${emailImg}" alt="Email" class="card-cover-image" />
  `,
  link: 'mailto:contact@example.com'
}

export default emailCard
