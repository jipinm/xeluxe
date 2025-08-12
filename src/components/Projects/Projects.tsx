import React from 'react';
import { Eye } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Marina Bay Financial District',
      category: 'Aviation',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Complete fire safety system implementation for a 45-story commercial complex with integrated detection, suppression, and emergency response systems.',
      features: ['Multi-zone detection network', 'Automated suppression systems', 'Emergency communication integration', 'Compliance certification'],
      location: 'Singapore',
      year: '2023'
    },
    {
      id: 2,
      name: 'International Airport Terminal',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      description: 'Large-scale fire safety infrastructure for a major international airport terminal covering 2.5 million square feet of operational space.',
      features: ['Advanced smoke detection', 'Foam suppression systems', 'Mass notification systems', 'Backup power integration'],
      location: 'Dubai, UAE',
      year: '2024'
    },
    {
      id: 3,
      name: 'Luxury Resort Complex',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      description: 'Comprehensive fire safety solution for a 500-room luxury resort with multiple buildings, pools, and recreational facilities.',
      features: ['Wireless sensor networks', 'Guest notification systems', 'Kitchen suppression systems', 'Emergency evacuation planning'],
      location: 'Maldives',
      year: '2024'
    },
    {
      id: 4,
      name: 'Metropolitan Shopping Center',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete fire safety overhaul for a 5-level shopping complex serving over 50,000 daily visitors with 200+ retail outlets.',
      features: ['Public address integration', 'Crowd management systems', 'Retail-specific suppression', 'Emergency lighting network'],
      location: 'London, UK',
      year: '2023'
    },
    {
      id: 5,
      name: 'Pharmaceutical Manufacturing Facility',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Specialized fire protection for clean room environments and chemical storage areas with stringent regulatory compliance requirements.',
      features: ['Clean room compatible systems', 'Chemical-specific suppression', 'Regulatory compliance monitoring', 'Contamination prevention protocols'],
      location: 'Basel, Switzerland',
      year: '2024'
    },
    {
      id: 6,
      name: 'University Campus Modernization',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
      description: 'Campus-wide fire safety upgrade covering 15 buildings including dormitories, laboratories, libraries, and lecture halls.',
      features: ['Multi-building integration', 'Laboratory-grade protection', 'Student accommodation safety', 'Historical building preservation'],
      location: 'Boston, USA',
      year: '2023'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Complex environments. Engineered Results.
          </h2>
          <p className={styles.subtitle}>
            We partner across sectors and project scales — from giga developments to hotels and airports. Here are just a few highlights from our portfolio.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <button className={styles.quickView}>
                    <Eye className={styles.viewIcon} size={20} />
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.projectHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                </div>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                
                <div className={styles.features}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, index) => (
                      <li key={index} className={styles.feature}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.projectFooter}>
                  <div className={styles.projectInfo}>
                    <span className={styles.location}>{project.location}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  
                  <div className={styles.actionButtons}>
                    <button className={styles.primaryButton}>
                      View Details
                    </button>
                    <button className={styles.secondaryButton}>
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
