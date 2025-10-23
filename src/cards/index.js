import adobe from './adobe.js'
import pattern from './pattern.js'
import dashboard from './dashboard.js'
import carmo from './carmo.js'
import graphs from './graphs.js'
import resume from './resume.js'
import aboutme from './aboutme.js'
import email from './email.js'

export const cards = [
  { ...adobe, link: '#/case/adobe' },
  { ...pattern, link: '#/case/pattern' },
  { ...dashboard, link: '#/case/adobe' },
  { ...carmo, link: '#/case/carmo' },
  { ...graphs, link: '#/case/graphs' },
  { ...resume, link: '#/case/carmo', stack: [resume, aboutme, email] }
]
