export const caseStudiesData = {
  adobe: {
    slug: 'adobe',
    title: 'Innovating AI UX at Adobe',
    company: 'Adobe',
    role: 'Product Designer',
    timeline: '6 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=1200',
    heroAlt: 'Adobe AI interface design',
    introduction:
      'Unifying AI experiences across Adobe\'s product suite to create consistent, intuitive interactions for creative professionals.',
    sections: [
      {
        type: 'text',
        title: 'The Challenge',
        content: 'Adobe\'s AI features were scattered across products with inconsistent patterns, creating confusion for users trying to leverage AI in their creative workflows.'
      },
      {
        type: 'image',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=1200',
        caption: 'Current state analysis of AI features across products',
        layout: 'full-width'
      },
      {
        type: 'process',
        title: 'Design Process',
        steps: [
          {
            title: 'Research & Discovery',
            description: 'Conducted user interviews with 50+ creative professionals to understand AI usage patterns and pain points.'
          },
          {
            title: 'Pattern Analysis',
            description: 'Audited all existing AI features across Photoshop, Illustrator, and Premiere Pro to identify inconsistencies.'
          },
          {
            title: 'Design System',
            description: 'Created unified AI interaction patterns and components that work across all Adobe products.'
          },
          {
            title: 'Validation',
            description: 'Tested prototypes with users and iterated based on feedback before final implementation.'
          }
        ]
      },
      {
        type: 'two-column',
        left: {
          type: 'text',
          title: 'Key Insights',
          content: 'Users wanted AI to feel like a creative partner, not a black box. Transparency and control were crucial for adoption.'
        },
        right: {
          type: 'image',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=600',
          caption: 'User feedback synthesis'
        }
      },
      {
        type: 'outcomes',
        title: 'Impact',
        outcomes: [
          {
            metric: '32%',
            label: 'Increase in AI feature adoption',
            description: 'After implementing the unified design system'
          },
          {
            metric: '45%',
            label: 'Reduction in support tickets',
            description: 'Related to AI feature confusion'
          },
          {
            metric: '4.6/5',
            label: 'User satisfaction score',
            description: 'For the new AI experience'
          }
        ],
        columns: 3
      }
    ]
  },
  carmo: {
    slug: 'carmo',
    title: 'Carmo EV Fleet Management',
    company: 'Carmo',
    role: 'Lead Product Designer',
    timeline: '4 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=1200',
    heroAlt: 'Mobile UI screens for EV fleet management',
    introduction:
      'Designing an intuitive booking and charging experience for electric vehicle fleet operations.',
    sections: [
      {
        type: 'text',
        title: 'Problem Space',
        paragraphs: [
          'Fleet drivers and dispatchers needed real-time visibility into vehicle availability, charging status, and route optimization.',
          'Existing solutions were desktop-only and required extensive training, causing operational delays.'
        ]
      },
      {
        type: 'two-column',
        left: {
          type: 'text',
          title: 'Research',
          content: 'Conducted ride-alongs with 15+ drivers and dispatchers to understand daily workflows, pain points, and charging behaviors.'
        },
        right: {
          type: 'image',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=600',
          caption: 'Field research with fleet drivers'
        }
      },
      {
        type: 'image',
        images: [
          {
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=400',
            caption: 'Vehicle status dashboard'
          },
          {
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=400',
            caption: 'Charging flow'
          },
          {
            src: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=400',
            caption: 'Route optimization'
          }
        ],
        layout: 'grid',
        caption: 'Key screens from the mobile app'
      },
      {
        type: 'quote',
        quote: 'This app cut our dispatch time in half. Everything we need is right at our fingertips.',
        author: 'Mike Torres',
        role: 'Fleet Manager',
        company: 'Carmo'
      },
      {
        type: 'outcomes',
        title: 'Results',
        outcomes: [
          {
            metric: '50%',
            label: 'Faster dispatch times',
            description: 'Reduced from 8 to 4 minutes average'
          },
          {
            metric: '95%',
            label: 'Driver adoption rate',
            description: 'Within first 2 weeks of launch'
          }
        ],
        columns: 2
      }
    ]
  },
  graphs: {
    slug: 'graphs',
    title: 'Order Management System for Engineers',
    company: 'Verizon',
    role: 'Senior Product Designer',
    timeline: '8 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=1200',
    heroAlt: 'Order management dashboard interface',
    introduction:
      'Streamlining the order management workflow for field engineers to reduce errors and improve efficiency.',
    sections: [
      {
        type: 'text',
        title: 'Background',
        content: 'Verizon field engineers were using multiple disconnected systems to manage service orders, leading to confusion, delays, and frequent errors in the field.'
      },
      {
        type: 'image',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=1200',
        caption: 'Existing workflow analysis and pain points',
        layout: 'full-width'
      },
      {
        type: 'text',
        title: 'Solution',
        paragraphs: [
          'Designed a unified dashboard that consolidates all order information, work instructions, and customer details in one place.',
          'Created mobile-first interfaces optimized for use in the field with offline capabilities.'
        ]
      },
      {
        type: 'image',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=400',
          'https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=400'
        ],
        layout: 'side-by-side',
        caption: 'Before and after comparison of the order management interface'
      },
      {
        type: 'outcomes',
        title: 'Business Impact',
        outcomes: [
          {
            metric: '40%',
            label: 'Reduction in order errors',
            description: 'Fewer field callbacks and rework'
          },
          {
            metric: '25%',
            label: 'Faster order completion',
            description: 'Engineers complete tasks 15min faster on average'
          },
          {
            metric: '88%',
            label: 'Engineer satisfaction',
            description: 'Positive feedback on usability'
          }
        ],
        columns: 3
      }
    ]
  },
  pattern: {
    slug: 'pattern',
    title: 'Autonomous Vehicle Car-Sharing App',
    company: 'PennDOT',
    role: 'UX Designer',
    timeline: '5 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=1200',
    heroAlt: 'Autonomous vehicle app interface',
    introduction:
      'Designing an inclusive car-sharing experience for autonomous vehicles that serves diverse user needs.',
    sections: [
      {
        type: 'text',
        title: 'The Challenge',
        content: 'How do we design a car-sharing app for autonomous vehicles that is accessible and intuitive for all users, including elderly and disabled individuals?'
      },
      {
        type: 'process',
        title: 'Research & Design Process',
        steps: [
          {
            title: 'User Research',
            description: 'Interviewed 30+ potential users across different age groups and abilities to understand their transportation needs and concerns.'
          },
          {
            title: 'Accessibility Focus',
            description: 'Conducted usability testing with users who have visual, hearing, and mobility impairments to ensure inclusive design.'
          },
          {
            title: 'Iterative Design',
            description: 'Created multiple prototypes and refined based on user feedback, focusing on simplicity and clarity.'
          }
        ]
      },
      {
        type: 'image',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=400',
          'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=400',
          'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=400'
        ],
        layout: 'grid',
        caption: 'Key app screens showing booking, ride tracking, and accessibility features'
      },
      {
        type: 'two-column',
        left: {
          type: 'text',
          title: 'Accessibility Features',
          paragraphs: [
            'Voice-guided navigation for visually impaired users',
            'High-contrast modes and adjustable text sizes',
            'Simplified booking flow with clear confirmations',
            'Emergency contact integration'
          ]
        },
        right: {
          type: 'image',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=600',
          caption: 'Accessibility feature demonstration'
        }
      },
      {
        type: 'outcomes',
        title: 'Impact',
        outcomes: [
          {
            metric: 'AAA',
            label: 'WCAG compliance',
            description: 'Met highest accessibility standards'
          },
          {
            metric: '92%',
            label: 'User satisfaction',
            description: 'Across all user groups tested'
          }
        ],
        columns: 2
      }
    ]
  },
  layout: {
    slug: 'layout',
    title: 'Understanding Smartphone Switching Behavior',
    company: 'Google',
    role: 'UX Researcher',
    timeline: '3 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=1200',
    heroAlt: 'Research findings visualization',
    introduction:
      'Comprehensive research study to understand what drives consumers to switch smartphone ecosystems.',
    sections: [
      {
        type: 'text',
        title: 'Research Objective',
        content: 'Identify key factors and pain points that influence users to switch from one smartphone platform to another, with focus on stimulating Android growth.'
      },
      {
        type: 'process',
        title: 'Research Methodology',
        steps: [
          {
            title: 'Quantitative Survey',
            description: 'Surveyed 2,000+ smartphone users across demographics to identify switching patterns and motivations.'
          },
          {
            title: 'In-Depth Interviews',
            description: 'Conducted 50+ interviews with recent switchers to understand their decision-making process.'
          },
          {
            title: 'Data Analysis',
            description: 'Synthesized findings to identify key themes and actionable insights for product teams.'
          }
        ]
      },
      {
        type: 'image',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=1200',
        caption: 'Key research findings and user journey mapping',
        layout: 'full-width'
      },
      {
        type: 'text',
        title: 'Key Findings',
        paragraphs: [
          'Price sensitivity was the #1 factor for Android switchers, but ecosystem lock-in was the biggest barrier.',
          'Users who switched valued customization and choice, but worried about losing their data and purchased content.',
          'The switching process itself was a major pain point, with users citing confusion and anxiety about data migration.'
        ]
      },
      {
        type: 'outcomes',
        title: 'Impact',
        outcomes: [
          {
            metric: '5',
            label: 'Product initiatives launched',
            description: 'Based on research insights'
          },
          {
            metric: '23%',
            label: 'Increase in consideration',
            description: 'Among iOS users after improvements'
          }
        ],
        columns: 2
      }
    ]
  }
}
