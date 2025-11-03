import adobe from './adobe.js'
import pattern from './pattern.js'
import dashboard from './dashboard.js'
import carmo from './carmo.js'
import graphs from './graphs.js'
import resume from './resume.js'

export const cards = [
  { ...adobe, link: '#/case/adobe' },
  { ...pattern, link: '#/case/pattern' },
  { ...dashboard, link: '#/case/adobe' },
  { ...carmo, link: '#/case/carmo' },
  { ...graphs, link: '#/case/graphs' },
  { ...resume, link: null }
]
