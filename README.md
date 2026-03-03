# ityun.ltd 官方文档库

<p align="center">
  <a href="https://github.com/dazer007/dazer007.github.io">
   <img alt="Ityun-Ltd-Logo" src="https://foruda.gitee.com/avatar/1676900170320132152/93420_dazer007_1616119748.png">
  </a>
</p>

<p align="center">
  Born To Simplify Development
</p>

<p align="center">
  <a href="https://github.com/dazer007/dazer007.github.io">
    <img alt="star" class="no-zoom" src="https://img.shields.io/github/stars/dazer007/dazer007.github.io?style=for-the-badge">
  </a>
</p>

<br/>
## 访问地址

- [Ityun](http://ityun.ltd/) - 自定义域名ityun.ltd, 背后是：Github Page: dazer007.github.io。
- [Gitee page ](https://dazer007.gitee.io) - Gitee地址。
- [Vercel部署Vuepress](https://vuepress.ityun.ltd/) - 通过vercel自动部署vuepress。
- [Vercel部署Vuepress的dev分支](https://dazer007-github-io-git-dev-dazer007.vercel.app) - 通过vercel自动部署vuepress。
- [Vercel部署Hexo的hello word页面](https://vercel.ityun.ltd/) - 通过vercel自动部署hexo。

## 博客部署参考

1. 博客参考 `vuepress`, copy [mybatis-plus-doc](https://github.com/dazer007/dazer007.github.io-doc)
2. vuepress扩展主题，`vuepress-theme-vdoing`,类似网站：[xugaoyi Evan's blog](https://xugaoyi.com/)、[easy-es.cn](https://www.easy-es.cn/)、
[vuepress-theme-vdoing](https://doc.xugaoyi.com/)、[小薛博客](https://blog.xueqimiao.com/)、


## 代码托管

> **[Gitee](https://gitee.com/dazer007/dazer007)** | **[Github](https://github.com/dazer007/dazer007.github.io)**

## 代码编译

1. 安装开发依赖 `pnpm install`
2. 安装缺失的工具依赖 `pnpm install vue-template-compiler -g`
3. 本地测试运行 `pnpm run dev`, 需要刪除掉`yarn.lock`
4. 编译发布`pnpm run build`,编译后的html在`docs/vuepress/dist`目录，编译之后的文件就可以放到服务器上面部署了。

## Github自动部署说明

1. `Github Pages`: 自动部署的分支是`gh-pages`
2. `vercel`开发版部署的是`dev`分支
3. `vercel`预览版部署的是`master`分支