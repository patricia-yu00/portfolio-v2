// Moody's case study images
import moodysHero from '../assets/casestudies/moodys/hero.png'
import legacyChat from '../assets/casestudies/moodys/legacy-chat.png'
import legacyChatThread from '../assets/casestudies/moodys/legacychatthread.png'
import newhome from '../assets/casestudies/moodys/newhome.png'
import newconvo from '../assets/casestudies/moodys/newconvo.png'

export const caseStudiesData = {
  adobe: {
    slug: 'adobe',
    title: 'Adobe AI UX Innovation',
    company: 'Adobe',
    role: 'Product Designer',
    timeline: '6 months',
    hero: 'https://api.builder.io/api/v1/image/assets/TEMP/b427de199f86f0cd0125ace4094718953d1c7103?width=1200',
    heroAlt: 'Adobe AI interface design',
    introduction:
      'Designing unified AI experiences across Adobe\'s creative suite to empower designers and creators.',
    sections: [
      {
        type: 'text',
        title: 'Coming Soon',
        content: 'Adobe case study content coming soon.'
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
  moodys: {
    slug: 'moodys',
    title: 'Enhancing AI tools to improve complex workflows and increase adoption in finance',
    company: 'Moody\'s',
    role: 'Associate Director of Design, co-leading design within a cross-functional team of 20+ product and engineering members',
    timeline: 'November 2024 - March 2025',
    hero: moodysHero,
    heroAlt: 'Moody\'s AI Copilot interface',
    introduction:
      'This project reimagined the design of a comprehensive GenAI tool to help Moody\'s employees work more efficiently. The legacy tools suffered from poor usability, inconsistent interactions, and limited personalization, leading to a sharp decline in adoption after launch. As the lead UX designer, I aimed to redesign this LLM-powered AI tool to enhance usability, drive adoption, and introduce a more intuitive, personalized experience for all 14,000 employees worldwide at Moody\'s.',
    sections: [
      {
        type: 'text',
        title: 'Key Enhancements',
        content: 'The redesign transformed three critical areas of the product, addressing major usability issues and creating a more cohesive experience.'
      },
      {
        type: 'two-column',
        left: {
          type: 'image',
          title: 'Legacy Siloed Homepage',
          subtitle: 'Complicated navigation, information overload, lack of hierarchy',
          image: legacyChat
        },
        right: {
          type: 'video',
          title: 'Enhanced Unified Homepage',
          subtitle: 'New features to enhance ease of use, improved navigation, clarity in design',
          src: 'https://youtu.be/CqGcnd3ZB-A'
        }
      },
      {
        type: 'text',
        title: 'Homepage Feature Callouts'
      },
      {
        type: 'image',
        images: [
          newhome,
          newconvo
        ],
        layout: 'side-by-side'
      },
      {
        type: 'two-column',
        left: {
          type: 'image',
          title: 'Legacy Chat Experience',
          subtitle: 'Inconsistent design, confusing interactions, usability issues',
          image: legacyChatThread
        },
        right: {
          type: 'video',
          title: 'Enhanced Chat Thread Experience',
          subtitle: 'Ability to navigate chat history, consistent mental models and design system',
          src: 'https://youtu.be/KLOCvXLA--8'
        }
      },
      {
        type: 'text',
        title: 'Chat Thread Feature Callouts'
      },
      {
        type: 'image',
        images: [
          'chat-image1.png',
          'chat-image2.png'
        ],
        layout: 'side-by-side'
      },
      {
        type: 'two-column',
        left: {
          type: 'text',
          title: 'Legacy Siloed Homepage',
          content: 'Complicated navigation, information overload, lack of hierarchy'
        },
        right: {
          type: 'text',
          title: 'Enhanced Unified Homepage',
          content: 'New features to enhance ease of use, improved navigation, clarity in design'
        }
      },
      {
        type: 'image',
        image: 'https://static.wixstatic.com/media/d27b3d_placeholder3.png',
        caption: 'Unified homepage with clear entry points and multi-LLM support',
        layout: 'full-width'
      },
      {
        type: 'text',
        title: 'INTRODUCTION - Project Context',
        paragraphs: [
          'To bring this vision to life, we needed to rethink how AI could seamlessly integrate into employees\' workflows. The existing tools lacked usability, cohesion, and personalization, leading to low adoption rates. Our challenge was not just to redesign an AI tool but to create an experience that was intuitive, efficient, and scalable.',
          'By focusing on user needs and design consistency, we aimed to transform AI into a powerful, everyday assistant while setting a new standard for AI-driven experiences within the organization.'
        ]
      },
      {
        type: 'text',
        title: 'Our Objectives',
        paragraphs: [
          '✅ Unify AI Tools – Merge legacy tools into a single, cohesive experience.',
          '✅ Boost Usability & Adoption – Improve interactions, personalization, and engagement.',
          '✅ Ensure Design Consistency – Standardize branding and expand the design system.',
          '✅ Enhance Scalability – Create a flexible framework for future AI tools.',
          '✅ Optimize Workflow Integration – Seamlessly embed AI into daily tasks.',
          '✅ Set an AI Design Benchmark – Define best practices for AI-driven products.'
        ]
      },
      {
        type: 'text',
        title: 'DISCOVER - Past Research Synthesis & Competitive Analysis',
        content: 'As the design lead on a team of 16 product and engineering members, I guided the end-to-end redesign of Moody\'s Copilot tool. I began by analyzing the competitive landscape, deepening my understanding of the product\'s current state, and synthesizing past research to shape the design strategy.'
      },
      {
        type: 'image',
        images: [
          {
            src: 'https://static.wixstatic.com/media/d27b3d_competitive1.png',
            caption: 'Competitive analysis of AI chat interfaces'
          },
          {
            src: 'https://static.wixstatic.com/media/d27b3d_research.png',
            caption: 'Synthesis of past user research'
          }
        ],
        layout: 'side-by-side',
        caption: 'Research synthesis and competitive analysis'
      },
      {
        type: 'text',
        title: 'My Takeaways',
        paragraphs: [
          '✅ Turning AI potential into a clear product strategy - When I joined this project, the chatbot had powerful capabilities but no clear roadmap or cohesive experience. I quickly realized that designing AI tools isn\'t just about improving interactions—it\'s about getting teams on the same page about what AI should and shouldn\'t do.',
          '✅ Making AI feel more trustworthy and intuitive for users - AI can be unpredictable, which makes people hesitant to rely on it. I focused on designing clear, guided experiences that helped users understand what the chatbot could do and when they needed to take control.',
          '✅ Navigating ambiguity and aligning stakeholders - AI moves fast, and priorities changed constantly. I had to learn how to cut through the noise, synthesize feedback from different teams, and advocate for the user experience while keeping the bigger picture in mind.'
        ]
      },
      {
        type: 'text',
        title: 'DEFINE - Personas Workshop & Proto-Personas',
        content: 'First, I needed to identify the key user archetypes and their unique characteristics. I designed and led the hybrid personas workshop with the design team to gather informed insights about our primary users, highlighting critical traits to validate through user research later on.'
      },
      {
        type: 'image',
        image: 'https://static.wixstatic.com/media/d27b3d_personas.png',
        caption: 'Personas workshop: archetype brainstorm and target archetype deepdives',
        layout: 'full-width'
      },
      {
        type: 'image',
        images: [
          {
            src: 'https://static.wixstatic.com/media/d27b3d_persona1.png',
            caption: 'Power User persona'
          },
          {
            src: 'https://static.wixstatic.com/media/d27b3d_persona2.png',
            caption: 'New User persona'
          }
        ],
        layout: 'side-by-side',
        caption: 'Validated user personas'
      },
      {
        type: 'text',
        title: 'Journey Mapping and User Flows',
        content: 'With a clear understanding of our goals, informed by research and educated assumptions with personas, I mapped current-state flows to identify interactions and friction points. I then developed future-state frameworks to guide the team in brainstorming and designing an optimal user experience.'
      },
      {
        type: 'image',
        images: [
          'https://static.wixstatic.com/media/d27b3d_journey.png',
          'https://static.wixstatic.com/media/d27b3d_userflow.png'
        ],
        layout: 'side-by-side',
        caption: 'Journey map and user flows'
      },
      {
        type: 'text',
        title: 'Expanding the Design System',
        content: 'As the product evolved, so did our design system. I built a more expansive and powerful component library, ensuring scalability and consistency across the AI tool. Additionally, I refined the foundational styles and color system to align with the product\'s development.'
      },
      {
        type: 'image',
        images: [
          'https://static.wixstatic.com/media/d27b3d_designsystem1.png',
          'https://static.wixstatic.com/media/d27b3d_designsystem2.png'
        ],
        layout: 'side-by-side',
        caption: 'Building out the components library using the Moody\'s branding foundational design system'
      },
      {
        type: 'text',
        title: 'DEVELOP - Design Development and Wireframing',
        content: 'Using Moody\'s foundational design system and branding guidelines, I began with mid-fidelity wireframes to explore key feature interactions.'
      },
      {
        type: 'image',
        images: [
          'https://static.wixstatic.com/media/d27b3d_wireframe1.png',
          'https://static.wixstatic.com/media/d27b3d_wireframe2.png'
        ],
        layout: 'side-by-side',
        caption: 'Mid-fidelity wireframe development'
      },
      {
        type: 'text',
        title: 'Agile Workflow and JIRA',
        paragraphs: [
          'I tracked my progress in JIRA and helped improve the team\'s agile collaboration, as they were new to design and development working together. To enhance our workflow, I proposed adding more design-development grooming sessions before finalizing designs.',
          'Recognizing the differences in workflows between engineers and designers, I also optimized the JIRA ticket structure by introducing design exploration tickets in sprints before development handoff, ensuring a smoother transition from design to implementation.'
        ]
      },
      {
        type: 'image',
        image: 'https://static.wixstatic.com/media/d27b3d_jira.png',
        caption: 'Example of my design tickets in JIRA',
        layout: 'standard'
      },
      {
        type: 'text',
        title: 'REFINE - Final Designs and Dev Hand-offs',
        content: 'When handing off final files to the development team, I provided detailed annotations on interactions, UI elements, and use cases alongside a walkthrough/demo, ensuring clarity on design specifications. Additionally, I organized the Figma file by user tasks, making it more structured and easily navigable for the team.'
      },
      {
        type: 'image',
        images: [
          'https://static.wixstatic.com/media/d27b3d_handoff1.png',
          'https://static.wixstatic.com/media/d27b3d_handoff2.png'
        ],
        layout: 'side-by-side',
        caption: 'Annotated design specifications for development'
      },
      {
        type: 'text',
        title: 'Usability Testing',
        paragraphs: [
          'We prioritized usability testing to validate the impact of our redesign and identify gaps before launch. Given tight timelines, we opted for unmoderated testing to gather quick yet valuable insights.',
          'Another senior designer and I led testing with 15 users across key persona groups - new, infrequent, frequent, and daily users. Using Great Questions, an end-to-end UX research platform, I managed recruitment through surveys and in-person outreach.'
        ]
      },
      {
        type: 'text',
        title: 'Usability Testing Goals',
        paragraphs: [
          '✅ Gather feedback on key interactions and first impressions',
          '✅ Identify gaps to address before launch',
          '✅ Validate design impact and proto-personas'
        ]
      },
      {
        type: 'text',
        title: 'Key Insights & Next Steps',
        paragraphs: [
          '✅ Clearer Entry Point for Users - Users found the new design much clearer with the prompt input search bar centered on the page, guiding their focus. This also aligned with familiar mental models from other chat interfaces, making interactions more intuitive.',
          '✅ Confusing Right Panel Reopening - Users struggled to reopen the right-side panel after closing it, as the trigger wasn\'t in the same area as the close icon. We improved clarity by renaming "Explore AI Skills" to "Select AI Skills" and added hotkey shortcuts.',
          '✅ Difficulty Choosing the Right Skills - With multiple skills available, users found it difficult to determine which best fit their needs. Post-MVP, we refined and consolidated skills to reduce redundancy and improve clarity.'
        ]
      },
      {
        type: 'image',
        image: 'https://static.wixstatic.com/media/d27b3d_improvements.png',
        caption: 'Quick improvements to make to MVP before launch',
        layout: 'full-width'
      },
      {
        type: 'text',
        title: 'TEST & ITERATE - Design QA and Product Release',
        content: 'Our designs took shape on the Beta platform before we released this product to the 14,000 employees at Moody\'s. I led the QA process, reviewing each feature, logging bugs and design discrepancies in a master excel sheet and in JIRA, and ensuring the development team could address issues efficiently.'
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
