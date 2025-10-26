export const caseStudiesData = {
  adobe: {
    slug: 'adobe',
    title: 'Adobe Onboarding Analytics',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=1200',
    heroAlt: 'Analytics dashboard on a laptop',
    introduction:
      'Improving first-week activation by clarifying onboarding steps and surfacing actionable insights for new users.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'We mapped the new-user journey across touchpoints and defined success metrics for the first 7 days.',
          'The work introduced a lightweight analytics layer and in-product cues that guided users to the next best action.'
        ]
      },
      {
        title: 'Outcomes',
        paragraphs: [
          'Activation rate increased by 14% within one quarter.',
          'Support tickets related to onboarding confusion dropped by 22%.'
        ]
      }
    ]
  },
  carmo: {
    slug: 'carmo',
    title: 'Carmo EV Fleet Experience',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/72746cd8fbc67a36837b3c9d1a924f3236b682ad?width=1200',
    heroAlt: 'Mobile UI screens for EV fleet management',
    introduction:
      'Designing the booking and charging flows for an electric vehicle fleet, balancing clarity with operational speed.',
    sections: [
      {
        title: 'Research',
        paragraphs: [
          'Ride-alongs with dispatch and drivers revealed top friction around charging status and pickup timing.',
          'We prioritized a glanceable status system and one-tap actions for frequent tasks.'
        ]
      },
      {
        title: 'Design',
        paragraphs: [
          'Introduced a card-first UI for trips, chargers, and vehicles to keep context visible while acting.',
          'Designed offline and partial-data states from the start to increase reliability in the field.'
        ]
      }
    ]
  },
  graphs: {
    slug: 'graphs',
    title: 'Insights Dashboard Visual System',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/8f35e9100e27631e3c1519f416291a1a4b4c1c33?width=1200',
    heroAlt: 'Analytical graphs and charts',
    introduction:
      'Created a consistent visual language for charts and tables that scales from quick-glance cards to deep reports.',
    sections: [
      {
        title: 'System Foundations',
        paragraphs: [
          'Defined primitives for typography, color ramps, and spacing to ensure legibility across densities.',
          'Established chart components with accessible defaults and motion for state changes.'
        ]
      },
      {
        title: 'Impact',
        paragraphs: [
          'Time-to-assemble new analytics views decreased by 35%.',
          'Support requested fewer custom one-off visuals due to reusable patterns.'
        ]
      }
    ]
  },
  pattern: {
    slug: 'pattern',
    title: 'Pattern Exploration — Moody\'s Tiles',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/60aebaf5eec0e5be1afcbbc8a846ae33d387d067?width=1200',
    heroAlt: 'Geometric blue tile pattern',
    introduction:
      'Exploration of 3D-tilted cube tiles to prototype texture and brand energy across surfaces and cards.',
    sections: [
      {
        title: 'Construction',
        paragraphs: [
          'Built an isometric grid with three-tone planes to preserve depth cues.',
          'Provided responsive rules so tiles scale without aliasing artifacts.'
        ]
      },
      {
        title: 'Usage',
        paragraphs: [
          'Applied on marketing cards and hero backgrounds with motion on hover.',
          'Documented accessibility guidance to avoid pattern overpowering content.'
        ]
      }
    ]
  }
}
