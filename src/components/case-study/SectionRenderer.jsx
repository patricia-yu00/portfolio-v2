import TextSection from './TextSection'
import ImageSection from './ImageSection'
import TwoColumnSection from './TwoColumnSection'
import ProcessSteps from './ProcessSteps'
import OutcomesGrid from './OutcomesGrid'
import QuoteSection from './QuoteSection'
import VideoSection from './VideoSection'

export default function SectionRenderer({ section }) {
  if (!section || !section.type) return null

  switch (section.type) {
    case 'text':
      return <TextSection {...section} />
    
    case 'image':
      return <ImageSection {...section} />
    
    case 'two-column':
      return <TwoColumnSection {...section} />
    
    case 'process':
      return <ProcessSteps {...section} />
    
    case 'outcomes':
      return <OutcomesGrid {...section} />
    
    case 'quote':
      return <QuoteSection {...section} />
    
    case 'video':
      return <VideoSection {...section} />
    
    default:
      console.warn(`Unknown section type: ${section.type}`)
      return null
  }
}

