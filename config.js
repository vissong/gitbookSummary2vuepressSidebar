const {convertSummary} = require("./summary-sidebar")

const hidden = [
]


module.exports = {
  base: '/wiki/',
  title: 'title',
  description:
    '',
  keywords:
    '',
  head: [['link', { rel: 'icon', href: `../favicon.ico` }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebarDepth: 1,
    displayAllHeaders: false,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
    ],
    editLinks: false,
    sidebar: {
      "/": convertSummary("./docs/develop/api/SUMMARY.md", hidden, 1,true),
    },
    plugins: [
      [
        '@vuepress/search',
        {
          searchMaxSuggestions: 10,
          themeColor: '#0252d9',
          inputMinLength: 2,
          openInNewWindow: true,
        },
      ],
    ],
  },
};
