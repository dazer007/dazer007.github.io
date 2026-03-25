import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dazer007-Blog",
  description: "Dazer007-Blog 官方文档",
  lang: 'zh-CN',

  // 路由清理
  cleanUrls: true,

  // 最后更新时间
  lastUpdated: true,

  // Head 标签
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/img/logo.svg', type: 'image/svg+xml' }],
  ],

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // 主题配置
  themeConfig: {
    logo: '/img/logo.svg',

    // 站点名称和链接
    siteTitle: 'Dazer007-Blog',

    // 导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: '前端三剑客',
            items: [
              { text: 'HTML', link: '/01.前端/10.HTML/10.常用meta整理' },
              { text: 'CSS', link: '/01.前端/11.CSS/01.flex布局语法' },
              { text: 'JavaScript', link: '/01.前端/12.JavaScript文章/01.33个非常实用的JavaScript一行代码' },
            ]
          },
          {
            text: '学习笔记',
            items: [
              { text: '《ES6 教程》', link: '/《ES6 教程》笔记/01.ECMAScript 6 简介' },
              { text: '《JavaScript教程》', link: '/《JavaScript教程》笔记/01.基础' },
              { text: '《Vue》', link: '/《Vue》笔记/01.基础/00.MVVM模式' },
              { text: '《Git》', link: '/《Git》学习笔记/10.手册/00.常用Git命令清单' },
            ]
          },
        ]
      },
      {
        text: '技术',
        items: [
          { text: 'IDEA 培训', link: '/02.技术/01.《idea》培训课件/01.IntelliJ IDEA 培训课件' },
          { text: 'Maven', link: '/02.技术/02.《Maven》新版笔记/01.Maven依赖管理项目构建工具' },
        ]
      },
      {
        text: 'AI 工具',
        items: [
          { text: 'LLM/Agent 指南', link: '/03.AI/01.llm-agent-skill-guide' },
          { text: 'OpenCLaw 导航', link: '03.AI/02.OpenCLaw 导航' },
        ]
      },
      {
        text: '关于',
        link: '/04.关于/01.关于'
      },
      { text: '🤖 导航', link: 'https://nav.ityun.ltd/' },
      { text: '🔥 语雀', link: 'https://www.yuque.com/dazer007/it' },
      { text: '🚀 CSDN', link: 'https://blog.csdn.net/ab601026460' },
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dazer007' },
    ],

    // 页脚
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2016-present Dazer007'
    },

    // 最后更新时间文本
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 深色模式切换标签
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 侧边栏配置 - 使用 set_sidebar 自动生成
    sidebar: {
      '/《ES6 教程》笔记/': set_sidebar('《ES6 教程》笔记'),
      '/《JavaScript教程》笔记/': set_sidebar('《JavaScript教程》笔记'),
      '/《Vue》笔记/': set_sidebar('《Vue》笔记'),
      '/《Git》学习笔记/': set_sidebar('《Git》学习笔记'),
      // AI 工具
      '/03.AI/': [
        {
          text: 'AI 工具',
          items: [
            { text: '01.llm-agent-skill-guide', link: '/03.AI/01.llm-agent-skill-guide' },
            { text: '02.OpenCLaw 导航页面', link: '/03.AI/02.OpenCLaw 导航' },
          ]
        }
      ],
      '/02.技术/': set_sidebar('02.技术'),
      '/01.前端/': set_sidebar('01.前端'),
    },
  },

  // 构建优化
  vite: {
    build: {
      chunkSizeWarningLimit: 1500
    }
  }
})