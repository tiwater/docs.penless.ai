// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Penless Docs",
  tagline: "Be Creative.",
  url: "https://docs.penless.ai",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "tiwater", // Usually your GitHub org/user name.
  projectName: "penless", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          //path: 'https://penless.ai/api/docs',
          path: "./openapi.json",
          routeBasePath: 'api',
          sidebarCollapsed: false,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Penless Docs",
        logo: {
          alt: "logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "tutorial-basics/create-a-page",
            position: "left",
            label: "Basics",
          },
          {
            type: "doc",
            docId: "tutorial-extras/translate-your-site",
            position: "left",
            label: "Extras",
          },
          {
            type: "doc",
            docId: "design/arch",
            position: "left",
            label: "Architecture",
          },
          { to: "/api", label: "Open API", position: "left" },
          {
            href: "https://github.com/tiwater/penless",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/tiwater/penless",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Penless.ai © ${new Date().getFullYear()} . Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
