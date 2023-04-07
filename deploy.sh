#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
#yarn run build

# 输出 CNAME 文件
echo "dazer007.gitee.io" > CNAME
echo "github.ityun.ltd" >> CNAME
echo "google.com, pub-4147143076931995, DIRECT, f08c47fec0942fa0" > ads.txt

GIT_TOKEN=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 #your token, 以前可用通过账号密码验证，现在必须是token更安全。
GIT_USERNAME=dazer007 #账号
GIT_REPO=dazer007.github.io #仓库名称

#push_addr=https://${GIT_USERNAME}:${GIT_TOKEN}@e.coding.net/yangyang0507/${GIT_REPO}.git
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
 git push -f origin HEAD:$push_branch

