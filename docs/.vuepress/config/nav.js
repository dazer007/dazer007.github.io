module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/web/",//目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》', link: '/note/js/' },
          { text: '《ES6 教程》', link: '/note/es6/' },
          { text: '《Vue》', link: '/note/vue/' },
          { text: '《React》', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》',
            link: '/note/git/',
          },
          {
            text: 'TypeScript',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结',
            link: '/pages/4643cd/',
          },
        ],
      },
    ]
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' }
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: "Idea",  link: "/pages/idea_atguigu/" },
      { text: "Maven", link: "/pages/maven_atguigu/" },
    ],
  },
  {
    text: "关于",
    link: "/pages/f84a74/",
    items: [
      { text: "关于", link: "/pages/f84a74/" },
      { text: "支持", link: "/pages/4fedc2/" },
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: "🤖 导航", link: "https://nav.ityun.ltd/" },
  { text: "🔥 语雀", link: "https://www.yuque.com/dazer007/it" },
  { text: "🚀 CSDN", link: "https://blog.csdn.net/ab601026460" },
];
