import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogData } from '../../data/blogData';
import styles from './Blog.module.css';

const Blog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const blogPosts = blogData.slice(0, 6); // Use first 6 posts from blogData

  return (
    <section className={styles.blog} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>
            Latest Blog Posts
          </h2>
          <p className={styles.subtitle}>
            Stay informed with the latest trends, insights, and best practices in fire safety engineering 
            from our team of experts and industry professionals.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className={styles.blogCard}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 3,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: 1000 
              }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={styles.blogImage}
                />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDescription}>{post.description}</p>
                
                <div className={styles.postFooter}>
                  <div className={styles.postDate}>
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link 
                    to={`/blog-details/${post.slug}`}
                    className={styles.readButton}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className={styles.arrow} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
