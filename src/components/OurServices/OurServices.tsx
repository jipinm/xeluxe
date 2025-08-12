import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Shield, AlertTriangle, Wind, Headphones, Clipboard, HardHat, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import styles from './OurServices.module.css';

const OurServices: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Map icons to services data
  const serviceIcons: { [key: string]: React.ReactElement } = {
    'fire-safety-consulting': <Shield size={24} />,
    'fire-detection-systems': <AlertTriangle size={24} />,
    'fire-suppression-systems': <Wind size={24} />,
    'emergency-response-planning': <Headphones size={24} />,
    'building-code-compliance': <Clipboard size={24} />,
    'system-maintenance': <HardHat size={24} />
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="our-services" className={styles.ourServices} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We deliver specialist consultancy across every phase of the built environment — from compliance and technical modelling to building performance optimisation and site supervision. Our services are designed to protect life, enhance performance, and support more resilient, sustainable development.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={styles.serviceCard}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 3,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: 1000 
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <motion.div 
                    className={styles.serviceIcon}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {serviceIcons[service.slug] || <Shield size={24} />}
                  </motion.div>
                </div>
                <h3 className={styles.serviceTitle}>{service.name}</h3>
              </div>
              
              <p className={styles.serviceDescription}>{service.shortDescription}</p>
              
              <Link 
                to={`/service/${service.slug}`} 
                className={styles.serviceButton}
              >
                Learn More
                <ArrowRight size={16} className={styles.arrow} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.footerNote}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>For detailed scopes across each service line, please get in touch or request our detailed capability statement.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
