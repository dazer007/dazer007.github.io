---
home: true
heroImage: /img/logo.svg
heroText: Dazer007-Blog
tagline: 🚀好记性不如烂笔头，勤能补拙
actionText: 关于 →
actionLink: /pages/f84a74/
bannerBg: none

features: # 可选的
  - title: Dazer007-Blog本站
    details: MarkDown生成博客技术大幅降低了自建网站的可能，VuePress、Hexo、Docsify.js都是快速高效的博客框架，本站使用VuePress
  - title: 语雀
    details: JAVA语言自从SpringBoot的诞生，到大数据微服务云原生。前端语言从nodejs的诞生，前端职位都成了大前端工程师，开发Server、桌面端、传统网页都成为可能。飞速的技术发展，不进行笔记梳理，不常用的技术很快遗忘。(相关笔记查看语雀)
  - title: CSDN
    details: 一不留神进入了IT圈，就陷入了深深的泥潭之中。2014年赶上移动互联网，各种移动APP满天飞，Android、IOS开发技术成了香饽饽；后ReactNative、Flutter跨平台框架企图代替原生手机端开发；小程序平台的诞生促使uni-app、taro的跨小程序、跨桌面端框架的诞生，让前端框架有了新的可能。（相关博客查看CSDN）

postList: none
---

<p align="center">
  <a class="become-sponsor" href="/pages/4fedc2">支持这个项目</a>
</p>

<style>
  .become-sponsor{
    padding: 8px 20px;
    display: inline-block;
    color: #11a8cd;
    border-radius: 30px;
    box-sizing: border-box;
    border: 1px solid #11a8cd;
  }
</style>

<br/>

## 一、Vuepress网站部署

### 1.1、部署网站地址
- [Ityun](http://ityun.ltd/) - 自定义域名ityun.ltd, 背后是：dazer007.github.io, Github Page。
- [Gitee page ](dazer007.gitee.io) - Gitee地址。
- [Vercel部署Vuepress](https://vuepress.ityun.ltd/) - 通过vercel自动部署vuepress。
- [Vercel部署Hexo](https://vercel.ityun.ltd/) - 通过vercel自动部署hexo。

> 推荐使用`Vercel`完成自动化部署, 也可以直接使用`Github Page`、`Gitee Page`
### 1.2、博客部署参考

1. 博客参考 `vuepress`, copy [mybatis-plus-doc](https://github.com/dazer007/dazer007.github.io-doc)
2. vuepress扩展主题，`vuepress-theme-vdoing`,类似网站：[xugaoyi Evan's blog](https://xugaoyi.com/)、[easy-es.cn](https://www.easy-es.cn/)、
   [vuepress-theme-vdoing](https://doc.xugaoyi.com/)、[小薛博客](https://xueqimiao.com/)、

### 1.3、代码托管

> **[Gitee](https://gitee.com/dazer007/dazer007)** | **[Github](https://github.com/dazer007/dazer007.github.io)**

### 1.4、代码编译

1. 安装开发依赖 `pnpm install`
2. 安装缺失的工具依赖 `pnpm install vue-template-compiler -g`
3. 本地测试运行 `pnpm run dev`, 需要刪除掉`yarn.lock`
4. 编译发布`pnpm run build`,编译后的html在`docs/vuepress/dist`目录，编译之后的文件就可以放到服务器上面部署了。

## 二、导航网站建站

### 2.1、导航网站开源代码

1. [WebStackPage/WebStackPage.github.io](https://github.com/WebStackPage/WebStackPage.github.io)
2. [xjh22222228/nav](https://github.com/xjh22222228/nav)

> 推荐使用WebStackPage-Vue借助`netlify.com`完成自动化部署
### 2.2 收集导航网站

1. [图欧资源导航](https://tuostudy.com/)
2. [萌国ICP备案](https://icp.gov.moe/aboutus.php)
3. [开源工具导航-rockbenben/LearnData的导航网站](https://nav.newzone.top/)
4. [设计师导航-WebStackPage官方导航](http://webstack.cc/) 
5. [工具达人|实用工具分享达人](https://toolsdar.com/) 
6. [十分导航-netlify、vercel国内域名被污染](https://10fen.netlify.app/)
7. [Ai工具导航](https://ai-bot.cn/)
8. [深度导航](https://www.deepdh.com/)
9. [AIGC导航](https://www.aigc.cn/)
10. [开发者武器库](https://devtool.tech/)

## 三、友情链接
>  [hutool](https://gitee.com/dromara/hutool) | [easy-es](https://easy-es.cn/) | 
>  [layui-vue](http://www.layui-vue.com/) |

