import adobeImg from '../cards/cards-cover/adobe.png'
import moodyImg from '../cards/cards-cover/moodys.png'
import esaImg from '../cards/cards-cover/esa.png'
import carmoImg from '../cards/cards-cover/carmo.png'
import researchImg from '../cards/cards-cover/research.png'
import resumeImg from '../cards/cards-cover/resume.png'
import aboutmeImg from '../cards/cards-cover/aboutme.png'
import emailImg from '../cards/cards-cover/email.png'

export const cardsData = [
  {
    slug: 'adobe',
    size: 'lg',
    background: '#4532A5',
    image: adobeImg,
    alt: 'Adobe project'
  },
  {
    slug: 'pattern',
    size: 'sm',
    background: '#1A2267',
    image: moodyImg,
    alt: 'Moody\'s project'
  },
  {
    slug: 'dashboard',
    size: 'sm',
    background: '#004066',
    image: esaImg,
    alt: 'ESA Dashboard project'
  },
  {
    slug: 'carmo',
    size: 'sm',
    background: '#645CBD',
    image: carmoImg,
    alt: 'Carmo project'
  },
  {
    slug: 'graphs',
    size: 'sm',
    background: '#264530',
    image: researchImg,
    alt: 'Graphs project'
  },
  {
    slug: 'resume',
    size: 'sm',
    background: 'transparent',
    image: resumeImg,
    alt: 'Resume',
    stack: [
      { slug: 'resume', background: 'transparent', image: resumeImg, alt: 'Resume' },
      { slug: 'aboutme', background: 'transparent', image: aboutmeImg, alt: 'About Me' },
      { slug: 'email', background: 'transparent', image: emailImg, alt: 'Email' }
    ]
  }
]

export const heroContent = [
  null,
  {
    text: 'Enhancing AI tools to improve workflows and ',
    highlight: 'adoption in finance',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/53e0801a582dc2ca9d5bcc187c07165f688d51f6?width=140',
    alt: 'Moody\'s'
  },
  {
    text: 'Creating a more efficient order management ',
    specialText: 'experience for engineers',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/befe117fa011fa36706d8adf7da93e5248343996?width=80',
    alt: 'Verizon',
    layout: 'horizontal'
  },
  {
    text: 'Designing an inclusive autonomous vehicle car-',
    specialText: 'sharing app experience',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/480e8e6331ebaa9afe5eb428f661d04c61c06970?width=103',
    alt: 'PennDOT',
    layout: 'horizontal'
  },
  {
    text: 'Stimulating smartphone growth & understanding ',
    specialText: 'brand switching behavior',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/349402280f99b7abc5b05d16fb89e713bbe801da?width=97',
    alt: 'Google',
    layout: 'horizontal'
  }
]
