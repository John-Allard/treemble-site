// docusaurus.config.js

module.exports = {
  title: 'Treemble', 
  tagline: 'Extract and edit Newick trees from phylogenetic images',
  url: 'https://john-allard.github.io', 
  baseUrl: '/treemble-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/treemble-logo.png', // Use your Treemble logo as the favicon
  organizationName: 'john-allard', // GitHub org/user name.
  projectName: 'treemble-site', // Repo name.
  deploymentBranch: 'gh-pages',           // explicitly point to the branch you just created
  trailingSlash: false,

  themeConfig: {
    navbar: {
      title: 'Treemble',
      logo: {
        alt: 'Treemble Logo',
        src: 'img/treemble-logo.png',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/John-Allard/treemble',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'light',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'User Guide', to: '/docs/getting-started' }],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/John-Allard/treemble/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/John-Allard/treemble',
            },
            {
              label: 'Contact',
              href: 'mailto:contact@treemble.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John Allard`,
    },

  },

  // Tell Docusaurus to load our custom theme CSS:
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // other docs options if needed
        },
        blog: false, // we removed the blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};