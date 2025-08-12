import React from 'react';
import styles from './WhoWeAreSection.module.css';

const WhoWeAreSection: React.FC = () => {
  return (
    <section className={styles.whoWeAreSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Who We Are</h2>
        
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                <span className={styles.boldItalic}>Xeluxe is a specialist engineering consultancy.</span>
                <br /><br />
                <span className={styles.italic}>
                  We partner with clients to <span className={styles.bold}>ensure fire and life safety</span>, 
                  <span className={styles.bold}> enhance operational performance</span>, and 
                  <span className={styles.bold}> improve sustainability</span> across the built environment.
                </span>
              </p>
            </blockquote>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.paragraphs}>
              <p className={styles.paragraph}>
                Founded in 2014 and headquartered in Dubai — with offices in Abu Dhabi, Dammam, India, and Ireland — we operate across the EMEAI region and are trusted by clients in <span className={styles.bold}>aviation</span>, <span className={styles.bold}>hospitality</span>, <span className={styles.bold}>giga projects</span>, <span className={styles.bold}>infrastructure</span>, and <span className={styles.bold}>industrial development</span>.
              </p>
              
              <p className={styles.paragraph}>
                Our expertise spans <span className={styles.bold}>Fire & Life Safety</span>, <span className={styles.bold}>Process Safety</span>, <span className={styles.bold}>Engineering Simulations</span>, <span className={styles.bold}>Acoustics</span>, <span className={styles.bold}>Commissioning</span>, <span className={styles.bold}>Construction Supervision with Integrated Peer Review</span> — supporting clients from concept through to handover and ongoing operations.
              </p>
              
              <p className={styles.paragraph}>
                We are <span className={styles.bold}>ISO 9001</span> certified and officially recognised as a <span className={styles.bold}>House of Expertise by Dubai Civil Defence</span>, with advanced-stage approvals in progress with Abu Dhabi and Saudi Civil Defence (Salamah).
              </p>
              
              <p className={styles.paragraph}>
                Our team of 50+ certified professionals — including <span className={styles.bold}>CEng</span>, <span className={styles.bold}>PE</span>, <span className={styles.bold}>PhD</span>, and <span className={styles.bold}>CFPS</span> — brings regulatory insight and real-world project experience to deliver practical, code-compliant solutions.
              </p>
              
              <p className={styles.paragraph}>
                We foster a <span className={styles.bold}>culture of collaboration and technical excellence</span>, enabling us to adapt quickly and add value across every project phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
