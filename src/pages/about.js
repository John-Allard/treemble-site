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
              Treemble was developed by John Allard as a member of the{' '}
              <a href="https://www.kumarlab.net/" target="_blank" rel="noopener noreferrer">
                Kumar Lab
              </a>{' '}
              within the{' '}
              <a href="https://igem.temple.edu/" target="_blank" rel="noopener noreferrer">
                Institute for Genomics and Evolutionary Medicine
              </a>{' '}
              at Temple University.
            </p>
            <p>
              Treemble was developed to make phylogenetic data more accessible and reusable. In modern
              biology, tree diagrams are everywhere, but most exist only as static images in figures. 
              Without Newick files, these trees are locked away from reproducibility, meta-analysis, and 
              comparative work. Treemble provides a practical solution: a guided, visual tool that lets 
              users recover tree topologies from images and export them in a usable format for further 
              scientific investigation.
            </p>
            <p>
              <a href="/docs/use-cases" className={styles.link}>
                What is Treemble useful for? →
              </a>
            </p>
            <hr></hr>
            <h3>About the Creator:</h3>
            <p>
              I’m a PhD candidate in Bioinformatics at Temple University. My research focuses on
              developing methods to apply AI and machine learning to comparative genomics, with a focus on
              understanding the genetic basis of traits that evolve convergently. My particular
              interest is in leveraging evolutionary comparative methods to understand the biology of
              extreme longevity, which has convergently evolved many times in the animal kingdom.
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
