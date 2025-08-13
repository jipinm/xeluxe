import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogData } from '../../data/blogData';
import styles from './BlogDetails.module.css';

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Blog post not found</h2>
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.blogDetails}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section 
          className={styles.heroSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSeparator}>→</span>
              <Link to="/blog" className={styles.breadcrumbLink}>Blog</Link>
              <span className={styles.breadcrumbSeparator}>→</span>
              <span className={styles.breadcrumbCurrent}>{blog.title}</span>
            </div>
            
            <h1 className={styles.blogTitle}>{blog.title}</h1>
            <p className={styles.blogSubtitle}>{blog.description}</p>
            
            <div className={styles.blogMeta}>
              <div className={styles.metaItem}>
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/blog" className={styles.secondaryButton}>
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <img 
              src={blog.image} 
              alt={blog.title}
              className={styles.blogImage}
            />
          </div>
        </motion.section>

        {/* Blog Content */}
        <motion.div 
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div 
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
