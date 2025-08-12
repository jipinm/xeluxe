import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './WhoWeAreSection.module.css';

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

const WhoWeAreSection: React.FC = () => {
  return (
    <section id="who-we-are" className={styles.whoWeAre}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>Who We Are</h2>
          <p className={styles.subtitle}>
            We partner with clients to engineer safer, better-performing buildings and infrastructure — guiding them from concept to handover and beyond.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.contentGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Quote Card */}
          <motion.div className={styles.quoteCard} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className={styles.quoteIconContainer}>
              <Quote size={48} />
            </div>
            <div className={styles.quoteContent}>
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>
                  <strong>Xeluxe is a specialist engineering consultancy.</strong>
                </p>
                <p className={styles.quoteSubtext}>
                  We partner with clients to <strong>ensure fire and life safety</strong>, 
                  <strong> enhance operational performance</strong>, and 
                  <strong> improve sustainability</strong> across the built environment.
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div className={styles.contentCard} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className={styles.cardContent}>
              <p>
                Founded in 2014 and headquartered in Dubai — with offices in Abu Dhabi, Dammam, India, and Ireland — we operate across the EMEAI region and are trusted by clients in <strong>aviation</strong>, <strong>hospitality</strong>, <strong>giga projects</strong>, <strong>infrastructure</strong>, and <strong>industrial development</strong>.
              </p>
              <p>
                Our expertise spans <strong>Fire & Life Safety</strong>, <strong>Process Safety</strong>, <strong>Engineering Simulations</strong>, <strong>Acoustics</strong>, <strong>Commissioning</strong>, <strong>Construction Supervision with Integrated Peer Review</strong> — supporting clients from concept through to handover and ongoing operations.
              </p>
              <p>
                We are <strong>ISO 9001</strong> certified and officially recognised as a <strong>House of Expertise by Dubai Civil Defence</strong>, with advanced-stage approvals in progress with Abu Dhabi and Saudi Civil Defence (Salamah).
              </p>
              <p>
                Our team of 50+ certified professionals — including <strong>CEng</strong>, <strong>PE</strong>, <strong>PhD</strong>, and <strong>CFPS</strong> — brings regulatory insight and real-world project experience to deliver practical, code-compliant solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Quote Footer */}
        <motion.div 
          className={styles.quoteFooter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.footerLine}></div>
          <p className={styles.footerText}>Engineering a Sustainable and Resilient Future - Together</p>
          <div className={styles.footerLine}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
