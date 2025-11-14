# Moody's Case Study Images

Place all Moody's case study images in this folder with the following naming convention:

## Required Images:

- `hero.png` - Main hero/cover image
- `chat-enhanced.png` - Enhanced chat interface screenshot
- `files-enhanced.png` - Enhanced files management screenshot
- `homepage-enhanced.png` - Enhanced homepage screenshot
- `competitive-analysis-1.png` - Competitive analysis screenshot 1
- `competitive-analysis-2.png` - Competitive analysis screenshot 2 (or use `research-synthesis.png`)
- `personas-workshop.png` - Personas workshop photo
- `persona-power-user.png` - Power user persona card
- `persona-new-user.png` - New user persona card
- `journey-map.png` - User journey map
- `user-flow.png` - User flow diagram
- `design-system-1.png` - Design system/components screenshot 1
- `design-system-2.png` - Design system/components screenshot 2
- `wireframe-1.png` - Wireframe screenshot 1
- `wireframe-2.png` - Wireframe screenshot 2
- `jira-tickets.png` - JIRA tickets example
- `handoff-1.png` - Dev handoff screenshot 1
- `handoff-2.png` - Dev handoff screenshot 2
- `improvements.png` - Improvements diagram/screenshot

## Download from Wix:

You can download these images from your Wix site:
https://www.patriciayu.com/enhancing-ai-tools

Right-click on each image and "Save Image As..." with the names above.

## Update Image Paths:

After placing images here, update the image paths in:
`src/data/caseStudies.js` (moodys section)

Change from:
```javascript
image: 'https://static.wixstatic.com/media/...'
```

To:
```javascript
image: heroImage // with proper import
```

