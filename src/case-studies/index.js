export const caseStudies = {
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
          'Activation rate +14% within one quarter.',
          'Support tickets related to “stuck in onboarding” dropped by 22%.'
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
          'Ride-alongs with dispatch and drivers revealed the top friction: unclear charging status and pickup timing.',
          'We prioritized a glanceable status system and streamlined “one-tap” actions for common tasks.'
        ]
      },
      {
        title: 'Design',
        paragraphs: [
          'We introduced a card-first UI for trips, chargers, and vehicles to keep context visible while acting.',
          'Edge cases like offline states and partial data were designed into the system from the start.'
        ]
      }
    ]
  }
}
