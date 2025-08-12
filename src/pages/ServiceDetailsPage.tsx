import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import { getServiceBySlug } from '../data/servicesData';
import styles from './ServiceDetails.module.css';

const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/services" replace />;
  }
  
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className={styles.serviceDetailsPage}>
      <main className={styles.mainContent}>
        <ServiceDetails service={service} />
      </main>
    </div>
  );
};

export default ServiceDetailsPage;
