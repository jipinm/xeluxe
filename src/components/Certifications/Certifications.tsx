import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

// Animation variants for entrance effects only
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      name: 'Dubai Civil Defence',
      subtitle: 'House of Expertise',
      image: '/certificates/1.png'
    },
    {
      id: 2,
      name: 'Saudi Civil Defence',
      subtitle: 'Salamah',
      image: '/certificates/2.png'
    },
    {
      id: 3,
      name: 'Abu Dhabi Civil Defence',
      subtitle: 'House of Expertise',
      image: '/certificates/3.png'
    },
    {
      id: 4,
      name: 'ISO 9001',
      subtitle: 'Certified QMS',
      image: '/certificates/4.png'
    },
    {
      id: 5,
      name: 'NFPA',
      subtitle: 'Member',
      image: '/certificates/5.png'
    },
    {
      id: 6,
      name: 'SFPE',
      subtitle: 'Member',
      image: '/certificates/6.png'
    }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>
            Recognized expertise.
          </h2>
          <p className={styles.subtitle}>
            Our certifications and professional memberships demonstrate our commitment to excellence and ensure compliance with the highest industry standards.
          </p>
        </motion.div>
        
        {/* Certifications Grid */}
        <motion.div 
          className={styles.certificationsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} className={styles.certCard} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className={styles.certLogo}>
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className={styles.certImage}
                />
              </div>
              <div className={styles.certInfo}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certSubtitle}>{cert.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
