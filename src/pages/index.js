// src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import screenshotStyles from '../components/HomepageFeatures/styles.module.css';

// Import your logo from static/img (Docusaurus auto‐serves /static as /)
import treembleLogo from '@site/static/img/treemble-logo.png';

export default function Home() {
  return (
    <Layout
      title="Treemble"
      description="Treemble: Extract and edit Newick trees from phylogenetic images.">
      <main className={styles.main}>
        <div className={styles.hero}>
          {/* Logo */}
          <img
            src={treembleLogo}
            alt="Treemble Logo"
            className={styles.logo}
          />

          {/* Title */}
          <h1 className={styles.title}>Treemble</h1>

          {/* Short Tagline */}
          <p className={styles.tagline}>
            A graphical tool for extracting phylogenetic tree topologies from images.
          </p>

          {/* “Download” as plain HTML links with a down‐arrow icon */}
          <div className={styles.links}>
            <a
              href="https://github.com/John-Allard/treemble/releases/latest/download/Treemble-macOS.dmg"
              className={styles.simpleLink}
            >
              ⬇ Download for macOS
            </a>
            <a
              href="https://github.com/John-Allard/treemble/releases/latest/download/Treemble-Windows.exe"
              className={styles.simpleLink}
            >
              ⬇ Download for Windows
            </a>
          </div>

          {/* Link to the Docs/User Guide */}
          <div className={styles.guide}>
            <Link className="button button--outline button--lg" to="/docs">
              Read the User Guide
            </Link>
          </div>
        </div> {/* end of .hero */}

        {/* Feature Screenshots */}
        <div className={screenshotStyles.screenshots}>
          <h2 className={screenshotStyles.screenshotTitle}>What Treemble Can Do</h2>
          <div className={screenshotStyles.screenshotGrid}>
            <div className={screenshotStyles.screenshotItem}>
              <img src="/img/screenshot-placeholder1.png" alt="Feature 1" className={screenshotStyles.screenshotImage} />
              <p className={screenshotStyles.screenshotCaption}>
                Detect tip nodes from tree images with a single click.
              </p>
            </div>
            <div className={screenshotStyles.screenshotItem}>
              <img src="/img/screenshot-placeholder2.png" alt="Feature 2" className={screenshotStyles.screenshotImage} />
              <p className={screenshotStyles.screenshotCaption}>
                Visually edit tip labels and export Newick trees.
              </p>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}