import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import styles from './OurProjects.module.css';

// Sample projects data - you can replace this with actual data source
const projectsData = [
  {
    id: 1,
    title: 'Marina Bay Financial District',
    description: 'Complete fire safety system implementation for a 45-story commercial complex with integrated detection, suppression, and emergency response systems.',
    location: 'Singapore',
    year: '2023',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center',
    slug: 'luxury-residential-complex'
  },
  {
    id: 2,
    title: 'International Airport Terminal',
    description: 'Large-scale fire safety infrastructure for a major international airport terminal covering 2.5 million square feet of operational space.',
    location: 'Dubai, UAE',
    year: '2024',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center',
    slug: 'commercial-office-tower'
  },
  {
    id: 3,
    title: 'Luxury Resort Complex',
    description: 'Comprehensive fire safety solution for a 500-room luxury resort with multiple buildings, pools, and recreational facilities.',
    location: 'Maldives',
    year: '2024',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center',
    slug: 'luxury-resort-complex'
  },
  {
    id: 4,
    title: 'Metropolitan Shopping Center',
    description: 'Complete fire safety overhaul for a 5-level shopping complex serving over 50,000 daily visitors with 200+ retail outlets.',
    location: 'London, UK',
    year: '2023',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center',
    slug: 'metropolitan-shopping-center'
  },
  {
    id: 5,
    title: 'Pharmaceutical Manufacturing Facility',
    description: 'Specialized fire protection for clean room environments and chemical storage areas with stringent regulatory compliance requirements.',
    location: 'Basel, Switzerland',
    year: '2024',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center',
    slug: 'pharmaceutical-manufacturing-facility'
  },
  {
    id: 6,
    title: 'University Campus Modernization',
    description: 'Campus-wide fire safety upgrade covering 15 buildings including dormitories, laboratories, libraries, and lecture halls.',
    location: 'Boston, USA',
    year: '2023',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&crop=center',
    slug: 'university-campus-modernization'
  }
];

const OurProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="our-projects" className={styles.ourProjects} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>
            Explore our portfolio of successful projects across the Middle East. From iconic landmarks to critical infrastructure, we deliver specialist engineering solutions that protect life, enhance performance, and create resilient built environments.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={styles.projectCard}
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
              <div className={styles.cardImage}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.categoryBadge}>
                  {project.category}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <Link 
                  to={`/project/${project.slug}`} 
                  className={styles.projectButton}
                >
                  View Project
                  <ArrowRight size={16} className={styles.arrow} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.footerNote}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Interested in learning more about our project capabilities? Contact us to discuss your specific requirements.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProjects;
