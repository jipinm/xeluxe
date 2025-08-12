import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Award, Flame, CheckCircle, MapPin, Phone, Mail, AlertTriangle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Fire Risk Assessment',
    'Fire Safety Systems',
    'Compliance Auditing',
    'Training Programs',
    'Maintenance Services',
    'Emergency Response'
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.companySection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Xeluxe</span>
              <span className={styles.logoSubtext}>Fire & Safety</span>
            </div>
            
            <p className={styles.companyDescription}>
              Your trusted partner in fire safety solutions. We provide comprehensive 
              fire protection services with cutting-edge technology and unmatched expertise.
            </p>
            
            <div className={styles.certifications}>
              <div className={styles.certBadge}>
                <Award className={styles.certIcon} size={16} />
                <span className={styles.certText}>ISO 9001</span>
              </div>
              <div className={styles.certBadge}>
                <Flame className={styles.certIcon} size={16} />
                <span className={styles.certText}>NFPA</span>
              </div>
              <div className={styles.certBadge}>
                <CheckCircle className={styles.certIcon} size={16} />
                <span className={styles.certText}>UL Listed</span>
              </div>
            </div>
          </div>
          
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.servicesSection}>
            <h4 className={styles.sectionTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href="#services" className={styles.link}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} size={16} />
              <div className={styles.contactText}>
                <p>123 Safety Street, Suite 100</p>
                <p>City, State 12345</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} size={16} />
              <div className={styles.contactText}>
                <p>+1 (555) 123-4567</p>
                <span className={styles.contactNote}>24/7 Emergency</span>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} size={16} />
              <div className={styles.contactText}>
                <p>info@xeluxe.com</p>
                <span className={styles.contactNote}>Response within 2 hours</span>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} Xeluxe Fire & Safety Consultancy. All rights reserved.</p>
            </div>
            
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Cookie Policy</a>
            </div>
            
            <div className={styles.emergency}>
              <AlertTriangle className={styles.emergencyIcon} size={20} />
              <span className={styles.emergencyText}>Emergency: +1 (555) 999-0000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
