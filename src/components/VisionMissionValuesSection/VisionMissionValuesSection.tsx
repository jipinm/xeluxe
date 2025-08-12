import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Shield, Scale, Network, FileText, Lightbulb, Trophy } from 'lucide-react';
import styles from './VisionMissionValuesSection.module.css';

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

const VisionMissionValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Shield size={24} />,
      title: 'Safety',
      description: 'We prioritise life safety in everything we do.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Integrity',
      description: 'We operate transparently and ethically, always.'
    },
    {
      icon: <Network size={24} />,
      title: 'Collaboration',
      description: 'We work side-by-side with clients and partners to achieve shared success.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Accountability',
      description: 'We take ownership of outcomes and deliver on our promises.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'We apply advanced thinking to real-world challenges.'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project and interaction.'
    }
  ];

  return (
    <section id="vision-mission-values" className={styles.visionMissionValues}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>Vision, Mission & Values</h2>
          <p className={styles.subtitle}>
            Our foundation principles that guide every decision, project, and partnership as we work to create a safer, more sustainable built environment.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.contentGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Column - Vision and Mission */}
          <motion.div className={styles.leftColumn} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            {/* Vision Card */}
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Target size={16} />
                </div>
                <h3 className={styles.cardTitle}>Vision</h3>
              </div>
              <div className={styles.cardContent}>
                <p>
                  To lead the way in creating a safer, more sustainable, and resilient built environment — where people, projects, and systems perform at their best.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Flag size={16} />
                </div>
                <h3 className={styles.cardTitle}>Mission</h3>
              </div>
              <div className={styles.cardContent}>
                <p>
                  To be the trusted and preferred specialist engineering company for our partners in the built environment, fostering lasting value by protecting life, preserving assets, and delivering resilient, high-performance solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div className={styles.rightColumn} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Values</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.valuesList}>
                  {values.map((value, index) => (
                    <div key={index} className={styles.valueItem}>
                      <div className={styles.valueIcon}>
                        {value.icon}
                      </div>
                      <div className={styles.valueContent}>
                        <span className={styles.valueTitle}>{value.title}</span>
                        <span className={styles.valueDash}> — </span>
                        <span className={styles.valueDescription}>{value.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionValuesSection;
