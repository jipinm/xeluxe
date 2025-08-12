import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, User, MapPin, Phone, Clock } from 'lucide-react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>
            Let's Connect
          </h2>
          <p className={styles.subtitle}>
            At Xeluxe, we partner with our clients to shape safer, more resilient, and future-ready built 
            environments—providing specialised engineering consultancy at every stage, from concept to 
            handover and beyond.
          </p>
          <p className={styles.subtitle}>Let’s connect to start the conversation—together we can deliver solutions that protect people, enhance resilience, and shape the built environment for the future.</p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div 
          className={styles.contactGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Direct Contact Card */}
          <motion.div className={styles.contactCard} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <User className={styles.contactIcon} />
              </div>
              <h3 className={styles.contactTitle}>Your Direct Contact:</h3>
            </div>
            
            <div className={styles.contactDetails}>
              <h4 className={styles.personName}>Christopher Ah King</h4>
              <p className={styles.personTitle}>Managing Partner</p>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail size={18} />
                  <span>c.ahking@xeluxefiresafety.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* General Contact Card */}
          <motion.div className={styles.contactCard} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.contactIcon} />
              </div>
              <h3 className={styles.contactTitle}>General Contact:</h3>
            </div>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail size={18} />
                  <span>info@xeluxefiresafety.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Globe size={18} />
                  <span>www.xeluxefiresafety.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
