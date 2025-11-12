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
        href: 'https://drive.google.com/file/d/1SBI4KJYt3V0-mEezWdFT6eCSkAwaUAUN/view?usp=drive_link',
        external: true
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
        mailto: 'mailto:patriciayu58@gmail.com'
      }
    ]
  }
]

export const heroContent = [
  {
    line1: 'Innovate & unify AI',
    line2: 'experiences across',
    line3: 'products',
    image: adobeLogo,
    alt: 'Adobe'
  },
  {
    line1: 'Enhancing AI tools to',
    line2: 'improve workflows and',
    line3: 'adoption in finance',
    image: moodysLogo,
    alt: 'Moody\'s'
  },
  {
    line1: 'Creating a more efficient',
    line2: 'order management experience',
    line3: 'for engineers',
    image: verizonLogo,
    alt: 'Verizon'
  },
  {
    line1: 'Designing an inclusive',
    line2: 'autonomous vehicle car-',
    line3: 'sharing app experience',
    image: penndotLogo,
    alt: 'PennDOT'
  },
  {
    line1: 'Stimulating smartphone',
    line2: 'growth & understanding key',
    line3: 'switching behavior',
    image: googleLogo,
    alt: 'Google'
  },
  {
    line1: 'Let\'s design',
    line2: 'together!',
    line3: ' ',
    image: null,
    alt: 'Contact'
  }
]
