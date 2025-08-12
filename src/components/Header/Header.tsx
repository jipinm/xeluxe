import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderContent from '../shared/HeaderContent/HeaderContent';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine if we're on a non-home page
  const isNonHomePage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isNonHomePage ? styles.nonHomePage : ''}`}>
      {/* Video background for non-home pages */}
      {isNonHomePage && (
        <div className={styles.headerVideoBackground}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.headerBackgroundVideo}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.headerVideoOverlay}></div>
        </div>
      )}
      
      <HeaderContent styles={styles} />
    </header>
  );
};

export default Header;
