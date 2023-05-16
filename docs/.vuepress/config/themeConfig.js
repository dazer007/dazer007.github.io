const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  logo: "/img/logo.svg",
  repo: "dazer007/dazer007.github.io",
  searchMaxSuggestions: 10,
  lastUpdated: "上次更新",

  docsRepo: "dazer007/dazer007.github.io",
  docsDir: "docs",
  docsBranch: "master",
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",

  // Vdoing Theme Config
  sidebar: { mode: "structuring", collapsable: false },

  updateBar: {
    showToArticle: false
  },

  category: false,
  tag: false,
  archive: true,

  author: {
    name: "Dazer007",
    href: "https://github.com/dazer007"
  },

  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/dazer007"
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: "https://gitee.com/dazer007"
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:koyangslash@gmail.com"
      }
    ]
  },

  footer: {
    createYear: 2016,
    copyrightInfo: [
      '<a href="https://ityun.ltd/" target="_blank" style="font-weight:bold">Dazer007</a>',
      ' | ',
      'Sponsored by <a href="https://www.jetbrains.com" target="_blank" style="font-weight:bold">JetBrains</a>',
      ' | ',
      '<a href="http://beian.miit.gov.cn/" target=_blank>陕ICP备20001457号-1</a>',
      '<p>友情链接：',
      '<a href="https://xugaoyi.com/" target="_blank" style="font-weight:bold">Evan\'s blog</a>',
      ' | ',
      '<a href="https://blog.dselegent.icu/" target="_blank" style="font-weight:bold">dselegent-blog（偏前端）</a>',
      ' | ',
      '<a href="https://blog.xueqimiao.com/" target="_blank" style="font-weight:bold">小薛博客（JAVA）</a>',
      ' | ',
      '<a href="https://tobebetterjavaer.com/" target="_blank" style="font-weight:bold">Java程序员进阶之路</a>',
      '</p>'
    ].join('')
  },

  htmlModules
};
