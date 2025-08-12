import React from 'react';
import WhoWeAreSection from '../components/WhoWeAreSection/WhoWeAreSection';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsPage}>
      <main className={styles.mainContent}>
        <WhoWeAreSection />
        {/* Additional content sections will be added here */}
      </main>
    </div>
  );
};

export default AboutUs;