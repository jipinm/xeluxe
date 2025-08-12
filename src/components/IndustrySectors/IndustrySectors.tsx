import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Plane, 
  Server, 
  Mountain, 
  Building2, 
  Home, 
  Building, 
  Hotel, 
  GraduationCap, 
  Train, 
  Layout, 
  Building as CommercialBuilding, 
  Anchor, 
  Factory 
} from 'lucide-react';
import styles from './IndustrySectors.module.css';

const IndustrySectors: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    { name: 'Aviation', icon: <Plane size={24} />, angle: 0 },
    { name: 'Mission Critical', icon: <Server size={24} />, angle: 27.7 },
    { name: 'Roads & Tunnels', icon: <Mountain size={24} />, angle: 55.4 },
    { name: 'Healthcare', icon: <Building2 size={24} />, angle: 83.1 },
    { name: 'Residential', icon: <Home size={24} />, angle: 110.8 },
    { name: 'Mixed-Used', icon: <Building size={24} />, angle: 138.5 },
    { name: 'Hospitality', icon: <Hotel size={24} />, angle: 166.2 },
    { name: 'Education', icon: <GraduationCap size={24} />, angle: 193.9 },
    { name: 'Mass Transit', icon: <Train size={24} />, angle: 221.6 },
    { name: 'Fitout', icon: <Layout size={24} />, angle: 249.3 },
    { name: 'Commercial', icon: <CommercialBuilding size={24} />, angle: 277 },
    { name: 'Marina', icon: <Anchor size={24} />, angle: 304.7 },
    { name: 'Industrial', icon: <Factory size={24} />, angle: 332.4 }
  ];

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
    <section id="industry-sectors" className={styles.industrySectors} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Industry and Sector We Serve</h2>
          <p className={styles.subtitle}>
            We bring proven experience across diverse sectors and asset types in the building and infrastructure industry — supporting clients at every scale, from masterplans to specialist facilities.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.sectorsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className={styles.sectorCard}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconBackground}></div>
                  <div className={styles.sectorIcon}>
                    {sector.icon}
                  </div>
                </div>
                <h3 className={styles.sectorName}>{sector.name}</h3>
              </div>
              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.footerTagline}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.footerLine}></div>
          <p className={styles.footerText}>Engineering a Sustainable and Resilient Future – Together</p>
          <div className={styles.footerLine}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySectors;
