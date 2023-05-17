#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
# 我们这里使用pnpm包管理工具，代替 npm、yarn
pnpm run build

# 输出 CNAME 文件
echo "dazer007.gitee.io" > CNAME
echo "github.ityun.ltd" >> CNAME
echo "google.com, pub-4147143076931995, DIRECT, f08c47fec0942fa0" > ads.txt

# Github tokens (Personal Access Tokens) 私人令牌的生成地址：https://github.com/settings/tokens
# personal access tokens 私人令牌
GIT_TOKEN=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 #your token, 以前可用通过账号密码验证，现在必须是token更安全。
GIT_USERNAME=dazer007 #账号，owner,username
GIT_REPO=dazer007.github.io #仓库名称,repo

# e.coding.net
# github.com    https://Github生成的personal-access-tokens@github.com/github用户名/代码仓库名.git
# gitee.com     https://码云用户名:勾选projects的私人令牌@gitee.com/码云用户名/代码仓库名.git
# remote: Support for password authentication was removed on August 13, 2021.；
# 参考：2021.8.13起，Github要求使用基于令牌的身份验证 （取消了密码账号登录，改成了token令牌机制） https://zhuanlan.zhihu.com/p/401978754
push_addr=https://${GIT_TOKEN}@github.com/${GIT_USERNAME}/${GIT_REPO}.git
commit_info="`git describe --all --always --long`',来自Github Actions的自动部署，更新于'$(TZ=UTC-8 date "+%Y-%m-%d %H:%M:%S")"
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 进入生成的文件夹
 cd $dist_path

 git config --global user.name "dazer007"
 git config --global user.email "ab601026460@163.com"

 git init
 git add -A
 git commit -m "deploy, $commit_info"
 git remote add origin $push_addr # 添加远程推送的仓库, 如：origin是一个名称，可用自行替换。

 echo '准备push到Github,Github平台可能由于网络原因，可能比较慢，甚至失败，请稍等...'
 echo '如果提示需要输入password,这里一定要输入上面的git token, github已经取消了密码验证，必须使用 personal access token; 个人觉得好傻，命名上面已经有token，Github还要我输入 '
 git push -f origin HEAD:$push_branch