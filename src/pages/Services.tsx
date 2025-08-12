import React from 'react';
import OurServices from '../components/OurServices/OurServices';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <div className={styles.servicesPage}>
      <main className={styles.mainContent}>
        <OurServices />
      </main>
    </div>
  );
};

export default Services;
