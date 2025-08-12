import React from 'react';
import OurProjects from '../components/OurProjects/OurProjects';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsPage}>
      <main className={styles.mainContent}>
        <OurProjects />
      </main>
    </div>
  );
};

export default Projects;
