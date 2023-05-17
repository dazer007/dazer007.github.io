#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
# 我们这里使用pnpm包管理工具，代替 npm、yarn
pnpm run build

# 输出 CNAME 文件
echo "dazer007.gitee.io" > CNAME
echo "google.com, pub-4147143076931995, DIRECT, f08c47fec0942fa0" > ads.txt

# Gitee access_tokens 私人令牌的生成地址：https://gitee.com/profile/personal_access_tokens/
# personal access tokens 私人令牌
GIT_TOKEN=093101d52304336cf8a0b8c205b01abc #your token, 以前可用通过账号密码验证，现在必须是token更安全。
GIT_USERNAME=dazer007 #账号，owner,username
GIT_REPO=dazer007 #仓库名称,repo

# e.coding.net
# github.com    https://Github生成的personal-access-tokens@github.com/github用户名/代码仓库名.git
# gitee.com     https://码云用户名:勾选projects的私人令牌@gitee.com/码云用户名/代码仓库名.git


push_addr=https://${GIT_USERNAME}:${GIT_TOKEN}@gitee.com:/${GIT_USERNAME}/${GIT_REPO}.git
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
 git remote add gitee $push_addr # 添加远程推送的仓库, 如：origin是一个名称，可用自行替换。

 echo '准备push到Gitee'
 echo ''
 git push -f gitee HEAD:$push_branch

