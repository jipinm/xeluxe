import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, AlertTriangle, Wind, Headphones, ClipboardCheck, UserCheck } from 'lucide-react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Shield size={24} />,
      title: 'Fire and Life Safety',
      features: ['Protect the design vision', 'Get it approved', 'Ensure it’s built right']
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'Process Safety',
      features: ['Anticipate the hazards.', 'Mitigate the risks.', 'Operate with confidence.']
    },
    {
      icon: <Wind size={24} />,
      title: 'Engineering Simulation',
      features: ['Model the problem.', 'Engineer the solution.', 'Deliver with certainty.']
    },
    {
      icon: <Headphones size={24} />,
      title: 'Acoustics',
      features: ['Design for comfort.', 'Control the noise.', 'Enhance every environment.']
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: 'Commissioning',
      features: ['Define the intent.', 'Manage the delivery.', 'Ready to operate.']
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Integrated Construction Supervision',
      features: ['Maintain the intent.', 'Review to build right.', 'Deliver as intended.']
    }
  ];

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
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.title}>What We Do</h2>
          <p className={styles.subtitle}>
            Explore our specialised engineering services — from strategy and design to delivery and beyond.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
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
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={styles.serviceButton}>
                Learn More
                <span className={styles.arrow}>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
