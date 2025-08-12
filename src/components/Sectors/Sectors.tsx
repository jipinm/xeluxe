import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Plane, Heart, GraduationCap, ShoppingBag, Factory } from 'lucide-react';
import styles from './Sectors.module.css';

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

const Sectors: React.FC = () => {
  const sectors = [
    {
      id: 1,
      name: 'Commercial & Office',
      icon: Building2,
      description: 'High-rise buildings, business complexes, and corporate headquarters requiring sophisticated fire safety systems.',
      features: ['Multi-zone detection', 'Emergency evacuation', 'Business continuity planning'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Aviation & Airports',
      icon: Plane,
      description: 'Airport terminals, hangars, and aviation facilities with stringent safety and regulatory requirements.',
      features: ['Aircraft hangar protection', 'Terminal safety systems', 'Regulatory compliance'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    },
    {
      id: 3,
      name: 'Healthcare & Medical',
      icon: Heart,
      description: 'Hospitals, clinics, and medical facilities requiring specialized protection for critical patient care areas.',
      features: ['Patient safety priority', 'Medical equipment protection', 'Infection control compliance'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Education & Research',
      icon: GraduationCap,
      description: 'Universities, schools, and research facilities with diverse building types and occupancy requirements.',
      features: ['Campus-wide integration', 'Laboratory protection', 'Student accommodation safety'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80'
    },
    {
      id: 5,
      name: 'Retail & Hospitality',
      icon: ShoppingBag,
      description: 'Shopping centers, hotels, restaurants, and entertainment venues with high public occupancy.',
      features: ['Crowd management', 'Guest safety systems', 'Kitchen fire suppression'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Industrial & Manufacturing',
      icon: Factory,
      description: 'Manufacturing plants, warehouses, and industrial facilities with specialized hazard protection.',
      features: ['Hazardous material handling', 'Process protection', 'Worker safety systems'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <section id="sectors" className={styles.sectors}>
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
            Specialist consultancy across critical, complex, and high-performance environments.
          </h2>
          <p className={styles.subtitle}>
            From complex developments to healthcare, aviation, and hospitality — we support safer, smarter delivery across every phase of the built environment.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.sectorsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {sectors.map((sector) => (
            <motion.div key={sector.id} className={styles.sectorCard} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className={styles.imageWrapper}>
                <img 
                  src={sector.image} 
                  alt={sector.name}
                  className={styles.sectorImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.iconWrapper}>
                    <sector.icon className={styles.sectorIcon} size={32} />
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.sectorHeader}>
                  <h3 className={styles.sectorName}>{sector.name}</h3>
                </div>
                
                <p className={styles.sectorDescription}>
                  {sector.description}
                </p>
                
                <div className={styles.features}>
                  <ul className={styles.featuresList}>
                    {sector.features.map((feature, index) => (
                      <li key={index} className={styles.feature}>
                        <span className={styles.checkmark}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.sectorFooter}>
                  <button className={styles.learnMoreButton}>
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
