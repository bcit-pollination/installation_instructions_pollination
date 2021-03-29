/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://github.com/bcit-pollination/',
  baseUrl: '/installation_instructions_pollination/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bcit-pollination',
  projectName: 'installation_instructions_pollination',
  themeConfig: {
    navbar: {
      title: 'Pollination system installation instructions',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [

        {
          href: 'https://github.com/orgs/bcit-pollination/dashboard',
          label: 'Pollination repos',
          position: 'right',
        },
      ],
    },

  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: 'docs',

        /**
         * Useful if you commit localized files to git.
         * When markdown files are localized, the edit url will target the localized file,
         * instead of the original unlocalized file.
         * Note: this option is ignored when editUrl is a function
         */
        editLocalizedFiles: false,
        /**
         * Useful if you don't want users to submit doc pull-requests to older versions.
         * When docs are versioned, the edit url will link to the doc
         * in current version, instead of the versioned doc.
         * Note: this option is ignored when editUrl is a function
         */
        editCurrentVersion: false,
        /**
         * URL route for the docs section of your site.
         * *DO NOT* include a trailing slash.
         * INFO: It is possible to set just `/` for shipping docs without base path.
         */
        routeBasePath: '/',
        include: ['**/*.md', '**/*.mdx'], // Extensions to include.
        /**
         * Path to sidebar configuration for showing a list of markdown pages.
         * Warning: will change
         */
        sidebarPath: require.resolve('./sidebars.js'),
        /**
         * Theme components used by the docs pages
         */
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',
        /**
         * Remark and Rehype plugins passed to MDX
         */
        remarkPlugins: [
          /* require('remark-math') */
        ],
        rehypePlugins: [],
        /**
         * Custom Remark and Rehype plugins passed to MDX before
         * the default Docusaurus Remark and Rehype plugins.
         */
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
        /**
         * Whether to display the author who last updated the doc.
         */
        showLastUpdateAuthor: false,
        /**
         * Whether to display the last date the doc was updated.
         */
        showLastUpdateTime: false,
        /**
         * By default, versioning is enabled on versioned sites.
         * This is a way to explicitly disable the versioning feature.
         */
        disableVersioning: false,

        /**
         * The last version is the one we navigate to in priority on versioned sites
         * It is the one displayed by default in docs navbar items
         * By default, the last version is the first one to appear in versions.json
         * By default, the last version is at the "root" (docs have path=/docs/myDoc)
         * Note: it is possible to configure the path and label of the last version
         * Tip: using lastVersion: 'current' make sense in many cases
         */
        lastVersion: undefined,
        /**
         * The docusaurus versioning defaults don't make sense for all projects
         * This gives the ability customize the label and path of each version
         * You may not like that default version
         */
        versions: {
          /*
          Example configuration:
          current: {
            label: 'Android SDK v2.0.0 (WIP)',
            path: 'android-2.0.0',
          },
          '1.0.0': {
            label: 'Android SDK v1.0.0',
            path: 'android-1.0.0',
          },
          */
        },
        /**
         * Sometimes you only want to include a subset of all available versions.
         * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews
         */
        onlyIncludeVersions: undefined, // ex: ["current", "1.0.0", "2.0.0"]
      },
    ],
  ],

  themes : ['@docusaurus/theme-classic'],

};
