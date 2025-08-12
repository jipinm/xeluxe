import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Carousel content data
const HERO_SLIDES = [
  {
    "video": "hero-video.mp4",
    "primaryText": "Fire and Life Safety",
    "accentText": "Protect the design vision. Get it approved. Ensure it's built right."
  },
  {
    "video": "hero-video.mp4",
    "primaryText": "Process Safety",
    "accentText": "Anticipate the hazards. Mitigate the risks. Operate with confidence."
  },
  {
    "video": "hero-video.mp4",
    "primaryText": "Engineering Simulations",
    "accentText": "Model the problem. Engineer the solution. Deliver with certainty."
  },
  {
    "video": "hero-video.mp4",
    "primaryText": "Acoustics",
    "accentText": "Design for comfort. Control the noise. Enhance every environment."
  },
  {
    "video": "hero-video.mp4",
    "primaryText": "Commissioning",
    "accentText": "Define the intent. Manage the delivery. Ready to operate."
  },
  {
    "video": "hero-video.mp4",
    "primaryText": "Integrated Construction Supervision",
    "accentText": "Maintain the intent. Review to build right. Deliver as intended."
  }
];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for video
      gsap.to(videoRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Floating animation for trust indicators
      gsap.to(`.${styles.trustItem}`, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Carousel auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Changed to 5 seconds for faster slide transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} id="home" className={styles.hero}>
      {/* Background Video with Parallax */}
      <div className={styles.videoBackground}>
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
          key={currentSlide} // Force re-render when slide changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <source src={`/${HERO_SLIDES[currentSlide].video}`} type="video/mp4" />
        </motion.video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          {/* Left Side Text Content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
          >
            {/* 1. Primary Headline Area (Fixed Text) */}
            <motion.div
              className={styles.primaryHeadlineArea}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className={styles.headlineContainer}>
                <h1 className={styles.primaryHeadline} style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  Specialist Engineering Consultancy Under One Roof
                </h1>
              </div>
            </motion.div>

            {/* 2. Two-Column Content Section */}
            <motion.div
              className={styles.twoColumnSection}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <div className={styles.contentContainer} style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
                <div className={styles.leftColumn} style={{ flex: '0 0 auto', width: '550px' }}>
                  <AnimatePresence mode="wait">
                    <motion.h2 
                      className={styles.primaryText}
                      key={`primary-${currentSlide}`}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ 
                        duration: 1.0,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.2
                      }}
                      style={{ 
                        color: '#F19200', 
                        fontSize: '1.75rem', 
                        fontWeight: '600',
                        margin: 0,
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        overflow: 'visible',
                        width: '100%'
                      }}
                    >
                      {HERO_SLIDES[currentSlide].primaryText}
                    </motion.h2>
                  </AnimatePresence>
                </div>
                <div className={styles.rightColumn} style={{ flex: '1', paddingLeft: '2rem', minWidth: '400px' }}>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      className={styles.fixedText}
                      key={`accent-${currentSlide}`}
                      initial={{ opacity: 0, y: 20, x: -30 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -20, x: 30 }}
                      transition={{ 
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.5
                      }}
                      style={{ 
                        color: '#ffffff', 
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        fontWeight: '400'
                      }}
                    >
                      {HERO_SLIDES[currentSlide].accentText.split('. ').map((sentence, index, array) => (
                        <div key={index} style={{ marginBottom: index < array.length - 1 ? '0.1rem' : '0' }}>
                          {sentence.trim()}{index < array.length - 1 ? '.' : sentence.endsWith('.') ? '' : '.'}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Call-to-Action Button - Bottom Right of AccentText */}
                  <motion.div
                    className={styles.ctaButtonArea}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
                    style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <motion.button
                      className={styles.ctaButton}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#333333',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#f8af1b" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ transform: 'rotate(-45deg)' }}
                      >
                        <path d="m3 3 3 9-3 9 19-9Z"/>
                        <path d="m6 12h16"/>
                      </svg>
                      <span className={styles.ctaButtonText} style={{ color: '#222222', fontWeight: '600' }}>Let's Connect</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
