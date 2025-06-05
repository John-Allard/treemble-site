import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout title="About" description="About Treemble and its creator">
      <main className={styles.about}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <img
              src="/img/john-allard-photo.jpg"
              alt="John Allard"
              className={styles.headshot}
            />
          </div>
          <div className={styles.text}>
            <h1>About Treemble</h1>
            <p>
              Treemble was developed by John Allard at the{' '}
              <a href="https://www.kumarlab.net/" target="_blank" rel="noopener noreferrer">
                Kumar Lab
              </a>{' '}
              in the{' '}
              <a href="https://igem.temple.edu/" target="_blank" rel="noopener noreferrer">
                Institute for Genomics and Evolutionary Medicine
              </a>{' '}
              at Temple University.
            </p>
            <p>
              I’m a PhD candidate in Bioinformatics at Temple University. My research focuses on
              developing methods to apply AI and machine learning to comparative genomics. My particular
              interest is in applying evolutionary comparative methods to understand the biology of
              aging, longevity, and rejuvenation.
            </p>
            <p>
              ➤{' '}
              <a href="https://scholar.google.com/citations?user=HV0WrDoAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                Google Scholar Profile
              </a>
            </p>
            <p>
              ➤{' '}
              <a href="https://cst.temple.edu/about/faculty-staff/john-allard" target="_blank" rel="noopener noreferrer">
                Temple Biology Graduate Student Page
              </a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
