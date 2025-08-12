import React from 'react';
import { 
  Plane, 
  Server, 
  Mountain, 
  Building2, 
  Home, 
  Building, 
  Hotel, 
  GraduationCap, 
  Train, 
  Layout, 
  Building as CommercialBuilding, 
  Anchor, 
  Factory 
} from 'lucide-react';
import styles from './IndustrySectors.module.css';

const IndustrySectors: React.FC = () => {
  const sectors = [
    { name: 'Aviation', icon: <Plane size={24} />, angle: 0 },
    { name: 'Mission Critical', icon: <Server size={24} />, angle: 27.7 },
    { name: 'Roads & Tunnels', icon: <Mountain size={24} />, angle: 55.4 },
    { name: 'Healthcare', icon: <Building2 size={24} />, angle: 83.1 },
    { name: 'Residential', icon: <Home size={24} />, angle: 110.8 },
    { name: 'Mixed-Used', icon: <Building size={24} />, angle: 138.5 },
    { name: 'Hospitality', icon: <Hotel size={24} />, angle: 166.2 },
    { name: 'Education', icon: <GraduationCap size={24} />, angle: 193.9 },
    { name: 'Mass Transit', icon: <Train size={24} />, angle: 221.6 },
    { name: 'Fitout', icon: <Layout size={24} />, angle: 249.3 },
    { name: 'Commercial', icon: <CommercialBuilding size={24} />, angle: 277 },
    { name: 'Marina', icon: <Anchor size={24} />, angle: 304.7 },
    { name: 'Industrial', icon: <Factory size={24} />, angle: 332.4 }
  ];

  return (
    <section id="industry-sectors" className={styles.industrySectors}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Industry and Sector We Serve</h2>
          <p className={styles.subtitle}>
            We bring proven experience across diverse sectors and asset types in the building and infrastructure industry — supporting clients at every scale, from masterplans to specialist facilities.
          </p>
        </div>
        
        <div className={styles.circleContainer}>
          <div className={styles.circleWrapper}>
            {/* Center Circle */}
            <div className={styles.centerCircle}>
              <h3 className={styles.centerTitle}>Building &</h3>
              <h3 className={styles.centerSubtitle}>Infrastructure</h3>
            </div>
            
            {/* Sector Items */}
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={styles.sectorItem}
                style={{
                  '--angle': `${sector.angle}deg`,
                  transform: `rotate(${sector.angle}deg) translateX(315px) rotate(-${sector.angle}deg) translate(-50%, -35px)`
                } as React.CSSProperties}
              >
                <div className={styles.sectorIcon}>
                  {sector.icon}
                </div>
                <span className={styles.sectorName}>{sector.name}</span>
              </div>
            ))}
            
            {/* Circle Border - positioned to align with icon centers */}
            <div className={styles.circleBorder}></div>
          </div>
        </div>
        
        <div className={styles.footerTagline}>
          <p>Engineering a Sustainable and Resilient Future – Together</p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;
