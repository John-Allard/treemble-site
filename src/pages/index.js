// src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import screenshotStyles from './index.module.css';

// Import images from static/img (Docusaurus auto‐serves /static as /)
import treembleLogo from '@site/static/img/treemble-logo.png';
import markNodesImage from '@site/static/img/mark_nodes.png';
import newickModalImage from '@site/static/img/Treemble_pic_with_newick_modal.png';

export default function Home() {
  return (
    <Layout
      title="Treemble"
      description="Treemble: Extract and edit Newick trees from phylogenetic images.">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.inlineTitle}>
            <img
              src={treembleLogo}
              alt="Treemble Logo"
              className={styles.inlineLogo}
            />
            <h1 className={styles.inlineText}>Treemble</h1>
          </div>

          {/* Short Tagline */}
          <p className={styles.tagline}>
            A graphical tool to get a Newick representation from a phylogenetic tree image
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
              <img src={markNodesImage} alt="Feature 1" className={screenshotStyles.screenshotImage} />
              <p className={screenshotStyles.screenshotCaption}>
                Mark node locations on your image of a phylogenetic tree figure (includes automatic tip detection!)
              </p>
            </div>
            <div className={screenshotStyles.screenshotItem}>
              <img src={newickModalImage} alt="Feature 2" className={screenshotStyles.screenshotImage} />
              <p className={screenshotStyles.screenshotCaption}>
                Automatically generates a Newick string that matches the figure!
              </p>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}