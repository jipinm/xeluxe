import React from 'react';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      name: 'Dubai Civil Defence',
      subtitle: 'House of Expertise',
      image: '/certificates/1.png'
    },
    {
      id: 2,
      name: 'Saudi Civil Defence',
      subtitle: 'Salamah',
      image: '/certificates/2.png'
    },
    {
      id: 3,
      name: 'Abu Dhabi Civil Defence',
      subtitle: 'House of Expertise',
      image: '/certificates/3.png'
    },
    {
      id: 4,
      name: 'ISO 9001',
      subtitle: 'Certified QMS',
      image: '/certificates/4.png'
    },
    {
      id: 5,
      name: 'NFPA',
      subtitle: 'Member',
      image: '/certificates/5.png'
    },
    {
      id: 6,
      name: 'SFPE',
      subtitle: 'Member',
      image: '/certificates/6.png'
    }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Recognized expertise.
          </h2>
          <p className={styles.subtitle}>
            Our certifications and professional memberships demonstrate our commitment to excellence and ensure compliance with the highest industry standards.
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className={styles.certificationsGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={styles.certLogo}>
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className={styles.certImage}
                />
              </div>
              <div className={styles.certInfo}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certSubtitle}>{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
