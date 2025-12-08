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
      description="Treemble: Extract and edit Newick strings from phylogenetic tree images.">
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
            An easy tool to get a Newick string from a phylogenetic tree image
          </p>

          {/* “Download” links to the static builds you added */}
          <div className={styles.links}>
            <a
              href="/Treemble_1.5.0_aarch64.dmg"
              className={styles.simpleLink}
            >
              ⬇ Download for macOS
            </a>
            <a
              href="/Treemble_1.6.0_x64_en-US.msi"
              className={styles.simpleLink}
            >
              ⬇ Download for Windows
            </a>
          </div>

          {/* Link to the Docs/User Guide */}
          <div className={styles.guide}>
            <Link className="button button--outline button--lg" to="/docs/intro">
              Read the User Guide
            </Link>
          </div>
        </div> {/* end of .hero */}

        {/* Feature Screenshots */}
        <div className={screenshotStyles.screenshots}>
          <h2 className={screenshotStyles.screenshotTitle}>What Treemble Can Do</h2>
          <div className={screenshotStyles.screenshotGrid}>
            <div className={screenshotStyles.screenshotItem}>
              <Link to="/docs/placing-nodes">
                <img src={markNodesImage} alt="Feature 1" className={screenshotStyles.screenshotImage} />
              </Link>
              <p className={screenshotStyles.screenshotCaption}>
                Mark node locations on your image of a phylogenetic tree figure (includes automatic node detection using a specially trained deep learning model)
              </p>
            </div>
            <div className={screenshotStyles.screenshotItem}>
              <Link to="/docs/showing-and-saving-a-newick-file">
                <img src={newickModalImage} alt="Feature 2" className={screenshotStyles.screenshotImage} />
              </Link>
              <p className={screenshotStyles.screenshotCaption}>
                Automatically generates a Newick string that matches the figure
              </p>
            </div>
          </div>
        </div>

        <div className={styles.citationBox}>
          <p>
            <strong>If you use Treemble, please cite our paper:</strong><br />
            <em>Treemble: A Graphical Tool to Generate Newick Strings from Phylogenetic Tree Images.</em><br />
            John B. Allard and Sudhir Kumar (2025).<br />
            arXiv: <a href="https://arxiv.org/abs/2508.07081" target="_blank" rel="noopener noreferrer">2508.07081</a>. DOI: <a href="https://doi.org/10.48550/arXiv.2508.07081" target="_blank" rel="noopener noreferrer">10.48550/arXiv.2508.07081</a>
          </p>
        </div>

      </main>
    </Layout>
  );
}