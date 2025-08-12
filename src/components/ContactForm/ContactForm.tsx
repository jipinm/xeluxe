import React, { useState } from 'react';
import { Phone, Mail, MapPin, Flame, Rocket } from 'lucide-react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const services = [
    'Fire Risk Assessment',
    'Fire Safety Systems',
    'Compliance Auditing',
    'Training Programs',
    'Maintenance Services',
    'Engineering Consulting',
    'Emergency Response',
    'Other'
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoHeader}>
              <span className={styles.sectionLabel}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>
                Let's Discuss Your
                <span className={styles.accentText}> Fire Safety Needs</span>
              </h2>
              <p className={styles.sectionDescription}>
                Ready to enhance your fire safety? Our experts are here to help you 
                create a comprehensive safety solution tailored to your specific requirements.
              </p>
            </div>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                  <span>24/7 Emergency Line</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Email Us</h4>
                  <p>info@xeluxe.com</p>
                  <span>Response within 2 hours</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={24} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Visit Us</h4>
                  <p>123 Safety Street, Suite 100</p>
                  <span>City, State 12345</span>
                </div>
              </div>
            </div>
            
            <div className={styles.quickStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>&lt; 2hrs</div>
                <div className={styles.statLabel}>Response Time</div>
              </div>
              
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
              
              <div className={styles.stat}>
                <div className={styles.statNumber}>Free</div>
                <div className={styles.statLabel}>Consultation</div>
              </div>
            </div>
          </div>
          
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>
                  <Flame className={styles.formIcon} size={24} />
                  Request a Quote
                </h3>
                <p className={styles.formDescription}>
                  Fill out the form below and we'll get back to you with a customized solution.
                </p>
              </div>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={4}
                    required
                    placeholder="Tell us about your fire safety requirements..."
                  />
                </div>
              </div>
              
              <div className={styles.buttonContainer}>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Rocket className={styles.buttonIcon} size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
