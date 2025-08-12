import React from 'react';
import { Shield, AlertTriangle, Wind, Headphones, ClipboardCheck, Users } from 'lucide-react';
import styles from './WhoWeAre.module.css';

const WhoWeAre: React.FC = () => {
  const stats = [
    {
      number: '1600+',
      label: 'PROJECTS COMPLETED',
      color: '#f8af1b'
    },
    {
      number: '50+',
      label: 'PROFESSIONALS',
      color: '#f8af1b'
    },
    {
      number: '4 Countries',
      label: 'UAE, KSA, INDIA, IRELAND',
      color: '#f8af1b'
    },
    {
      number: 'ISO 9001 Certified',
      label: 'QUALITY MANAGEMENT SYSTEM',
      color: '#f8af1b'
    }
  ];

  const coreValues = [
    {
      icon: <Shield size={32} />,
      title: 'Fire and Life Safety',
      description: 'Protect the design vision, get it approved, ensure it\'s built right.'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: 'Process Safety',
      description: 'Anticipate the hazards, mitigate the risks, operate with confidence.'
    },
    {
      icon: <Wind size={32} />,
      title: 'Engineering Simulations',
      description: 'Model the problem, engineer the solution, deliver with certainty.'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Acoustics',
      description: 'Design for comfort, control the noise, enhance every environment.'
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Commissioning',
      description: 'Define the intent, manage the delivery, ready to operate.'
    },
    {
      icon: <Users size={32} />,
      title: 'Integrated Construction Supervision',
      description: 'Maintain the intent, review to build right, deliver as intended.'
    }
  ];

  return (
    <section id="who-we-are" className={styles.whoWeAre}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Who We Are</h2>
          <p className={styles.subtitle}>
            We partner with clients to engineer safer, better-performing buildings and infrastructure — guiding them from concept to handover and beyond.
          </p>
        </div>

        {/* Statistics Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber} style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className={styles.coreValuesSection}>
          <h3 className={styles.coreValuesTitle}>Our core values guide everything we do</h3>
          
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <div className={styles.valueContent}>
                  <h4 className={styles.valueTitle}>
                    {value.title}
                  </h4>
                  <p className={styles.valueDescription}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
