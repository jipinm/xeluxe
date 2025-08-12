import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap } from 'lucide-react';
import styles from './Leadership.module.css';

const Leadership: React.FC = () => {
  const teamMembers = [
    {
      name: 'Robert Bain',
      designation: 'CEO',
      education: 'FIFireE',
      description: 'Provides strategic leadership, fire safety expertise, and senior oversight shaped by over 35 years in emergency management and regulatory consultancy.',
      photo: '/team/robert-bain.jpg' // Placeholder path
    },
    {
      name: 'Christopher King',
      designation: 'Managing Partner (UAE)',
      education: 'CEng MCIBSE MSc BEng',
      description: 'Leads the delivery of high-performing, compliant projects across MEP, commissioning, and fire life safety, built on 23 years of cross-sector experience.',
      photo: '/team/christopher-king.jpg' // Placeholder path
    },
    {
      name: 'Ali J. Alshamrani',
      designation: 'Managing Partner (KSA)',
      education: 'MBA MNC SBC MRC Safety CFPS CBO',
      description: 'Leads design management and project delivery, drawing on 15 years of construction, masterplanning, and infrastructure leadership on major Saudi developments.',
      photo: '/team/ali-alshamrani.jpg' // Placeholder path
    },
    {
      name: 'Mohammed Shibin',
      designation: 'Director of Fire Engineering',
      education: 'PE CFPS BTech',
      description: 'Leads fire and life safety risk management and strategy, drawing on 16 years of experience in emergency planning, compliance, and masterplanning across Saudi Arabia and the UAE.',
      photo: '/team/mohammed-shibin.jpg' // Placeholder path
    },
    {
      name: 'Brian Johnson',
      designation: 'Director of Acoustics',
      education: 'BSc',
      description: 'Leads acoustic design and environmental noise management, drawing on nearly 30 years of international experience in architectural and MEP acoustics.',
      photo: '/team/brian-johnson.jpg' // Placeholder path
    },
    {
      name: 'Mehmet Anil Karaaydin',
      designation: 'Director of Commissioning',
      education: 'MEng',
      description: 'Leads commissioning delivery and building systems optimisation, drawing on 19 years of experience in building services, project handover, and operational readiness.',
      photo: '/team/mehmet-karaaydin.jpg' // Placeholder path
    },
    {
      name: 'Ali Al Ahmar',
      designation: 'Director of Projects',
      education: 'BArch',
      description: 'Leads project management and large-scale urban development, drawing on 30 years of experience overseeing complex masterplans and high-profile developments across Saudi Arabia.',
      photo: '/team/ali-al-ahmar.jpg' // Placeholder path
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="leadership" className={styles.leadership}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>Leadership & Technical Expertise</h2>
          <p className={styles.subtitle}>
            Xeluxe's leadership team combines global project experience, technical depth, and regulatory expertise to support complex developments across the built environment. Our directors bring specialised knowledge across all core service lines, ensuring senior oversight and delivery excellence on every project.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.teamGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className={styles.memberCard}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.photoContainer}>
                  <div className={styles.photoPlaceholder}>
                    <User size={40} />
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberDesignation}>{member.designation}</p>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.educationSection}>
                  <div className={styles.educationIcon}>
                    <GraduationCap size={16} />
                  </div>
                  <span className={styles.education}>{member.education}</span>
                </div>
                
                <p className={styles.description}>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
