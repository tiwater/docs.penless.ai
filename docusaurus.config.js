const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Penless Open Platform',
  tagline: 'Imagination is All You Need.',
  url: 'https://docs.penless.ai',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tiwater', // Usually your GitHub org/user name.
  projectName: 'penless-docs', // Usually your repo name.
  themes: ['docusaurus-theme-redoc'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
    //   [
    //     'redocusaurus',
    //     {
    //       // Plugin Options for loading OpenAPI files
    //       specs: [
    //         {
    //           spec: 'https://penless.ai/api/docs',
    //           route: '/api/',
    //         },
    //       ],
    //       // Theme Options for modifying how redoc renders them
    //       theme: {
    //         primaryColor: "hsl(212 100% 51%)",
    //         primaryColorDark: "hsl(198 93% 60%)",
    //         options: {
    //           // hideDownloadButton: true,
    //         }
    //       },
    //     },
    //   ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false, // Always follow the system preference
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Penless Docs',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'design/arch',
            position: 'left',
            label: 'Design',
          },
          {
            type: 'doc',
            docId: 'legal/privacy',
            position: 'left',
            label: 'Legal',
          },
          // { to: '/api', label: 'API', position: 'left' },
          {
            to: 'https://penless.ai',
            label: 'Penless.ai',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
