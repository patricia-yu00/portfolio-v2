import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function VideoSection({ src, poster, caption, title, subtitle, layout = 'standard', autoplay = true }) {
  const videoRef = useRef(null)
  const iframeRef = useRef(null)

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  // Check if the source is a YouTube URL
  const isYouTube = src && (src.includes('youtube.com') || src.includes('youtu.be'))
  
  // Extract YouTube video ID
  const getYouTubeEmbedUrl = (url) => {
    let videoId = ''
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0]
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0]
    } else if (url.includes('youtube.com/embed/')) {
      return url // Already an embed URL
    }
    
    // Add autoplay and mute parameters for YouTube (mute is required for autoplay)
    const params = autoplay ? '?autoplay=1&mute=1&loop=1&playlist=' + videoId : ''
    return `https://www.youtube.com/embed/${videoId}${params}`
  }

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    if (!autoplay) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play()
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    const currentVideo = videoRef.current
    const currentIframe = iframeRef.current

    if (currentVideo) {
      observer.observe(currentVideo)
    }
    if (currentIframe) {
      observer.observe(currentIframe)
    }

    return () => {
      if (currentVideo) observer.unobserve(currentVideo)
      if (currentIframe) observer.unobserve(currentIframe)
    }
  }, [autoplay])

  return (
    <motion.figure 
      className={`case-section video-section video-${layout}`}
      variants={itemVariants}
    >
      {title && <h3 className="case-section-title">{title}</h3>}
      {subtitle && <p className="case-section-subtitle">{subtitle}</p>}
      {isYouTube ? (
        <iframe
          ref={iframeRef}
          className="case-video case-video-youtube"
          src={getYouTubeEmbedUrl(src)}
          title={caption || title || 'Video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video 
          ref={videoRef}
          className="case-video" 
          controls 
          poster={poster}
          preload="metadata"
          muted={autoplay}
          loop={autoplay}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {caption && <figcaption className="case-caption">{caption}</figcaption>}
    </motion.figure>
  )
}

