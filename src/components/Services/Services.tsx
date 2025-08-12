import React from 'react';
import { Shield, AlertTriangle, Wind, Headphones, ClipboardCheck, UserCheck } from 'lucide-react';
import styles from './Services.module.css';

const Services: React.FC = () => {
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

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>What We Do</h2>
          <p className={styles.subtitle}>
            Explore our specialised engineering services — from strategy and design to delivery and beyond.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
