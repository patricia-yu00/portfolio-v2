import adobeImg from '../assets/homepage/cards/adobe.png'
import moodyImg from '../assets/homepage/cards/moodys.png'
import esaImg from '../assets/homepage/cards/esa.png'
import carmoImg from '../assets/homepage/cards/carmo.png'
import researchImg from '../assets/homepage/cards/research.png'
import resumeImg from '../assets/homepage/cards/resume.png'
import aboutmeImg from '../assets/homepage/cards/aboutme.png'
import emailImg from '../assets/homepage/cards/email.png'

// Logo imports
import adobeLogo from '../assets/homepage/logos/adobe.png'
import moodysLogo from '../assets/homepage/logos/moodys.png'
import verizonLogo from '../assets/homepage/logos/verizon.png'
import penndotLogo from '../assets/homepage/logos/penndot.png'
import googleLogo from '../assets/homepage/logos/google.png'

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
    expandableStack: true,
    stack: [
      {
        slug: 'resume',
        label: 'Resume',
        background: '#20767B',
        href: '/resume'
      },
      {
        slug: 'aboutme',
        label: 'About Me',
        background: '#20577B',
        href: '/about'
      },
      {
        slug: 'email',
        label: 'Email',
        background: '#20437B',
        mailto: 'mailto:patriciayu58@yahoo.com'
      }
    ]
  }
]

export const heroContent = [
  {
    text: 'Innovate & unify AI experiences across products',
    image: adobeLogo,
    alt: 'Adobe'
  },
  {
    text: 'Enhancing AI tools to improve workflows and ',
    highlight: 'adoption in finance',
    image: moodysLogo,
    alt: 'Moody\'s'
  },
  {
    text: 'Creating a more efficient order management ',
    specialText: 'experience for engineers',
    image: verizonLogo,
    alt: 'Verizon',
    layout: 'horizontal'
  },
  {
    text: 'Designing an inclusive autonomous vehicle car-',
    specialText: 'sharing app experience',
    image: penndotLogo,
    alt: 'PennDOT',
    layout: 'horizontal'
  },
  {
    text: 'Stimulating smartphone growth & understanding ',
    specialText: 'brand switching behavior',
    image: googleLogo,
    alt: 'Google',
    layout: 'horizontal'
  }
]
