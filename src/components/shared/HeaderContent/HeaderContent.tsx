import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  type: 'route' | 'scroll';
}

interface HeaderContentProps {
  styles: any; // CSS modules styles object
  className?: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ styles, className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About Us', href: '/about-us', type: 'route' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Sectors', href: '#sectors', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Insights', href: '#insights', type: 'scroll' },
    { name: 'Contact Us', href: '#contact', type: 'scroll' },
  ];

  // Function to check if a navigation item is active
  const isActiveNavItem = (item: NavItem): boolean => {
    if (item.type === 'route') {
      // For route-based navigation, check exact path match
      return location.pathname === item.href;
    }
    // For scroll-based navigation, we'll handle this later
    return false;
  };

  return (
    <div className={`${styles.container} ${className} ${isScrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src="/logo.png" alt="Xeluxe Fire & Safety" className={styles.logoImage} />
        <div className={styles.tagline}>
          <div>Engineering a Sustainable</div>
          <div>and Resilient Future - Together</div>
        </div>
      </Link>

      <div className={styles.rightSection}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => {
              const isActive = isActiveNavItem(item);
              return (
                <li key={index} className={styles.navItem}>
                  {item.type === 'route' ? (
                    <Link 
                      to={item.href} 
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <button 
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${isMenuOpen ? styles.line1 : ''}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line2 : ''}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line3 : ''}`}></span>
      </button>
    </div>
  );
};

export default HeaderContent;
