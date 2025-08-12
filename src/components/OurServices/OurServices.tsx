import React from 'react';
import { Shield, AlertTriangle, Wind, Headphones, Clipboard, HardHat, ArrowRight } from 'lucide-react';
import styles from './OurServices.module.css';

const OurServices: React.FC = () => {
  const services = [
    {
      icon: <Shield size={24} />,
      title: 'FIRE AND LIFE SAFETY',
      description: 'Fire and life safety strategy, performance-based design, and full lifecycle safety assessments *'
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'PROCESS SAFETY',
      description: 'HAZID, HAZOP, and QRA services to identify, model, and mitigate process safety risks in high-hazard environments *'
    },
    {
      icon: <Wind size={24} />,
      title: 'ENGINEERING SIMULATION',
      description: 'Fire, egress, and environmental simulations to optimise safety, comfort, and system performance *'
    },
    {
      icon: <Headphones size={24} />,
      title: 'ACOUSTICS',
      description: 'Architectural, MEP, and environmental acoustics for compliance, comfort, and performance *'
    },
    {
      icon: <Clipboard size={24} />,
      title: 'COMMISSIONING',
      description: 'Commissioning planning, management, and re-commissioning to deliver system readiness and lifecycle performance *'
    },
    {
      icon: <HardHat size={24} />,
      title: 'CONSTRUCTION SUPERVISION',
      description: 'Construction supervision with integrated peer review — bridging site delivery and technical oversight to ensure quality across all disciplines *'
    }
  ];

  return (
    <section id="our-services" className={styles.ourServices}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We deliver specialist consultancy across every phase of the built environment — from compliance and technical modelling to building performance optimisation and site supervision. Our services are designed to protect life, enhance performance, and support more resilient, sustainable development.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <button className={styles.serviceButton}>
                Learn More
                <ArrowRight size={16} className={styles.arrow} />
              </button>
            </div>
          ))}
        </div>
        
        <div className={styles.footerNote}>
          <p>For detailed scopes across each service line, please get in touch or request our detailed capability statement.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
