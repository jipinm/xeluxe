import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsPage}>
      <main className={styles.mainContent}>
        {/* About Us page content will go here */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <p className={styles.pageSubtitle}>
              Learn more about our company, mission, and values.
            </p>
          </div>
        </section>
        
        {/* Additional content sections will be added here */}
      </main>
    </div>
  );
};

export default AboutUs;